---
jegoSupport: supported
tool: flclash
clientKind: null
minimumOs: []
architectures: []
subscriptionFormats: []
lifecycle: current
recommendation: recommended
securityStatus: needs-review
supportedVersions: []
replacements: []
officialSources: [https://github.com/chen08209/FlClash]
translationKey: tool-flclash
contentType: tool-guide
product: subscription-service
productArea: tools
uiSurface: null
locale: en
status: current
owner: docs
reviewStatus: needs-review
lastVerified: 2026-07-10
platforms: [windows, macos, linux, android, harmonyos]
tools: [flclash]
appliesTo: []
sources: [https://github.com/chen08209/FlClash]
title: FlClash - Tools & Software
description: A multi-platform proxy client based on Mihomo (formerly ClashMeta), simple to use, open source and ad-free.
---

# FlClash

A multi-platform proxy client based on Mihomo (formerly ClashMeta), simple to use, open source and ad-free.

::: info Welcome
Welcome to the 2025 FlClash usage tutorial
:::

FlClash is an open-source multi-platform client based on Mihomo (formerly Clash Meta) and built with Flutter. See this page's status row and GitHub project for current platforms and official sources. Open source or ad-free does not itself guarantee privacy or security; review permissions, release provenance, and security advisories before installation.

## <img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2Fu2sHeQjHJurcgVhJB1zO_2Ficon_2.png" width="26" height="26" alt="FlClash icon"> Get FlClash

1. Github release: [https://github.com/chen08209/FlClash/releases](https://github.com/chen08209/FlClash/releases)

After opening the Github Release page, you'll see many installation packages. Don't worry, just download and install according to your operating system.

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FmV6rxFWJRr8WsZsZFpbr_2Fimage_3.png" width="260">

**Download Instructions:**

* Expand the Assets for the intended release and read its notes.
* Select a package that explicitly matches the operating system and CPU architecture.
* Do not mechanically download the first file or use an unofficial mirror.
* If architecture or package format is unclear, consult the project documentation first.

### Operation Interface

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FW2zBR48roOx17y7sNV6x_2Fmobile_1.gif" alt="Mobile version" width="300"> <img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FOgxjjepQyUiBKRRpzqkt_2Fdesktop_2.gif" alt="Desktop version">

## Add Subscription

In the **Jego - Control Panel**, click on **Subscription Nodes** in the left navigation bar, find the Mihomo subscription address and click **Copy**.

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2Fbf6ZGnMBZioZr9rD5P5J_2Fimage_2.png" alt="Jego control panel">

<div class="tip custom-block" style="padding-top: 8px">

Jego subscription service mobile panel: <https://jego.us>

</div>

Open FlClash, go to **Configuration** > **New Configuration+** > **URL**.

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FA1tnxVXgicb51EQ4sbmy_2Fimage_3.png" alt="New Configuration+"> <img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FUCyxhXIZubhodcSGWnUg_2Fimage_1.png" alt="URL">

Copy the URL just now into the dialog box, then click submit. After successful import, you'll see the imported proxy configuration on the configuration page.

Click **three dots -> Edit** in the upper right corner of the configuration file. Don't change anything except the name.

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FZ1SIaan4pDUJBVK1Eag5_2Fimage_2.png" alt="Edit configuration">

Click **three dots -> Sync** in the upper right corner of the configuration file, which means updating the subscription file.

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FSUZB0uhm5ulHogGxgLEG_2Fimage_3.png" alt="Update configuration">

### Configure Override Rules (Optional)

If you need to customize proxy behavior for specific domains, you can add override rules:

1. On the configuration page, click the <span style="background-color:green; color:white; padding:2px 4px; border-radius:3px;">three dots ⋮</span> in the upper right corner of the subscription card
2. Select <span style="background-color:green; color:white; padding:2px 6px; border-radius:3px;">More</span>
3. Click <span style="background-color:green; color:white; padding:2px 6px; border-radius:3px;">Overrides</span>
4. Click <span style="background-color:green; color:white; padding:2px 6px; border-radius:3px;">Add</span>
5. In the popup dialog, configure:
   * **Rule Name**: Click to select, e.g., `DOMAIN-SUFFIX` (domain suffix matching)
   * **Rule Content**: Click to enter, e.g., `example.com` (main domain or subdomain)
   * **Rule Target**: Click to select, e.g., `DIRECT` (direct connection), `REJECT` (reject), `MATCH` (match)
6. Click save

::: tip Use Cases
Override rules are suitable for scenarios where specific domains need to go through designated nodes, such as AI development tools, specific website acceleration, etc. See [Vibe Coding Setup Guide](/en/guide/vibe-coding) for details.
:::

## Enable Proxy

Then return to the dashboard: **select Rule for outbound mode**, **turn on virtual network card**, then click **Start in the bottom right corner**.

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FMsBeIDztWugUwwvG8IFR_2Fimage_1.png" alt="Enable proxy">

### FlClash successful running interface is as follows:

1. The IP detected by the network changes from China to overseas
2. The start button becomes a running time statistics

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FEwI9BEZZXjF4t3HaMnab_2Fimage_2.png" alt="Successfully running">

## Node Selection

::: info Proxy Interface Bug - Restart is the Solution
<img src="/images/FlClash-Config.png" alt="Proxy Selection">
If you encounter an issue where the proxy interface only shows configuration files (without displaying node servers), this is a FlClash interface bug that occurs when adding configuration for the first time. Simply restart FlClash to resolve this issue.
:::

Click on Proxy: Choose according to your actual situation.

Note: Low latency doesn't mean fast speed, high latency doesn't mean slow speed, feel it yourself.

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FliJ718yvcBlnxgOf1dw6_2Fimage_3.png" alt="Node selection">

## Select Outbound Mode

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

## FlClash Mobile Version Usage Tutorial

Please watch from 2 minutes 04 seconds of this video.

<YouTube videoId="HtZWdMHui6I" title="FlClash Usage Tutorial Video" />
