---
translationKey: guide-chatgpt-access
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
title: How to Access New Bing, Copilot or ChatGPT - User Guide
description: How to properly access New Bing, Copilot or ChatGPT in mainland China
---

# How to Access New Bing, Copilot or ChatGPT

## Access Process

1️⃣ **Step 1**, ensure that there are no access policies for <span style="color:blue;">`bing.com`</span>, <span style="color:blue;">`microsoft.com`</span> and <span style="color:blue;">`openai.com`</span> in **Jego - Control Panel - Proxy Strategy**:

<img src="/images/jego-v1.5.9/dashboard-proxy-policy-empty-en.png" alt="Proxy Strategy">

::: danger Important Reminder
<span style="color:red;">**Important reminder:**</span>

<span style="color:red;">No proxy strategy setup is required to access ChatGPT and New Bing.</span>
:::

2️⃣ **Step 2**, Jego extension mode can be either <span style="background-color:green; color:white; padding:2px 6px; border-radius:3px;">Global</span> or <span style="background-color:green; color:white; padding:2px 6px; border-radius:3px;">Rules</span>, but the server node must carry the `[AI]` label:

<img src="/images/jego-v1.5.9/popup-paid-rules-ai-en.png" alt="Jego selected AI node" width="280" />

✅ **Connection check complete.** The screenshots below show historically successful page loads for `Bing`, `Copilot`, and `ChatGPT`; actual features still depend on third-party service status and account eligibility:

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F8xAkeKaPFvJCAt1MuBYf_2Fimage_2.png" alt="New Bing ✌">

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2Fz7RH5pwBUDwrBQdsdvah_2Fimage_3.png" alt="Copilot ✌">

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F8oyNaJcc0tFJdbungX6t_2Fimage_1.png" alt="ChatGPT ✌">

::: info It's That Simple

These steps test browser connectivity; they do not change or guarantee third-party account eligibility.
:::

---

## Common Issue: Cannot Access New Bing, Copilot or ChatGPT Websites

Please **optimize your local network and browser environment**, follow the steps below, <span style="background-color:red; color:white; padding:2px 6px; border-radius:3px;">each step is important</span>:

### 1. Network Environment
1. Change your router and computer DNS to Alibaba Public DNS: [alidns.com](http://alidns.com/) ([View DNS Setup Help](https://www.alidns.com/knowledge?type=SETTING_DOCS#user_windows))
   * Enter `223.5.5.5` and `223.6.6.6` in DNS server addresses according to setup help.
2. Clear DNS cache:
   * Click `Start` -> `Run`, enter `CMD` to enter command line mode.
   * Enter `ipconfig/flushdns` in command line and press Enter.
3. Close other local proxy software interference such as NetEase UU, Xunfei Game Accelerator, V2rayN, Clash, etc.
4. Open `System Settings` -> `Network & Internet` -> `Proxy`, set:
   * Automatically detect settings: Off
   * Use setup script: Off
   * Use proxy server: Off

### 2. Browser Environment
1. Upgrade the browser. If cleanup is needed, remove cookies and cache only for the affected domain, then restart it.
2. Upgrade Jego to [latest version](/en/guide/keep-updated), and temporarily disable other browser extensions, keeping only Jego
3. Set Jego to Rules mode (free version is enabled)
4. Restart browser

### 3. Access Again
* Open Jego in a private window and compare signed-out with signed-in behavior to separate connection issues from account eligibility.
* Use an account you own with accurate details, and follow the destination service's current eligibility and region rules.
* Try New Bing, Copilot, or ChatGPT again. If only the signed-in session fails, contact the destination platform's support.

> After being able to access New Bing or ChatGPT, you can try enabling other extensions or software one by one to identify conflicts between extensions.
