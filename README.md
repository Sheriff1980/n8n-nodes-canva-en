# n8n-nodes-canva

<p align="center"><br>
 Created by Ramon Matias, I only translated from Portugese to English. This Community Node is a 100% free solution, created with the intention of simplifying and helping the entire community to integrate and make the most of the main resources offered by the <b>Canva Connect API</b> in their N8N projects.
</p>
<br>
	
<div align="center">
  <img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.npmjs.org%2Fdownloads%2Fpoint%2Flast-year%2Fn8n-nodes-canva&query=downloads&style=for-the-badge&label=Total%20de%20Downloads&labelColor=%230d1117&color=%23359514&cacheSeconds=30&link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fn8n-nodes-agendor" alt="Downloads Badge">
  <img src="https://img.shields.io/npm/v/n8n-nodes-canva?style=for-the-badge&label=Versão&labelColor=%230d1117&color=%23007ACC" alt="Version Badge">
  <img src="https://img.shields.io/npm/l/n8n-nodes-canva?style=for-the-badge&label=Licença&labelColor=%230d1117&color=%23FFA500" alt="License Badge">
</div>
<br>

<p align="center">
  <a href="mailto:contato@lumiaria.com.br"><img src="https://img.shields.io/badge/Email-Suporte-red?style=for-the-badge&logo=gmail&logoColor=white" alt="Email"></a>     
  <a href="https://github.com/ramonmatias19/n8n-nodes-canva"><img src="https://img.shields.io/badge/GitHub-Repositório-black?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"></a>     
  <a href="https://www.npmjs.com/package/n8n-nodes-canva"><img src="https://img.shields.io/badge/NPM-Package-red?style=for-the-badge&logo=npm&logoColor=white" alt="NPM"></a>
</p>

> **Notice:** This node was developed independently to facilitate integrations with the Canva public API in n8n.
> It is not affiliated with, endorsed by, or maintained by Canva Pty Ltd.
> All mentioned trademarks belong to their respective owners.

<h1></h1>

<h3>⚙️ Requirements</h3>

To use our **Community Node**, you need to meet the following requirements:
- **N8N** version **1.54.4** or higher
- **Node.js** version **16.0.0** or higher
- **Active account** on **Canva** with Connect API access
- **Application registered** in the [Canva Developer Portal](https://www.canva.dev/)

<h1></h1>

<h3>📌 Available Resources</h3>

<h3>🎨 Designs</h3>
✨ This resource provides complete access to the main functionalities related to design management in Canva. It allows creating new projects, searching for existing designs, listing your work, and managing the entire design lifecycle in a practical and efficient way.
<br>
<details>
  <summary><b>List of operations</b></summary>
	<details>
  	<summary>   ✅ <b> Create Design</b></summary>
	</details>
	<details>
  	<summary>   ✅ <b> Search Design</b></summary>
	</details>
	<details>
  	<summary>   ✅ <b> List Designs</b></summary>
	</details>
	<details>
  	<summary>   ✅ <b> Supported Types</b></summary>
	</details>
</details>

<h3>📤 Exports</h3>
🔄 With this resource, you have complete functionalities to export your designs in different formats. It covers everything from creating export jobs to monitoring processing status, allowing you to obtain your finished files in PDF, PNG, JPG, and MP4 formats.
<br>
<details>
  <summary><b>List of operations</b></summary>
	<details>
  	<summary>   ✅ <b> Create Export Job</b></summary>
	</details>
	<details>
  	<summary>   ✅ <b> Check Export Status</b></summary>
	</details>
	<details>
  	<summary>   ✅ <b> PDF Formats</b></summary>
	</details>
	<details>
  	<summary>   ✅ <b> PNG/JPG Formats</b></summary>
	</details>
	<details>
  	<summary>   ✅ <b> MP4 Formats</b></summary>
	</details>
</details>

<h3>📁 Folders</h3>
🗂️ This resource provides essential tools for organizing and managing folders in Canva. With it, you can create new folders, organize your designs in a structured way, and maintain an organized workspace for better productivity.
<br>
<details>
  <summary><b>List of operations</b></summary>
	<details>
  	<summary>   ✅ <b> Create Folder</b></summary>
	</details>
	<details>
  	<summary>   ✅ <b> List Folders</b></summary>
	</details>
	<details>
  	<summary>   ✅ <b> Organize Content</b></summary>
	</details>
</details>

<h3>🖼️ Assets</h3>
📷 With this resource, you have access to asset management and visual elements in Canva. It allows searching for specific assets, listing available elements, and managing visual resources for your projects efficiently.
<br>
<details>
  <summary><b>List of operations</b></summary>
	<details>
  	<summary>   ✅ <b> Search Asset</b></summary>
	</details>
	<details>
  	<summary>   ✅ <b> List Assets</b></summary>
	</details>
	<details>
  	<summary>   ✅ <b> Manage Resources</b></summary>
	</details>
</details>

<h3>👤 Users</h3>
🔐 This resource offers functionalities for managing user and profile information. With it, you can obtain current user data, check permissions, and access account information securely.
<br>
<details>
  <summary><b>List of operations</b></summary>
	<details>
  	<summary>   ✅ <b> Get Profile</b></summary>
	</details>
	<details>
  	<summary>   ✅ <b> Check Permissions</b></summary>
	</details>
	<details>
  	<summary>   ✅ <b> Account Information</b></summary>
	</details>
</details>

<h3>🔔 Webhooks</h3>
📡 This resource offers complete functionalities to receive real-time notifications of Canva events through webhooks. With it, you can monitor design creation, updates, completed exports, and other important events, allowing instant automations based on your account activities.
<br>
<details>
  <summary><b>List of operations</b></summary>
	<details>
  	<summary>   ✅ <b> Design Created</b></summary>
	</details>
	<details>
  	<summary>   ✅ <b> Design Updated</b></summary>
	</details>
	<details>
  	<summary>   ✅ <b> Export Completed</b></summary>
	</details>
	<details>
  	<summary>   ✅ <b> Asset Events</b></summary>
	</details>
	<details>
  	<summary>   ✅ <b> Folder Events</b></summary>
	</details>
	<details>
  	<summary>   ✅ <b> Comment Events</b></summary>
	</details>
	<details>
  	<summary>   ✅ <b> Custom Filters</b></summary>
	</details>
</details>

<h1></h1>

<h3>🚀 Installation</h3>

**Via n8n Community Nodes:**
1. Open your n8n instance
2. Go to **Settings** → **Community Nodes**
3. Install the package: `n8n-nodes-canva`
4. Restart n8n

**Via NPM:**
```bash
npm install n8n-nodes-canva
```

### 🔑 Credentials Configuration

This node now uses **n8n's native OAuth 2.0** for automatic authentication:

1. **Create an integration in the [Canva Developer Portal](https://www.canva.com/developers/)**
   - Log in to the Developer Portal
   - Enable MFA (Multi-Factor Authentication) if required
   - Go to "Your Integrations" and click "Create an integration"
   - Choose between "Public" or "Private" integration

2. **Configure your integration:**
   - Set a name for your integration
   - **Copy the Client ID** (will be needed in n8n)
   - **Generate and save the Client Secret** (will be needed in n8n)
   - **IMPORTANT**: Copy the OAuth redirect URL: `[YOUR-URL-BASE]/rest/oauth2-credential/callback`

3. **⚠️ CRITICAL SCOPES CONFIGURATION:**

   **ATTENTION**: To avoid the `"invalid_scope"` error, you MUST enable ALL the scopes listed below in the [Scopes](https://www.canva.com/developers/integrations/connect-api/) section of your integration:

   ```
   app:read
   app:write
   asset:read
   asset:write
   brandtemplate:content:read
   brandtemplate:meta:read
   comment:read
   comment:write
   design:content:read
   design:content:write
   design:meta:read
   design:permission:read
   design:permission:write
   folder:read
   folder:write
   folder:permission:read
   folder:permission:write
   profile:read
   ```

   > **🚨 IMPORTANT**: Check/enable **ALL** 18 scopes above in your Canva Developer Portal integration. If any scope is missing, you will receive the `"invalid_scope"` error during OAuth authentication.

4. **In n8n, create a new "Canva API" credential:**
   - **Client ID**: Paste the Client ID obtained from the Developer Portal
   - **Client Secret**: Paste the Client Secret generated from the Developer Portal
   - Click **"Connect my account"** to start the OAuth flow
   - Authorize the application on the Canva screen
   - ✅ **Done!** n8n will automatically manage tokens and renewals

5. **🎯 Native OAuth Advantages:**
   - ✅ **Simplified configuration** - Only Client ID and Secret
   - ✅ **Automatic renewal** - n8n manages refresh tokens
   - ✅ **Enhanced security** - No manual tokens exposed
   - ✅ **Standard flow** - Same experience as other n8n nodes

> **Migration**: If you used previous versions with manual Access Token, delete the old credential and create a new one following the steps above.

### 📡 Webhook Configuration

To use the **Canva Trigger**:

1. Add the **Canva Trigger** node to your workflow
2. Configure the events you want to listen to
3. Activate the workflow
4. The webhook will be automatically registered in Canva
5. When you deactivate the workflow, the webhook will be automatically removed

### 🚨 Troubleshooting - "invalid_scope" Error

**Problem**: During OAuth authentication, you receive the error:
```
Error: Insufficient parameters for OAuth2 callback.
Received following query parameters: {"error":"invalid_scope","error_description":"Requested scopes are not allowed for this client."}
```

**Solution**:
1. Access your integration in the [Canva Developer Portal](https://www.canva.com/developers/apps)
2. Go to the **"Your integrations"** > **"Create an integration"** section
3. Go to the **"Scopes"** section of your integration
4. **Check/enable ALL 18 scopes** listed in the configuration section above
5. Save the changes
6. Try the OAuth connection again in n8n

> **Cause**: This error occurs when the OAuth2 application in Canva is not configured with all the scopes that n8n-nodes-canva needs to function correctly.

<h1></h1>

<h3>🤝 Contribution</h3>

Contribute to the growth of this project! You can help in various ways:
- **Pull Requests**: Send improvements, corrections, or new functionalities.
- **Issues**: Report problems or suggest new ideas.
- **Suggestions**: Share your opinions and feedback.
- **Documentation**: Help improve or expand the existing documentation.

<h1></h1>

<p align="center">
Developed with ❤️ by <b>Ramon Matias</b>
</p>
