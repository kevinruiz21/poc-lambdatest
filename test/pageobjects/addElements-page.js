import Page from './page';

class AddElements extends Page {

    get addElementButton() { return $('//button[text()="Add Element"]') }
    get elements() { return $$('//*[@id="elements"]//button')}

    addElement() {
        this.addElementButton.click();
    }

    getSizeElements() {
        return this.elements.length;
    }
}

export default new AddElements();