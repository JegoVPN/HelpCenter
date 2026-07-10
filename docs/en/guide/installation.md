---
translationKey: guide-installation
contentType: how-to
product: browser-extension
productArea: browser-extension
uiSurface: null
locale: en
status: current
owner: docs
reviewStatus: needs-review
lastVerified: 2026-07-10
platforms: [chrome, edge]
tools: []
appliesTo: []
sources: [https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world, https://learn.microsoft.com/en-us/microsoft-edge/extensions/getting-started/extension-sideloading]
title: How to Install - User Guide
description: Choose the official source for your browser, install Jego in a few steps, and confirm that it is enabled.
---

# How to Install

Jego is designed for Chrome and Microsoft Edge. Installing it from the browser's official extension store is the simplest path. This page also keeps the manual installation steps for times when the store is temporarily unavailable.

::: tip Check the version before installation
Use [Stay Connected](/en/guide/keep-updated) to find the current official release entry. Keeping the browser and Jego up to date provides the latest improvements and fixes. Actual connection results can still vary by region and destination.
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

Microsoft Edge Add-ons remains the preferred source. When the official Jego site provides a manual package, use these steps:

1. Download the manual package from the [official Jego site](https://jegocloud.com/) and extract it.
2. Enter `edge://extensions/` in the Edge address bar.
3. Turn on **Developer mode**.
4. Select **Load unpacked**, then choose the extracted folder that directly contains `manifest.json`.
5. If the download contains only a `.crx` file, use Microsoft Edge Add-ons or another installation method currently allowed by Edge. **Load unpacked** selects a folder, not a `.crx` file.

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FfcXOYhXbZ9Tr2bWUoI5p_2Fimage_3.png" alt="Edge extension management interface">

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

## Install Jego in Google Chrome {#chrome-install}

Update Chrome to the latest version before starting.

### Install from Chrome Web Store

1. Open the [Jego page in Chrome Web Store](https://chrome.google.com/webstore/detail/bnnamacamhjbdoimlbkegmbgkekphcbb).
2. Select **Add to Chrome** in the upper-right corner and follow the browser prompts.

### Install manually when the store is unavailable

Chrome Web Store remains the preferred source. When the official Jego site provides a manual package, use these steps:

1. Download the manual package from the [official Jego site](https://jegocloud.com/) and extract it.
2. Enter `chrome://extensions/` in the Chrome address bar.
3. Turn on **Developer mode**.
4. Select **Load unpacked**, then choose the extracted folder that directly contains `manifest.json`.
5. If the download contains only a `.crx` file, use Chrome Web Store or another installation method currently allowed by Chrome. **Load unpacked** selects a folder, not a `.crx` file.

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F8gEriEnVmF77fYUY2XxI_2Fimage_1.png" alt="Chrome extension management interface">

The recording below shows the Chrome installation flow:

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FqJVM1Fphg1LsgyqucvDn_2F20250326-115951_2.gif" alt="Chrome Jego installation screen recording demo">

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

## Install in other Chromium browsers

::: warning Compatibility note
Extension compatibility and installation rules can change between versions of QQ Browser, 360 Browser, and other Chromium browsers. Update to the current stable version and use an extension installation method allowed by that browser.
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
