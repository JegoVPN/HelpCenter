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
lastVerified: 2026-09-02
dateModified: 2026-09-02
platforms: [ios, ipados]
tools: [clash]
appliesTo: [jego-subscription]
sources: [https://clash.md/platforms/ios, https://clash.md/guide/ios, https://apps.apple.com/app/id6794257189?platform=iphone]
title: Clash for iOS - Jego Subscription Guide
description: Install Clash on iPhone or iPad, add a Jego Mihomo subscription, select the Profile, and start from Home.
---

# Clash for iOS

This guide covers iPhone and iPad. Install the native Apple version from the [Clash iOS website](https://clash.md/platforms/ios) or the [App Store](https://apps.apple.com/app/id6794257189?platform=iphone).

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
    <img src="/images/clash-apple/ipad/01-home-not-connected.webp" alt="Clash Home while disconnected and the Profiles sidebar entry on iPad" loading="lazy">
    <figcaption>1. Home and Profiles are available in the sidebar.</figcaption>
  </figure>
  <figure>
    <img src="/images/clash-apple/ipad/02-profiles-and-add-cropped.webp" alt="The Add Profile entry and current Profile on iPad" loading="lazy">
    <figcaption>2. Tap Add Profile. A checkmark identifies the current Profile.</figcaption>
  </figure>
  <figure>
    <img src="/images/clash-apple/ipad/03-filled-subscription-blurred-cropped.webp" alt="Add Profile on iPad with a blurred Mihomo URL and the Jego name filled in" loading="lazy">
    <figcaption>3. Paste the URL, enter the name, and tap Add. The example URL is blurred.</figcaption>
  </figure>
  <figure>
    <img src="/images/clash-apple/ipad/04-home-connected-cropped.webp" alt="Clash on iPad connected with the Jego Profile and Rule selected" loading="lazy">
    <figcaption>4. Return Home, select Rule, and start. Green STOP and the duration show that Clash is connected.</figcaption>
  </figure>
</div>

When Split View makes the iPad window narrow, an iPhone-like menu appears at the bottom. Select the Profile name at the top of Home to open Profiles.

## Choose a node

<div class="clash-step-grid clash-step-grid--phone">
  <figure>
    <img src="/images/clash-apple/iphone-home-connected.jpg" alt="Connected Clash Home on iPhone with the Proxies entry" loading="lazy">
    <figcaption>1. Select the Proxies card on Home.</figcaption>
  </figure>
  <figure>
    <img src="/images/clash-apple/iphone/05-proxy-selection.webp" alt="Policy groups and nodes on iPhone with a blue checkmark beside the selected node" loading="lazy">
    <figcaption>2. Open a group and select a node. A blue checkmark means it is selected; a smaller green number is usually faster.</figcaption>
  </figure>
</div>

<div class="clash-step-grid clash-step-grid--wide">
  <figure>
    <img src="/images/clash-apple/ipad/05-proxy-selection.webp" alt="Policy groups and nodes on iPad after opening Proxies from the sidebar" loading="lazy">
    <figcaption>iPad: select Proxies in the Home sidebar, open a group, and select a node. Select the lightning button to test again.</figcaption>
  </figure>
</div>

Use **Rule** for everyday browsing. Clash will use the right node group for each site. The first time, open every group once: select a node in manual groups such as **Manual Select** and **ChatGPT Group**; **Auto Select** works by itself. Use **Global** only when you want all traffic to use one route. **Direct** turns the proxy off.

If no nodes appear after you add the subscription, return to Profiles and confirm that `无忧行 JegoVPN.com` has a checkmark. Update it once. If the list is still empty, copy a new Mihomo subscription from the Jego Dashboard and add it again.

See the [official Clash iOS guide](https://clash.md/guide/ios) for more interface details.

For another Apple device, return to [Clash for Apple Platforms](/en/guide/clash-apple) and choose macOS or tvOS.
