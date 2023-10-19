const comparePixel = require('../main');



describe('Image Comparison', () => {
  it('should return true for equal images', async () => {
    const url1 = 'https://www.gstatic.com/webp/gallery3/1.sm.png';
    const url2 = 'https://www.gstatic.com/webp/gallery3/1.sm.png';
    const result = await comparePixel.downloadAndCompareImages(url1, url2);
    expect(result).toBe(true)
  });



 


});
