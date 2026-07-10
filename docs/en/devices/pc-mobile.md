---
translationKey: devices-pc-mobile
contentType: device-guide
product: subscription-service
productArea: device-selection
uiSurface: null
locale: en
status: current
owner: docs
reviewStatus: needs-review
lastVerified: null
platforms: [windows, macos, linux, android, ios, harmonyos]
tools: []
appliesTo: []
sources: []
title: How to Use Proxy on PC or Mobile - Device Support
description: Learn how Jego members choose a client and import subscription nodes on Windows, Mac, Linux, Android, iPhone, iPad, and HarmonyOS.
---

# How to Use Proxy on PC or Mobile

Jego members can add subscription nodes to compatible clients on Windows, Mac, Linux, Android, iPhone, iPad, and HarmonyOS, allowing apps outside the browser to use the VPN. Choose your device first, then follow the matching installation and import guide.

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

The table shows whether each client is still maintained, who it suits, and whether it works with Jego. Jego no longer supports v2rayN, v2rayNG, Loon, or OneClick. New users can go straight to an option marked **Good for most users**.

<ToolCatalog locale="en" />

After choosing a client, click its name for the complete guide. See [Subscription Management](/en/subscription/management) to copy or update the URL, or [Client troubleshooting](/en/troubleshooting/client) when a connection fails.

### 2. The difference between system proxy and virtual network card/tun in these software

System proxy is an operating-system proxy interface. Each application decides whether to honor it; browsers commonly read the setting, but verify the actual connection.

Virtual network adapter/TUN mode creates a virtual interface and processes traffic routed to it according to client configuration. Route exceptions, permissions, other VPNs, and application behavior can still affect the result, so it does not guarantee that every request passes through.

#### Conclusion:

When an application ignores system proxy, evaluate the client's TUN mode and verify each application. For browser-only traffic, use system proxy or the browser extension.

<span style="color:green;">For browser-only needs,</span> [<span style="color:green;">start with the Jego browser extension.</span>](/en/guide/usage)

### 3. Set the Jego extension after enabling TUN mode

If you have enabled virtual network card/TUN mode in proxy software such as FlClash, Clash Verge Rev, sing-box, or v2rayN, your computer's network requests are already handled by that software to decide whether they should go through the proxy. In this case, keep the Jego browser extension turned off.

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FISwY5XX4FX2qker0nOYC_2Fimage_3.png" alt="Jego extension off mode interface" width="280" />

Click <span style="background-color:grey; color:white; padding:2px 6px; border-radius:3px;">Off</span> in the extension popup and keep it in the state shown above. While TUN mode is on, use the client as the single proxy layer. This prevents duplicate processing, slower speeds, and rule conflicts in the browser.

The <span style="background-color:grey; color:white; padding:2px 6px; border-radius:3px;">Off</span> state here only turns off the browser proxy function of the Jego extension. It does not turn off the proxy software or TUN mode you are using. In short: when using TUN mode in proxy software, keep the Jego extension off; when you only want the browser to use a proxy, use the [Jego browser extension](/en/guide/usage). For more details about extension modes, see [Mode Selection](/en/guide/mode-selection).
