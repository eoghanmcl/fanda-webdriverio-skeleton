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

When(/^I open the contact form (.+)$/, async function (contactpage) {
    const contactbtn = await $('#header > div > div > div.header__right-panel.js-header-right-panel > div.js-get-in-touch-container.header__get-in-touch-container > a')
    await contactbtn.click()
    await browser.pause(2000)
});

When(/^I (.+) the contact form$/, async function (submitform) {
    const submitbtn = await $('#bd888012-4ce2-4fb7-ad90-960dbed9acbd')
    await submitbtn.click()
    await browser.pause(2000)
});

Then(/^I should see an error message that reads: (.+)$/, async function (errormessage) {
    const error = await $('#__field_17228_desc')
    expect(await error.getText()).toEqual(errormessage)
    await browser.pause(2000)
});