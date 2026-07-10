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
description: 按设备安装无忧行支持的客户端，从控制面板复制和更新订阅，并了解浏览器插件、系统代理和 TUN 的区别。
---

# 在电脑和手机上使用无忧行订阅

无忧行会员可以把订阅添加到电脑或手机的兼容客户端中。完成一次安装和导入后，浏览器之外的应用也能使用无忧行线路。

浏览器插件和订阅服务是两种使用方式：Chrome、Edge 里的网页可以直接使用[无忧行浏览器插件](/guide/usage)；电脑软件和手机应用则通过本页的订阅客户端连接。

## 按设备安装

<span id="_1、关于应该使用什么客户端"></span>

这里只需要选择正在使用的设备。进入设备教程后，先安装页面推荐的客户端，再跟着同一篇教程导入订阅。

<div class="subscription-device-grid">
  <a class="subscription-device-card" href="/subscription/devices/windows"><img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FbeA5N21M1iATQm5HiGND_2Fwin_1.svg" width="38" height="28" alt="Windows 图标"><strong>Windows</strong><span>电脑安装教程</span></a>
  <a class="subscription-device-card" href="/subscription/devices/mac"><img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FrUGve1gm2gP1sXdvgjCw_2Fapple_1.svg" width="38" height="28" alt="macOS 图标"><strong>macOS</strong><span>Mac 安装教程</span></a>
  <a class="subscription-device-card" href="/subscription/devices/ios"><img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F7GBp8VQdHNWWH3aalDTP_2Fios_3.svg" width="38" height="28" alt="iOS 图标"><strong>iPhone / iPad</strong><span>苹果移动设备教程</span></a>
  <a class="subscription-device-card" href="/subscription/devices/android"><img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F7Hh3XGbbAH0jtCKDKIF6_2Fandroid_3.svg" width="38" height="28" alt="安卓图标"><strong>Android</strong><span>安卓手机教程</span></a>
  <a class="subscription-device-card" href="/subscription/devices/linux"><img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FJJlooO6sJC8xrcR6vqGj_2Flinux_1.svg" width="38" height="28" alt="Linux 图标"><strong>Linux</strong><span>电脑安装教程</span></a>
  <a class="subscription-device-card" href="/subscription/devices/harmony"><img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FhUBqYs4CpmMcueAi690m_2FHMOS_Logo_Icon_1.svg" width="38" height="28" alt="HarmonyOS 图标"><strong>HarmonyOS</strong><span>鸿蒙设备教程</span></a>
</div>

iPhone 和 iPad 的应用商店账号说明放在[Apple ID 教程](/subscription/devices/us-apple-id)中。v2rayN、v2rayNG、Loon 和 OneClick 的旧教程继续保留给现有用户查阅，当前安装请直接使用设备教程里的推荐客户端。

## 复制和更新订阅

客户端安装完成后，按下面的顺序添加无忧行订阅：

1. 打开无忧行控制面板，进入**订阅节点**。
2. 回到客户端教程，确认它使用的订阅类型。
3. 在“订阅节点”中复制对应的一行地址。
4. 把地址粘贴到客户端的添加订阅入口，保存并更新。
5. 节点出现后，选择线路并打开连接。

控制面板里的 Mihomo、sing-box、Surfboard、Shadowrocket、Surge、Quantumult X 和 Clash，是同一项订阅服务提供给不同客户端的格式。客户端教程写明使用哪一种，就复制哪一行。

以后需要取得新的节点时，在客户端里打开已有订阅并选择**更新**、**同步**或**刷新**。换电脑、换手机或更换客户端时，可以从控制面板再次复制相应格式。手机上也可以通过 <https://jego.us> 复制和管理订阅节点。

需要更换订阅地址时，可以在“订阅节点”页面执行重置。重置会生成新地址，原地址随即停止使用；把新地址重新导入正在使用的客户端即可。

## 浏览器插件、系统代理和 TUN

这三种方式控制的范围不同，按实际使用的应用选择即可。

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
