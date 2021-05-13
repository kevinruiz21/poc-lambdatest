import HomePage from '../pageobjects/home-page';
import Login from '../pageobjects/formAuthentication-page'

describe('Login', () => {
    it('Fail the login', () => {
        HomePage.open();
        HomePage.gotToFormAuthentication();
        Login.login();
        expect(Login.errorMessage()).toContain('Your username is invalid!');
    });
});