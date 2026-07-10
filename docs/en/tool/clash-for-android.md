---
jegoSupport: unsupported
tool: clash-for-android
clientKind: null
minimumOs: []
architectures: []
subscriptionFormats: []
lifecycle: discontinued
recommendation: not-recommended
securityStatus: blocked
supportedVersions: []
replacements: [flclash, sing-boxforandroid]
officialSources: []
translationKey: tool-clash-for-android
contentType: tool-guide
product: subscription-service
productArea: tools
uiSurface: null
locale: en
status: current
owner: docs
reviewStatus: needs-review
lastVerified: 2026-07-10
platforms: [android]
tools: [clash-for-android]
appliesTo: []
sources: []
title: Clash for Android - Tools & Software
description: A Graphical user interface of clash for Android
---

# Clash for Android

A Graphical user interface of clash for Android

::: danger Not Recommended
This software has not been updated for several years. Jego does not recommend continued use.

Please use [Jego's recommended clients](/en/subscription/#_1-about-which-client-to-use)
:::

::: danger Discontinued
Clash for Android was discontinued on November 3, 2023.
:::

::: info Alternative
You can visit the [Mihomo Series Software](/en/subscription/clients/mihomo) page to get the latest software.
:::

## <img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FOSsqZTRrboImnICfYPE0_2Fclash_3.png" width="26" height="26" alt="Clash icon"> Historical acquisition note

The original Google Play and GitHub project entries are no longer available, and third-party APK aggregators are not a verifiable security source. This page no longer links an installer; use a maintained replacement above. The interface and subscription steps remain only to help identify settings during migration from an old device.

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FL71PvhWJcSBBz3HTeoia_2Fimage_1.png" alt="Clash for Android interface">

## Add Subscription

In the **Jego - Control Panel**, click on **Subscription Nodes** in the left navigation bar, find the Clash/Mihomo Series subscription address and click **Copy**.

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FZi4WzVyeec9wgY50xRLc_2Fimage_2.png" alt="Jego control panel">

<div class="tip custom-block" style="padding-top: 8px">

Jego subscription service mobile panel: <https://jego.us>

</div>

Open Clash for Android, go to **Configuration** > **New Configuration** > **URL**. \
In the URL field, paste the Clash configuration subscription link; for Auto Update (minutes), it's recommended to fill in **1440**, which means updating the configuration file from the link every 24 hours.

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2Fr3VUO5pTi3Lsxa5xPKFj_2Fimage_3.png" alt="Configuration interface" width="300">

After completion, click the **Save** button in the upper right corner. Clash for Android will download the configuration file. Please click **Select** for the added configuration file.

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2Fcxxf7sxonH8ugEyreooD_2Fimage_1.png" alt="Save configuration" width="300">

## Enable Proxy

Return to the Clash for Android main page and **Start Service**. In the popup VPN settings, click "**Allow**" and Clash for Android will begin taking over system traffic.

Click on Proxy, and select the corresponding node in the mode above. You can also select specific applications to use corresponding proxy nodes.

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F4RjUE6nSLiUqpSjeX7Pu_2Fimage_2.png" alt="Enable proxy" width="300">

## Select Proxy Mode

Go to the App main page, tap "Proxy" > "┇" > "Mode", and select the proxy mode according to your needs.

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FKgx0JHC9I5UfcSThfdKI_2Fimage_3.png" alt="Step 1" width="300">

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FdJ4k00uXfskraienxjBw_2Fimage_1.png" alt="Step 2" width="300">

### **Rules / Rule: Only proxy foreign traffic**

Suitable for users who use both domestic and foreign services.

Whether traffic is direct or proxied depends on the active configuration; account UI determines how it counts toward the plan.

When querying IP on mainland websites, you get the local IP address.

When querying IP on foreign websites, you get the proxy IP address.

Traffic routing rules cannot be comprehensive and have timeliness. If you encounter the following situations, try global proxy.

* Unable to open international websites;
* Slow loading of international websites;

### **Direct / Direct: Do not proxy any traffic**

Choosing this mode will result in inability to bypass restrictions, with the same effect as not using VPN.

### **Global / Global: Proxy all traffic**

Suitable for users who do not rely on mainland services.

Global mode sends client-managed traffic through the proxy; verify performance and destination results on the current network.
