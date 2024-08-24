import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class YouTubePage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputSearch () {
        console.log("Find the input text field to search");
        return $('#input');
    }


    get btnSubmit () {
        return $('button[aria-label="Search YouTube"]');
    }

    async enterSearch(text) {
        console.log("Searching for " + text);
        
        let search = await this.inputSearch;
        await search.click();
        console.log("Clicked on Search")
        await search.setValue(text);
        console.log("Set text value");
        await this.btnSubmit.click();

        console.log("Done Searching");
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        console.log("Opening the web page.")
        return browser.url(`https://www.youtube.com/`);
    }

    isOnYoutube() {
        return $('id=guide-button').isDisplayed();
    }
}

export default new YouTubePage();
