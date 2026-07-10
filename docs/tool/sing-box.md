---
jegoSupport: supported
tool: sing-box
clientKind: null
minimumOs: []
architectures: []
subscriptionFormats: []
lifecycle: current
recommendation: advanced
securityStatus: needs-review
supportedVersions: []
replacements: []
officialSources: [https://github.com/SagerNet/sing-box]
translationKey: tool-sing-box
contentType: tool-guide
product: subscription-service
productArea: tools
uiSurface: null
locale: zh-Hans
status: current
owner: docs
reviewStatus: needs-review
lastVerified: 2026-07-10
platforms: [windows, macos, linux, android, ios]
tools: [sing-box]
appliesTo: []
sources: [https://github.com/SagerNet/sing-box]
title: sing-box - 工具软件
description: sing-box 是跨平台网络代理项目；当前协议、平台与版本以官方项目文档和发布页为准。
---

# sing-box

sing-box 是跨平台网络代理项目。当前协议、平台与版本以官方项目文档和发布页为准，本页不使用“支持所有协议”或“全平台”作为承诺。

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FX6LBfzRlMdWyQVvPC9eg_2Fimage_1.png" width="38" height="38" alt="sing-box图标">

### sing-box简介

* **丰富的协议支持**：sing-box支持众多协议，包括但不限于SOCKS、HTTP、Shadowsocks、VMess、Trojan、Wireguard、Hysteria、VLESS、ShadowTLS、TUIC、Hysteria2、AnyTLS、Tor、SSH等​​。
* **高度定制的路由功能**：sing-box允许用户根据需要设置复杂的路由规则，有效地管理网络流量。
* **适用于多种平台**：sing-box提供了对多个操作系统的支持，包括macOS、Windows、Linux、Android和iOS平台，这使得它能够满足不同用户的需求​​。
* **图形界面客户端**：为了方便用户操作，sing-box官方就提供了图形界面客户端，简化了配置和管理过程。

## 获取sing-box

### 苹果全家桶

macOS iOS iPadOS tvOS的用户请移步： [sing-box for Apple](/tool/sing-boxforapple)

### Andorid设备

安卓的用户请移步： [sing-box for Android](/tool/sing-boxforandroid)

### Windows

Windows的用户请移步： [GUI.for.SingBox](/tool/guiforsing-box)

### Linux

Linux的硬核玩家请移步sing-box官方的[Github Release](https://github.com/SagerNet/sing-box/releases)

## sing-box 常见问题

### 仅境内网站可以访问时

**🟡 情况一：刚启动时**

部分配置在启动时会执行 URL 测试或下载规则集，期间可能暂时没有可用结果。是否测试、测试对象和 DNS 行为取决于实际配置；请根据状态文字和日志排查，不把它概括为“选择最快节点”。

> ✅ 解决方法：如果不想等待测速过程，可以手动选择一个可用节点，这样就能立即访问境外网站。

**🟡 情况二：使用过程中出现相同问题**

如果在使用过程中也突然无法访问境外网站，很可能是当前所选节点不可用或连接质量差。

> ✅ 解决方法：请检查当前节点的连通性，必要时手动切换到一个稳定可用的节点，即可恢复访问。

---

**💡** 注意：此问题不会影响境内网站的访问，也不影响基于境外 IP 的服务（如 Telegram）的使用，只影响访问境外域名的网站。
