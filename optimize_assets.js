const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const srcDir = path.join(__dirname, 'assets');
const destDir = path.join(__dirname, 'assets', 'optimized');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

async function optimizeImages() {
  console.log('Starting image optimization...');
  const files = fs.readdirSync(srcDir);
  let count = 0;
  
  for (const file of files) {
    const srcPath = path.join(srcDir, file);
    const stat = fs.statSync(srcPath);
    
    // Skip directories and optimize only image files
    if (stat.isDirectory() || !/\.(jpe?g|png)$/i.test(file)) {
      continue;
    }
    
    // Define the output webp filename
    const ext = path.extname(file);
    const baseName = path.basename(file, ext);
    const destFileName = `${baseName}.webp`;
    const destPath = path.join(destDir, destFileName);
    
    try {
      await sharp(srcPath)
        .resize({ width: 1200, withoutEnlargement: true }) // Resize to max-width 1200px
        .webp({ quality: 80 }) // Convert to WebP with 80% quality
        .toFile(destPath);
        
      const destStat = fs.statSync(destPath);
      const originalMB = (stat.size / 1024 / 1024).toFixed(2);
      const optimizedKB = (destStat.size / 1024).toFixed(2);
      
      console.log(`[${++count}] Optimized: ${file} (${originalMB} MB) -> ${destFileName} (${optimizedKB} KB)`);
    } catch (err) {
      console.error(`Error optimizing ${file}:`, err.message);
    }
  }
  
  console.log(`Finished optimizing ${count} images! All stored in: ${destDir}`);
}

optimizeImages().catch(console.error);
