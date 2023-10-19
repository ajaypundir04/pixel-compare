const pixelmatch = require('pixelmatch');
const fs = require('fs');
const axios = require('axios');
const PNG = require('pngjs').PNG;

 
module.exports = {
  downloadAndCompareImages: async function (firstImageUrl, secondImageUrl) {
    const image1Buffer = await downloadImage(firstImageUrl);
    const image2Buffer = await downloadImage(secondImageUrl);
  
    if (!image1Buffer || !image2Buffer) {
      return false;
    }
  
    return new Promise((resolve, reject) => {
      const image1 = new PNG();
      const image2 = new PNG();
  
      image1.parse(image1Buffer, (error) => {
        if (error) {
          reject(error);
          return;
        }
  
        image2.parse(image2Buffer, (error) => {
          if (error) {
            reject(error);
            return;
          }
  
          // Check if images have the same dimensions
          if (image1.width !== image2.width || image1.height !== image2.height) {
            resolve(false);
            return;
          }
  
          // Create a diff image
          const diff = new PNG({ width: image1.width, height: image1.height });
  
          // Compare the images using pixelmatch
          const numDiffPixels = pixelmatch(
            image1.data,
            image2.data,
            diff.data,
            image1.width,
            image1.height,
            {
              threshold: 0.1, // Adjust the threshold as needed
            }
          );
  
        
          // If the number of different pixels is zero, the images are the same
          resolve(numDiffPixels === 0);
        });
      });
    });
  }
};




async function downloadImage(url) {
  try {
    const response = await axios.get(url, { responseType: 'arraybuffer' });
    return Buffer.from(response.data, 'binary');
  } catch (error) {
    console.error('Error downloading the image:', error.message);
    return null;
  }
}