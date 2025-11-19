const fs = require('fs');
const path = require('path');

console.log('Testing project structure...\n');

const requiredFiles = {
  'API Endpoints': [
    'pages/api/chat.js',
    'pages/api/sitemap.js',
    'pages/api/auth/[...nextauth].js'
  ],
  'Components': [
    'components/Chatbot.js',
    'components/LoginAnimation.js'
  ],
  'Configuration': [
    'next.config.js',
    'package.json',
    '.env.example',
    'public/robots.txt'
  ],
  'CI/CD': [
    '.github/workflows/deploy.yml'
  ]
};

let allValid = true;

Object.keys(requiredFiles).forEach(category => {
  console.log(`${category}:`);
  requiredFiles[category].forEach(file => {
    if (fs.existsSync(path.join(__dirname, file))) {
      console.log(`  ✅ ${file}`);
    } else {
      console.log(`  ❌ ${file}`);
      allValid = false;
    }
  });
  console.log('');
});

if (allValid) {
  console.log('✅ All required files exist!\n');
  process.exit(0);
} else {
  console.log('❌ Some files are missing\n');
  process.exit(1);
}
