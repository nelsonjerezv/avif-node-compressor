# AVIF Batch Compressor en Node.js

Este repositorio usa Node.js y Sharp para convertir en lote imágenes JPG y PNG a AVIF.

## Requisitos

- Tener Node.js instalado en macOS. Si no, instala con [Homebrew](https://brew.sh/):

brew install node

- Instalar dependencias:

npm install

## Cómo usar

1. Coloca las imágenes en la carpeta `input/`.
2. Ejecuta el script:

npm start

3. Las imágenes convertidas en AVIF estarán en `output/`.

## Nota

- Puedes ajustar la calidad en `sharp(inputPath).avif({ quality: 50 })`.
- La carpeta `output/` se crea automáticamente si no existe.