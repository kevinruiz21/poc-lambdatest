import HomePage from '../pageobjects/home-page';
import Typos from '../pageobjects/typos-page'

describe('Typos', () => {
    it('Get header', () => {
        HomePage.open();
        HomePage.gotToTypos();
        expect(Typos.hasAHeader()).toBe('Typos');
    });
});