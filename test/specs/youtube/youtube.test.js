import { expect } from '@wdio/globals'
import YouTubePage from '../../pageobjects/youtube.page.js'

describe('My YouTube Search', () => {
    it('should seach using YouTube', async () => {
        await YouTubePage.open()
        await expect(YouTubePage.isOnYoutube());
        await expect(YouTubePage.inputSearch.isDisplayed());
        await expect(YouTubePage.inputSearch.isClickable());
        await YouTubePage.enterSearch('something')
    })

    // it('should seach using YouTube 2', async () => {
    //     await YouTubePage.open()
    //     await YouTubePage.enterSearch('something else')
    // })
})

