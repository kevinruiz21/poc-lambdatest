import Page from './page';

class BrokenImages extends Page {

    get images() { return $$('img') }

    getImagesLength() {
        return this.images.length;
    }
}

export default new BrokenImages();