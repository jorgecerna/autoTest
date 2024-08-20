import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class GooglePage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputSearch () {
        return $('#Search');
    }


    get btnSubmit () {
        return $('#Google Search');
    }

    async enterSearch(text) {
        await this.inputSearch.setValue(text);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return browser.url(`https://google.com`);
    }
}

export default new GooglePage();
