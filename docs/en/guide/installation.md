---
translationKey: guide-installation
contentType: how-to
product: browser-extension
productArea: browser-extension
uiSurface: null
locale: en
status: current
owner: docs
reviewStatus: verified
lastVerified: 2026-07-11
platforms: [chrome, edge]
tools: []
appliesTo: []
sources: [https://support.google.com/chrome/answer/2664769, https://learn.microsoft.com/en-us/troubleshoot/microsoft-edge/development/self-host-extension-deploy, human-browser-test@chrome-149-edge-150-macos-2026-07-11]
title: How to Install - User Guide
description: Choose the official source for your browser, install Jego in a few steps, and confirm that it is enabled.
---

# How to Install

Jego is designed for Chrome and Microsoft Edge. Installing it from the browser's official extension store is the simplest path. This page also keeps the manual installation steps for times when the store is temporarily unavailable.

::: tip Check the version before installation
Use [Update the extension](/en/guide/keep-updated) to find the current official release entry. Keeping the browser and Jego up to date provides the latest improvements and fixes. Actual connection results can still vary by region and destination.
:::

## Go to the steps for your browser {#online-installation}

<div class="installation-choice-grid">
  <a class="installation-choice-card" href="#chrome-install"><strong>Google Chrome</strong><span>Install from Chrome Web Store</span></a>
  <a class="installation-choice-card" href="#edge-install"><strong>Microsoft Edge</strong><span>Install from Microsoft Edge Add-ons</span></a>
</div>

## Install Jego in Microsoft Edge {#edge-install}

Update Edge to the latest version before starting.

### Install from Microsoft Edge Add-ons

1. Open the [Jego page in Microsoft Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/bkpoijbobhmbglhjjmnoedomdoabilol).
2. Select **Get** in the upper-right corner and follow the browser prompts.
3. Edge may then say that the extension controls proxy settings. Check the extension name, source, and permissions. After confirming that it is Jego, follow the browser prompt to keep the change.

### Install manually when the store is unavailable

Microsoft Edge Add-ons remains the preferred source. For manual installation, download the ZIP package from the official Jego site, extract it, find the CRX file, and then follow these steps:

1. Download the ZIP package from the [official Jego site](https://jegocloud.com/), extract it, and locate the `.crx` file inside.
2. Enter `edge://extensions/` in the Edge address bar to open Manage Extensions.
3. Turn on **Developer mode**.
4. Drag the `.crx` file from Finder or File Explorer onto the Edge extensions page.
5. When the installation prompt appears, confirm that the extension name is **Jego**, and then select **Add extension**.
6. After installation, make sure that Jego appears in the extension list and is enabled.

<span id="edge-crx-video"></span>

The video below shows how to enable Developer mode in Edge, drag in the CRX file, and finish installation:

<video class="installation-video" controls playsinline preload="metadata" aria-label="Install Jego by dragging a CRX file into Edge">
  <source src="/videos/jego-edge-crx-install-20260711.mp4" type="video/mp4">
  Your browser cannot play this video.
</video>

<span id="pin-the-jego-icon-after-installation"></span>
<span id="initial-settings-after-installation"></span>

### Pin the Jego icon {#edge-pin}

Pin Jego to the Edge toolbar so you can open it directly from the upper-right corner.

1. Open Edge and select the menu button in the upper-right corner (three horizontal dots).
2. Open **Extensions → Manage Extensions**.
3. Find **Jego** and make sure that it is enabled.
4. Select the Extensions icon to the right of the address bar to open the extension list.
5. Select the pin icon beside Jego to pin it to the toolbar.
6. When the Jego icon appears beside the address bar, you can select it whenever you want to use the extension.

<img class="installation-settings-image" src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2Fg4tbKt6AKXlmq4DaA3H6_2Fimage_3.png" alt="Edge settings interface">

Once installed, you can [register an account](/en/guide/registration), then follow [Start using Jego](/en/guide/usage) to sign in and pick a mode and node.

## Install Jego in Google Chrome {#chrome-install}

Update Chrome to the latest version before starting.

### Install from Chrome Web Store

1. Open the [Jego page in Chrome Web Store](https://chrome.google.com/webstore/detail/bnnamacamhjbdoimlbkegmbgkekphcbb).
2. Select **Add to Chrome** in the upper-right corner and follow the browser prompts.

### Install manually when the store is unavailable

Chrome Web Store remains the preferred source. For manual installation, download the ZIP package from the official Jego site, extract it, find the CRX file, and then follow these steps:

1. Download the ZIP package from the [official Jego site](https://jegocloud.com/), extract it, and locate the `.crx` file inside.
2. Enter `chrome://extensions/` in the Chrome address bar to open Manage Extensions.
3. Turn on **Developer mode**.
4. Drag the `.crx` file from Finder or File Explorer onto the Chrome extensions page.
5. When the installation prompt appears, confirm that the extension name is **Jego**, and then select **Add extension**.
6. After installation, make sure that Jego appears in the extension list and is enabled.

The image below shows where to drag the CRX file on the Chrome extensions page:

<img src="/images/jego-chrome-crx-drag-install-20260711.png" alt="Drag the Jego CRX file onto the Chrome extensions page">

### Pin the Jego icon {#chrome-pin}

Pin Jego to the Chrome toolbar so you can open it directly from the upper-right corner.

1. Open Chrome and select the menu button in the upper-right corner (three vertical dots).
2. Open **Extensions → Manage Extensions**.
3. Find **Jego** and make sure that it is enabled.
4. Select the Extensions icon to the right of the address bar to open the extension list.
5. Select the pin icon beside Jego so that it appears selected in blue.
6. When the Jego icon appears beside the address bar, you can select it whenever you want to use the extension.

<img class="installation-settings-image" src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FGzs5DCiSzki2ZpCWTW3Z_2Fimage_1.png" alt="Chrome settings interface">

Next, [register an account](/en/guide/registration), then follow [Start using Jego](/en/guide/usage) to sign in and choose a mode and node.

Once installed, you can [register an account](/en/guide/registration), then follow [Start using Jego](/en/guide/usage) to sign in and pick a mode and node.

## Install in other Chromium browsers

::: warning Compatibility note
QQ Browser, 360 Browser, fingerprint (anti-detect) browsers, and other Chromium-based browsers can usually install Jego as long as their kernel is 88 or later. Fingerprint browsers (often used for multi-account work) generally support loading Chrome extensions — just use their own extension entry. Compatibility and installation rules can change between versions, so update to the current stable version and use an extension installation method allowed by that browser.
:::

### QQ Browser

1. Visit the [official Jego site](https://jegocloud.com/), download **CRX package for Jego**, and extract the ZIP file to obtain the `.crx` file.

2. Open QQ Browser, select **≡** in the upper-right corner, then select **Application Center**.

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FNu4OazcBbbAFfWuQgezF_2Fimage_2.png" alt="QQ Browser Application Center" width="300">

3. Select **Manage My Applications**, then turn on **Developer Mode** in the upper-right corner.

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F89zJpPggJ1YdQjAXLRra_2Fimage_3.png" alt="QQ Browser Developer Mode">

4. If the current QQ Browser allows external CRX installation, drag the CRX from the official Jego site onto the extension page. Review the permissions and follow the page prompts to finish. If that version does not accept the file, use the extension entry provided by the browser.

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FDBP0gASUKK3dAUPq95HO_2F20250310-162502_1.gif" alt="QQ Browser 13.6 version installation screen recording">

### 360 Browser

1. Visit the [official Jego site](https://jegocloud.com/), download **CRX package for Jego**, and extract the ZIP file to obtain the `.crx` file.

2. Open 360 Browser, select the icon with four colored squares in the upper-right corner, then select **Manage**.

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FgcDXVCfrl7t3dVK5jghY_2Fimage_2.png" alt="360 Browser Management Interface" width="300">

3. Select **Advanced Management** in the upper-right corner of the new page.

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FBe1trubV92DFGWVGoa5L_2Fimage_3.png" alt="360 Browser Advanced Management">

4. Turn on **Developer Mode** in the upper-right corner.

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FDWVaPCNn9QB2NmtZXyng_2Fimage_1.png" alt="360 Browser Developer Mode">

5. If the current 360 Browser allows external CRX installation, drag the CRX from the official Jego site onto the extension page. Review the permissions and follow the page prompts to finish. If that version does not accept the file, use the extension entry provided by the browser.

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F4oRzIdJCgphxrFgU4Cls_2F20250310-163456_2.gif" alt="360 Browser 15 version installation screen recording">

## Use Jego in other computer or phone apps

The browser extension controls only the browser where Jego is installed. To use a proxy in other computer or phone apps, see [How to Use Proxy on PC or Mobile](/en/subscription/).
