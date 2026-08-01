import sharp from 'sharp';

async function generateIcon() {
  await sharp('public/iconnn.png')
    .resize(512, 512, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .toFile('app/icon.png');
  console.log('Successfully generated app/icon.png');
}

generateIcon().catch(console.error);
