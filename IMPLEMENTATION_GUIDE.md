# 🌍 Réussitess Global Nexus

[![Deploy to Production](https://github.com/Reussitess30/reussitess-global-nexus/actions/workflows/deploy.yml/badge.svg)](https://github.com/Reussitess30/reussitess-global-nexus/actions/workflows/deploy.yml)

A modern, multilingual Next.js application featuring 26 Amazon affiliate stores across 14 countries, with AI-powered chatbot, authentication, and automated deployment.

## ✨ Features

### 🌐 Multilingual Support (i18n)
- **6 Languages**: French 🇫🇷, English 🇬🇧, Spanish 🇪🇸, German 🇩🇪, Italian 🇮🇹, Portuguese 🇵🇹
- Automatic locale detection
- SEO-optimized with hreflang tags
- Dynamic sitemap generation

### 🤖 AI-Powered Chatbot
- Multilingual support (adapts to current language)
- OpenAI GPT-3.5-turbo integration
- Intelligent fallback responses
- Context-aware about stores and affiliate program
- Beautiful gradient UI with smooth animations

### 🎬 Login Animation
- Eye-catching splash screen on first visit
- Powered by Framer Motion
- Session-based (shows once per session)
- Smooth transitions and animations

### 🔐 Multi-Provider Authentication
- **NextAuth.js** integration
- **OAuth Providers**: Google, Facebook, GitHub
- **Email/Password** credentials
- JWT session management
- Secure and scalable

### 📱 PWA Ready
- Progressive Web App capabilities
- Offline support
- Service worker integration
- Android APK builds via Capacitor

### 🚀 Automated Deployment
- **GitHub Actions** CI/CD pipeline
- **Vercel** deployment
- **Google Cloud** App Engine deployment
- **Android APK** builds for Play Store
- Automated testing and linting

### 🎯 SEO Optimized
- Next-SEO integration
- Dynamic sitemap with all locales
- robots.txt configuration
- Open Graph tags
- Security headers

## 🏪 Amazon Stores

### Personal Stores (14)
- 🇫🇷 France
- 🇮🇹 Italy
- 🇩🇪 Germany
- 🇸🇪 Sweden
- 🇸🇬 Singapore
- 🇦🇺 Australia
- 🇪🇸 Spain
- 🇧🇷 Brazil
- 🇬🇧 United Kingdom
- 🇮🇳 India
- 🇳🇿 New Zealand
- 🇺🇸 United States
- 🇨🇦 Canada
- 🇧🇪 Belgium

### Influencer Stores (12)
- Same countries coverage with influencer accounts

## 🛠️ Technology Stack

- **Framework**: Next.js 13.5
- **React**: 18.2
- **Animation**: Framer Motion
- **Authentication**: NextAuth.js
- **AI**: OpenAI GPT-3.5-turbo
- **SEO**: next-seo
- **PWA**: next-pwa
- **Styling**: Tailwind CSS
- **Deployment**: Vercel, Google Cloud, GitHub Actions

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/Reussitess30/reussitess-global-nexus.git
cd reussitess-global-nexus
```

2. Install dependencies
```bash
npm install
```

3. Create environment file
```bash
cp .env.example .env.local
```

4. Configure environment variables in `.env.local` (see Configuration section)

5. Run development server
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000)

## ⚙️ Configuration

### Required Environment Variables

Create a `.env.local` file with the following:

```env
# Application
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# NextAuth (Required)
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here

# OAuth Providers (Optional - Configure as needed)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
FACEBOOK_CLIENT_ID=your-facebook-client-id
FACEBOOK_CLIENT_SECRET=your-facebook-client-secret
GITHUB_ID=your-github-id
GITHUB_SECRET=your-github-secret

# OpenAI (Optional - For AI Chatbot)
OPENAI_API_KEY=sk-your-openai-key
```

### Getting API Keys

#### Google OAuth
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs: `http://localhost:3000/api/auth/callback/google`

#### Facebook OAuth
1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Create a new app
3. Add Facebook Login product
4. Configure Valid OAuth Redirect URIs

#### GitHub OAuth
1. Go to [GitHub Settings > Developer settings](https://github.com/settings/developers)
2. Create new OAuth App
3. Set Authorization callback URL: `http://localhost:3000/api/auth/callback/github`

#### OpenAI API
1. Go to [OpenAI Platform](https://platform.openai.com/)
2. Create API key
3. Add billing information (required for API access)

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Deploy to Vercel
```bash
npm run deploy:vercel
```

### Deploy to GitHub Pages
```bash
npm run deploy:github
```

## 🔄 GitHub Actions Workflow

The automated deployment workflow includes:

1. **Build & Test**: Lints and builds the application
2. **Deploy to Vercel**: Automatic deployment on main branch
3. **Deploy to Google Cloud**: App Engine deployment
4. **Build Android APK**: For Play Store distribution
5. **Notifications**: Deployment status updates

### Required GitHub Secrets

Add these secrets to your GitHub repository:

- `VERCEL_TOKEN`: Vercel authentication token
- `VERCEL_ORG_ID`: Vercel organization ID
- `VERCEL_PROJECT_ID`: Vercel project ID
- `GCP_SERVICE_ACCOUNT_KEY`: Google Cloud service account key
- `GCP_PROJECT_ID`: Google Cloud project ID
- `NEXT_PUBLIC_BASE_URL`: Production URL

## 🎨 Customization

### Adding New Languages

1. Update `next.config.js`:
```javascript
i18n: {
  locales: ['fr', 'en', 'es', 'de', 'it', 'pt', 'your-locale'],
  defaultLocale: 'fr',
}
```

2. Add translations in `pages/index.js` content object

3. Update chatbot messages in `components/Chatbot.js`

### Modifying Stores

Edit the `boutiques` array in `pages/index.js` to add, remove, or modify Amazon store links.

## 📱 PWA & Android

### Building Android APK

The GitHub Actions workflow automatically builds an Android APK using Capacitor. To build manually:

```bash
# Install Capacitor
npm install @capacitor/core @capacitor/cli @capacitor/android

# Initialize Capacitor
npx cap init "Reussitess Global" "com.reussitess.global" --web-dir=out

# Add Android platform
npx cap add android

# Build and export
npm run build
npm run export

# Sync with Capacitor
npx cap sync

# Open in Android Studio
npx cap open android
```

## 🔒 Security

- Security headers configured in `next.config.js`
- CSRF protection via NextAuth
- OAuth state verification
- JWT token encryption
- Environment variables for sensitive data
- Content Security Policy ready

## 📊 Analytics & SEO

- Dynamic sitemap at `/sitemap.xml`
- robots.txt configured
- Open Graph tags for social sharing
- Structured data ready
- Performance optimized

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - feel free to use this project for your own purposes.

## 🌟 Acknowledgments

- Amazon Affiliate Program
- Next.js team
- OpenAI for GPT integration
- Vercel for hosting
- All contributors and supporters

## 📞 Support

For support, please open an issue in the GitHub repository or contact the maintainers.

---

Made with ❤️ from Guadeloupe 🇬🇵 - Terre de Champions
