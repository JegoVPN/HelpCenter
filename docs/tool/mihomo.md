---
jegoSupport: supported
tool: mihomo
clientKind: null
minimumOs: []
architectures: []
subscriptionFormats: []
lifecycle: current
recommendation: advanced
securityStatus: needs-review
supportedVersions: []
replacements: []
officialSources: [https://github.com/MetaCubeX/mihomo, https://mihomo.party/]
translationKey: tool-mihomo
contentType: tool-guide
product: subscription-service
productArea: tools
uiSurface: null
locale: zh-Hans
status: current
owner: docs
reviewStatus: needs-review
lastVerified: 2026-07-10
platforms: [windows, macos, linux, android]
tools: [mihomo]
appliesTo: []
sources: [https://github.com/MetaCubeX/mihomo, https://mihomo.party/]
title: Mihomo系列软件 - 工具软件
description: 了解 Mihomo 系列客户端，并从对应设备教程进入安装和订阅步骤。
---

# Mihomo系列软件

MetaCubeX基于Clash核心推出的全新的Mihomo内核，团队持续地在开源社区维护和更新，生态链里已经推出了包含Windows、Andriod、macOS和Linux的客户端。

<img src="/images/Mihomo-logo.png" width="38" height="38" alt="Mihomo">

### Mihomo简介

Mihomo原名Clash Meta，是基于广受欢迎的开源网络代理工具Clash开发的增强网络代理工具。

Mihomo不仅继承了Clash的核心功能，还增加了一些独特的特性，如支持更多的出站传输协议和复杂的规则控制等。

### Mihomo支持的协议

Mihomo支持广泛的代理协议，可以满足多数用户的需求。支持的翻墙协议包括：HTTP、SOCKS、Shadowsocks、V2Ray(VMess、VLESS)、Trojan、Hysteria(Hysteria、Hysteria2)、TUIC、WireGuard。

### Mihomo功能特点

* **代理模块**：支持多种协议，如VLESS XTLS、Trojan XTLS等，实现了健康检查(如urltest/fallback)和TCP连接的并发处理。
* **规则模块**：提供详细的流量分流规则，支持SRC-PORT和DST-PORT的多条件控制，支持TCP/UDP分别设置。
* **DNS模块**：增强了域名嗅探器功能，支持使用代理解析IP和DNS over QUIC等技术。
* **TUN模块**：支持在macOS、Linux和Windows平台上运行，内置了必要的驱动程序​​。

## 以Mihomo为内核的客户端下载

::: info iOS产品说明
备注：Mihomo生态里目前还没有好用的iOS产品
:::

### 推荐使用下列软件

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2Fu2sHeQjHJurcgVhJB1zO_2Ficon_2.png" width="26" height="26" alt="FlClash图标"> [FlClash](/subscription/clients/flclash)

FlClash是一款基于Mihomo（原ClashMeta）的多平台代理客户端，简单易用，开源无广告。

<img src="/images/clashvergelogo.png" width="26" height="26" alt="Clash Verge Rev"> [Clash Verge Rev](/subscription/clients/clashverge)

Clash Verge Rev是一款基于Mihomo（原ClashMeta）内核的多平台代理客户端，并支持切换 Alpha 版本内核。简洁美观的用户界面，支持自定义主题颜色。

---

### 下列软件能用但不推荐：

### <img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FbeA5N21M1iATQm5HiGND_2Fwin_1.svg" width="38" height="28" alt="Windows图标"> Windows

[Clash Nyanpasu](https://github.com/libnyanpasu/clash-nyanpasu) 是一个使用Mihomo核心的翻墙客户端，基于tarui开发。界面简单，操作友好。

[Mihomo Party](https://mihomo.party/) 是一个使用Mihomo核心，简单更易用的代理翻墙客户端。

[Clash N](https://github.com/2dust/clashN) 是v2rayN的作者开发的基于Mihomo核心的翻墙客户端，同样是简单易用。

### <img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FrUGve1gm2gP1sXdvgjCw_2Fapple_1.svg" width="38" height="28" alt="macOS图标"> macOS

[Clash Nyanpasu](https://github.com/libnyanpasu/clash-nyanpasu) 是一个使用Mihomo核心的翻墙客户端，基于tarui开发。界面简单，操作友好。

[Mihomo Party](https://mihomo.party/) 是一个使用Mihomo核心，简单更易用的代理翻墙客户端。

[ClashX.Meta](https://github.com/MetaCubeX/ClashX.Meta) 旨在提供一个简单轻量化的代理客户端。

### <img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FJJlooO6sJC8xrcR6vqGj_2Flinux_1.svg" width="38" height="28" alt="Linux图标"> Linux

[Clash Nyanpasu](https://github.com/libnyanpasu/clash-nyanpasu) 是一个使用Mihomo核心的翻墙客户端，基于tarui开发。界面简单，操作友好。

[Mihomo Party](https://mihomo.party/) 是一个使用Mihomo核心，简单更易用的代理翻墙客户端。

### <img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F7Hh3XGbbAH0jtCKDKIF6_2Fandroid_3.svg" width="38" height="28" alt="Android图标"> Android

[Clash Meta for Android](https://github.com/MetaCubeX/ClashMetaForAndroid) 是根据Clash for Android修改的基于Mihomo核心的版本，界面简单易用。

### Mihomo 配置安全

旧版页面曾提供未核验的第三方“懒人配置”直链。远程配置可以改变流量去向和 DNS 行为，因此该链接已中性化：请只导入无忧行控制面板为当前账户生成的订阅地址，或使用 Mihomo 官方文档自行维护且已审阅的配置。

## Mihomo订阅地址

#### **添加订阅：**

在**无忧行 - 控制面板**里点击左侧导航栏**订阅节点** ，找到**Mihomo** 订阅地址并点击**复制**。

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FIiJUB1Wa62NjydQ7rhLb_2Fimage_1.png" alt="Mihomo订阅地址">

<div class="tip custom-block" style="padding-top: 8px">

无忧行订阅服务手机面板：<https://jego.us>

</div>

## 电脑上：Mihomo Party 翻墙视频教程

<YouTube videoId="jmnSpxgcbAI" title="Mihomo Party 翻墙视频教程" />

欢迎收看无忧行团队被迫营业录制的视频教程。

## 手机上：Clash Meta for Android 和 FlClash 翻墙视频教程

<YouTube videoId="HtZWdMHui6I" title="Clash Meta for Android 和 FlClash 翻墙视频教程" />
