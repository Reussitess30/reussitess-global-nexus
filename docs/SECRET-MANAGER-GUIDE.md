# Google Cloud Secret Manager Configuration Guide

This guide shows how to securely store and manage secrets using Google Cloud Secret Manager for the Reussitess Global Nexus project.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Initial Setup](#initial-setup)
- [Creating Secrets](#creating-secrets)
- [Accessing Secrets](#accessing-secrets)
- [Best Practices](#best-practices)
- [Automated Deployment](#automated-deployment)
- [Secret Rotation](#secret-rotation)

---

## Prerequisites

1. Google Cloud Project created
2. Google Cloud SDK installed
3. Appropriate IAM permissions:
   - `secretmanager.admin` (for creating secrets)
   - `secretmanager.secretAccessor` (for accessing secrets)

## Initial Setup

### 1. Enable Secret Manager API

```bash
# Enable the Secret Manager API
gcloud services enable secretmanager.googleapis.com

# Verify it's enabled
gcloud services list --enabled | grep secretmanager
```

### 2. Set Project Variables

```bash
# Set your project ID
export PROJECT_ID="your-project-id"
gcloud config set project $PROJECT_ID
```

### 3. Create Service Account (if needed)

```bash
# Create service account for App Engine
gcloud iam service-accounts create app-engine-secrets \
  --display-name="App Engine Secret Access"

# Grant Secret Accessor role
gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member="serviceAccount:app-engine-secrets@$PROJECT_ID.iam.gserviceaccount.com" \
  --role="roles/secretmanager.secretAccessor"
```

---

## Creating Secrets

### Method 1: From Command Line

```bash
# JWT Secret
echo -n "your-jwt-secret-here" | \
  gcloud secrets create jwt-secret \
    --data-file=- \
    --replication-policy="automatic"

# JWT Refresh Secret
echo -n "your-refresh-secret-here" | \
  gcloud secrets create jwt-refresh-secret \
    --data-file=- \
    --replication-policy="automatic"

# Encryption Key
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))" | \
  gcloud secrets create encryption-key \
    --data-file=- \
    --replication-policy="automatic"

# Database URL
echo -n "postgresql://user:pass@host:5432/db" | \
  gcloud secrets create database-url \
    --data-file=- \
    --replication-policy="automatic"

# Google OAuth Client Secret
echo -n "your-google-client-secret" | \
  gcloud secrets create google-client-secret \
    --data-file=- \
    --replication-policy="automatic"

# GitHub OAuth Client Secret
echo -n "your-github-client-secret" | \
  gcloud secrets create github-client-secret \
    --data-file=- \
    --replication-policy="automatic"
```

### Method 2: From File

```bash
# Create secret from file
gcloud secrets create api-key --data-file=./api-key.txt

# Create with labels for organization
gcloud secrets create stripe-api-key \
  --data-file=./stripe-key.txt \
  --labels=environment=production,service=payment
```

### Method 3: Using Console

1. Go to [Secret Manager Console](https://console.cloud.google.com/security/secret-manager)
2. Click "Create Secret"
3. Enter secret name (e.g., `jwt-secret`)
4. Enter secret value
5. Choose replication policy
6. Click "Create"

---

## Accessing Secrets

### Method 1: In Application Code (Node.js)

```javascript
// lib/secrets/manager.js
const { SecretManagerServiceClient } = require('@google-cloud/secret-manager');

const client = new SecretManagerServiceClient();

async function accessSecret(secretName, version = 'latest') {
  const name = `projects/${process.env.GOOGLE_CLOUD_PROJECT_ID}/secrets/${secretName}/versions/${version}`;
  
  try {
    const [version] = await client.accessSecretVersion({ name });
    const payload = version.payload.data.toString('utf8');
    return payload;
  } catch (error) {
    console.error(`Error accessing secret ${secretName}:`, error);
    throw error;
  }
}

// Usage
async function initializeSecrets() {
  process.env.JWT_SECRET = await accessSecret('jwt-secret');
  process.env.JWT_REFRESH_SECRET = await accessSecret('jwt-refresh-secret');
  process.env.ENCRYPTION_KEY = await accessSecret('encryption-key');
  process.env.DATABASE_URL = await accessSecret('database-url');
}

module.exports = { accessSecret, initializeSecrets };
```

### Method 2: In Cloud Build

```yaml
# cloudbuild.yaml
availableSecrets:
  secretManager:
  - versionName: projects/$PROJECT_ID/secrets/jwt-secret/versions/latest
    env: 'JWT_SECRET'
  - versionName: projects/$PROJECT_ID/secrets/encryption-key/versions/latest
    env: 'ENCRYPTION_KEY'

steps:
  - name: 'node:20'
    entrypoint: npm
    args: ['run', 'build']
    secretEnv: ['JWT_SECRET', 'ENCRYPTION_KEY']
```

### Method 3: In App Engine

```yaml
# app.yaml
env_variables:
  NODE_ENV: "production"

# Access secrets via Secret Manager API in code
```

### Method 4: Command Line Access

```bash
# Access latest version
gcloud secrets versions access latest --secret="jwt-secret"

# Access specific version
gcloud secrets versions access 1 --secret="jwt-secret"

# Save to file
gcloud secrets versions access latest --secret="jwt-secret" > jwt-secret.txt
```

---

## Grant Access Permissions

### For App Engine

```bash
# Grant App Engine default service account access to secrets
PROJECT_NUMBER=$(gcloud projects describe $PROJECT_ID --format='value(projectNumber)')

gcloud secrets add-iam-policy-binding jwt-secret \
  --member="serviceAccount:$PROJECT_ID@appspot.gserviceaccount.com" \
  --role="roles/secretmanager.secretAccessor"

# Repeat for each secret
gcloud secrets add-iam-policy-binding encryption-key \
  --member="serviceAccount:$PROJECT_ID@appspot.gserviceaccount.com" \
  --role="roles/secretmanager.secretAccessor"
```

### For Cloud Build

```bash
# Grant Cloud Build service account access
gcloud secrets add-iam-policy-binding jwt-secret \
  --member="serviceAccount:$PROJECT_NUMBER@cloudbuild.gserviceaccount.com" \
  --role="roles/secretmanager.secretAccessor"
```

### For Specific Service Account

```bash
gcloud secrets add-iam-policy-binding jwt-secret \
  --member="serviceAccount:SERVICE_ACCOUNT_EMAIL" \
  --role="roles/secretmanager.secretAccessor"
```

---

## Best Practices

### 1. Secret Naming Convention

```bash
# Use descriptive names with environment prefix
production-jwt-secret
staging-database-url
dev-api-key

# Or use labels
gcloud secrets create jwt-secret --labels=environment=production,app=reussitess
```

### 2. Secret Versioning

```bash
# Create new version (automatic versioning)
echo -n "new-secret-value" | \
  gcloud secrets versions add jwt-secret --data-file=-

# Disable old version
gcloud secrets versions disable 1 --secret="jwt-secret"

# Destroy old version (irreversible)
gcloud secrets versions destroy 1 --secret="jwt-secret"
```

### 3. Replication Policy

```bash
# Automatic (multi-region)
gcloud secrets create my-secret \
  --replication-policy="automatic" \
  --data-file=-

# User-managed (specific locations)
gcloud secrets create my-secret \
  --replication-policy="user-managed" \
  --locations="us-central1,us-east1" \
  --data-file=-
```

### 4. Least Privilege Access

```bash
# Only grant necessary permissions
# Use specific secrets, not secretmanager.admin
gcloud secrets add-iam-policy-binding SECRET_NAME \
  --member="serviceAccount:SA_EMAIL" \
  --role="roles/secretmanager.secretAccessor"
```

---

## Secret Rotation

### Automated Rotation Script

```bash
#!/bin/bash
# rotate-secrets.sh

# Generate new JWT secret
NEW_JWT_SECRET=$(node -e "console.log(require('crypto').randomBytes(32).toString('hex'))")

# Add new version
echo -n "$NEW_JWT_SECRET" | \
  gcloud secrets versions add jwt-secret --data-file=-

# Wait for propagation (optional)
sleep 5

# Test application with new secret
# If successful, disable old versions
# gcloud secrets versions disable OLD_VERSION --secret="jwt-secret"

echo "Secret rotated successfully"
```

### Rotation Schedule

Create Cloud Scheduler job:

```bash
# Create rotation function
gcloud functions deploy rotateSecrets \
  --runtime=nodejs20 \
  --trigger-topic=rotate-secrets \
  --entry-point=rotateSecrets

# Schedule rotation (every 90 days)
gcloud scheduler jobs create pubsub rotate-secrets-job \
  --schedule="0 0 1 */3 *" \
  --topic=rotate-secrets \
  --message-body="rotate"
```

---

## Monitoring and Auditing

### Enable Audit Logs

```bash
# Enable Secret Manager audit logs in Cloud Console
# IAM & Admin → Audit Logs → Secret Manager API
# Enable: Admin Read, Data Read, Data Write
```

### View Secret Access Logs

```bash
# View who accessed secrets
gcloud logging read "resource.type=secretmanager.googleapis.com/Secret" \
  --limit 50 \
  --format json
```

### Set Up Alerts

```yaml
# Alert when secret is accessed unexpectedly
# Create in Cloud Monitoring
```

---

## Automated Deployment

### Install Dependencies

```bash
npm install @google-cloud/secret-manager
```

### Initialize in Application

```javascript
// Load secrets before starting application
// server.js or next.config.js

const { initializeSecrets } = require('./lib/secrets/manager');

async function start() {
  // Load secrets from Secret Manager
  await initializeSecrets();
  
  // Start application
  const { default: next } = require('next');
  const app = next({ dev: false });
  // ... rest of startup code
}

start().catch(console.error);
```

---

## Troubleshooting

### Permission Denied

```bash
# Check IAM policy
gcloud secrets get-iam-policy SECRET_NAME

# Add missing permission
gcloud secrets add-iam-policy-binding SECRET_NAME \
  --member="serviceAccount:SA_EMAIL" \
  --role="roles/secretmanager.secretAccessor"
```

### Secret Not Found

```bash
# List all secrets
gcloud secrets list

# Check if secret exists
gcloud secrets describe SECRET_NAME
```

### Version Issues

```bash
# List all versions
gcloud secrets versions list SECRET_NAME

# Check version state
gcloud secrets versions describe VERSION_ID --secret=SECRET_NAME
```

---

## Complete Setup Script

```bash
#!/bin/bash
# setup-secrets.sh

PROJECT_ID="your-project-id"
gcloud config set project $PROJECT_ID

# Enable API
gcloud services enable secretmanager.googleapis.com

# Create all secrets
echo "Creating secrets..."

# Generate and create JWT secrets
JWT_SECRET=$(node -e "console.log(require('crypto').randomBytes(32).toString('hex'))")
echo -n "$JWT_SECRET" | gcloud secrets create jwt-secret --data-file=- --replication-policy="automatic"

REFRESH_SECRET=$(node -e "console.log(require('crypto').randomBytes(32).toString('hex'))")
echo -n "$REFRESH_SECRET" | gcloud secrets create jwt-refresh-secret --data-file=- --replication-policy="automatic"

ENCRYPTION_KEY=$(node -e "console.log(require('crypto').randomBytes(32).toString('hex'))")
echo -n "$ENCRYPTION_KEY" | gcloud secrets create encryption-key --data-file=- --replication-policy="automatic"

# Grant access to App Engine
APP_ENGINE_SA="$PROJECT_ID@appspot.gserviceaccount.com"

for secret in jwt-secret jwt-refresh-secret encryption-key; do
  gcloud secrets add-iam-policy-binding $secret \
    --member="serviceAccount:$APP_ENGINE_SA" \
    --role="roles/secretmanager.secretAccessor"
done

echo "Secrets created and permissions granted!"
```

---

**Last Updated:** 2024-11-19  
**Maintained By:** Security Team
