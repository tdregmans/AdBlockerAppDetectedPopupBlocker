# AdBlockerAppDetectedPopupBlocker

The goal of this Firefox plug-in is to block the very irritating 'Ad blocker app detected' popup.

## Used framework

I use TradingView in Firefox. That's why I first looked into developing an extension for Firefox. At that point I found the [mozilla/webextension-polyfill](https://github.com/mozilla/webextension-polyfill) API. This API claims to support Chrome and Firefox.

### Setup

The API is installed via two commands on the cmd:

- Install NodeJS: 
  ```cmd
  winget install OpenJS.NodeJS
  ```
  *source: [nodejs.org](https://nodejs.org/en/download/package-manager/all)*
- Install webextension-polyfill:
  ```cmd
  npm install --save-dev webextension-polyfill
  ```
  *source: [mozilla/webextension-polyfill # Installation](https://github.com/mozilla/webextension-polyfill/tree/master?tab=readme-ov-file#installation)*

## Explainer

The [AdBlockerAppDetectedPopupBlockerApp.js](./AdBlockerAppDetectedPopupBlockerApp.js) is a very basic script. Basically, it does two things:
1. Firstly, it creates a [MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/observe) on the div with `id='overlap-manager-root'`. If a change is detected, it checks if there exists a `div[data-dialog-name="gopro"]`. This is the div that is responsible for the go-pro popup. If this div is created, it deletes it.
2. Secondly, it deletes the `is-not-pro` class form the root `html` element. This allows the user to do things that require a pro subscription.
