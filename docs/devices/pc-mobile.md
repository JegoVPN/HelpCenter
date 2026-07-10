---
translationKey: devices-pc-mobile
contentType: overview
product: subscription-service
productArea: subscription-management
uiSurface: control-panel
locale: zh-Hans
status: current
owner: docs
reviewStatus: needs-review
lastVerified: null
platforms: [windows, macos, linux, android, ios, harmonyos]
tools: []
appliesTo: []
sources: []
title: 在电脑和手机上使用无忧行订阅
description: 选择正在使用的设备，安装合适的客户端，并了解不同连接方式的使用范围。
---

# 在电脑和手机上使用无忧行订阅

订阅服务可以让电脑软件和手机应用使用无忧行。选择下面正在使用的设备，按教程安装客户端即可。

订阅地址在无忧行**控制面板 → 订阅节点**，这里也会显示本月剩余流量。

<img src="/images/jego-v1.5.10/subscription-panel-zh.png" alt="无忧行控制面板的订阅节点页面" />

## 按设备安装

<span id="_1、关于应该使用什么客户端"></span>

选择正在使用的设备，进入对应教程。每篇教程会先列出当前支持的客户端。

<div class="subscription-device-grid">
  <a class="subscription-device-card" href="/subscription/devices/windows"><img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FbeA5N21M1iATQm5HiGND_2Fwin_1.svg" width="38" height="28" alt="Windows 图标"><strong>Windows</strong><span>电脑安装教程</span></a>
  <a class="subscription-device-card" href="/subscription/devices/mac"><img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FrUGve1gm2gP1sXdvgjCw_2Fapple_1.svg" width="38" height="28" alt="macOS 图标"><strong>macOS</strong><span>Mac 安装教程</span></a>
  <a class="subscription-device-card" href="/subscription/devices/ios"><img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F7GBp8VQdHNWWH3aalDTP_2Fios_3.svg" width="38" height="28" alt="iOS 图标"><strong>iPhone / iPad</strong><span>苹果移动设备教程</span></a>
  <a class="subscription-device-card" href="/subscription/devices/android"><img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F7Hh3XGbbAH0jtCKDKIF6_2Fandroid_3.svg" width="38" height="28" alt="安卓图标"><strong>Android</strong><span>安卓手机教程</span></a>
  <a class="subscription-device-card" href="/subscription/devices/linux"><img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FJJlooO6sJC8xrcR6vqGj_2Flinux_1.svg" width="38" height="28" alt="Linux 图标"><strong>Linux</strong><span>电脑安装教程</span></a>
  <a class="subscription-device-card" href="/subscription/devices/harmony"><img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FhUBqYs4CpmMcueAi690m_2FHMOS_Logo_Icon_1.svg" width="38" height="28" alt="HarmonyOS 图标"><strong>HarmonyOS</strong><span>鸿蒙设备教程</span></a>
</div>

iPhone 和 iPad 的应用商店账号说明放在[Apple ID 教程](/subscription/devices/us-apple-id)中。v2rayN、v2rayNG、Loon 和 OneClick 的旧教程继续保留给现有用户查阅，当前安装请直接使用设备教程里的推荐客户端。

## 避免浏览器插件和客户端冲突

无忧行浏览器插件和订阅客户端都可以处理浏览器请求。先了解它们各自负责的范围，就能根据当前使用方式正确配合。

- **浏览器插件**：负责安装了无忧行的 Chrome 或 Edge，适合主要在浏览器里使用。
- **系统代理**：客户端把代理设置写入系统，浏览器和支持系统代理的软件会使用该设置。
- **TUN 模式**：客户端创建虚拟网卡，并按照客户端规则处理进入虚拟网卡的网络请求，适合还需要覆盖其他电脑应用的场景。

<span id="_2、这些软件里的系统代理和虚拟网卡/tun的区别"></span>

系统代理和 TUN 都由订阅客户端控制。手机上的客户端通常通过系统显示的 VPN 连接来接管网络请求，连接仍由当前客户端和所选节点提供。

<span id="_3、开启软件的-tun-模式后设置无忧行插件"></span>

### 客户端使用 TUN 时的浏览器插件

电脑客户端已经开启 TUN 模式时，让无忧行浏览器插件保持**关闭**，浏览器请求便由当前客户端统一处理。

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FISwY5XX4FX2qker0nOYC_2Fimage_3.png" alt="无忧行插件关闭模式界面" width="280">

插件里的“关闭”只关闭浏览器插件自己的代理功能，不会影响电脑客户端和 TUN。只使用浏览器插件时，再从弹窗选择规则或全局模式。完整说明见[规则、全局和关闭](/guide/mode-selection)。

客户端的下载、安装和按钮位置都放在对应设备教程中；本页不再重复列出全部软件。站内搜索仍可以直接找到现有的 18 篇客户端教程。
