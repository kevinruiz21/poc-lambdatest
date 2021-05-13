import Page from './page';

class Input extends Page {

    get inputField() { return $('//input') }

    inputWord(word) {
        this.inputField.setValue(word);
    }

    getHeader() {
        return $('//p').getText();
    }
}

export default new Input();