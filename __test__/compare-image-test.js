const comparePixel = require('../main');



describe('Image Comparison', () => {
  test('should return true for equal images for jpg', async () => {
    const url1 = 'https://picsum.photos/200/300.jpg';
    const url2 = 'https://picsum.photos/200/300.jpg';
    const result = await comparePixel.downloadAndCompareImages(url1, url2);
    expect(result).toBe(true)
  });

  test('should return true for equal images for png', async () => {
    const url1 = 'https://www.gstatic.com/webp/gallery3/1.sm.png';
    const url2 = 'https://www.gstatic.com/webp/gallery3/1.sm.png';
    const result = await comparePixel.downloadAndCompareImages(url1, url2);
    expect(result).toBe(true)
  });


 


});
