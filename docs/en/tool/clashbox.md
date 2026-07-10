---
jegoSupport: experimental
tool: clashbox
clientKind: null
minimumOs: []
architectures: []
subscriptionFormats: []
lifecycle: experimental
recommendation: advanced
securityStatus: needs-review
supportedVersions: []
replacements: []
officialSources: [https://github.com/xiaobaigroup/ClashBox, https://appgallery.huawei.com/app/detail?id=org.xbgroup.clashbox]
translationKey: tool-clashbox
contentType: tool-guide
product: subscription-service
productArea: tools
uiSurface: null
locale: en
status: current
owner: docs
reviewStatus: needs-review
lastVerified: 2026-07-10
platforms: [harmonyos]
tools: [clashbox]
appliesTo: []
sources: [https://github.com/xiaobaigroup/ClashBox, https://appgallery.huawei.com/app/detail?id=org.xbgroup.clashbox]
title: ClashBox - Tools & Software
description: ClashBox/ClashNEXT is the first proxy software based on the Navigation framework for HarmonyOS NEXT(OpenHarmony) platform, using a modified Mihomo(ClashMeta) kernel.
---

# ClashBox

ClashBox/ClashNEXT is the first proxy software based on the Navigation framework for HarmonyOS NEXT(OpenHarmony) platform, using a modified Mihomo(ClashMeta) kernel.

Welcome to the 2025 ClashBox/ClashNEXT usage tutorial

::: danger Note
ClashBox is not yet open source, please use with caution.
:::

::: info Available on Overseas AppGallery
[https://appgallery.huawei.com/app/detail?id=org.xbgroup.clashbox](https://appgallery.huawei.com/app/detail?id=org.xbgroup.clashbox)
:::

**Software Features**

ArkTS Development: The frontend is developed using ArkTS, more fluid with richer animations;

Cool Interface: Uses HarmonyOS NEXT design style, adopts UI layout design similar to [Surfboard](/en/subscription/clients/surfboard), supports dark mode, blur effects, etc., providing a further improved user experience;

Multi-device Adaptation: UI has been adapted for phones, tablets, foldable screens, HarmonyOS computers and even PuraX outer screen*;

Kernel: Uses a Mihomo (Clash Meta)-related implementation; verify current version, feature differences, and stability in the project documentation;

Core Recovery: Due to HarmonyOS NEXT's background scheduling mechanism not being mature yet, the software may have background processes killed by the system, so ClashBox has built-in core recovery functionality. After the system kills the process, the core process will be automatically restored (this function will be automatically enabled after turning on "Background Running - Simulate Picture-in-Picture").

<img src="/images/clashbox_photo_1.png" alt="ClashBox" width="300">

::: info Outer Screen Note
PuraX outer screen currently only displays apps in Huawei's whitelist. It is temporarily unavailable until this software is added to the whitelist.
:::

## <img src="/images/clashbox-logo-new.png" width="26" height="26" alt="ClashBox icon"> Get ClashBox/ClashNEXT

Prefer the [official Huawei AppGallery page](https://appgallery.huawei.com/app/detail?id=org.xbgroup.clashbox). Huawei and the developer control visibility by device and legitimate account region. Do not falsify a region, create replacement accounts, or node-hop to evade store restrictions.

Developers can obtain a project release from the official GitHub repository and use Huawei's official developer tools under current documentation:
* Github download: [https://github.com/xiaobaigroup/ClashBox/releases](https://github.com/xiaobaigroup/ClashBox/releases)
* Or use [DevEcho Testing](https://developer.huawei.com/consumer/cn/deveco-testing/) for installation

::: warning Developer installation
Developer-tool installation requires an understanding of signing, permissions, and validity. If Huawei's official tools reject an action because of account, device, or region policy, consult Huawei's current developer documentation; do not disguise an IP address or account region to bypass the restriction.
:::

::: warning Signing validity
Self-signed app validity and developer requirements can change with Huawei policy, account state, and tool version. Before installation, consult the [Huawei developer enrollment entry](https://developer.huawei.com/consumer/cn/verified/enrollment) and current official documentation; this page does not retain unverified fixed-day claims.
:::

## Add Subscription

In the **Jego - Control Panel**, click on **Subscription Nodes** in the left navigation bar, find the Mihomo subscription address and click **Copy**.

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2Fbf6ZGnMBZioZr9rD5P5J_2Fimage_2.png" alt="Jego control panel">

<div class="tip custom-block" style="padding-top: 8px">

Jego subscription service mobile panel: <https://jego.us>

</div>

## ClashBox/ClashNEXT Usage Tutorial

### Configure Subscription
Open `ClashBox`, go to the `Configuration` page, then click the ` + ` in the bottom right corner to add subscription
<img src="/images/clashbox_photo_2025-08-03_10-56-23.jpg" alt="ClashBox" width="297" heigh="640">

### Start Proxy
Open `ClashBox`, on the `Home` page directly click the ` ▶ ` in the bottom right corner to start and bypass restrictions.
<img src="/images/clashbox_photo_2025-08-07_13-06-45.jpg" alt="ClashBox" width="297" heigh="640">

### Switch Nodes
Open `ClashBox`, go to the `Proxy` page, then select according to your needs.

The usage method is similar to other similar software, you can refer to [FlClash](/en/subscription/clients/flclash), or refer to the original product [Clash for Android](/en/subscription/clients/clash-for-android)
