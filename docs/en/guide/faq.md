---
translationKey: guide-faq
contentType: troubleshooting
product: browser-extension
productArea: support
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
title: FAQ - User Guide
description: Common Jego connection situations with clear steps you can follow in order.
---

# FAQ

### Choosing a route for AI websites

Not every connection works for every AI product. If the current subscription shows `🤖 ChatGPT Group` or the extension shows an `[AI]` label, treat it as a candidate hint and verify against the destination. Compare Rules and Global modes when checking proxy rules. Neither a mode nor node name guarantees third-party account eligibility or continued availability.

### Gemini, ChatGPT, Claude, or another website does not connect

Check the local network and browser in this order. Reopen the website after each step.

**Network environment**
- **Check DNS:** If local resolution looks wrong, test a public resolver using the system or router instructions. See the [Encrypted DNS Guide](/en/guide/encrypted-dns) for example endpoints and DoH/DoT limits; no resolver is documented here as always fastest or absolutely safe.
- **Clear DNS cache:** Press `Win+R`, type `CMD`, Enter, then run `ipconfig /flushdns`.
- **Pause other proxy apps** such as NetEase UU, iFlytek accelerators, V2rayN, or Clash so Jego can be tested on its own.
- **Windows proxy settings** (`Settings` -> `Network & Internet` -> `Proxy`):
  - Automatically detect settings: Off
  - Use setup script: Off
  - Use proxy server: Off

**Browser environment**
- Update your browser to the latest version. If cleanup is needed, remove cookies and cache only for the affected site, then restart it.
- Update Jego to the [latest version](/en/guide/keep-updated) and temporarily disable all other extensions.
- Set Jego to Rules mode (enabled by default on the free tier).
- Restart the browser again.

> Once you can reach New Bing or ChatGPT, re-enable other extensions one by one to check for conflicts.

### Google or ChatGPT shows a different location from the selected node

**Root cause**
Platforms such as Google and OpenAI combine IP, cookies, browser data, account state, and device information. This is why the displayed location can differ from the selected node. Keeping one node selected while using the same website usually gives a more consistent result.

If the normal window holds older location data, a platform may continue using it after the node changes. A private window provides a simple comparison between saved browser data and the current connection.

**Suggested reading:** [Understand and manage location in Google Search](https://support.google.com/websearch/answer/179386?hl=en)

**How to troubleshoot: run a clean-room test in incognito**

Private windows ignore most cookies and cache from the normal window, making them useful for a quick comparison:
- **Step 1 — Fully quit the browser.** Reopening it starts a fresh browser session.
- **Step 2 — Open an incognito / private window.** On Windows the shortcut is usually `Ctrl + Shift + N` (Edge uses `Ctrl + Shift + P`); on Mac it is `Cmd + Shift + N`.
- **Step 3 — Allow Jego in the private window.** Open the extensions page (Chrome: `chrome://extensions`; Edge: `edge://extensions`), find **Jego**, click **Details**, and enable **Allow in Incognito / Allow in InPrivate**.
- **Step 4 — Open Jego in the private window, switch to Global mode, and select one node.** Keep this node selected for the test.
- **Step 5 — Open [IP111.cn](https://ip111.cn) to view the current exit.** A location matching the selected node confirms that the current connection is active.
- **Step 6 — Now open the site you were having trouble with (Google, ChatGPT, etc.).** If it works in the private window, stale site data or another extension is worth investigating, but this does not rule out account or eligibility restrictions imposed by the destination service.
- **Step 7 — Return to the normal window and make the smallest cleanup.** Remove cookies and cache only for the affected domain, then restart the browser. Other website sign-ins can stay in place.

### **Too many redirects**

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FF6dZ9YLI7YU5b3kOalpA_2Fimage_1.png" alt="Bing.com too many redirects">

**Solution:** Delete the access policies for `openai.com` and `bing.com` in **Jego - Control Panel - Proxy Strategy**, close the browser, open the browser again, click on Jego, then try accessing `bing.com` again.

### <span style="color:red;">**New Bing is not shown**</span>

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FPrqRnEhRBtThiFNriRYY_2Fimage_2.png" alt="Domestic version, International version">

This is a historical interface example. Bing/Copilot availability is controlled by Microsoft and may depend on rollout, account eligibility, age, organization policy, and current service status. A working Jego connection does not guarantee third-party account eligibility.

#### Connection-versus-account check

1. Enable Jego in Edge's privacy mode and check whether the destination loads.

2. The following screenshot shows where Bing exposed its region control in an older interface; use it only to verify that the displayed value matches your real account details.

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F4X4pVnYK2KWM6XiyHkP6_2Fimage_3.png" alt="Country/Region">

3. Keep account country, phone number, and billing details accurate and consistent.

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FQFg8JMkptC2tNNiLnUk0_2Fimage_1.png" alt="Change country settings">

4. Compare signed-out and signed-in behavior. If only the signed-in session fails, consult Microsoft account and product support rather than changing nodes.

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FlTK7Ld57wxLmFhBvHDz3_2Fimage_2.png" alt="New Bing">

#### Demo Video

The video below is retained as a historical interface reference; it is not current eligibility or region-change guidance:

<video src="/videos/video_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FHdfcY8pUhEOe7afX3nGk_2F20230528-141341_1.mp4" controls></video>

::: warning If the setting has not taken effect
<span style="color:orange;">**Continue with these checks**</span>

<span style="color:orange;">Continue with the connection checks below, then consult Microsoft if the result is account-specific.</span>
:::

### **The default search engine is mainland Bing**

#### Reconfigure Edge's default search engine

Enter `edge://settings/searchEngines` in Edge's address bar, click the `Add` button in the upper right corner.

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F0WsYu8S2aed4NEWVLscQ_2Fimage_3.png" alt="Three spaces">

```sh
#Search engine
Bing
#Shortcut
bing.com
#URL with %s in place of query
{bing:baseURL}search?q=%s&{bing:cvid}{bing:msb}{google:assistedQueryStats}
```

After adding, click the three dots on the right to set it as default.

### **Account profile reference**

1. Visit Microsoft account settings page [https://account.microsoft.com/profile](https://account.microsoft.com/profile)
2. Verify that `Country or region` and `Phone number` match your real account details.

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F2urY4db1qFvocDlTtgNj_2Fimage_1.png" alt="Microsoft account settings">

The screenshot is retained to identify the profile field. Update it only after a genuine residence or account-detail change and follow Microsoft's terms.

### **Windows region and location reference**

1. Windows -> Settings -> Time & Language -> Language & Region

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F9NPKEgiCoLEpqb6WCQMb_2Fimage_2.png" alt="Country or region: France">

* Keep the setting aligned with your actual location and language requirements.

2. Windows -> Settings -> Privacy & Security -> Location

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FzQJALXbqHJDo0am5sbx0_2Fimage_3.png" alt="Location services: Off">

* Keep location settings aligned with your own privacy needs and actual account details.

### Compare another network

If the steps above do not resolve the problem, compare a different network to distinguish a local-network or organization-policy issue from a product-connection issue:

* <span style="color:blue;">Switch from Wifi to wired, wired to Wifi</span>
* <span style="color:blue;">Disable Wifi and wired, use mobile hotspot</span>
* <span style="color:blue;">Switch between office network environment and home network environment</span>
* <span style="color:blue;">Switch between your own and colleagues', classmates', friends' network environments</span>

<span style="color:blue;">The general idea is if China Telecom doesn't work, switch to China Unicom, if China Unicom doesn't work, switch to China Mobile...</span>

The above solutions are experiences obtained after repeated attempts by the Jego team and users, hoping to help you.

### **Bing says the daily conversation limit has been reached**

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FR5N7binyonxvysAkUl5m_2Fimage_1.png" alt="You've reached the conversation limit for today. Sign in to continue your chat.">

This prompt is an account or product limit from Bing, not a node-speed result. Follow the page timing or consult Microsoft account and product support.

### Enable Jego in private browsing

1. Enter `edge://extensions/` in Edge browser address bar, open the extension management interface, find Jego and click Details

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FzX0shn8SkzNDitbuWyLk_2Fimage_2.png" alt="Extension management interface">

2. Check "Allow in InPrivate"

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FNzcdN0zHPrnfQfxvzine_2Fimage_3.png" alt="InPrivate settings">

3. Click the three dots in the upper right corner of Edge browser, select "New InPrivate window" from the dropdown menu

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FHV0QVHMxq4rRJPSEghvH_2Fimage_1.png" alt="New InPrivate window">

4. Success

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FmSgH7un2lH6oQ2I02okf_2Fimage_2.png" alt="Privacy mode success">

### Keep the firewall on and isolate a block safely

Keep the system firewall and overall security level unchanged. If a managed network or security product blocks the browser connection, first compare it on a trusted home network or mobile hotspot.

Windows: use Microsoft Defender Firewall only to identify the specific blocked browser rule:

1. Select "Start", then open "Settings". Under "Privacy & Security", select "Windows Security" > "Firewall & Network Protection". Open Windows Security Center settings
2. Select a network profile: Domain network, Private network, or Public network.
3. Keep the firewall on. Add a narrowly scoped browser-app exception only when the blocked item is known and your administrator permits it; remove temporary exceptions after testing.

Mac: the images below identify the firewall settings page:

1. Choose Apple menu ![Apple menu](/images/image_2f77cc85238452e25cb517130188bf99_2.png) > "System Settings", click "Network" ![Network](/images/image_8cfb53953fdf6e7e49ac94510557df95_3.png) in the sidebar, then click "Firewall" on the right.
2. Keep it on. Review logs or approved app rules, and ask your administrator when the device is managed.

### Check New Bing in Edge InPrivate mode

If you encounter disappearing chat windows, you can test in the following way:

1. Temporarily close other browser extensions, keep only Jego, and allow Jego to be used in incognito mode
2. Set Jego to Rules mode
3. Close other local proxy software interference such as NetEase UU, Xunfei Game Accelerator, Clash, etc.
4. Open Edge's incognito mode, enter bing.com.
5. If you find a chat entry, it means Jego's new bing unlocking is successful.
6. Return to normal Edge. If the chat window is absent, remove site data only for `bing.com`, restart Edge, and compare again.
7. If it appears while signed out but not after sign-in, investigate Microsoft account eligibility or organization policy while continuing with your real account.
8. Keep the proxy app, node, and account unchanged during the comparison.

<video src="/videos/video_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F5kaw1En36b4S8wPLm3ok_2F20230927-110903_2.mp4" controls></video>

Incognito mode test demo video
