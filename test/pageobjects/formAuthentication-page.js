import Page from './page';

class Login extends Page {

    get username() { return $('#username') }
    get pass() { return $('#password') }
    get button() { return $('button') }
    get error() { return $('#flash') }

    login() {
        browser.takeScreenshot();
        this.username.addValue('user');
        this.pass.addValue('pass');
        this.button.click();
    }

    errorMessage() {
        return this.error.getText();
    }
}

export default new Login();