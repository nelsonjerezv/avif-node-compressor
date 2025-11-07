import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const inputDir = './input';
const outputDir = './output';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

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
        .avif({ quality: 25 }) // Puedes ajustar la calidad
        .toFile(outputPath)
        .then(() => console.log(`Convertido: ${file} -> ${baseName}.avif`))
        .catch(err => console.error(`Error al convertir ${file}:`, err));
    }
  });
});
