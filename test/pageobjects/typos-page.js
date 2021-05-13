import Page from './page';

class Typos extends Page {

    get header() { return $('//h3') }

    hasAHeader() {
        return this.header.getText();
    }
}

export default new Typos();