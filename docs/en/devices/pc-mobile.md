---
translationKey: devices-pc-mobile
contentType: overview
product: subscription-service
productArea: subscription-management
uiSurface: control-panel
locale: en
status: current
owner: docs
reviewStatus: needs-review
lastVerified: null
platforms: [windows, macos, linux, android, ios, harmonyos]
tools: []
appliesTo: []
sources: []
title: Use a Jego subscription on computers and phones
description: Install a supported client for your device, copy and update a Jego subscription, and understand browser extension, system proxy, and TUN connections.
---

# Use a Jego subscription on computers and phones

Jego members can add a subscription to a compatible client on a computer or phone. After one installation and import, apps outside the browser can also use Jego routes.

The browser extension and subscription service are two ways to use Jego. Websites in Chrome and Edge can use the [Jego browser extension](/en/guide/usage). Computer software and phone apps connect through a subscription client described on this page.

## Install by device

<span id="_1-about-which-client-to-use"></span>

Choose the device you are using. Its guide starts with the recommended clients and continues through subscription import on the same path.

<div class="subscription-device-grid">
  <a class="subscription-device-card" href="/en/subscription/devices/windows"><img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FbeA5N21M1iATQm5HiGND_2Fwin_1.svg" width="38" height="28" alt="Windows icon"><strong>Windows</strong><span>Computer setup</span></a>
  <a class="subscription-device-card" href="/en/subscription/devices/mac"><img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FrUGve1gm2gP1sXdvgjCw_2Fapple_1.svg" width="38" height="28" alt="macOS icon"><strong>macOS</strong><span>Mac setup</span></a>
  <a class="subscription-device-card" href="/en/subscription/devices/ios"><img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F7GBp8VQdHNWWH3aalDTP_2Fios_3.svg" width="38" height="28" alt="iOS icon"><strong>iPhone / iPad</strong><span>Apple mobile setup</span></a>
  <a class="subscription-device-card" href="/en/subscription/devices/android"><img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F7Hh3XGbbAH0jtCKDKIF6_2Fandroid_3.svg" width="38" height="28" alt="Android icon"><strong>Android</strong><span>Phone setup</span></a>
  <a class="subscription-device-card" href="/en/subscription/devices/linux"><img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FJJlooO6sJC8xrcR6vqGj_2Flinux_1.svg" width="38" height="28" alt="Linux icon"><strong>Linux</strong><span>Computer setup</span></a>
  <a class="subscription-device-card" href="/en/subscription/devices/harmony"><img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FhUBqYs4CpmMcueAi690m_2FHMOS_Logo_Icon_1.svg" width="38" height="28" alt="HarmonyOS icon"><strong>HarmonyOS</strong><span>Harmony device setup</span></a>
</div>

The [Apple ID guide](/en/subscription/devices/us-apple-id) covers App Store account details for iPhone and iPad. The original v2rayN, v2rayNG, Loon, and OneClick tutorials remain available for existing users, while current installations should follow the recommended client on the device guide.

## Copy and update the subscription

After installing a client, add the Jego subscription in this order:

1. Open the Jego Control Panel and choose **Mobile Proxy**.
2. Return to the client guide and confirm the subscription type it uses.
3. Copy the matching row from Mobile Proxy.
4. Paste the URL into the client's add-subscription screen, save it, and update.
5. When the nodes appear, choose a route and connect.

Mihomo, sing-box, Surfboard, Shadowrocket, Surge, Quantumult X, and Clash are formats for the same subscription service. Copy only the format named by the client guide.

To receive current nodes later, open the existing subscription in the client and choose **Update**, **Sync**, or **Refresh**. When moving to another computer, phone, or client, copy the matching format from the Control Panel again. On a phone, <https://jego.us> also provides access to subscription-node copy and management.

When a new subscription URL is needed, use Reset on the Mobile Proxy page. Reset creates a new URL and stops the old one; import the new URL into the clients you use.

## Browser extension, system proxy, and TUN

These options cover different parts of a device:

- **Browser extension:** covers Chrome or Edge where Jego is installed and is the simplest choice for browser use.
- **System proxy:** the client writes a proxy setting to the operating system, which browsers and apps that support the setting can use.
- **TUN mode:** the client creates a virtual network adapter and handles requests that enter it according to the client's rules. It is useful when other computer apps also need the connection.

<span id="_2-the-difference-between-system-proxy-and-virtual-network-cardtun-in-these-software"></span>

System proxy and TUN are both controlled by the subscription client. On phones, the client commonly uses the system's VPN connection indicator while the selected client and node continue to provide the connection.

<span id="_3-set-the-jego-extension-after-enabling-tun-mode"></span>

### Jego extension while a client uses TUN

When a computer client has TUN mode enabled, keep the Jego browser extension **Off** so the browser requests are handled by that client.

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FISwY5XX4FX2qker0nOYC_2Fimage_3.png" alt="Jego extension Off mode" width="280" />

Off only disables the browser extension's own proxy function. It does not affect the computer client or TUN. When using only the browser extension, select Rules or Global in its popup. See [Rules, Global, and Off](/en/guide/mode-selection) for the full mode explanation.

Downloads, installation steps, and button locations stay in each device guide, so this page does not repeat a complete software directory. Site search can still open any of the 18 existing client guides directly.
