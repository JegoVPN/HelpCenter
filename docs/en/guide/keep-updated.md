---
translationKey: guide-keep-updated
contentType: how-to
product: browser-extension
productArea: browser-extension
uiSurface: null
locale: en
status: current
owner: docs
reviewStatus: needs-review
lastVerified: null
platforms: [chrome, edge]
tools: []
appliesTo: []
sources: []
title: Update the extension - User Guide
description: Check the current Jego extension version, update it in your browser, and reinstall when needed.
---

# Update the extension

Jego regularly updates the browser extension. Keeping it up to date gives your browser the latest nodes and connection settings. Store installations usually update automatically; use the matching browser section below when you want to check immediately.

## Current extension version

<div class="version-card-grid">
  <a class="version-card" href="https://chrome.google.com/webstore/detail/bnnamacamhjbdoimlbkegmbgkekphcbb">
    <span>Chrome</span>
    <strong>1.5.9</strong>
    <small>July 4, 2026 · Chrome Web Store</small>
  </a>
  <a class="version-card" href="https://microsoftedge.microsoft.com/addons/detail/bkpoijbobhmbglhjjmnoedomdoabilol">
    <span>Microsoft Edge</span>
    <strong>1.5.9</strong>
    <small>July 4, 2026 · Microsoft Edge Add-ons</small>
  </a>
</div>

To see the version installed in this browser: open the extensions page (`chrome://extensions/` or `edge://extensions/`), find Jego, and select **Details**.

## Update Jego in Chrome

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2Fomxd1Mr1qsuzHUduonWU_2Fchrome_1.png" width="38" height="28" alt="Chrome icon">

Chrome normally updates Jego automatically. To check immediately, use any one of these methods:

1. Open the [Jego page in Chrome Web Store](https://chrome.google.com/webstore/detail/bnnamacamhjbdoimlbkegmbgkekphcbb) so Chrome can check the store version.
2. Enter `chrome://extensions/` in the address bar, turn on **Developer mode**, then select **Update** in the upper-left corner.
3. Fully quit and reopen Chrome so the browser checks for extension updates automatically.

## Update Jego in Edge

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F5JRmsC6cdLC8T1CMokaN_2Fmsedge_3.png" width="38" height="28" alt="Edge icon">

Edge normally updates Jego automatically as well. To check immediately, use any one of these methods:

1. Open the [Jego page in Microsoft Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/bkpoijbobhmbglhjjmnoedomdoabilol) so Edge can check the store version.
2. Enter `edge://extensions/` in the address bar, turn on **Developer mode**, then select **Update** in the upper-right corner.
3. Fully quit and reopen Edge so the browser checks for extension updates automatically.

While Microsoft Edge Add-ons is rolling out a new version, open the [online installation guide](/en/guide/installation#online-installation) to check the currently available official source.

## Update a manually installed version

The installation package supports the browsers below and other Chromium-based browsers:

<div class="manual-browser-grid">
  <span class="manual-browser-item"><img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F5C1uC1qTbxO3LKHO4oql_2Fmsedge_2.png" width="38" height="28" alt="Edge icon"><span>Edge</span></span>
  <span class="manual-browser-item"><img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FczhA5KDPiurdPyCanu1Z_2Fchrome_3.png" width="38" height="28" alt="Chrome icon"><span>Chrome</span></span>
  <span class="manual-browser-item"><img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FbhAczGOlghKJxh3Y4N7u_2FQQBrowser_1.png" width="38" height="28" alt="QQ Browser icon"><span>QQ Browser</span></span>
  <span class="manual-browser-item"><img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FYHwAipQtF3QwJ7z85hyz_2F360se_2.png" width="38" height="28" alt="360 Browser icon"><span>360 Browser</span></span>
</div>

When you need a manual package, build the download address with this fixed format:

1. Address prefix: `https://jegocloud.com/static/app/`
2. Package filename: `JegoV` + version number + `.zip`

For the current `1.5.9` release, the filename is `JegoV1.5.9.zip`. Join the address prefix and filename to form the complete download address.

You can also [contact support](/en/guide/support) for the current CRX package. After downloading it, follow the manual steps for your browser in the [installation guide](/en/guide/installation).

## After updating

After updating the browser extension, fully quit and reopen the browser. An update normally keeps your settings: click the Jego icon and confirm the popup still shows the mode and node you normally use — when unsure, **Auto Select** is fine.

To confirm the overall status, open **Dashboard** → **Diagnostics** and review the current mode, node, and common-website results.

## When you choose to reinstall Jego

Use this section only after you decide to reinstall Jego or Support specifically asks you to do so.

1. Note the current version and the original installation source; your Proxy Rules are stored in your account and come back after you sign in.
2. Find Jego in the extension manager and select **Remove**.
3. Use the [installation guide](/en/guide/installation) to install Jego from the same official source.
4. Sign in, then select the mode and node you normally use.

## Contact support

When you need personal help, [contact support](/en/guide/support) and include your browser and Jego versions, your operating system, and the **Diagnostics** results.
