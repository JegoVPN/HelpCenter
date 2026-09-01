---
translationKey: guide-clash-macos
contentType: how-to
product: subscription-service
productArea: tools
uiSurface: clash-macos
locale: en
status: current
owner: docs
reviewStatus: verified
lastVerified: 2026-09-01
dateModified: 2026-09-01
platforms: [macos]
tools: [clash]
appliesTo: [jego-subscription]
sources: [https://clash.md/platforms/macos, https://clash.md/guide/macos, https://apps.apple.com/app/id6794257189?platform=mac]
title: Clash for macOS - Jego Subscription Guide
description: Install Clash on Mac, add a Jego Mihomo subscription, select the Profile, and start from Home.
---

# Clash for macOS

Install the native Apple version from the [Clash macOS website](https://clash.md/platforms/macos) or the [App Store](https://apps.apple.com/app/id6794257189?platform=mac).

## Copy the Mihomo subscription

1. Sign in to the [Jego Dashboard](https://jego.us).
2. Open **Mobile Proxy**.
3. Find the **Mihomo** subscription and select **Copy**.

<img class="jego-wide-screenshot" src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2Fbf6ZGnMBZioZr9rD5P5J_2Fimage_2.png" alt="The Mihomo subscription URL in the Jego Dashboard" loading="lazy">

## Add the Profile and start

Follow screenshots 1–3 to add and select the Profile. Allow the VPN configuration when macOS asks on the first start.

<div class="clash-step-grid clash-step-grid--wide">
  <figure>
    <img src="/images/clash-apple/macos/01-home.webp" alt="Clash Home on Mac with Profiles in the sidebar" loading="lazy">
    <figcaption>1. Open Profiles from the Home sidebar.</figcaption>
  </figure>
  <figure>
    <img src="/images/clash-apple/macos/02-profiles-and-add.webp" alt="The Add Profile entry and selected Jego Profile on Mac" loading="lazy">
    <figcaption>2. Select Add Profile. After adding, select the Jego Profile and confirm its checkmark.</figcaption>
  </figure>
  <figure>
    <img src="/images/clash-apple/macos/04-filled-subscription-blurred.webp" alt="Add Profile on Mac with the Jego name and a blurred Mihomo subscription URL filled in" loading="lazy">
    <figcaption>3. Choose Link, paste the URL, enter the name, and select Add. The example URL is blurred.</figcaption>
  </figure>
</div>

Return Home, confirm `无忧行 JegoVPN.com` at the top and **Rule** under Outbound Mode, then start.

## Nodes and updates

Open **Proxies** from the sidebar, choose a policy group, and select a node. The menu bar can start, stop, or switch Rule / Global / Direct; node selection remains in the main window.

To update the subscription, right-click `无忧行 JegoVPN.com` in Profiles and select Sync, or open its details and use **Sync Now**.

See the [official Clash macOS guide](https://clash.md/guide/macos) for more interface details.

For another Apple device, return to [Clash for Apple Platforms](/en/guide/clash-apple) and choose iOS or tvOS.
