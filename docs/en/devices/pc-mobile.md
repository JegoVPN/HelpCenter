---
title: How to Use Proxy on PC or Mobile - Device Support
description: Jego's subscription node service (mainland users usually call it "airport") is compatible with numerous network proxy tool programs (mainland users usually call it "ladder") on Windows PC, macOS, iOS, iPadOS and Android, and even Harmony OS systems. With simple learning, you can easily enable proxy access for all applications on your PC and mobile, enjoy unlimited global network resources anytime.
---

# How to Use Proxy on PC or Mobile

Jego's subscription node service (mainland users usually call it "airport") is compatible with numerous network proxy tool programs (mainland users usually call it "ladder") on Windows PC, macOS, iOS, iPadOS and Android, and even Harmony OS systems. With simple learning, you can easily enable proxy access for all applications on your PC and mobile, enjoy unlimited global network resources anytime.

::: info Quick Start
To help you get started quickly, we provide beginner guides for various network proxy tool programs (mainland users usually call it "ladder"). Please choose the guide that suits your needs and read carefully.

For in-depth research, please search for related video tutorials on YouTube yourself.
:::

| Platform | Devicies | Guideline |
| --- | --- | --- |
| <img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F7Hh3XGbbAH0jtCKDKIF6_2Fandroid_3.svg" width="38" height="28" alt="Android icon"> | **Android Devices** | [How to Use Proxy on Android](/en/devices/android) |
| <img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F7GBp8VQdHNWWH3aalDTP_2Fios_3.svg" width="38" height="28" alt="iOS icon"> | **iOS/iPadOS Devices** | [How to Use Proxy on iPhone/iPad](/en/devices/ios) |
| <img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FbeA5N21M1iATQm5HiGND_2Fwin_1.svg" width="38" height="28" alt="Windows icon"> | **Windows PC Devices** | [How to Use Proxy on Windows PC](/en/devices/windows) |
| <img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FrUGve1gm2gP1sXdvgjCw_2Fapple_1.svg" width="38" height="28" alt="macOS icon"> | **macOS Devices** | [How to Use Proxy on Mac](/en/devices/mac) |
| <img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FJJlooO6sJC8xrcR6vqGj_2Flinux_1.svg" width="38" height="28" alt="Linux icon"> | **Linux Devices** | [How to Use Proxy on Linux PC](/en/devices/linux) |
| <img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FhUBqYs4CpmMcueAi690m_2FHMOS_Logo_Icon_1.svg" width="38" height="28" alt="HarmonyOS icon"> | **HarmonyOS (鸿蒙) Devices** | [How to Use Proxy on Huawei Harmony OS](/en/devices/harmony) |

## Common Questions

### 1. About which client to use

::: info Disclaimer
The following list does not represent the position and views of the Jego team.
:::

**Recommended**

* iOS iPadOS: [Surge](/en/tool/surge), [sing-box](/en/tool/sing-boxforapple), [Shadowrocket](/en/tool/shadowrocket)
* macOS: [Surge](/en/tool/surge), [FlClash](/en/tool/flclash), [ClashX.Meta](https://github.com/MetaCubeX/ClashX.Meta/releases), [sing-box](/en/tool/sing-boxforapple), [Shadowrocket](/en/tool/shadowrocket), [Clash Verge Rev](/en/tool/clashverge)
* Android: [FlClash](/en/tool/flclash), [ClashMetaForAndroid](https://github.com/MetaCubeX/ClashMetaForAndroid/releases), [sing-box](/en/tool/sing-boxforandroid)
* Windows: [FlClash](/en/tool/flclash), [sing-box](/en/tool/guiforsing-box), [Clash Verge Rev](/en/tool/clashverge)

**Not Recommended**

* Hiddify: Fake open source, violates upstream protocol
* Karing: sing-box wrapper adware, violates license, fake open source
* ClashMi: Same author as Karing, violates license, fake open source
* Clash Verge Rev versions before v2.3, has high-risk privilege escalation vulnerabilities
* Clash for Windows: Deleted repository, stopped updates

### 2. The difference between system proxy and virtual network card/tun in these software

System proxy is the proxy interface provided by Windows, all applications can voluntarily comply with Windows proxy rules or not (browsers all comply, other applications are uncertain);

Virtual network card/tun principle is that the proxy software kernel creates a new virtual network card, checks all traffic passing through the virtual network card to determine whether proxy is needed, this method ensures all requests will pass through the proxy software to determine whether to proxy.

#### Conclusion:

To make all programs on your computer proxy globally, use virtual network card mode;\
To make browsers proxy, use system proxy mode.

<span style="color:green;">If your need is only to implement proxy in browsers,</span>[<span style="color:green;">Jego browser extension is the best choice.</span>](/en/guide/usage)

### 3. How should I set the Jego browser extension after enabling TUN mode in proxy software?

If you have enabled virtual network card/TUN mode in proxy software such as FlClash, Clash Verge Rev, sing-box, or v2rayN, your computer's network requests are already handled by that software to decide whether they should go through the proxy. In this case, keep the Jego browser extension turned off.

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FISwY5XX4FX2qker0nOYC_2Fimage_3.png" alt="Jego extension off mode interface" width="280" />

Click <span style="background-color:grey; color:white; padding:2px 6px; border-radius:3px;">Off</span> in the extension popup and keep it in the state shown above. Do not also enable <span style="background-color:green; color:white; padding:2px 6px; border-radius:3px;">Global</span>, <span style="background-color:green; color:white; padding:2px 6px; border-radius:3px;">Rules</span>, or <span style="background-color:green; color:white; padding:2px 6px; border-radius:3px;">Enable</span> mode in the extension, otherwise browser traffic may be processed by two proxy layers and cause access issues, slower speeds, or rule conflicts.

The <span style="background-color:grey; color:white; padding:2px 6px; border-radius:3px;">Off</span> state here only turns off the browser proxy function of the Jego extension. It does not turn off the proxy software or TUN mode you are using. In short: when using TUN mode in proxy software, keep the Jego extension off; when you only want the browser to use a proxy, use the [Jego browser extension](/en/guide/usage). For more details about extension modes, see [Mode Selection](/en/guide/mode-selection).
