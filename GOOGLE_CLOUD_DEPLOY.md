# Déploiement Automatique Google Cloud Run

## ☁️ Configuration

Ce projet est configuré pour un déploiement automatique sur Google Cloud Run.

### 🔑 Compte de Service

**Email:** `github-play-deployer@grounded-tine-392602.iam.gserviceaccount.com`

### 📋 Prérequis

Le compte de service doit avoir les rôles IAM suivants :
- `roles/run.admin` - Cloud Run Admin
- `roles/iam.serviceAccountUser` - Service Account User
- `roles/storage.admin` - Storage Admin
- `roles/cloudbuild.builds.builder` - Cloud Build Service Account

### 🚀 Configuration du Trigger GitHub

1. **Accédez à Google Cloud Console**
   ```
   https://console.cloud.google.com/cloud-build/triggers
   ```

2. **Créez un nouveau Trigger**
   - Cliquez sur "CREATE TRIGGER"
   - Nom : `reussitess-deploy-trigger`
   - Source : Connectez votre repository GitHub
   - Configuration : Cloud Build configuration file (YAML)
   - Fichier : `cloudbuild.yaml`

3. **Configuration du Trigger**
   - **Event**: Push to branch
   - **Branch**: `^main$` (ou `^copilot/add-hero-section-component$` pour cette branche)
   - **Service Account**: `github-play-deployer@grounded-tine-392602.iam.gserviceaccount.com`

### 🏗️ Process de Build

Le `cloudbuild.yaml` effectue automatiquement :

1. **Build de l'image Docker**
   - Construction de l'image Next.js optimisée
   - Image multi-stage pour taille minimale

2. **Push vers Container Registry**
   - Stockage de l'image dans `gcr.io/$PROJECT_ID/reussitess-global-nexus`

3. **Déploiement sur Cloud Run**
   - Région : `europe-west1`
   - Mémoire : 512 Mi
   - CPU : 1
   - Max instances : 10
   - Min instances : 0 (scale to zero)
   - Port : 3000

### 🌐 URL de l'Application

Après déploiement, votre application sera accessible sur :
```
https://reussitess-global-nexus-[HASH].run.app
```

Vous pouvez également configurer un domaine personnalisé dans Cloud Run.

### 📊 Monitoring

- **Cloud Run Logs**: https://console.cloud.google.com/run
- **Cloud Build History**: https://console.cloud.google.com/cloud-build/builds
- **Metrics & Monitoring**: Intégré dans Cloud Run console

### 🔒 Sécurité

- ✅ HTTPS automatique avec certificat SSL gratuit
- ✅ Utilisateur non-root dans le container
- ✅ Service Account avec permissions minimales
- ✅ Container scanné automatiquement pour vulnérabilités

### 💰 Coûts

Cloud Run facture uniquement l'utilisation réelle :
- Requêtes : $0.40 / million
- CPU : $0.00002400 / vCPU-seconde
- Mémoire : $0.00000250 / GiB-seconde
- **Free tier** : 2M requêtes/mois, 360,000 GiB-secondes

### 🛠️ Déploiement Manuel (optionnel)

Si vous souhaitez déployer manuellement :

```bash
# 1. Build l'image
gcloud builds submit --tag gcr.io/grounded-tine-392602/reussitess-global-nexus

# 2. Déployer sur Cloud Run
gcloud run deploy reussitess-global-nexus \
  --image gcr.io/grounded-tine-392602/reussitess-global-nexus \
  --platform managed \
  --region europe-west1 \
  --allow-unauthenticated \
  --service-account github-play-deployer@grounded-tine-392602.iam.gserviceaccount.com
```

### 📝 Variables d'Environnement (optionnel)

Pour ajouter des variables d'environnement au déploiement :

```yaml
# Dans cloudbuild.yaml, ajoutez dans les args de gcloud run deploy :
- '--set-env-vars'
- 'NODE_ENV=production,NEXT_PUBLIC_API_URL=https://api.example.com'
```

### 🔄 Rollback

En cas de problème, rollback vers une version précédente :

```bash
gcloud run services update-traffic reussitess-global-nexus \
  --to-revisions=reussitess-global-nexus-00001-xxx=100 \
  --region europe-west1
```

### ✅ Vérification du Déploiement

Après le merge du PR, vérifiez :
1. Build dans Cloud Build (3-5 minutes)
2. Déploiement sur Cloud Run
3. URL accessible avec HTTPS
4. PWA installable depuis le navigateur

---

**🎯 Résultat Final**

Votre PWA REUSSITESS® sera déployée automatiquement avec :
- ✅ Déploiement automatique à chaque push
- ✅ HTTPS & SSL automatique
- ✅ CDN Google Cloud
- ✅ Scaling automatique
- ✅ Logs & monitoring intégrés
- ✅ Zero downtime deployments
