---
translationKey: guide-encrypted-dns
contentType: reference
product: general
productArea: network-reference
uiSurface: null
locale: zh-Hans
status: current
owner: docs
reviewStatus: needs-review
lastVerified: null
platforms: []
tools: []
appliesTo: []
sources: []
title: 加密 DNS（DoH / DoT）设置指南 - 使用指南
description: 按设备一步步开启加密 DNS（DoH / DoT），挡住大陆防火墙对翻墙的 DNS 劫持、污染与阻断；中国大陆改用阿里、腾讯等国内解析器。
---

# 加密 DNS（DoH / DoT）设置指南

**大陆防火墙对翻墙的干扰，早已深入到 DNS 这一层**——劫持、污染、阻断：你明明连上了代理，网站却打不开、网页加载一半被掐断，很多时候是 DNS 查询在半路被做了手脚。

加密 DNS（DoH / DoT）把这一步加密起来，别人看不见也改不了，是挡住劫持污染的第一道防线。

## 开启加密 DNS（两层就够）

跟着两步走就行：**系统里设好公共 DNS，浏览器里开好加密 DNS。**

::: warning 🇨🇳 中国大陆必读
国外的公共解析器（Cloudflare `1.1.1.1`、Google `8.8.8.8` 等）在**中国大陆会被封锁或污染，用不了**。请改用**国内解析器**：阿里或腾讯——下面每一步都会给出具体地址。
:::

### ① 系统层：填公共 DNS 的明文 IP（管所有应用）

把系统 DNS 从运营商默认换成公共解析器——**这一步不加密**，但能甩掉运营商默认 DNS、挡住最常见的本地 DNS 劫持：

- 中国大陆：`223.5.5.5`（阿里）或 `119.29.29.29`（腾讯）
- 海外：`1.1.1.1`（Cloudflare）或 `8.8.8.8`（Google）

> **Windows**：设置 → 网络和 Internet → 网卡属性 → DNS 服务器分配 → 手动 → 填上面的 IP（加密保持「关」即可）。
> **macOS**：系统设置 → 网络 → 当前网络「详细信息」→ DNS → 添加上面的 IP。
>
> 📷 图文教程：腾讯云 [系统及设备接入 Public DNS](https://cloud.tencent.com/document/product/302/110786)（Windows / macOS / iOS / Android / Linux）。

### ② 浏览器层：开加密 DNS（DoH）——你上网的主战场

浏览器里开 DoH 最省事，粘贴一个地址就行，而且网页浏览大多发生在这里：

| 浏览器 | 操作路径 |
| --- | --- |
| **Chrome / Edge** | 设置 → 隐私和安全 → 安全 → 使用安全 DNS → 选「自定义」→ 粘贴 DoH 地址 |
| **Firefox** | 设置 → 隐私与安全 → DNS over HTTPS → 最大保护 → 自定义 → 粘贴 DoH 地址 |

地址填哪个：**中国大陆**填阿里 / 腾讯的 DoH（`https://dns.alidns.com/dns-query`、`https://doh.pub/dns-query`，国外 DoH 在国内用不了）；**海外**填 Cloudflare / Google（`https://cloudflare-dns.com/dns-query`、`https://dns.google/dns-query`）。

> 📷 图文教程：腾讯云 [浏览器接入 Public DNS](https://cloud.tencent.com/document/product/302/110788)（Chrome / Edge / Firefox / Opera）。

## 配不了 DoH/DoT 时，至少做这一步

暂时没法配置 DoH/DoT 时，**至少把公共解析器的明文 IP 设为系统 DNS**，替换运营商默认的那个：中国大陆用 `223.5.5.5`（阿里），其他地区可用 `1.1.1.1` / `8.8.8.8`。这一步本身不加密，但能避开最常见的运营商 DNS 劫持。

## 参考：更多加密 DNS 服务器地址

### 🇨🇳 中国大陆解析器（含 DoT 与 360）

> 下面地址都是**逐字照抄**，路径和 IP 一个字符都不能错（很多人复制时漏掉结尾，导致用不了）。国内优先用阿里或腾讯；百度和运营商的 DNS 只有明文版。

| 服务商 | DoH 地址 | DoT 主机名 | 明文 IP | 特点 |
| --- | --- | --- | --- | --- |
| **AliDNS（阿里）** | `https://dns.alidns.com/dns-query` | `dns.alidns.com` | `223.5.5.5` `223.6.6.6` | 使用最广 · 不额外过滤 |
| **DNSPod（腾讯）** | `https://doh.pub/dns-query` | `dot.pub` | `119.29.29.29` `119.28.28.28` | 腾讯 · 防劫持 |
| **360 安全 DNS** | `https://doh.360.cn/dns-query` | `dot.360.cn` | `101.226.4.6` `218.30.118.6` | 奇虎 360 · 拦截恶意域名 |

### 🌍 海外加密 DNS 服务器（中国大陆以外）

这些公开端点可作为配置参考。可达性、过滤、日志和保留政策会变化，请在使用前核对服务商当前官方说明；下表不作速度、隐私或可用性保证。

**全球首选（任选其一）**

| 服务商 | DoH 地址 | DoT 主机名 | 明文 IP |
| --- | --- | --- | --- |
| **Cloudflare** | `https://cloudflare-dns.com/dns-query` | `one.one.one.one` | `1.1.1.1` `1.0.0.1` |
| **Google** | `https://dns.google/dns-query` | `dns.google` | `8.8.8.8` `8.8.4.4` |
| **Quad9** | `https://dns.quad9.net/dns-query` | `dns.quad9.net` | `9.9.9.9` `149.112.112.112` |
| **AdGuard** | `https://dns.adguard-dns.com/dns-query` | `dns.adguard-dns.com` | `94.140.14.14` `94.140.15.15` |
| **Mullvad** | `https://dns.mullvad.net/dns-query` | `dns.mullvad.net` | `194.242.2.2` |

**更多全球解析器**

| 服务商 | DoH 地址 | DoT 主机名 | 明文 IP | 特点 |
| --- | --- | --- | --- | --- |
| **NextDNS** | `https://dns.nextdns.io` | — | `45.90.28.0` `45.90.30.0` | 可按账号自定义过滤 · DoT 需配置 ID |
| **ControlD（免费·不过滤）** | `https://freedns.controld.com/p0` | `p0.freedns.controld.com` | `76.76.2.0` `76.76.10.0` | 加拿大 · p1/p2/p3 变体可加拦截 |
| **OpenDNS（Cisco）** | `https://doh.opendns.com/dns-query` | `dns.opendns.com` | `208.67.222.222` `208.67.220.220` | 拦截恶意/钓鱼 · 美国 |
| **CleanBrowsing（安全版）** | `https://doh.cleanbrowsing.org/doh/security-filter/` | `security-filter-dns.cleanbrowsing.org` | `185.228.168.9` `185.228.169.9` | 安全过滤端点 |

**各地区解析器**（本地司法管辖 / 数据主权 / 非营利隐私等额外选择）

| 地区 | 服务商 | DoH 地址 | DoT 主机名 | 明文 IP |
| --- | --- | --- | --- | --- |
| 欧洲 | **DNS4EU** | `https://unfiltered.joindns4.eu/dns-query` | `unfiltered.joindns4.eu` | `86.54.11.100` `86.54.11.200` |
| 欧洲 | **DNS.SB** | `https://doh.sb/dns-query` | `dot.sb` | `185.222.222.222` `45.11.45.11` |
| 欧洲 | **Digitale Gesellschaft** | `https://dns.digitale-gesellschaft.ch/dns-query` | `dns.digitale-gesellschaft.ch` | `185.95.218.42` `185.95.218.43` |
| 俄罗斯 | **Yandex（基础版）** | `https://common.dot.dns.yandex.net/dns-query` | `common.dot.dns.yandex.net` | `77.88.8.8` `77.88.8.1` |
| 日本 | **IIJ** | `https://public.dns.iij.jp/dns-query` | `public.dns.iij.jp` | — |
| 亚太 | **Tiarap** | `https://doh.tiar.app/dns-query` | `dot.tiar.app` | `174.138.21.128` `188.166.206.224` |
| 加拿大 | **CIRA Canadian Shield** | `https://private.canadianshield.cira.ca/dns-query` | `private.canadianshield.cira.ca` | `149.112.121.10` `149.112.122.10` |

## 原理选读：DNS、DoH 与 DoT

**DNS 是什么**：DNS（域名系统）把你输入的**域名**（如 `google.com`）翻译成服务器能识别的 **IP 地址**（如 `142.250.x.x`）。你每打开一个网站，背后都会先做一次 DNS 查询。

**明文 DNS 为什么不安全**：传统的明文 DNS 没有任何加密，这次查询会以明文经过你的运营商和路途上的每一个网络节点，于是——

- **被看见**：运营商 / 公共 Wi-Fi / 中间网络能清楚看到你访问了哪些网站；
- **被篡改**：中间方可以伪造应答，把你导向错误甚至恶意的 IP——这就是常说的 **DNS 劫持 / DNS 污染**。

**DoH 与 DoT**：两者都是把 DNS 查询**加密**起来的标准协议，区别只在「走哪条通道」——

| 协议 | 全称 | 简单理解 |
| --- | --- | --- |
| **DoH** | DNS over HTTPS | 把 DNS 查询藏进 HTTPS 流量里，和普通网页流量长得一样，最难被识别和封锁 |
| **DoT** | DNS over TLS | 用 TLS 单独加密 DNS，走专用端口（853），实现更干净 |

加密 DNS 是在**系统、浏览器或路由器**层面配置的，不只是浏览器里的设置。在系统或路由器上开启，能一次性保护这台设备（甚至整个网络）的所有应用。

---

> 连接仍未恢复时，可以看[常见问题](/guide/faq)里「打不开境外网站」和「用网络诊断自助检查插件」两条说明，也可以直接[联系客服](/guide/support)。
