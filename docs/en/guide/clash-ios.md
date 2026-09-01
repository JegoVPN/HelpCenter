---
translationKey: guide-clash-ios
contentType: how-to
product: subscription-service
productArea: tools
uiSurface: clash-ios
locale: en
status: current
owner: docs
reviewStatus: verified
lastVerified: 2026-09-01
dateModified: 2026-09-01
platforms: [ios, ipados]
tools: [clash]
appliesTo: [jego-subscription]
sources: [https://clash.md/platforms/ios, https://clash.md/guide/ios, https://apps.apple.com/app/id6794257189]
title: Clash for iOS - Jego Subscription Guide
description: Install Clash on iPhone or iPad, add a Jego Mihomo subscription, select the Profile, and start from Home.
---

# Clash for iOS

This guide covers iPhone and iPad. Install the native Apple version from the [Clash iOS website](https://clash.md/platforms/ios) or the [App Store](https://apps.apple.com/app/id6794257189).

## Copy the Mihomo subscription

1. Sign in to the [Jego Dashboard](https://jego.us).
2. Open **Mobile Proxy**.
3. Find the **Mihomo** subscription and select **Copy**.

<img class="jego-wide-screenshot" src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2Fbf6ZGnMBZioZr9rD5P5J_2Fimage_2.png" alt="The Mihomo subscription URL in the Jego Dashboard" loading="lazy">

## iPhone: add and start

Follow screenshots 1–5 in order. Allow the VPN configuration when iOS asks on the first start.

<div class="clash-step-grid clash-step-grid--phone">
  <figure>
    <img src="/images/clash-apple/iphone/01-home-not-connected.webp" alt="Clash Home on iPhone while disconnected, with the Profile control at the top" loading="lazy">
    <figcaption>1. Select the Profile name to the left of the blue start button to open Profiles.</figcaption>
  </figure>
  <figure>
    <img src="/images/clash-apple/iphone/02-add-profile-entry-en.webp" alt="The Add Profile entry on the iPhone Profiles screen" loading="lazy">
    <figcaption>2. Select Add Profile on the Profiles screen.</figcaption>
  </figure>
  <figure>
    <img src="/images/clash-apple/iphone/03-filled-subscription-blurred.webp" alt="Add Profile on iPhone with the Jego name and a blurred Mihomo subscription URL filled in" loading="lazy">
    <figcaption>3. Select Link, paste the Mihomo URL, and enter the name. The example URL is blurred.</figcaption>
  </figure>
  <figure>
    <img src="/images/clash-apple/iphone/04-profile-selected.webp" alt="The Jego Profile selected in Clash on iPhone" loading="lazy">
    <figcaption>4. Select the Jego Profile and confirm the checkmark.</figcaption>
  </figure>
  <figure>
    <img src="/images/clash-apple/iphone-home-connected.jpg" alt="Clash running on a real iPhone with the Jego Profile and Rule selected" loading="lazy">
    <figcaption>5. Return Home, select Rule, and start. A green STOP button means Clash is running.</figcaption>
  </figure>
</div>

## iPad: add and start

Follow screenshots 1–4 in order and allow the VPN configuration on the first start.

<div class="clash-step-grid">
  <figure>
    <img src="/images/clash-apple/ipad/01-home.webp" alt="Clash Home and the Profiles sidebar entry on iPad" loading="lazy">
    <figcaption>1. Home and Profiles are available in the sidebar.</figcaption>
  </figure>
  <figure>
    <img src="/images/clash-apple/ipad/02-profiles-and-add.webp" alt="The Add Profile entry and current Profile on iPad" loading="lazy">
    <figcaption>2. Tap Add Profile. A checkmark identifies the current Profile.</figcaption>
  </figure>
  <figure>
    <img src="/images/clash-apple/ipad/03-filled-subscription-blurred.webp" alt="Add Profile on iPad with a blurred Mihomo URL and the Jego name filled in" loading="lazy">
    <figcaption>3. Paste the URL, enter the name, and tap Add. The example URL is blurred.</figcaption>
  </figure>
  <figure>
    <img src="/images/clash-apple/ipad/04-home-ready.webp" alt="Clash on iPad with the Jego Profile, Rule selected, and START available" loading="lazy">
    <figcaption>4. Return Home, select Rule, and tap START.</figcaption>
  </figure>
</div>

In a narrow Split View, iPad uses an iPhone-like tab layout. Open Profiles from the Profile name at the top of Home.

## Choose a node

Open **Proxies**, choose a policy group, then select a node. Use **Test All** after connecting to compare latency. Use **Rule** for normal operation; **Global** sends all traffic through the global policy group, and **Direct** bypasses the proxy.

If the imported Profile has no nodes, confirm that `无忧行 JegoVPN.com` is current, update it once, and add a newly copied Mihomo URL if needed.

See the [official Clash iOS guide](https://clash.md/guide/ios) for more interface details.

For another Apple device, return to [Clash for Apple Platforms](/en/guide/clash-apple) and choose macOS or tvOS.
