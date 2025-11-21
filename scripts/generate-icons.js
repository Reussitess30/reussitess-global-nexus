const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const iconSizes = [72, 96, 128, 144, 152, 192, 384, 512];

async function generateIcons() {
  const svgBuffer = fs.readFileSync(path.join(__dirname, '../public/icon.svg'));
  
  console.log('Generating PWA icons...');
  
  for (const size of iconSizes) {
    const outputPath = path.join(__dirname, `../public/icon-${size}x${size}.png`);
    
    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(outputPath);
    
    console.log(`✓ Created icon-${size}x${size}.png`);
  }
  
  // Create favicon
  await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toFile(path.join(__dirname, '../public/favicon-32x32.png'));
  
  console.log('✓ Created favicon-32x32.png');
  
  // Create apple-touch-icon
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile(path.join(__dirname, '../public/apple-touch-icon.png'));
  
  console.log('✓ Created apple-touch-icon.png');
  
  console.log('\n✅ All icons generated successfully!');
}

generateIcons().catch(console.error);
