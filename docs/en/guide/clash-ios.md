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
lastVerified: 2026-09-12
dateModified: 2026-09-12
platforms: [ios, ipados]
tools: [clash]
appliesTo: [jego-subscription]
sources: [https://clash.md/platforms/ios, https://clash.md/guide/ios, https://apps.apple.com/app/id6794257189?platform=iphone]
title: Clash for iOS - Jego Subscription Guide
description: Install Clash on iPhone or iPad, paste the Jego Mihomo URL in Profile Center to create a profile, and start from Home.
---

# Clash for iOS

This guide covers iPhone and iPad. Install the native Apple version from the [Clash iOS website](https://clash.md/platforms/ios) or the [App Store](https://apps.apple.com/app/id6794257189?platform=iphone).

## Copy the Mihomo subscription

1. Sign in to the [Jego Dashboard](https://jego.us).
2. Open **Mobile Proxy**.
3. Find the **Mihomo** subscription and select **Copy**.

<img class="jego-wide-screenshot" src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2Fbf6ZGnMBZioZr9rD5P5J_2Fimage_2.png" alt="The Mihomo subscription URL in the Jego Dashboard" loading="lazy">

Clash keeps nodes and rules in **Profile Center**. Paste the URL once and it downloads the nodes, sets up the rules, and builds a profile you can start right away.

## iPhone: create a profile and start

Follow screenshots 1–7 in order. Allow the VPN configuration when iOS asks on the first start.

<div class="clash-step-grid clash-step-grid--phone">
  <figure>
    <img src="/images/clash-apple/iphone/01-home-en.webp" alt="Clash Home on a fresh iPhone install, showing the built-in Direct profile" loading="lazy">
    <figcaption>1. Select the profile name at the top of Home to open Profile Center. On a fresh install this is the built-in Direct.</figcaption>
  </figure>
  <figure>
    <img src="/images/clash-apple/iphone/02-profile-center-en.webp" alt="Profile Center on iPhone with the Profiles, Nodes, and Rules tabs" loading="lazy">
    <figcaption>2. Select Create Profile. The plus button in the top right does the same.</figcaption>
  </figure>
  <figure>
    <img src="/images/clash-apple/iphone/03-create-node-link-en.webp" alt="Create Nodes on iPhone with the Mihomo URL pasted on the URL tab" loading="lazy">
    <figcaption>3. On the URL tab, paste the Mihomo URL you copied and select Next. Clash downloads the nodes first.</figcaption>
  </figure>
  <figure>
    <img src="/images/clash-apple/iphone/04-select-nodes-en.webp" alt="Select Nodes on iPhone with 无忧行 JegoVPN.com already checked" loading="lazy">
    <figcaption>4. Back on Select Nodes, the Jego source is already checked. Select Next.</figcaption>
  </figure>
  <figure>
    <img src="/images/clash-apple/iphone/05-select-rules-en.webp" alt="Select Rules on iPhone with Default Rules selected" loading="lazy">
    <figcaption>5. Keep Default Rules and select Done.</figcaption>
  </figure>
  <figure>
    <img src="/images/clash-apple/iphone/06-finish-en.webp" alt="The finish screen on iPhone showing Name, Nodes, and Rules" loading="lazy">
    <figcaption>6. Leave Name blank to use the source name, 无忧行 JegoVPN.com. Select Save.</figcaption>
  </figure>
  <figure>
    <img src="/images/clash-apple/iphone/07-home-running-en.webp" alt="Clash running on iPhone with a green STOP button" loading="lazy">
    <figcaption>7. Back on Home, keep Outbound Mode on Rule and select START. A green STOP means Clash is running.</figcaption>
  </figure>
</div>

## iPad: create a profile and start

The steps match iPhone. The entry points move to the sidebar.

<div class="clash-step-grid">
  <figure>
    <img src="/images/clash-apple/ipad/01-home-en.webp" alt="Clash on a fresh iPad install, with Home, Proxies, Rules, and Profiles in the sidebar" loading="lazy">
    <figcaption>1. Select Profiles in the sidebar. On a fresh install the profile at the top is the built-in Direct.</figcaption>
  </figure>
  <figure>
    <img src="/images/clash-apple/ipad/02-profile-center-en.webp" alt="Profile Center on iPad with the Profiles, Nodes, and Rules tabs" loading="lazy">
    <figcaption>2. Select Create Profile. The plus button in the top right does the same.</figcaption>
  </figure>
  <figure>
    <img src="/images/clash-apple/ipad/03-create-node-link-en.webp" alt="The Create Nodes window on iPad with the Mihomo URL pasted on the URL tab" loading="lazy">
    <figcaption>3. The wizard opens in a window. On the URL tab, paste the Mihomo URL and select Next.</figcaption>
  </figure>
  <figure>
    <img src="/images/clash-apple/ipad/04-select-nodes-en.webp" alt="The Select Nodes window on iPad with 无忧行 JegoVPN.com checked" loading="lazy">
    <figcaption>4. The Jego source is already checked. Select Next. Select Rules and the finish screen work exactly as they do on iPhone.</figcaption>
  </figure>
  <figure>
    <img src="/images/clash-apple/ipad/05-home-running-en.webp" alt="Clash running on iPad with a green STOP button" loading="lazy">
    <figcaption>5. Back on Home, keep Outbound Mode on Rule and select START.</figcaption>
  </figure>
  <figure>
    <img src="/images/clash-apple/ipad/06-proxies-en.webp" alt="Proxy groups and nodes on iPad after opening Proxies from the sidebar" loading="lazy">
    <figcaption>6. To choose a node, select Proxies in the sidebar, then open a group and select a node.</figcaption>
  </figure>
</div>

In Split View, or when the window is narrow, the interface switches to the same bottom tabs as iPhone. The steps do not change.

## Choose a node

<div class="clash-step-grid clash-step-grid--phone">
  <figure>
    <img src="/images/clash-apple/iphone/07-home-running-en.webp" alt="Connected Clash Home on iPhone with the Proxies card" loading="lazy">
    <figcaption>1. Select the Proxies card on Home.</figcaption>
  </figure>
  <figure>
    <img src="/images/clash-apple/iphone/08-proxies-en.webp" alt="The Proxies screen on iPhone with a node checked inside an expanded group" loading="lazy">
    <figcaption>2. Open a group, then select a node. A blue checkmark means it is selected, and a smaller green number is usually faster. Select the lightning button to test again.</figcaption>
  </figure>
</div>

Default Rules creates two groups: **PROXY** is the main selector and **AUTO** picks the lowest-latency node for you. Choose a specific node under PROXY to stay in one region, or leave it on AUTO.

## Outbound mode

The **Outbound Mode** card on Home has three options:

- **Rule**: routes by the rules in the profile. China and local traffic go direct, everything else uses the node you selected. Use this every day.
- **Global**: sends all traffic through one node.
- **Direct**: turns the proxy off.

## Update the profile URL

When Jego changes its nodes, refresh once in Profile Center to pick up the latest ones.

<div class="clash-step-grid clash-step-grid--phone">
  <figure>
    <img src="/images/clash-apple/iphone/09-node-library-en.webp" alt="The Nodes tab on iPhone listing profile URL sources and Update All Sources" loading="lazy">
    <figcaption>Select the profile name on Home to open Profile Center, switch to Nodes, and select Update All Sources.</figcaption>
  </figure>
</div>

Select the ⓘ button beside a source to update just that one.

## No nodes after adding

First check that the whole URL was pasted. Use the **Copy** button in the Dashboard, since selecting the text by hand often drops characters. Then select **Update All Sources** once on the **Nodes** tab. If the list is still empty, copy a fresh **Mihomo** subscription from the Jego Dashboard and create the nodes again in Profile Center.

See the [official Clash iOS guide](https://clash.md/guide/ios) for more interface details.

For another Apple device, return to [Clash for Apple Platforms](/en/guide/clash-apple) and choose macOS or tvOS.
