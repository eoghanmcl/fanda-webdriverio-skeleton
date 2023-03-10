# WebdriverIO

WebdriverIO is a progressive automation framework built to automate modern web and mobile applications. It simplifies the interaction with your app and provides a set of plugins that help you create a scalable, robust and stable test suite.

You can use WebdriverIO to automate:
- Modern web applications
- Hybrid or native mobile applications running in an emulator/simulator or on a real device
- Native desktop applications
- Unit or component testing of web components in the browser

Prerequisites
---

Install node & npm.


Installation
---

Change to project directory:

```cd projectdir```

Install packages:

```npm install```

Run WebdriverIO:

```npx wdio wdio.conf.ts```


Usage
---

Loads URL:

```await browser.url(targetUrl)```

Maximises window:

```await browser.maximizeWindow()```

Pauses execution:

```await browser.pause('durationInMilliseconds')```

Selects element:

```await $('elementName')```

Clicks element:

```await var.click()```

Asserts element:

```await var.getText()).toEqual(func)```


Gotchas
---

The following error may be displayed when WebDriverIO is ran:

```SyntaxError: Unexpected token . at exports.runInThisContext (vm.js:73:16) at Module._compile (module.js:443:25) at Object.Module._extensions..js (module.js:478:10) at Module.load (module.js:355:32) at Function.Module._load (module.js:310:12) at Function.Module.runMain (module.js:501:10) at startup (node.js:129:16) at node.js:814:3```

If so, then node & npm should be updated to newer versions (i.e. node v18.5.0, npm 8.12.1). 


Additional Info
---

- You can change the test you would like to run from the <i>wdio.conf.ts</i> file (line 152).
- Other API commands can be found at https://webdriver.io/docs/api.
