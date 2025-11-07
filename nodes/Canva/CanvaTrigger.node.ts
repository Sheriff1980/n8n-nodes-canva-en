import {
	INodeType,
	INodeTypeDescription,
	IWebhookResponseData,
	IWebhookFunctions,
} from 'n8n-workflow';

export class CanvaTrigger implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Canva Trigger',
		name: 'canvaTrigger',
		icon: 'file:logo.svg',
		group: ['trigger'],
		version: 1,
		subtitle: '={{$parameter["event"]}}',
		description: 'Receive real-time webhook notifications from Canva',
		defaults: {
			name: 'Canva Trigger',
		},
		inputs: [],
		outputs: ['main'],
		credentials: [
			{
				name: 'canvaApi',
				required: true,
			},
		],
		webhooks: [
			{
				name: 'default',
				httpMethod: 'POST',
				responseMode: 'onReceived',
				path: 'canva-webhook',
			},
		],
		properties: [
			{
				displayName: 'Event',
				name: 'event',
				type: 'options',
				options: [
					{
						name: 'Comment Notification',
						value: 'comment',
						description: 'Events related to comments on designs',
					},
					{
						name: 'Design Access Request',
						value: 'design_access_request',
						description: 'Design access requests',
					},
					{
						name: 'Design Approval',
						value: 'design_approval',
						description: 'Design approvals',
					},
					{
						name: 'Design Sharing Event',
						value: 'design_sharing',
						description: 'Design sharing events',
					},
					{
						name: 'Folder Access Request',
						value: 'folder_access_request',
						description: 'Folder access requests',
					},
					{
						name: 'Folder Sharing Event',
						value: 'folder_sharing',
						description: 'Folder sharing events',
					},
					{
						name: 'Team Access Invitation',
						value: 'team_access_invitation',
						description: 'Team access invitations',
					},
					{
						name: 'Suggestion Notification (Preview)',
						value: 'suggestion',
						description: '⚠️ Preview: Suggestion notifications in Canva Docs',
					},
					{
						name: 'Design Mention Notification (Preview)',
						value: 'design_mention',
						description: '⚠️ Preview: Mentions in designs',
					},
				],
				default: 'comment',
				description: 'Type of Canva event that will trigger the webhook',
			},
			{
				displayName: 'Design ID Filter',
				name: 'designIdFilter',
				type: 'string',
				displayOptions: {
					show: {
						event: [
							'design.publish',
							'design.share', 
							'design.update',
							'comment.create',
							'comment.resolve',
							'export.complete',
							'export.failed',
						],
					},
				},
				default: '',
				description: 'Filter by specific design ID (optional)',
			},
			{
				displayName: 'Folder ID Filter',
				name: 'folderIdFilter',
				type: 'string',
				displayOptions: {
					show: {
						event: [
							'folder.access_requested',
							'folder.share',
						],
					},
				},
				default: '',
				description: 'Filter by specific folder ID (optional)',
			},
			{
				displayName: 'User ID Filter',
				name: 'userIdFilter',
				type: 'string',
				displayOptions: {
					show: {
						event: [
							'user.mention',
							'comment.create',
							'suggestion.create',
						],
					},
				},
				default: '',
				description: 'Filter by specific user ID (optional)',
			},
			{
				displayName: 'Validate Signature',
				name: 'validateSignature',
				type: 'boolean',
				default: true,
				description: 'Whether to validate HMAC webhook signature for security',
			},
			{
				displayName: 'Webhook Secret',
				name: 'webhookSecret',
				type: 'string',
				typeOptions: { password: true },
				displayOptions: {
					show: {
						validateSignature: [true],
					},
				},
				default: '',
				description: 'Shared secret for HMAC webhook validation',
			},
		],
	};

	async webhook(this: IWebhookFunctions): Promise<IWebhookResponseData> {
		const event = this.getNodeParameter('event') as string;
		const designIdFilter = this.getNodeParameter('designIdFilter', '') as string;
		const folderIdFilter = this.getNodeParameter('folderIdFilter', '') as string;
		const userIdFilter = this.getNodeParameter('userIdFilter', '') as string;
		const validateSignature = this.getNodeParameter('validateSignature', true) as boolean;
		const webhookSecret = this.getNodeParameter('webhookSecret', '') as string;

		const body = this.getBodyData() as any;
		const headers = this.getHeaderData();

		// HMAC signature validation if enabled
		if (validateSignature && webhookSecret) {
			const crypto = require('crypto');
			const signature = headers['x-canva-signature'] as string;

			if (!signature) {
				console.log('Webhook rejected: Missing signature');
				return {
					noWebhookResponse: true,
				};
			}

			const expectedSignature = crypto
				.createHmac('sha256', webhookSecret)
				.update(JSON.stringify(body))
				.digest('hex');

			if (!crypto.timingSafeEqual(
				Buffer.from(signature, 'hex'),
				Buffer.from(expectedSignature, 'hex')
			)) {
				console.log('Webhook rejected: Invalid signature');
				return {
					noWebhookResponse: true,
				};
			}
		}

		// Check if it's the expected event
		if (body.event_type !== event) {
			return {
				noWebhookResponse: true,
			};
		}

		// Apply specific filters based on event type
		let shouldProcess = true;

		// Filters for design events
		if (designIdFilter && ['design.publish', 'design.share', 'design.update', 'comment.create', 'comment.resolve', 'export.complete', 'export.failed'].includes(event)) {
			const designId = body.data?.design?.id || body.data?.design_id;
			shouldProcess = designId === designIdFilter;
		}

		// Filters for folder events
		if (folderIdFilter && ['folder.access_requested', 'folder.share'].includes(event)) {
			const folderId = body.data?.folder?.id || body.data?.folder_id;
			shouldProcess = folderId === folderIdFilter;
		}

		// Filters for user events
		if (userIdFilter && ['user.mention', 'comment.create', 'suggestion.create'].includes(event)) {
			const userId = body.data?.user?.id || body.data?.mentioned_user?.id || body.data?.comment?.author?.id;
			shouldProcess = userId === userIdFilter;
		}

		if (!shouldProcess) {
			return {
				noWebhookResponse: true,
			};
		}

		// Enrich webhook data with useful information
		const webhookData = {
			event_type: body.event_type,
			event_id: body.event_id,
			timestamp: body.timestamp,
			created_at: body.created_at,
			data: body.data,
			metadata: {
				webhook_url: this.getNodeWebhookUrl('default'),
				processed_at: new Date().toISOString(),
				filters_applied: {
					event,
					design_id_filter: designIdFilter || null,
					folder_id_filter: folderIdFilter || null,
					user_id_filter: userIdFilter || null,
				},
			},
		};

		return {
			webhookResponse: {
				status: 200,
				body: { received: true },
			},
			workflowData: [
				[
					{
						json: webhookData,
					},
				],
			],
		};
	}
}
