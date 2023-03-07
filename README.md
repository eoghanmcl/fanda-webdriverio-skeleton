# WebDriverIO

WebdriverIO is a progressive automation framework built to automate modern web and mobile applications. It simplifies the interaction with your app and provides a set of plugins that help you create a scalable, robust and stable test suite.

You can use WebdriverIO to automate:

- modern web applications
- hybrid or native mobile applications running in an emulator/simulator or on a real device
- native desktop applications
- unit or component testing of web components in the browser


Prerequisites
---

Install node & npm. 


Installation
---

Change to project folder:

```cd projectdir```

Install packages:

```npm install```

Run tests:

```npx wdio wdio.conf.ts```


Usage
---

Opens URL:

```await browser.url(url)```

Maximises window:

```await browser.maximizeWindow()```

Adds delay:

```await browser.pause('durationInMilliseconds')```

Selects element:

```await $('element-name')```

Clicks element:

```await var.click()```

Asserts element:

```await var.getText()).toEqual(func)```


Additional Info
---

- You can change the test you would like to run from the <i>wdio.conf.ts</i> file (line 152). 
