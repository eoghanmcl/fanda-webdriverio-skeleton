# WebDriverIO

WebdriverIO is a progressive automation framework built to automate modern web and mobile applications. It simplifies the interaction with your app and provides a set of plugins that help you create a scalable, robust and stable test suite.

You can use WebdriverIO to automate:
- Modern web applications
- Hybrid or native mobile applications running in an emulator/simulator or on a real device
- Native desktop applications
- Unit or component testing of web components in the browser

Prerequisites
---

- Install node & npm. 


Installation
---

Change to project directory

```cd projectdir```

Install packages

```npm install```

Run wdio

```npx wdio wdio.conf.ts```


API Commands
---

Loads URL

```await browser.url(targetUrl)```

Maximises window

```await browser.maximizeWindow()```

Pauses execution

```await browser.pause('durationInMilliseconds')```

Selects element

```await $('elementName')```

Clicks element

```await var.click()```

Asserts element

```await var.getText()).toEqual(func)```

Other commands can be found at https://webdriver.io/docs/api.


Additional Info
---

- You can change the test you would like to run from the <i>wdio.conf.ts</i> file (line 152).
