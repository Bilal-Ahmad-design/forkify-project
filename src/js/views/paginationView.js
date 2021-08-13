import View from './view.js';
import icons from 'url:../../img/icons.svg';


class PaginationView extends View {
    _parentElement = document.querySelector('.pagination');

    _generateMarkUp() {
        const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);
        console.log(numPages);
        // Page 1, and there are other pages

        // Page1, and ther are no other page

        // Last page

        // Other page

    }
}

export default new PaginationView();