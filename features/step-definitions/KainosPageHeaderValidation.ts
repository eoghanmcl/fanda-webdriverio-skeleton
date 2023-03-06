import { Given, When, Then } from '@wdio/cucumber-framework'

Given(/^I open a browser and enter the Kainos URL (.+)$/, async function (homepage) {
    await browser.url(homepage)
    await browser.maximizeWindow()
    await browser.pause(2000)
});

When(/^I accept cookies(.+)$/, async function (cookiespopup) {
    const acceptcookies = await $('#ccc-recommended-settings')
    await acceptcookies.click()
    await browser.pause(2000)
});

Then(/^I should see a page header that reads: (.+)$/, async function (pageheader) {
    const header = await $('#hero > div.hero__container.container > div > div > div > h1')
    expect(await header.getText()).toEqual(pageheader)
    await browser.pause(2000)
});