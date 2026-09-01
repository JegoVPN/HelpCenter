---
translationKey: devices-tvos
contentType: device-guide
product: subscription-service
productArea: device-selection
uiSurface: clash-tvos
locale: en
status: current
owner: docs
reviewStatus: verified
lastVerified: 2026-09-01
dateModified: 2026-09-01
platforms: [tvos]
tools: [clash]
appliesTo: [jego-subscription]
sources: [https://clash.md/platforms/tvos, https://clash.md/guide/tvos, https://apps.apple.com/app/id6794257189]
title: tvOS Proxy Guide - Apple TV Device Support
description: Install Clash on Apple TV, add a Jego Mihomo subscription, activate the Profile, and start the Tunnel.
---

# tvOS Proxy Guide

The currently recommended Apple TV client is the native [Clash tvOS app](https://clash.md/platforms/tvos). [Download Clash from the App Store](https://apps.apple.com/app/id6794257189), then follow the steps below to add a Jego subscription and start it.

## Copy the Mihomo subscription

1. Sign in to the [Jego Dashboard](https://jego.us) on a phone or computer.
2. Open **Mobile Proxy**.
3. Find the **Mihomo** subscription and select **Copy**.

<img class="jego-wide-screenshot" src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2Fbf6ZGnMBZioZr9rD5P5J_2Fimage_2.png" alt="The Mihomo subscription URL in the Jego Dashboard" loading="lazy">

## Add the Profile and start

Follow screenshots 1–3 to add the Profile and return Home. Allow the VPN configuration when tvOS asks on the first start.

<div class="clash-step-grid clash-step-grid--wide">
  <figure>
    <img src="/images/clash-apple/tvos/01-first-launch.webp" alt="Clash on its first Apple TV launch with Add a profile" loading="lazy">
    <figcaption>1. Select Add a profile on the first launch.</figcaption>
  </figure>
  <figure>
    <img src="/images/clash-apple/tvos/03-filled-subscription-blurred.webp" alt="Add Profile on Apple TV with a blurred Mihomo subscription URL filled in" loading="lazy">
    <figcaption>2. Paste the URL, then select Add profile. The example URL is blurred.</figcaption>
  </figure>
  <figure>
    <img src="/images/clash-apple/tvos/04-home-ready.webp" alt="Apple TV Home with the Jego Profile, Rule mode, and START available" loading="lazy">
    <figcaption>3. Return Home, confirm the Jego Profile and Rule, then select START.</figcaption>
  </figure>
</div>

For a long URL, use the Apple TV keyboard notification on a nearby iPhone or iPad, or type with the keyboard in Apple TV Remote.

## Choose a node

Select **Node** on Home or open **Utilities** → **Nodes**. Choose a policy group on the left and a node on the right; the current node displays **In use**. Apple TV shows stored latency results but does not include **Test All**.

If the Tunnel does not start, confirm that `无忧行 JegoVPN.com` displays **In use**, select Rule again, and retry.

See the [official Clash tvOS guide](https://clash.md/guide/tvos) for more interface details.

For another Apple device, return to [Clash for Apple Platforms](/en/guide/clash-apple) and choose iOS or macOS.
