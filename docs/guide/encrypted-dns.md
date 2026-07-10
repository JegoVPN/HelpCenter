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
title: 加密DNS（DoH / DoT）完全指南 - 使用指南
description: 用简单的话了解 DNS、明文查询、DoH 与 DoT，并按设备开启适合当前网络的加密 DNS。
---

# 加密DNS（DoH / DoT）完全指南

很多「打不开网站、网页加载到一半被掐断、明明连了代理却还是访问异常」的问题，根子都在 **DNS** 这一步。这篇文章用大白话讲清楚 DNS 是什么、为什么明文 DNS 不安全、加密 DNS（DoH / DoT）怎么帮你，以及在你的设备上怎么开。

## 一、DNS 与明文查询

DNS（域名系统）的作用，是把你输入的**域名**（如 `google.com`）翻译成服务器能识别的 **IP 地址**（如 `142.250.x.x`）。你每打开一个网站，背后都会先做一次 DNS 查询。

问题在于：**传统的明文 DNS 没有任何加密**。这次查询会以明文形式经过你的运营商和路途上的每一个网络节点，于是：

- **被看见**：运营商 / 公共 Wi-Fi / 中间网络能清楚看到你访问了哪些网站；
- **被篡改**：中间方可以伪造应答，把你导向错误甚至恶意的 IP——这就是常说的 **DNS 劫持 / DNS 污染**。

加密 DNS 就是为了解决「被看见」和「被篡改」这两件事。

## 二、DoH 与 DoT

两者都是把 DNS 查询**加密**起来的标准协议，区别只在「走哪条通道」：

| 协议 | 全称 | 简单理解 |
| --- | --- | --- |
| **DoH** | DNS over HTTPS | 把 DNS 查询藏进 HTTPS 流量里，和普通网页流量长得一样，最难被识别和封锁 |
| **DoT** | DNS over TLS | 用 TLS 单独加密 DNS，走专用端口（853），实现更干净 |

::: tip 关键认知
加密 DNS 是在**系统、浏览器或路由器**层面配置的，**不只是 Chrome 里的设置**。在系统或路由器上开启，能一次性保护这台设备（甚至整个网络）的所有应用。
:::

## 三、和无忧行的关系

无忧行是**浏览器代理**——它只接管浏览器内的流量，**不接管系统 DNS**。所以加密 DNS 和无忧行是互补关系：

- 它能挡住**本地链路上的 DNS 劫持 / 污染**，并提升隐私；
- 在中国大陆，**国外的加密 DNS（如 1.1.1.1）无法直接当作你的 DNS 使用**，原因见下方「中国大陆专区」。

## 四、🇨🇳 中国大陆专区

如果你人在中国大陆，**先看这一节**——下面的海外解析器在国内并不能直接当 DNS 用。

::: warning 国外解析器在国内用不了
国外的公共解析器（如 Cloudflare 1.1.1.1、Google 8.8.8.8、Quad9、AdGuard、Mullvad 等）在**中国大陆会被封锁或 DNS 污染**——GFW 会伪造明文 DNS 应答，并对国外 DoH/DoT 做 SNI 阻断——所以它们在国内**无法作为你的 DNS 正常使用**。
:::

正确做法：用**国内解析器**（在国内是真正能用的）。优先用阿里 AliDNS 或腾讯 DNSPod 的 DoH/DoT；退一步，至少把它们的**明文 IP**（`223.5.5.5` 或 `119.29.29.29`）设成系统 DNS，替换掉运营商默认的那个。它们能挡住本地链路上的篡改，但仍会遵循境内的过滤规则。

> 下面所有解析器地址都是**逐字照抄**，路径和 IP 一个字符都不能错（很多人复制时漏掉结尾，导致用不了）。

| 服务商 | DoH 地址 | DoT 主机名 | 明文 IP | 特点 |
| --- | --- | --- | --- | --- |
| **AliDNS（阿里）** | `https://dns.alidns.com/dns-query` | `dns.alidns.com` | `223.5.5.5` `223.6.6.6` | 使用最广 · 不额外过滤 |
| **DNSPod（腾讯）** | `https://doh.pub/dns-query` | `dot.pub` | `119.29.29.29` `119.28.28.28` | 腾讯 · 防劫持 |
| **360 安全 DNS** | `https://doh.360.cn/dns-query` | `dot.360.cn` | `101.226.4.6` `218.30.118.6` | 奇虎 360 · 拦截恶意域名 |

> 百度和运营商的 DNS 只有明文版，所以更推荐阿里或腾讯。另外提醒：无忧行只代理浏览器、不接管系统 DNS，所以即使开了无忧行，1.1.1.1 这类国外解析器在国内也不会因此就能用。

## 五、🌍 海外加密 DNS 服务器（中国大陆以外）

### 全球首选（任选其一）

这些公开端点可作为配置参考。可达性、过滤、日志和保留政策会变化，请在使用前核对服务商当前官方说明；下表不作速度、隐私或可用性保证：

| 服务商 | DoH 地址 | DoT 主机名 | 明文 IP | 特点 |
| --- | --- | --- | --- | --- |
| **Cloudflare** | `https://cloudflare-dns.com/dns-query` | `one.one.one.one` | `1.1.1.1` `1.0.0.1` | 功能与隐私政策请查服务商官方说明 |
| **Google** | `https://dns.google/dns-query` | `dns.google` | `8.8.8.8` `8.8.4.4` | 功能与隐私政策请查服务商官方说明 |
| **Quad9** | `https://dns.quad9.net/dns-query` | `dns.quad9.net` | `9.9.9.9` `149.112.112.112` | 可选恶意域名防护；核对当前政策 |
| **AdGuard** | `https://dns.adguard-dns.com/dns-query` | `dns.adguard-dns.com` | `94.140.14.14` `94.140.15.15` | 可选过滤功能；核对当前政策 |
| **Mullvad** | `https://dns.mullvad.net/dns-query` | `dns.mullvad.net` | `194.242.2.2` | 加密端点；核对当前政策 |

::: details 更多全球解析器（点击展开）
| 服务商 | DoH 地址 | DoT 主机名 | 明文 IP | 特点 |
| --- | --- | --- | --- | --- |
| **NextDNS** | `https://dns.nextdns.io` | — | `45.90.28.0` `45.90.30.0` | 可按账号自定义过滤 · 美/欧/英/瑞数据驻留 · DoT 需配置 ID |
| **ControlD（免费·不过滤）** | `https://freedns.controld.com/p0` | `p0.freedns.controld.com` | `76.76.2.0` `76.76.10.0` | 加拿大 · p1/p2/p3 变体可加恶意/广告/社媒拦截 |
| **OpenDNS（Cisco）** | `https://doh.opendns.com/dns-query` | `dns.opendns.com` | `208.67.222.222` `208.67.220.220` | 拦截恶意/钓鱼 · 美国 |
| **CleanBrowsing（安全版）** | `https://doh.cleanbrowsing.org/doh/security-filter/` | `security-filter-dns.cleanbrowsing.org` | `185.228.168.9` `185.228.169.9` | 安全过滤端点；核对当前政策 |
:::

::: details 各地区解析器（点击展开）
在上面的全球任播之外，下面这些提供本地司法管辖 / 数据主权 / 非营利隐私等额外选择。

**欧洲 · 数据主权**

| 服务商 | DoH 地址 | DoT 主机名 | 明文 IP | 特点 |
| --- | --- | --- | --- | --- |
| **DNS4EU** | `https://unfiltered.joindns4.eu/dns-query` | `unfiltered.joindns4.eu` | `86.54.11.100` `86.54.11.200` | 端点与过滤变体请查官方说明 |
| **DNS.SB** | `https://doh.sb/dns-query` | `dot.sb` | `185.222.222.222` `45.11.45.11` | 服务覆盖与隐私政策请查官方说明 |
| **Digitale Gesellschaft** | `https://dns.digitale-gesellschaft.ch/dns-query` | `dns.digitale-gesellschaft.ch` | `185.95.218.42` `185.95.218.43` | 加密端点；核对当前政策 |

**俄罗斯 / 独联体**

| 服务商 | DoH 地址 | DoT 主机名 | 明文 IP | 特点 |
| --- | --- | --- | --- | --- |
| **Yandex（基础版）** | `https://common.dot.dns.yandex.net/dns-query` | `common.dot.dns.yandex.net` | `77.88.8.8` `77.88.8.1` | Safe/Family 变体可加过滤 |

**亚太**

| 服务商 | DoH 地址 | DoT 主机名 | 明文 IP | 特点 |
| --- | --- | --- | --- | --- |
| **IIJ（日本）** | `https://public.dns.iij.jp/dns-query` | `public.dns.iij.jp` | — | 日本 · 仅加密 · 查询数据 24h 内删除 |
| **Tiarap** | `https://doh.tiar.app/dns-query` | `dot.tiar.app` | `174.138.21.128` `188.166.206.224` | 可选过滤端点；核对当前政策 |

**美洲 / 大洋洲**

| 服务商 | DoH 地址 | DoT 主机名 | 明文 IP | 特点 |
| --- | --- | --- | --- | --- |
| **CIRA Canadian Shield** | `https://private.canadianshield.cira.ca/dns-query` | `private.canadianshield.cira.ca` | `149.112.121.10` `149.112.122.10` | 加拿大 · 个人信息 24h 内删除 · Protected/Family 变体可加过滤 |
:::

## 六、开启加密 DNS（推荐组合）

系统级加密 DNS 在 Windows / macOS 上很折腾（Windows 要用 `netsh` 注册模板、Apple 要装 `.mobileconfig` 描述文件）。对大多数人，**分两层**就够用了：

### ① 系统层：填公共 DNS 的明文 IP（管所有应用）

把系统 DNS 从运营商默认换成公共解析器——**这一步不加密**，但能甩掉运营商默认 DNS、挡住最常见的本地 DNS 劫持：

- 中国大陆：`223.5.5.5`（阿里）或 `119.29.29.29`（腾讯）
- 海外：`1.1.1.1`（Cloudflare）或 `8.8.8.8`（Google）

> Windows：设置 → 网络和 Internet → 网卡属性 → DNS 服务器分配 → 手动 → 填上面的 IP（加密保持「关」即可）。macOS：系统设置 → 网络 → 当前网络「详细信息」→ DNS → 添加上面的 IP。

### ② 浏览器层：开加密 DNS（DoH）——你上网的主战场

浏览器里开 DoH 最省事，粘贴一个地址就行，而且网页浏览大多发生在这里：

| 浏览器 | 操作路径 |
| --- | --- |
| **Chrome / Edge** | 设置 → 隐私和安全 → 安全 → 使用安全 DNS → 选「自定义」→ 粘贴 DoH 地址 |
| **Firefox** | 设置 → 隐私与安全 → DNS over HTTPS → 最大保护 → 自定义 → 粘贴 DoH 地址 |

地址填哪个：**中国大陆**填阿里/腾讯的 DoH（`https://dns.alidns.com/dns-query` 等，国外 DoH 在国内用不了）；**海外**填 Cloudflare/Google（见上面第五节）。

### 手机

- **Android 9+**：原生就支持，设置 → 网络和互联网 → 私人 DNS → 填入 DoT 主机名（即表格里的 DoT 列），最省事。
- **iOS**：系统没有直接填 DoH 的入口，需安装 `.mobileconfig` 描述文件（见下方「进阶」）。

::: warning 这套组合的边界
浏览器 DoH **只加密浏览器的 DNS**；系统层用明文 IP 时，其他应用的查询仍是明文，在中国大陆也仍可能被 GFW 伪造（明文 IP 只能挡运营商最常见的劫持）。想让**所有应用**都走加密，就用下面的「进阶」在系统或路由器上开 DoH/DoT。
:::

::: details 进阶：让全系统、所有应用都走加密 DNS（点击展开）

| 平台 | 操作路径 |
| --- | --- |
| **Windows 11** | 设置 → 网络和 Internet → Wi-Fi/以太网 → 硬件属性 → DNS 服务器分配 → 编辑 → 手动 → 打开 IPv4 → 填**明文 IP**（不是 DoH 地址）→「首选 DNS 加密」选「仅加密(DoH)」 |
| **macOS / iOS** | 安装 `.mobileconfig` 配置描述文件（服务商提供或用生成器生成）：iOS 在「设置 → 通用 → VPN、DNS 与设备管理」中安装，macOS 双击文件后在「系统设置 → 通用 → VPN 与设备管理」确认 |
| **路由器** | 若路由器支持 DoT/DoH，在路由器上设置，全网设备一次性覆盖 |

> **Windows 11 注意**：系统内置 DoH 只认少数已知服务商（Cloudflare `1.1.1.1`、Google `8.8.8.8`、Quad9 `9.9.9.9` 等），直接填这些明文 IP 才会自动走加密；换成别的解析器，需先用 `netsh dns add encryption` 注册它对应的 DoH 模板，否则那个「加密」开关不会生效。
:::

## 七、暂时无法使用 DoH/DoT 时

::: tip 至少做这一步
如果暂时没有配置 DoH/DoT，可以先按系统说明使用公共解析器：中国大陆可用 `223.5.5.5`（阿里），其他地区可比较 `1.1.1.1` / `8.8.8.8`。这一步本身不加密，但有助于排除运营商默认 DNS 的解析影响。
:::

---

> 连接仍未恢复时，可以回到[常见问题](/guide/faq)，按“网络环境 + 浏览器环境”逐项检查，也可以直接[联系客服](/guide/support)。
