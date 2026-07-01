import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const dirs = [
  'c:/Users/alexx/my-app/public/images/products',
  'c:/Users/alexx/my-app/public/images/projects'
];

async function resizeImages() {
  for (const dir of dirs) {
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir);

    for (const file of files) {
      if (file.match(/\.(png|jpg|jpeg)$/i)) {
        const filePath = path.join(dir, file);
        const tempPath = path.join(dir, `temp_${file}`);
        
        console.log(`Processing ${file}...`);
        
        try {
          if (file.match(/\.png$/i)) {
             await sharp(filePath)
               .resize(800)
               .png({ quality: 80, compressionLevel: 8 })
               .toFile(tempPath);
          } else {
             await sharp(filePath)
               .resize(800)
               .jpeg({ quality: 80 })
               .toFile(tempPath);
          }
            
          fs.unlinkSync(filePath);
          fs.renameSync(tempPath, filePath);
          console.log(`Successfully resized and compressed ${file}`);
        } catch (err) {
          console.error(`Error processing ${file}:`, err);
        }
      }
    }
  }
}

resizeImages();
