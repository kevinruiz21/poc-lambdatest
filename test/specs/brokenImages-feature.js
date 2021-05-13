import HomePage from '../pageobjects/home-page';
import BrokenImages from '../pageobjects/brokenImages-page'

describe('Broken Images', () => {
    it('More than 3 images', () => {
        HomePage.open();
        HomePage.gotToBrokenImages();
        expect(BrokenImages.getImagesLength()).toBeGreaterThanOrEqual(1);
    });
});