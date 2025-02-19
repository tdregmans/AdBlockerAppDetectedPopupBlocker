# AdBlockerAppDetectedPopupBlocker

The goal of this Firefox plug-in is to block the very irritating 'Ad blocker app detected' popup.

Current version: v1.0

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

## Signing

Using the web-ext, the extension is signed. After testing the application in Firefox using the debug function, the extension is sent to Mozilla and signed by it. More information can be found [here](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/) and [here](https://extensionworkshop.com/documentation/develop/web-ext-command-reference/#web-ext-sign).

Signing requires a account with keys on the [Mozilla addon website](https://addons.mozilla.org/). The required keys can be generated on the [addon/api/key/ page]([Mozilla addon website](https://addons.mozilla.org/en-US/developers/addon/api/key/)

The used command is:
```cmd
web-ext sign --api-key=[key] --api-secret=[secret] --channel=unlisted
```

This produces a '.xpi' file in [./web-ext-artifacts](./web-ext-artifacts/) that can be loaded as permanent extension in Firefox.

## Potential bug

At the start a potential bug was identified, namely that when the `web-ext run` is executed, it produces the following output:

```cmd
C:\path\to\extension>web-ext run
Running web extension from C:\path\to\AdBlockerAppDetectedPopupBlocker
You are using 32-bit version of Firefox on 64-bit versions of the Windows.
Some features may not work correctly in this version. You should upgrade Firefox to the latest 64-bit version now!
node:events:485
      throw er; // Unhandled 'error' event
      ^

Error: spawn C:\Program Files (x86)\Mozilla Firefox\firefox.exe ENOENT
    at ChildProcess._handle.onexit (node:internal/child_process:286:19)
    at onErrorNT (node:internal/child_process:484:16)
    at process.processTicksAndRejections (node:internal/process/task_queues:90:21)
Emitted 'error' event on ChildProcess instance at:
    at ChildProcess._handle.onexit (node:internal/child_process:292:12)
    at onErrorNT (node:internal/child_process:484:16)
    at process.processTicksAndRejections (node:internal/process/task_queues:90:21) {
  errno: -4058,
  code: 'ENOENT',
  syscall: 'spawn C:\\Program Files (x86)\\Mozilla Firefox\\firefox.exe',
  path: 'C:\\Program Files (x86)\\Mozilla Firefox\\firefox.exe',
  spawnargs: [
    '-start-debugger-server',
    61263,
    '-foreground',
    '-no-remote',
    '-profile',
    'C:\\Users\\user\\AppData\\Local\\Temp\\firefox-profilerandomstring/'
  ]
}

Node.js v23.7.0

```

Even though the extension works on the functionality level, it may have some bug. This however doen't prevent this version from being signed.
