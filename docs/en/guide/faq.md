---
title: FAQ - User Guide
description: You may encounter problems with some probability, don't panic, you can troubleshoot and solve them one by one through the following common problems and solutions.
---

# FAQ

### Do all routes support accessing Gemini, ChatGPT, Claude, etc.?

Not every route works for AI products. Please pick the matching nodes:
- For mobile subscriptions, select nodes under the `🤖 ChatGPT Group` group to access Gemini, ChatGPT, Claude, and other AI products.
- For browser extensions, select nodes that carry the `[AI]` label to reach these AI products.

### Unable to open Gemini, ChatGPT, Claude or other overseas sites?

Please **optimize your local network and browser environment** and go through every item below—each step matters.

**Network environment**
- **Update DNS:** Switch your router and computer DNS to Tencent or Alibaba public DNS (mixing them works best).
  - **Tencent Public DNS**: [Official site](https://www.dnspod.cn/products/publicdns#publisDnsStart) ([Setup guide](https://cloud.tencent.com/document/product/302/110786))
    - IPv4: `119.29.29.29`, `182.254.116.116`
    - IPv6: `2402:4e00::`, `2402:4e00:1::`
  - **Alibaba Public DNS**: [Official site](https://www.alidns.com/)
    - IPv4: `223.5.5.5`, `223.6.6.6`
    - IPv6: `2400:3200::1`, `2400:3200:baba::1`
- **Clear DNS cache:**
  - Click `Start` -> `Run`, type `CMD`, and press Enter.
  - Run `ipconfig/flushdns` in the command window.
- **Disable other proxy apps** such as NetEase UU, iFlytek accelerators, V2rayN, Clash, etc.
- **Windows proxy settings** (`Settings` -> `Network & Internet` -> `Proxy`):
  - Automatically detect settings: Off
  - Use setup script: Off
  - Use proxy server: Off

**Browser environment**
- Update your browser to the latest version, clear Cookies and cache, then restart it.
- Update Jego to the [latest version](/en/guide/keep-updated) and temporarily disable all other extensions.
- Set Jego to Rules mode (enabled by default on the free tier).
- Restart the browser again.

> Once you can reach New Bing or ChatGPT, re-enable other extensions one by one to check for conflicts.

### Why do Google or ChatGPT still show the wrong location even after changing nodes?

**Root cause**
Mainstream platforms such as Google and OpenAI never rely on IP alone. They combine **Cookies**, browser cache, account history, device fingerprints, and other telemetry to build a risk profile. When the same account hops between IPs or regions frequently, the system quickly flags it as proxy usage or suspicious login, which may trigger additional verification or even a ban. Try to keep your exit node stable and avoid cross-region switching when browsing overseas sites.

If you visited these services without a proxy before, or your browser still stores the real location, switching nodes afterward might not help because the platform continues to read the cached signals. Rapid node hopping also contaminates the reputation of the nodes you connect to.

**Suggested reading:** [Understand and manage location in Google Search](https://support.google.com/websearch/answer/179386?hl=en)

**Solution**
- **Close everything:** Shut down the browser completely.
- **Incognito test:** Reopen it in private/incognito mode.
- **Configure the proxy:** Inside that incognito window, set Jego to Global Mode and select the desired node.
- **Verify the exit:** Visit [IP111.cn](https://ip111.cn) within incognito to confirm the location matches the node you picked.
- **Test the target site:** Still in incognito mode, open the product you need. If it now shows the correct location, the culprit was cached data.
- **Clean permanently:** Go back to normal mode, clear all Cookies and cache, then restart the browser.

### **Question 3: Too many redirects.**

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FF6dZ9YLI7YU5b3kOalpA_2Fimage_1.png" alt="Bing.com too many redirects">

**Solution:** Delete the access policies for `openai.com` and `bing.com` in **Jego - Control Panel - Proxy Strategy**, close the browser, open the browser again, click on Jego, then try accessing `bing.com` again.

### <span style="color:red;">**Question 4: Why is there no New Bing?**</span>

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FPrqRnEhRBtThiFNriRYY_2Fimage_2.png" alt="Domestic version, International version">

As shown in the figure above, once `Domestic version` and `International version` appear, it means your Bing account's country is <span style="color:red;">`China`</span>.

::: danger No New Bing in China
:::

#### Solution

1. Enable Jego in Edge's privacy mode

2. Click the three horizontal bars in the upper right corner of Bing, click `Country/Region`

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F4X4pVnYK2KWM6XiyHkP6_2Fimage_3.png" alt="Country/Region">

3. Change the country in the following way:

* Please change the country to <span style="color:blue;">`United States`</span>

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FQFg8JMkptC2tNNiLnUk0_2Fimage_1.png" alt="Change country settings">

4. Then return to Edge's normal mode, access New Bing, success:

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FlTK7Ld57wxLmFhBvHDz3_2Fimage_2.png" alt="New Bing">

#### Demo Video

The mp4 file below is a demo video of switching from `cn.bing.com` to `new bing`:

<video src="/videos/video_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FHdfcY8pUhEOe7afX3nGk_2F20230528-141341_1.mp4" controls></video>

::: warning Still not working?
<span style="color:orange;">**Still not working?**</span>

<span style="color:orange;">You can continue to try using the additional 4 extended solutions provided by Jego below to continue trying to solve it.</span>
:::

### **Question 5: What if the default search engine is mainland Bing?**

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

### **Extended Solution 1 for Question 5: It's best to change the Microsoft account country too.**

1. Visit Microsoft account settings page [https://account.microsoft.com/profile](https://account.microsoft.com/profile)
2. Modify `Country or region` and `Phone number`

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F2urY4db1qFvocDlTtgNj_2Fimage_1.png" alt="Microsoft account settings">

* Change Country or region to <span style="color:blue;">`United States`</span>

It's best not to use mainland China phone numbers.

### **Extended Solution 2 for Question 5: It's best to change Windows settings too**

1. Windows -> Settings -> Time & Language -> Language & Region

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F9NPKEgiCoLEpqb6WCQMb_2Fimage_2.png" alt="Country or region: France">

* Change Country or region to <span style="color:blue;">`United States`</span>

2. Windows -> Settings -> Privacy & Security -> Location

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FzQJALXbqHJDo0am5sbx0_2Fimage_3.png" alt="Location services: Off">

* Set Location services to Off

### Extended Solution 3 for Question 5: Change ISP

If you still cannot solve the problem after trying all the above methods, Jego also deeply apologizes for not being able to provide you with the best experience. Due to the varying complexity of network firewalls in different regions of mainland China, we can also try changing to a different network environment or network provider (ISP). Jego understands this is difficult to implement, but we provide an idea for reference:

* <span style="color:blue;">Switch from Wifi to wired, wired to Wifi</span>
* <span style="color:blue;">Disable Wifi and wired, use mobile hotspot</span>
* <span style="color:blue;">Switch between office network environment and home network environment</span>
* <span style="color:blue;">Switch between your own and colleagues', classmates', friends' network environments</span>

<span style="color:blue;">The general idea is if China Telecom doesn't work, switch to China Unicom, if China Unicom doesn't work, switch to China Mobile...</span>

The above solutions are experiences obtained after repeated attempts by the Jego team and users, hoping to help you.

### **Question 6: Bing prompt:** You've reached the conversation limit for today. Sign in to continue your chat.

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FR5N7binyonxvysAkUl5m_2Fimage_1.png" alt="You've reached the conversation limit for today. Sign in to continue your chat.">

When you see this prompt, it's essentially your account's problem. No matter how you communicate technical details with Jego, change more server nodes or change countries and regions using the above methods, **it's useless**.

**Solution:**

Please use Jego's unlocking process to <span style="color:red;">re-register</span> a completely new Bing account.

### Question 7: How to enable privacy mode?

1. Enter `edge://extensions/` in Edge browser address bar, open the extension management interface, find Jego and click Details

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FzX0shn8SkzNDitbuWyLk_2Fimage_2.png" alt="Extension management interface">

2. Check "Allow in InPrivate"

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FNzcdN0zHPrnfQfxvzine_2Fimage_3.png" alt="InPrivate settings">

3. Click the three dots in the upper right corner of Edge browser, select "New InPrivate window" from the dropdown menu

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FHV0QVHMxq4rRJPSEghvH_2Fimage_1.png" alt="New InPrivate window">

4. Success

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FmSgH7un2lH6oQ2I02okf_2Fimage_2.png" alt="Privacy mode success">

### Question 8: Recommend turning off firewall

Jego uses special ports for traffic encapsulation, encryption and decryption. When using Jego, it's recommended to turn off or lower the security level of network firewall.

Windows: To turn Microsoft Defender Firewall on or off, do the following:

1. Select "Start", then open "Settings". Under "Privacy & Security", select "Windows Security" > "Firewall & Network Protection". Open Windows Security Center settings
2. Select a network profile: Domain network, Private network, or Public network.
3. Please switch the setting to "Off".

Mac: To turn Mac firewall on or off, do the following:

1. Choose Apple menu ![Apple menu](/images/image_2f77cc85238452e25cb517130188bf99_2.png) > "System Settings", click "Network" ![Network](/images/image_8cfb53953fdf6e7e49ac94510557df95_3.png) in the sidebar, then click "Firewall" on the right.
2. Please set to Off.

### Question 9: How to test if New Bing is successfully unlocked through Edge incognito mode?

If you encounter disappearing chat windows, you can test in the following way:

1. Temporarily close other browser extensions, keep only Jego, and allow Jego to be used in incognito mode
2. Set Jego to Rules mode
3. Close other local proxy software interference such as NetEase UU, Xunfei Game Accelerator, Clash, etc.
4. Open Edge's incognito mode, enter bing.com.
5. If you find a chat entry, it means Jego's new bing unlocking is successful.
6. Return to normal Edge, if there's no chat window, please clear all Cookies and cache, restart Edge and visit sg.bing.com again to see if there's a chat window.
7. If there is one when not logged in, but none after logging in, please enable Jego in incognito mode and re-register a new new bing account.
8. Don't frequently switch proxy software or use the same account to access domestic Bing one moment and overseas new bing the next

<video src="/videos/video_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F5kaw1En36b4S8wPLm3ok_2F20230927-110903_2.mp4" controls></video>

Incognito mode test demo video 