import Page from './page';

class HomePage extends Page {

    get addElements() { return $('//*[text()= "Add/Remove Elements"]') }
    get brokenImages() { return $('//*[text()= "Broken Images"]') }
    get typos() { return $('//a[@href= "/typos"]') }
    get inputs() { return $('//*[text()= "Inputs"]') }
    get formAuthentication() { return $('//*[text()= "Form Authentication"]') }

    goToAddElements() {
        return this.addElements.click();
    }

    gotToBrokenImages() {
        return this.brokenImages.click();
    }

    gotToTypos() {
        return this.typos.click();
    }

    gotToInputs() {
        return this.inputs.click();
    }

    gotToFormAuthentication() {
        return this.formAuthentication.click();
    }

    open() {
        return super.open('');
    }
}

export default new HomePage();