import HomePage from '../pageobjects/home-page';
import AddElements from '../pageobjects/addElements-page'

describe('Add Elements', () => {
    it('Add a element', () => {
        HomePage.open();
        HomePage.goToAddElements();
        AddElements.addElement();
        expect(AddElements.getSizeElements()).toStrictEqual(1);
    });
});