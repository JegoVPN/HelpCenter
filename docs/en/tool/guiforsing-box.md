---
jegoSupport: supported
tool: guiforsing-box
clientKind: null
minimumOs: []
architectures: []
subscriptionFormats: []
lifecycle: current
recommendation: advanced
securityStatus: needs-review
supportedVersions: []
replacements: []
officialSources: [https://github.com/GUI-for-Cores/GUI.for.SingBox]
translationKey: tool-guiforsing-box
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
tools: [guiforsing-box]
appliesTo: []
sources: [https://github.com/GUI-for-Cores/GUI.for.SingBox]
title: GUI.for.SingBox - Tools & Software
description: Install GUI.for.SingBox, import the Jego subscription, and start the connection.
---

# GUI.for.SingBox

GUI.for.SingBox is a graphical client made by the open source community based on the sing-box kernel in Windows systems. It provides an intuitive graphical interface to manage sing-box proxy configurations, supporting subscription import, node selection and other functions.

::: info Welcome
Welcome to the 2025 GUI.for.SingBox usage tutorial
:::

> Whispering: The experience of using GUI.for.SingBox is not very smooth. Non-sing-box believers are recommended to use [FlClash](/en/subscription/clients/flclash).

## Get GUI.for.SingBox

You can download and install through Github

* [GitHub Releases](https://github.com/GUI-for-Cores/GUI.for.SingBox/releases)

After opening the Github Release page, you'll see many installation packages. Download the corresponding installation package according to your Windows system version.

## GUI.for.SingBox Windows Version Usage Tutorial

## Add Subscription

In the **Jego - Control Panel**, click on **Subscription Nodes** in the left navigation bar, find the **Sing-Box** subscription address and click **Copy**.

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FQ9Ncmw0YFCe4ziEMoSuw_2Fimage_3.png" alt="Sing-Box subscription address">

<div class="tip custom-block" style="padding-top: 8px">

Jego subscription service mobile panel: <https://jego.us>

</div>

### Basic Settings

After downloading, first click on `Settings - Kernel` and see if there's a kernel version under the sing-box title, as shown in the left image below. If not, you need to click the blue button `Update: version` on the right to install. ps. In the future, if there's a new kernel version, also click here to update.

![Just downloaded](/images/guiforsingbox_no_kernel.png)

![With kernel to use](/images/guiforsingbox_with_kernel.png)

As shown in the right image above, GUI.for.SingBox is only in available state when there's a version number under Local in sing-box.

### Add Subscription and Start

Open the GUI.for.SingBox client, go to `Overview -> QuickStart`

1. Paste the `sing-box subscription URL` copied from Jego in Remote URL
2. Click `Save` directly
3. A configuration file starting with `ID_` will be created by default, click `Click to Start` directly

![Quick Start Step 1](/images/guiforsingbox_quickstart1.png)

![Quick Start Step 2](/images/guiforsingbox_quickstart2.png)

* After starting, it should be usable. Other usage habit issues need to be learned slowly.

Also, it's recommended to go to settings and turn on "Run as administrator": For users who are not members of the Windows Administrators group, it's recommended to check this item to avoid TUN mode startup failure.
