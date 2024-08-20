import { expect } from '@wdio/globals'
import GooglePage from '../../pageobjects/google.page.js'

describe('My Google Search', () => {
    it('should seach using Google', async () => {
        await GooglePage.open()
        await GooglePage.enterSearch('something')
    })
})

