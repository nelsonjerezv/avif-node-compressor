import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const inputDir = './input';
const outputDir = './output';
const watermarkPath = './watermark.png'; // Asegúrate de que el watermark.png esté en la misma carpeta

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Lee el watermark una vez para reutilizarlo
const watermarkBuffer = fs.readFileSync(watermarkPath);

fs.readdir(inputDir, (err, files) => {
  if (err) {
    console.error('Error leyendo input directory:', err);
    return;
  }

  files.forEach(file => {
    const ext = path.extname(file).toLowerCase();
    const baseName = path.basename(file, ext);
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, `${baseName}.avif`);

    if (['.jpg', '.jpeg', '.png'].includes(ext)) {
      sharp(inputPath)
        .composite([{ input: watermarkBuffer, tile: true, blend: 'over', opacity: 0.3 }])
        .avif({ quality: 25 })
        .toFile(outputPath)
        .then(() => console.log(`Convertido: ${file} -> ${baseName}.avif con watermark`))
        .catch(err => console.error(`Error al convertir ${file}:`, err));
    }
  });
});
