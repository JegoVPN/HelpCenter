---
title: Encrypted DNS (DoH / DoT) — Complete Guide - User Guide
description: A plain-language guide to encrypted DNS — what DNS is, why plain DNS is risky, the difference between DoH and DoT, how to turn it on per platform, and what to use in mainland China.
---

# Encrypted DNS (DoH / DoT) — Complete Guide

A surprising number of "the site won't open / the page dies halfway / I'm on the proxy but it still fails" problems start at the **DNS** step. This guide explains, in plain language, what DNS is, why plain DNS is risky, how encrypted DNS (DoH / DoT) helps, and how to turn it on across your devices.

## 1. What is DNS, and why is plain DNS risky?

DNS (the Domain Name System) translates a **domain name** you type (like `google.com`) into the **IP address** a server is reachable at (like `142.250.x.x`). Every site you open starts with a DNS lookup.

The catch: **traditional plain DNS is not encrypted at all.** That lookup travels in clear text through your ISP and every network hop along the way, so it can be:

- **Seen** — your ISP, public Wi-Fi, or any network in between can see exactly which sites you visit;
- **Tampered with** — a party in the middle can forge the answer and send you to the wrong (or malicious) IP — this is **DNS hijacking / DNS poisoning**.

Encrypted DNS exists to fix both the "seen" and the "tampered with" problems.

## 2. What are DoH and DoT?

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

::: warning Foreign resolvers don't work here
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

These are global anycast resolvers that auto-route to the nearest point of presence. They work well on every continent **except mainland China**, and are the default recommendation:

| Provider | DoH URL | DoT hostname | Plain IP | Notes |
| --- | --- | --- | --- | --- |
| **Cloudflare** | `https://cloudflare-dns.com/dns-query` | `one.one.one.one` | `1.1.1.1` `1.0.0.1` | Fastest · no filtering · query logs purged within ~25h |
| **Google** | `https://dns.google/dns-query` | `dns.google` | `8.8.8.8` `8.8.4.4` | Most reliable · no content filtering |
| **Quad9** | `https://dns.quad9.net/dns-query` | `dns.quad9.net` | `9.9.9.9` `149.112.112.112` | Blocks malicious domains · Switzerland · no PII logging |
| **AdGuard** | `https://dns.adguard-dns.com/dns-query` | `dns.adguard-dns.com` | `94.140.14.14` `94.140.15.15` | Blocks ads & trackers · Cyprus · no IP logging |
| **Mullvad** | `https://dns.mullvad.net/dns-query` | `dns.mullvad.net` | `194.242.2.2` | Open-source · Sweden · no logs · encrypted-only (no plain DNS) |

::: details More global resolvers (click to expand)
| Provider | DoH URL | DoT hostname | Plain IP | Notes |
| --- | --- | --- | --- | --- |
| **NextDNS** | `https://dns.nextdns.io` | — | `45.90.28.0` `45.90.30.0` | Configurable per-account profiles · US/EU/UK/CH data residency · DoT needs a profile ID |
| **ControlD (free, unfiltered)** | `https://freedns.controld.com/p0` | `p0.freedns.controld.com` | `76.76.2.0` `76.76.10.0` | Canada · variants p1/p2/p3 add malware/ad/social blocking |
| **OpenDNS (Cisco)** | `https://doh.opendns.com/dns-query` | `dns.opendns.com` | `208.67.222.222` `208.67.220.220` | Blocks malware/phishing · US |
| **CleanBrowsing (security)** | `https://doh.cleanbrowsing.org/doh/security-filter/` | `security-filter-dns.cleanbrowsing.org` | `185.228.168.9` `185.228.169.9` | Blocks malware/phishing · US · free tier keeps no query logs |
:::

::: details Region-specific resolvers (click to expand)
In addition to the global anycast set above, these add local jurisdiction / data-sovereignty / non-profit privacy options.

**Europe · data sovereignty**

| Provider | DoH URL | DoT hostname | Plain IP | Notes |
| --- | --- | --- | --- | --- |
| **DNS4EU** | `https://unfiltered.joindns4.eu/dns-query` | `unfiltered.joindns4.eu` | `86.54.11.100` `86.54.11.200` | EU-official · GDPR · 24h log deletion · protective.* variant blocks malware (86.54.11.1) |
| **DNS.SB** | `https://doh.sb/dns-query` | `dot.sb` | `185.222.222.222` `45.11.45.11` | Germany (xTom) · no logs · 30+ PoPs incl. strong Asia coverage |
| **Digitale Gesellschaft** | `https://dns.digitale-gesellschaft.ch/dns-query` | `dns.digitale-gesellschaft.ch` | `185.95.218.42` `185.95.218.43` | Switzerland non-profit · no logs · encrypted-only |

**Russia / CIS**

| Provider | DoH URL | DoT hostname | Plain IP | Notes |
| --- | --- | --- | --- | --- |
| **Yandex (Basic)** | `https://common.dot.dns.yandex.net/dns-query` | `common.dot.dns.yandex.net` | `77.88.8.8` `77.88.8.1` | Safe/Family variants add filtering |

**Asia-Pacific**

| Provider | DoH URL | DoT hostname | Plain IP | Notes |
| --- | --- | --- | --- | --- |
| **IIJ (Japan)** | `https://public.dns.iij.jp/dns-query` | `public.dns.iij.jp` | — | Japan · encrypted-only · query data deleted within 24h |
| **Tiarap** | `https://doh.tiar.app/dns-query` | `dot.tiar.app` | `174.138.21.128` `188.166.206.224` | Singapore · no logs · blocks ads & malware |

**Americas / Oceania**

| Provider | DoH URL | DoT hostname | Plain IP | Notes |
| --- | --- | --- | --- | --- |
| **CIRA Canadian Shield** | `https://private.canadianshield.cira.ca/dns-query` | `private.canadianshield.cira.ca` | `149.112.121.10` `149.112.122.10` | Canada · PII deleted within 24h · Protected/Family variants add filtering |
:::

## 6. How to turn on encrypted DNS

The steps differ per platform (most take a DoH URL; Android is DoT-only):

| Platform | Where to set it |
| --- | --- |
| **Chrome / Edge** | Settings → Privacy and security → Security → Use secure DNS → "With" custom → paste a DoH URL |
| **Firefox** | Settings → Privacy & Security → DNS over HTTPS → Max Protection → Custom → paste a DoH URL |
| **Windows 11** | Settings → Network & internet → adapter → DNS server assignment → Manual → On → Encrypted (DoH) |
| **macOS / iOS** | Install a DoH/DoT configuration profile (.mobileconfig) from the provider |
| **Android 9+** | Settings → Network & internet → Private DNS → enter the DoT hostname (the DoT column) |
| **Router** | If your router supports DoT/DoH, set it there so every device on the network is covered |

## 7. If you can't set up DoH/DoT (fallback)

::: tip At least do this
If you can't set up DoH/DoT for now, **at least set a plain public-resolver IP as your system DNS** instead of your ISP's default: `223.5.5.5` (AliDNS) in mainland China, or `1.1.1.1` / `8.8.8.8` elsewhere. It isn't encrypted, but it dodges the most common ISP-level DNS hijacking.
:::

---

> Still can't open a site? Go back to the [FAQ](/en/guide/faq) and work through the "Network environment + Browser environment" checklist, or [contact support](/en/guide/support).
