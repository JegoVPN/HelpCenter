---
jegoSupport: supported
tool: clashverge
clientKind: null
minimumOs: []
architectures: []
subscriptionFormats: []
lifecycle: current
recommendation: recommended
securityStatus: needs-review
supportedVersions: []
replacements: []
officialSources: [https://github.com/clash-verge-rev/clash-verge-rev]
translationKey: tool-clashverge
contentType: tool-guide
product: subscription-service
productArea: tools
uiSurface: null
locale: en
status: current
owner: docs
reviewStatus: needs-review
lastVerified: 2026-07-10
platforms: [windows, macos, linux]
tools: [clashverge]
appliesTo: []
sources: [https://github.com/clash-verge-rev/clash-verge-rev]
title: Clash Verge Rev - Tools & Software
description: A multi-platform proxy client based on Mihomo (formerly ClashMeta) kernel, supporting Alpha version kernel switching. Clean and beautiful user interface with customizable theme colors.
---

# Clash Verge Rev

A multi-platform proxy client based on Mihomo (formerly ClashMeta) kernel, supporting Alpha version kernel switching. Clean and beautiful user interface with customizable theme colors.

::: info Welcome
Welcome to the 2025 Clash Verge Rev usage tutorial
:::

Clash Verge Rev is the continuation of Clash Verge, a multi-platform proxy client developed based on Tauri using the Mihomo (formerly ClashMeta) kernel, supporting Alpha version kernel switching. It features a clean and beautiful user interface with customizable theme colors, proxy group/tray icons, and CSS Injection. Configuration file management and enhancement (Merge and Script), configuration file syntax hints. System proxy and guard, TUN (virtual network card) mode. Visual node and rule editing. WebDav configuration backup and synchronization.

## <img src="/images/clashvergelogo.png" width="26" height="26" alt="Clash Verge Rev"> Download Clash Verge Rev

### Github release
[https://github.com/clash-verge-rev/clash-verge-rev/releases/latest](https://github.com/clash-verge-rev/clash-verge-rev/releases/latest)

After opening the Github Release page, you'll see many installation packages. Don't worry, just download and install according to your operating system.

#### Windows
Windows 7 users should upgrade to Win10/11 first.

If you're unsure about your computer's system architecture, download the x64 architecture file (currently used by most Windows computers).

#### macOS
macOS 10 is not supported, please upgrade macOS to version 11 or higher.

### Operation Interface

<img src="/images/screenshot-20250807-123729.png" alt="Desktop version">

## Adding Subscription

In the **Jego - Control Panel**, click on **Subscription Nodes** in the left navigation bar, find the Mihomo subscription address and click **Copy**.

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2Fbf6ZGnMBZioZr9rD5P5J_2Fimage_2.png" alt="Jego Control Panel">

<div class="tip custom-block" style="padding-top: 8px">

Jego subscription service mobile panel: <https://jego.us>

</div>

Open Clash Verge Rev, click **Import Subscription** in the top-left corner of the main content area on the homepage.

<img src="/images/screenshot-20250807-121741.png" alt="Import Subscription">

In the popup new configuration window, the **Type** defaults to `Remote`, **Name** should be `Jego`, description can be left blank, **Subscription Link** should be the `Mihomo subscription link` copied from the Jego control panel, **Update Interval** should be changed to `1440` minutes, then click **Save**.

<img src="/images/screenshot-20250807-121847.png" alt="Edit Configuration">

Click the **refresh icon** in the top-right corner of the Jego **subscription card** to pull the subscription to local. After successful operation, a green reminder will appear in the top-right corner as shown in the image below: **Subscription Update Successful**.

<img src="/images/screenshot-20250807-121933.png" alt="Update Subscription">

## Enable Proxy

Then return to the homepage: turn on **System Proxy** and **TUN Mode** to enable the proxy. The node server defaults to automatic selection, but you can also select from the **Current Node** card. See the demonstration video below.

<video src="/videos/20250807-122133.mp4" controls></video>

### Clash Verge Rev interface when running successfully:

1. The IP in the IP information card changes from China to overseas
2. The website test card shows latency for Google and Youtube

<img src="/images/screenshot-20250807-130145.png" alt="Running Successfully">

## Select Proxy Mode

### **Rule Mode: Only proxy overseas traffic**

Suitable for users who use both domestic and international services.

Mainland traffic does not consume package data.

When querying IP on mainland websites, you get the local IP address.

When querying IP on overseas websites, you get the proxy IP address.

Traffic routing rules cannot be comprehensive and have timeliness. If you encounter the following situations, try global proxy.

* Unable to open international websites;
* Slow loading of international websites;

### **Global Mode: Proxy all traffic**

All traffic goes through the proxy server, suitable for scenarios requiring global proxy access, users who don't rely on mainland services.

Global mode sends client-managed traffic through the proxy; verify performance and destination results on the current network.

### **Direct Mode: No proxy for any traffic**

Selecting this mode will route all traffic without going through proxy server nodes, but through the Mihomo kernel to forward to the target server, which will result in inability to bypass restrictions, same effect as not using VPN.
