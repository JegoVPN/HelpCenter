---
jegoSupport: supported
tool: sing-box
clientKind: null
minimumOs: []
architectures: []
subscriptionFormats: []
lifecycle: current
recommendation: advanced
securityStatus: needs-review
supportedVersions: []
replacements: []
officialSources: [https://github.com/SagerNet/sing-box]
translationKey: tool-sing-box
contentType: tool-guide
product: subscription-service
productArea: tools
uiSurface: null
locale: en
status: current
owner: docs
reviewStatus: needs-review
lastVerified: 2026-07-10
platforms: [windows, macos, linux, android, ios]
tools: [sing-box]
appliesTo: []
sources: [https://github.com/SagerNet/sing-box]
title: sing-box - Tools & Software
description: sing-box is a cross-platform network proxy project; verify current protocols, platforms, and versions in its official documentation and releases.
---

# sing-box

sing-box is a cross-platform network proxy project. Verify current protocols, platforms, and versions in official documentation and releases; this page does not promise “all protocols” or “every platform.”

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FX6LBfzRlMdWyQVvPC9eg_2Fimage_1.png" width="38" height="38" alt="sing-box icon">

### sing-box Introduction

* **Rich Protocol Support**: sing-box supports numerous protocols, including but not limited to SOCKS, HTTP, Shadowsocks, VMess, Trojan, Wireguard, Hysteria, VLESS, ShadowTLS, TUIC, Hysteria2, AnyTLS, Tor, SSH, etc.
* **Highly Customizable Routing Function**: sing-box allows users to set complex routing rules as needed, effectively managing network traffic.
* **Suitable for Multiple Platforms**: sing-box provides support for multiple operating systems, including macOS, Windows, Linux, Android and iOS platforms, which enables it to meet the needs of different users.
* **Graphical Interface Client**: For user convenience, sing-box officially provides a graphical interface client, simplifying the configuration and management process.

## Get sing-box

### Apple Family

macOS iOS iPadOS tvOS users please go to: [sing-box for Apple](/en/subscription/clients/sing-boxforapple)

### Android Devices

Android users please go to: [sing-box for Android](/en/subscription/clients/sing-boxforandroid)

### Windows

Windows users please go to: [GUI.for.SingBox](/en/subscription/clients/guiforsing-box)

### Linux

Linux hardcore players please go to sing-box official [Github Release](https://github.com/SagerNet/sing-box/releases)

## sing-box Common Issues

### When only local websites open

**🟡 Situation 1: Just started**

Some configurations run a URL test or fetch rule sets during startup, during which a usable result may be temporarily absent. Whether a test runs, what it covers, and how DNS behaves depend on the actual configuration; use status text and logs rather than describing it as “selecting the fastest node.”

> ✅ Solution: If you don't want to wait for the speed test process, you can manually select an available node, so you can immediately access foreign websites.

**🟡 Situation 2: Same problem occurs during use**

If you also suddenly cannot access foreign websites during use, it's likely that the currently selected node is unavailable or has poor connection quality.

> ✅ Solution: Please check the connectivity of the current node, and manually switch to a stable available node when necessary to restore access.

---

**💡** Note: This problem will not affect access to domestic websites, nor will it affect the use of services based on foreign IP (such as Telegram), only affecting access to foreign domain name websites.
