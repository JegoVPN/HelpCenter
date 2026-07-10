---
jegoSupport: unsupported
tool: v2rayn
clientKind: null
minimumOs: []
architectures: []
subscriptionFormats: []
lifecycle: current
recommendation: not-recommended
securityStatus: needs-review
supportedVersions: []
replacements: [flclash, clashverge]
officialSources: [https://github.com/2dust/v2rayN]
translationKey: tool-v2rayn
contentType: tool-guide
product: subscription-service
productArea: tools
uiSurface: null
locale: en
status: current
owner: docs
reviewStatus: needs-review
lastVerified: 2026-07-10
platforms: [windows]
tools: [v2rayn]
appliesTo: []
sources: [https://github.com/2dust/v2rayN]
title: v2rayN - Tools & Software
description: The third-party v2rayN project may still be maintained, but Jego no longer supports it; this historical Windows guide provides supported alternatives.
---

# v2rayN

v2rayN is a v2ray Windows client that is relatively friendly to beginners on PC platforms.

::: danger Not Recommended
The third-party v2rayN project may still be maintained, but Jego no longer supports its current subscription protocol and therefore does not recommend it for Jego. This historical tutorial remains available with supported alternatives.

Please use [Jego's recommended clients](/en/subscription/#_1-about-which-client-to-use)
:::

## <img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F7qSsONFAwi0T78ewIQku_2Fimage_2.png" width="26" height="26" alt="v2rayN icon"> Get v2rayN

**v2rayN official website** download address: [https://github.com/2dust/v2rayN/releases](https://github.com/2dust/v2rayN/releases)

For beginners, it's recommended to download the stable version, which is the version marked as `Latest` after the version number.

## Installation Tutorial

#### Software Directory

After downloading, find a suitable directory, it's recommended to install on a non-system drive, extract the compressed package, the directory after extraction is as shown in the figure below.

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FJCnIbRW02Nt9hR7tbUM6_2F1706546502-v2rayN-Floder_3.jpg" alt="v2rayN folder">

Find the main program `v2rayN.exe` and double-click the left mouse button to start using. After the program starts, it will minimize to the tray in the bottom right corner of the taskbar. Double-click the blue `V` small icon with the mouse to open the main interface of the software.

## **Add Subscription:**

In the **Jego - Control Panel**, click on **Subscription Nodes** in the left navigation bar, find the **v2rayN** subscription address and click **Copy**.

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FDyLv7ygtf5WM9W3yG7zs_2Fimage_1.png" alt="Jego control panel">

<div class="tip custom-block" style="padding-top: 8px">

Jego subscription service mobile panel: <https://jego.us>

</div>

Click on `Subscription Group` in the software main interface, `Click Subscription Group Settings`, as shown in the figure below:

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FbI3ynYxOFBiJyBoHiEaB_2F1706686626-v2rayN-Subscription-Group_2.jpg" alt="Subscription group settings">

Click Add in the popup window, as shown in the figure below:

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FoftpupjU8cmPHFFG0Ix3_2F1706686733-v2rayN-Subscription-Group-Settings_3.jpg" alt="Add subscription">

Then in the popup window, enter an alias, paste the subscription address in the `Optional Address (Url)` section, click Add, then click OK, as shown in the figure below:

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FIUElXpZQESJuNS10100K_2F1706686836-v2rayN-Subscription-Group-Settings-add-Subcription_1.jpg" alt="Add subscription address">

After adding, click on `Subscription Group` in the software main interface, then click Update All Subscriptions (Without Proxy) to successfully use the subscription address to add node information, as shown in the figure below:

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FP9Dz5MSCGgBZm9CdeXVA_2F1706687443-v2rayN-Subscription-Group-Update-Subscription-without-Proxy_2.jpg" alt="Update subscription">

## Usage Tutorial

After adding node information, enable system proxy and select routing mode, and you can start using proxy servers to access the internet, as described in the **System Proxy** and **Routing Mode** sections below.

#### Select Node

In the software main interface, select any node, right-click the mouse, find Set as Active Server in the popup window to select the node, as shown in the figure below, then enable system proxy. You can also select any node and double-click the left mouse button to select the node.

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FuPiGnlIgKPEkDUipRhw3_2F1707289273-v2rayN-Choose-Node_3.jpg" alt="Select node">

#### System Proxy

After configuring the server (node) according to the configuration tutorial above, you need to set the system proxy to enable the browser to support internet access function. Find the software icon in the system tray in the bottom right corner of the taskbar, **right-click the mouse** on the icon, click **Auto Configure System Proxy**, at this time the software icon will turn **red**, and you can start using it. Open [Google](https://www.google.com/) to try if you can access it.

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FA0Vf9GqfeMmbnnhENII8_2F1706695100-v2rayN-enable-System-Proxy_1.jpg" alt="Enable system proxy">

#### Routing Mode

The function of routing is to send incoming data to different outbound connections according to needs, to achieve on-demand proxy. A common usage of this function is to route domestic and foreign traffic, which can judge traffic from different regions through internal mechanisms, and then send them to different outbound proxies. There are three routing modes to choose from.

* Bypass Mainland (Whitelist) mode: That is, the whitelist in the original version, only websites in the whitelist access the internet through node server proxy
* Blacklist mode: Except for websites in the blacklist, all other websites access the internet through node server proxy
* Global mode: All websites access the internet through node server proxy

Choose the appropriate routing mode according to different needs, generally choose whitelist mode.

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FaYKfbg1ALEl3fpQZmO82_2F1706695132-v2rayN-enable-Router-Mode_2.jpg" alt="Enable routing mode">

#### Icon Description

The icon color of the software is different in different states, refer to the icon color description in the table below.

| Icon | Software Status | Description |
|------|----------------|-------------|
| <img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FKdVrQZoCQwhREOCayEWl_2F1706696938-v2rayN-Notify-Icon-1-32px_3.jpg" alt="Clear system proxy"> | Clear System Proxy | Every time the service is started/restarted, forcibly clear the proxy of the windows system (ie). |
| <img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2Fmuvj47GfgR17S3hUg7js_2F1706696935-v2rayN-Notify-Icon-2-32px_1.jpg" alt="Auto configure system proxy"> | Auto Configure System Proxy | Every time the service is started/restarted, forcibly set the proxy of the windows system (ie). |
| <img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FurrzQD1yNOx0QKSJYQkc_2F1706696937-v2rayN-Notify-Icon-3-32px_2.jpg" alt="Don't change system proxy"> | Don't Change System Proxy | Every time the service is started/restarted, do nothing. The function is to preserve the proxy set by other software. |

### Common Issues

#### Core type differences

There are four core types in total: v2fly, SgerNet, Xray, sing-box. Generally, there's no difference in daily use, you can choose any one randomly.

#### Supported protocols

<img src="/images/image_1655215063-favicon-70x70_3.png" alt="v2rayN" width="30">VMess, VLESS, Trojan, Socks, Shadowsocks, Hysteria2, Tuic and other proxy protocols.

#### Relationship with v2rayNG

<img src="/images/image_1707374615-v2rayNG-150x150_1.png" alt="v2rayNG" width="30">The Android mobile version of v2rayN is called v2rayNG, you can go to [v2rayNG](/en/subscription/clients/v2rayng) to download and view detailed tutorials.
