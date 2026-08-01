import sharp from 'sharp';

async function generateIcon() {
  await sharp('public/iconnn.png')
    .resize(512, 512, {
      fit: 'contain',
      background: '#1d74ff'
    })
    .toFile('app/icon.png');
  console.log('Successfully generated app/icon.png');
}

generateIcon().catch(console.error);
