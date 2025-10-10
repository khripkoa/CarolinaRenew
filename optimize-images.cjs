const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './src/assets';
const outputDir = './src/assets-optimized';

// Создаем выходную директорию
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function optimizeImages() {
  const files = fs.readdirSync(inputDir);
  
  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      const inputPath = path.join(inputDir, file);
      const outputPath = path.join(outputDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
      
      try {
        await sharp(inputPath)
          .webp({ 
            quality: 85,
            effort: 6
          })
          .resize(1200, null, { 
            withoutEnlargement: true,
            fit: 'inside'
          })
          .toFile(outputPath);
        
        console.log(`✅ Optimized: ${file} -> ${path.basename(outputPath)}`);
        
        // Создаем также оптимизированную PNG версию для совместимости
        const pngOutputPath = path.join(outputDir, file);
        await sharp(inputPath)
          .png({ 
            quality: 85,
            compressionLevel: 9
          })
          .resize(1200, null, { 
            withoutEnlargement: true,
            fit: 'inside'
          })
          .toFile(pngOutputPath);
        
        console.log(`✅ Compressed: ${file}`);
        
      } catch (error) {
        console.error(`❌ Error processing ${file}:`, error.message);
      }
    }
  }
}

optimizeImages().then(() => {
  console.log('🎉 Image optimization complete!');
}).catch(console.error);
