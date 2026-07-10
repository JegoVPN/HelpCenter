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
platforms: [chrome, edge, firefox, windows, macos, android, ios, ipados]
tools: []
appliesTo: []
sources: []
title: Encrypted DNS (DoH / DoT) — Complete Guide - User Guide
description: A plain-language guide to encrypted DNS — what DNS is, why plain DNS is risky, the difference between DoH and DoT, how to turn it on per platform, and what to use in mainland China.
---

# Encrypted DNS (DoH / DoT) — Complete Guide

A surprising number of "the site won't open / the page dies halfway / I'm on the proxy but it still fails" problems start at the **DNS** step. This guide explains, in plain language, what DNS is, why plain DNS is risky, how encrypted DNS (DoH / DoT) helps, and how to turn it on across your devices.

## 1. DNS and plain-text queries

DNS (the Domain Name System) translates a **domain name** you type (like `google.com`) into the **IP address** a server is reachable at (like `142.250.x.x`). Every site you open starts with a DNS lookup.

The catch: **traditional plain DNS is not encrypted at all.** That lookup travels in clear text through your ISP and every network hop along the way, so it can be:

- **Seen** — your ISP, public Wi-Fi, or any network in between can see exactly which sites you visit;
- **Tampered with** — a party in the middle can forge the answer and send you to the wrong (or malicious) IP — this is **DNS hijacking / DNS poisoning**.

Encrypted DNS exists to fix both the "seen" and the "tampered with" problems.

## 2. DoH and DoT

Both are standard protocols that **encrypt** the DNS lookup; they differ only in which channel they use:

| Protocol | Full name | In plain terms |
| --- | --- | --- |
| **DoH** | DNS over HTTPS | Hides the DNS query inside HTTPS traffic so it looks like normal web traffic — hardest to detect or block |
| **DoT** | DNS over TLS | Encrypts DNS over its own dedicated port (853) — a cleaner implementation |

::: tip Key point
Encrypted DNS is configured at the **system, browser, or router** level — **not just inside Chrome.** Setting it on the system or router protects every app on that device (or the whole network) at once.
:::

## 3. How this relates to Jego

Jego is a **browser proxy** — it only carries traffic inside the browser and **does not carry your system DNS**. So encrypted DNS and Jego complement each other:

- It blocks **DNS hijacking / poisoning on your local link** and improves privacy;
- In mainland China, a **foreign encrypted resolver (like 1.1.1.1) won't work as your DNS** — see the mainland China section below for why.

## 4. 🇨🇳 Mainland China

If you're in mainland China, **read this section first** — the overseas resolvers below won't work as your DNS here.

::: warning Resolver availability in mainland China
Foreign public resolvers (e.g. Cloudflare 1.1.1.1, Google 8.8.8.8, Quad9, AdGuard, Mullvad) are **blocked or DNS-poisoned in mainland China** — the GFW forges plain-DNS answers and SNI-blocks foreign DoH/DoT — so they **will not work as your DNS** here.
:::

What to do instead: use a **domestic resolver** — these actually work in mainland China. Prefer Alibaba AliDNS or Tencent DNSPod over DoH/DoT; at minimum, set their **plain IP** (`223.5.5.5` or `119.29.29.29`) as your system DNS instead of your ISP's default. They stop local on-path tampering, but still follow domestic filtering.

> Every resolver address below is **kept verbatim** — every character of the path and IP matters (people often drop the trailing part when copying, and then it doesn't work).

| Provider | DoH URL | DoT hostname | Plain IP | Notes |
| --- | --- | --- | --- | --- |
| **AliDNS (Alibaba)** | `https://dns.alidns.com/dns-query` | `dns.alidns.com` | `223.5.5.5` `223.6.6.6` | Most widely used · no extra filtering |
| **DNSPod (Tencent)** | `https://doh.pub/dns-query` | `dot.pub` | `119.29.29.29` `119.28.28.28` | Tencent · anti-hijacking |
| **360 Secure DNS** | `https://doh.360.cn/dns-query` | `dot.360.cn` | `101.226.4.6` `218.30.118.6` | Qihoo 360 · blocks malicious domains |

> Baidu and the carrier resolvers offer only plain DNS, so prefer AliDNS or Tencent. Also note: Jego proxies your browser, not your system DNS, so a foreign resolver like 1.1.1.1 won't start working here just because Jego is on.

## 5. 🌍 Encrypted DNS resolvers worldwide (outside mainland China)

### Top global picks (use any one)

These public endpoints are configuration references. Reachability, filtering, logging, and retention policies can change; verify each provider's current official documentation. The table makes no speed, privacy, or availability guarantee:

| Provider | DoH URL | DoT hostname | Plain IP | Notes |
| --- | --- | --- | --- | --- |
| **Cloudflare** | `https://cloudflare-dns.com/dns-query` | `one.one.one.one` | `1.1.1.1` `1.0.0.1` | Check the provider's current feature and privacy policy |
| **Google** | `https://dns.google/dns-query` | `dns.google` | `8.8.8.8` `8.8.4.4` | Check the provider's current feature and privacy policy |
| **Quad9** | `https://dns.quad9.net/dns-query` | `dns.quad9.net` | `9.9.9.9` `149.112.112.112` | Optional malicious-domain protection; verify current policy |
| **AdGuard** | `https://dns.adguard-dns.com/dns-query` | `dns.adguard-dns.com` | `94.140.14.14` `94.140.15.15` | Optional filtering; verify current policy |
| **Mullvad** | `https://dns.mullvad.net/dns-query` | `dns.mullvad.net` | `194.242.2.2` | Encrypted endpoint; verify current policy |

::: details More global resolvers (click to expand)
| Provider | DoH URL | DoT hostname | Plain IP | Notes |
| --- | --- | --- | --- | --- |
| **NextDNS** | `https://dns.nextdns.io` | — | `45.90.28.0` `45.90.30.0` | Configurable per-account profiles · US/EU/UK/CH data residency · DoT needs a profile ID |
| **ControlD (free, unfiltered)** | `https://freedns.controld.com/p0` | `p0.freedns.controld.com` | `76.76.2.0` `76.76.10.0` | Canada · variants p1/p2/p3 add malware/ad/social blocking |
| **OpenDNS (Cisco)** | `https://doh.opendns.com/dns-query` | `dns.opendns.com` | `208.67.222.222` `208.67.220.220` | Blocks malware/phishing · US |
| **CleanBrowsing (security)** | `https://doh.cleanbrowsing.org/doh/security-filter/` | `security-filter-dns.cleanbrowsing.org` | `185.228.168.9` `185.228.169.9` | Security-filtering endpoint; verify current policy |
:::

::: details Region-specific resolvers (click to expand)
In addition to the global anycast set above, these add local jurisdiction / data-sovereignty / non-profit privacy options.

**Europe · data sovereignty**

| Provider | DoH URL | DoT hostname | Plain IP | Notes |
| --- | --- | --- | --- | --- |
| **DNS4EU** | `https://unfiltered.joindns4.eu/dns-query` | `unfiltered.joindns4.eu` | `86.54.11.100` `86.54.11.200` | Check official documentation for endpoint variants and policy |
| **DNS.SB** | `https://doh.sb/dns-query` | `dot.sb` | `185.222.222.222` `45.11.45.11` | Check official documentation for coverage and privacy policy |
| **Digitale Gesellschaft** | `https://dns.digitale-gesellschaft.ch/dns-query` | `dns.digitale-gesellschaft.ch` | `185.95.218.42` `185.95.218.43` | Encrypted endpoint; verify current policy |

**Russia / CIS**

| Provider | DoH URL | DoT hostname | Plain IP | Notes |
| --- | --- | --- | --- | --- |
| **Yandex (Basic)** | `https://common.dot.dns.yandex.net/dns-query` | `common.dot.dns.yandex.net` | `77.88.8.8` `77.88.8.1` | Safe/Family variants add filtering |

**Asia-Pacific**

| Provider | DoH URL | DoT hostname | Plain IP | Notes |
| --- | --- | --- | --- | --- |
| **IIJ (Japan)** | `https://public.dns.iij.jp/dns-query` | `public.dns.iij.jp` | — | Encrypted endpoint; verify current policy |
| **Tiarap** | `https://doh.tiar.app/dns-query` | `dot.tiar.app` | `174.138.21.128` `188.166.206.224` | Optional filtering; verify current policy |

**Americas / Oceania**

| Provider | DoH URL | DoT hostname | Plain IP | Notes |
| --- | --- | --- | --- | --- |
| **CIRA Canadian Shield** | `https://private.canadianshield.cira.ca/dns-query` | `private.canadianshield.cira.ca` | `149.112.121.10` `149.112.122.10` | Endpoint variants and privacy policy may change; verify officially |
:::

## 6. How to turn on encrypted DNS (recommended combo)

System-wide encrypted DNS is fiddly on Windows / macOS (Windows needs a `netsh` template registration; Apple needs a `.mobileconfig` profile). For most people, **two layers** are enough:

### ① System layer: set a plain-IP public DNS (covers all apps)

Replace your ISP's default system DNS with a public resolver — **this step isn't encrypted**, but it drops the ISP default and blocks the most common local DNS hijacking:

- Mainland China: `223.5.5.5` (AliDNS) or `119.29.29.29` (DNSPod)
- Elsewhere: `1.1.1.1` (Cloudflare) or `8.8.8.8` (Google)

> Windows: Settings → Network & internet → adapter properties → DNS server assignment → Manual → enter the IP (leave encryption Off). macOS: System Settings → Network → your network's "Details" → DNS → add the IP.

### ② Browser layer: turn on encrypted DNS (DoH) — where you actually browse

DoH is easiest in the browser (paste one URL), and that's where most of your web browsing happens:

| Browser | Where to set it |
| --- | --- |
| **Chrome / Edge** | Settings → Privacy and security → Security → Use secure DNS → "With" custom → paste a DoH URL |
| **Firefox** | Settings → Privacy & Security → DNS over HTTPS → Max Protection → Custom → paste a DoH URL |

Which URL: in **mainland China** use AliDNS/DNSPod DoH (`https://dns.alidns.com/dns-query`, etc.; foreign DoH doesn't work there); **elsewhere** use Cloudflare/Google (see Section 5).

### Phones

- **Android 9+**: natively supported — Settings → Network & internet → Private DNS → enter the DoT hostname (the DoT column). Easiest option.
- **iOS**: no built-in field for DoH; install a `.mobileconfig` profile (see "Advanced" below).

::: warning What this combo does and doesn't cover
Browser DoH **only encrypts the browser's DNS**. With a plain-IP system DNS, other apps' lookups stay in plaintext — and in mainland China they can still be spoofed by the GFW (a plain IP only blocks ordinary ISP hijacking). To encrypt **every app**, use the "Advanced" section below to set DoH at the system or router level.
:::

::: details Advanced: encrypt DNS for the whole system / all apps (click to expand)

| Platform | Where to set it |
| --- | --- |
| **Windows 11** | Settings → Network & internet → Wi-Fi/Ethernet → Hardware properties → DNS server assignment → Edit → Manual → turn on IPv4 → enter the **plain IP** (not a DoH URL) → set "Preferred DNS encryption" to "Encrypted only (DoH)" |
| **macOS / iOS** | Install a `.mobileconfig` profile (from the provider or a generator): on iOS via Settings → General → VPN, DNS & Device Management; on macOS double-click it, then confirm under System Settings → General → VPN & Device Management |
| **Router** | If your router supports DoT/DoH, set it there so every device on the network is covered |

> **Windows 11 note**: the built-in DoH only recognizes a few known providers (Cloudflare `1.1.1.1`, Google `8.8.8.8`, Quad9 `9.9.9.9`, etc.) — entering those plain IPs auto-encrypts. For any other resolver you must first register its DoH template with `netsh dns add encryption`, or the "Encrypted" toggle won't take effect.
:::

## 7. If you can't set up DoH/DoT (fallback)

::: tip At least do this
If you can't set up DoH/DoT for now, **at least set a plain public-resolver IP as your system DNS** instead of your ISP's default: `223.5.5.5` (AliDNS) in mainland China, or `1.1.1.1` / `8.8.8.8` elsewhere. It isn't encrypted, but it dodges the most common ISP-level DNS hijacking.
:::

---

> If the connection has not recovered, return to the [FAQ](/en/guide/faq) and follow the “Network environment + Browser environment” checklist, or [contact support](/en/guide/support).
