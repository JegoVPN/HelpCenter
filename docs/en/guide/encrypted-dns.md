---
translationKey: guide-encrypted-dns
contentType: reference
product: general
productArea: network-reference
uiSurface: null
locale: en
status: current
owner: docs
reviewStatus: needs-review
lastVerified: null
platforms: []
tools: []
appliesTo: []
sources: []
title: 'Encrypted DNS (DoH / DoT): Setup Guide - User Guide'
description: Turn on encrypted DNS (DoH / DoT) step by step to block the mainland China firewall's DNS hijacking and poisoning; in mainland China switch to domestic resolvers like AliDNS or Tencent.
---

# Encrypted DNS (DoH / DoT) — Setup Guide

**Mainland China's firewall now reaches right down into the DNS layer** to disrupt circumvention — hijacking, poisoning, blocking: you're connected to the proxy, yet sites still won't open or pages die halfway, and very often it's your DNS lookup being tampered with on the way.

Encrypted DNS (DoH / DoT) encrypts that step so no one can see it or change it — your first line of defense against this hijacking and poisoning.

::: tip Remember one thing
Jego proxies your browser only and **does not carry your system DNS**, so encrypted DNS is something you set up separately in your system or browser — step by step below.
:::

## Turn on encrypted DNS (two layers is enough)

Just two steps: **set a public DNS in your system, then turn on encrypted DNS in your browser.**

::: warning 🇨🇳 Read this first if you're in mainland China
Foreign public resolvers (Cloudflare `1.1.1.1`, Google `8.8.8.8`, etc.) are **blocked or DNS-poisoned in mainland China — they will not work.** Use a **domestic resolver** — AliDNS or Tencent — and each step below gives the exact address.
:::

### ① System layer: set a plain-IP public DNS (covers all apps)

Replace your ISP's default system DNS with a public resolver — **this step isn't encrypted**, but it drops the ISP default and blocks the most common local DNS hijacking:

- Mainland China: `223.5.5.5` (AliDNS) or `119.29.29.29` (DNSPod)
- Elsewhere: `1.1.1.1` (Cloudflare) or `8.8.8.8` (Google)

> **Windows**: Settings → Network & internet → adapter properties → DNS server assignment → Manual → enter the IP (leave encryption Off).
> **macOS**: System Settings → Network → your network's "Details" → DNS → add the IP.
>
> 📷 Illustrated guide: Tencent Cloud [Set up Public DNS on systems & devices](https://cloud.tencent.com/document/product/302/110786) (Windows / macOS / iOS / Android / Linux).

### ② Browser layer: turn on encrypted DNS (DoH) — where you actually browse

DoH is easiest in the browser (paste one URL), and that's where most of your web browsing happens:

| Browser | Where to set it |
| --- | --- |
| **Chrome / Edge** | Settings → Privacy and security → Security → Use secure DNS → choose "Custom" → paste a DoH URL |
| **Firefox** | Settings → Privacy & Security → DNS over HTTPS → Max Protection → Custom → paste a DoH URL |

Which URL: in **mainland China** use AliDNS / DNSPod DoH (`https://dns.alidns.com/dns-query`, `https://doh.pub/dns-query`; foreign DoH doesn't work there); **elsewhere** use Cloudflare / Google (`https://cloudflare-dns.com/dns-query`, `https://dns.google/dns-query`).

> 📷 Illustrated guide: Tencent Cloud [Set up Public DNS in your browser](https://cloud.tencent.com/document/product/302/110788) (Chrome / Edge / Firefox / Opera).

## If you can't set up DoH/DoT — at least do this

If you can't set up DoH/DoT for now, **at least set a plain public-resolver IP as your system DNS** instead of your ISP's default: `223.5.5.5` (AliDNS) in mainland China, or `1.1.1.1` / `8.8.8.8` elsewhere. It isn't encrypted, but it dodges the most common ISP-level DNS hijacking.

## Reference: more encrypted DNS server addresses

### 🇨🇳 Mainland China resolvers (with DoT and 360)

> Every address below is **kept verbatim** — every character of the path and IP matters (people often drop the trailing part when copying, and then it doesn't work). Prefer AliDNS or Tencent; Baidu and carrier resolvers offer only plain DNS.

| Provider | DoH URL | DoT hostname | Plain IP | Notes |
| --- | --- | --- | --- | --- |
| **AliDNS (Alibaba)** | `https://dns.alidns.com/dns-query` | `dns.alidns.com` | `223.5.5.5` `223.6.6.6` | Most widely used · no extra filtering |
| **DNSPod (Tencent)** | `https://doh.pub/dns-query` | `dot.pub` | `119.29.29.29` `119.28.28.28` | Tencent · anti-hijacking |
| **360 Secure DNS** | `https://doh.360.cn/dns-query` | `dot.360.cn` | `101.226.4.6` `218.30.118.6` | Qihoo 360 · blocks malicious domains |

### 🌍 Overseas resolvers (outside mainland China)

These public endpoints are configuration references. Reachability, filtering, logging, and retention policies can change; verify each provider's current official documentation. The table makes no speed, privacy, or availability guarantee.

**Top global picks (use any one)**

| Provider | DoH URL | DoT hostname | Plain IP |
| --- | --- | --- | --- |
| **Cloudflare** | `https://cloudflare-dns.com/dns-query` | `one.one.one.one` | `1.1.1.1` `1.0.0.1` |
| **Google** | `https://dns.google/dns-query` | `dns.google` | `8.8.8.8` `8.8.4.4` |
| **Quad9** | `https://dns.quad9.net/dns-query` | `dns.quad9.net` | `9.9.9.9` `149.112.112.112` |
| **AdGuard** | `https://dns.adguard-dns.com/dns-query` | `dns.adguard-dns.com` | `94.140.14.14` `94.140.15.15` |
| **Mullvad** | `https://dns.mullvad.net/dns-query` | `dns.mullvad.net` | `194.242.2.2` |

**More global resolvers**

| Provider | DoH URL | DoT hostname | Plain IP | Notes |
| --- | --- | --- | --- | --- |
| **NextDNS** | `https://dns.nextdns.io` | — | `45.90.28.0` `45.90.30.0` | Configurable per-account filtering · DoT needs a profile ID |
| **ControlD (free, unfiltered)** | `https://freedns.controld.com/p0` | `p0.freedns.controld.com` | `76.76.2.0` `76.76.10.0` | Canada · p1/p2/p3 variants add blocking |
| **OpenDNS (Cisco)** | `https://doh.opendns.com/dns-query` | `dns.opendns.com` | `208.67.222.222` `208.67.220.220` | Blocks malware/phishing · US |
| **CleanBrowsing (security)** | `https://doh.cleanbrowsing.org/doh/security-filter/` | `security-filter-dns.cleanbrowsing.org` | `185.228.168.9` `185.228.169.9` | Security-filtering endpoint |

**Region-specific resolvers** (local jurisdiction / data sovereignty / non-profit privacy)

| Region | Provider | DoH URL | DoT hostname | Plain IP |
| --- | --- | --- | --- | --- |
| Europe | **DNS4EU** | `https://unfiltered.joindns4.eu/dns-query` | `unfiltered.joindns4.eu` | `86.54.11.100` `86.54.11.200` |
| Europe | **DNS.SB** | `https://doh.sb/dns-query` | `dot.sb` | `185.222.222.222` `45.11.45.11` |
| Europe | **Digitale Gesellschaft** | `https://dns.digitale-gesellschaft.ch/dns-query` | `dns.digitale-gesellschaft.ch` | `185.95.218.42` `185.95.218.43` |
| Russia / CIS | **Yandex (Basic)** | `https://common.dot.dns.yandex.net/dns-query` | `common.dot.dns.yandex.net` | `77.88.8.8` `77.88.8.1` |
| Japan | **IIJ** | `https://public.dns.iij.jp/dns-query` | `public.dns.iij.jp` | — |
| Asia-Pacific | **Tiarap** | `https://doh.tiar.app/dns-query` | `dot.tiar.app` | `174.138.21.128` `188.166.206.224` |
| Canada | **CIRA Canadian Shield** | `https://private.canadianshield.cira.ca/dns-query` | `private.canadianshield.cira.ca` | `149.112.121.10` `149.112.122.10` |

## How it works — DNS, DoH & DoT

**What DNS is**: DNS (the Domain Name System) translates a **domain name** you type (like `google.com`) into the **IP address** a server is reachable at (like `142.250.x.x`). Every site you open starts with a DNS lookup.

**Why plain DNS is risky**: traditional plain DNS is not encrypted at all. The lookup travels in clear text through your ISP and every network hop, so it can be:

- **Seen** — your ISP, public Wi-Fi, or any network in between can see exactly which sites you visit;
- **Tampered with** — a party in the middle can forge the answer and send you to the wrong (or malicious) IP — this is **DNS hijacking / DNS poisoning**.

**DoH and DoT**: both are standard protocols that **encrypt** the DNS lookup; they differ only in which channel they use —

| Protocol | Full name | In plain terms |
| --- | --- | --- |
| **DoH** | DNS over HTTPS | Hides the DNS query inside HTTPS traffic so it looks like normal web traffic — hardest to detect or block |
| **DoT** | DNS over TLS | Encrypts DNS over its own dedicated port (853) — a cleaner implementation |

Encrypted DNS is configured at the **system, browser, or router** level — not just inside the browser. Setting it on the system or router protects every app on that device (or the whole network) at once.

---

> If the connection has not recovered, see the [FAQ](/en/guide/faq) entries on overseas websites that do not open and on checking the extension with Diagnostics, or [contact support](/en/guide/support).
