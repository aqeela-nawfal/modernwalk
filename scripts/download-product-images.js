// Script to download product images from fakestoreapi and save to public/cart-images
const fs = require('fs');
const path = require('path');
const https = require('https');
const fetch = require('node-fetch');

const categories = [
  "men's clothing",
  "women's clothing"
];

const outDir = path.join(__dirname, '../public/cart-images');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

async function downloadImage(url, filename) {
  const file = fs.createWriteStream(filename);
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', (err) => {
      fs.unlink(filename, () => reject(err));
    });
  });
}

(async () => {
  for (const category of categories) {
    const res = await fetch(`https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`);
    const products = await res.json();
    for (const product of products) {
      const url = product.image;
      const ext = path.extname(url).split('?')[0] || '.jpg';
      const filename = path.join(outDir, `product-${product.id}${ext}`);
      if (!fs.existsSync(filename)) {
        console.log(`Downloading ${url} -> ${filename}`);
        await downloadImage(url, filename);
      }
    }
  }
  console.log('All images downloaded.');
})();
