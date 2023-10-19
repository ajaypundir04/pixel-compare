const Jimp = require('jimp');
module.exports = {
  downloadAndCompareImages: async function (url1, url2) {
    try {
      const jimage1 = await Jimp.read(url1);
      const jimage2 = await Jimp.read(url2);

      const diff = Jimp.diff(jimage1, jimage2, 0.1);
      const percentDifference = diff.percent;
      console.log(percentDifference)
      // Adjust the threshold and comparison logic as needed
      const areImagesEqual = percentDifference < 1; 

      return areImagesEqual;
    } catch (error) {
      console.error('Error:', error.message);
      return false;
    }
  },
};
