import HomePage from '../pageobjects/home-page';
import Inputs from '../pageobjects/input-page'

describe('Inputs', () => {
    it('Set a value', () => {
        HomePage.open();
        HomePage.gotToInputs();
        Inputs.inputWord('Holanda');
        expect(Inputs.getHeader()).toBe('Number');
    });
});