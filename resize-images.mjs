import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const solutionsDir = 'c:/Users/alexx/my-app/public/images/solutions';

async function resizeImages() {
  const files = fs.readdirSync(solutionsDir);

  for (const file of files) {
    if (file.match(/\.(png|jpg|jpeg)$/i)) {
      const filePath = path.join(solutionsDir, file);
      const tempPath = path.join(solutionsDir, `temp_${file}`);
      
      console.log(`Processing ${file}...`);
      
      try {
        await sharp(filePath)
          .resize(800) // Resize to max 800px width
          .jpeg({ quality: 80 }) // Convert/compress as high-quality jpeg
          .toFile(tempPath);
          
        fs.unlinkSync(filePath);
        fs.renameSync(tempPath, filePath.replace(/\.png$/i, '.jpg'));
        console.log(`Successfully resized and compressed ${file}`);
      } catch (err) {
        console.error(`Error processing ${file}:`, err);
      }
    }
  }
}

resizeImages();
