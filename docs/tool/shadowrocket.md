---
jegoSupport: supported
tool: shadowrocket
clientKind: null
minimumOs: []
architectures: []
subscriptionFormats: []
lifecycle: current
recommendation: recommended
securityStatus: needs-review
supportedVersions: []
replacements: []
officialSources: [https://apps.apple.com/us/app/shadowrocket/id932747118]
translationKey: tool-shadowrocket
contentType: tool-guide
product: subscription-service
productArea: tools
uiSurface: null
locale: zh-Hans
status: current
owner: docs
reviewStatus: needs-review
lastVerified: 2026-07-10
platforms: [ios, ipados, macos, tvos]
tools: [shadowrocket]
appliesTo: []
sources: [https://apps.apple.com/us/app/shadowrocket/id932747118]
title: Shadowrocket - 工具软件
description: Shadowrocket 是一个功能齐全的 iOS 代理工具客户端，支持大多数常见的连接协议。
---

# Shadowrocket

Shadowrocket 是一个功能齐全的 iOS 代理工具客户端，支持大多数常见的连接协议。Apple 芯片（M 系列）的 Mac 也可以从 App Store 安装使用，本页步骤同样适用。

## <img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F7AV6HDd5wUpQFm7nVO7V_2Fshadowrocket_1.png" width="26" height="26" alt="Shadowrocket图标"> 获取Shadowrocket

App Store 可用性由 Apple 和开发者按账户地区决定。不要购买、共享账号或虚构地区资料；只使用本人合法账户与官方商店入口。应用商店账号地区的官方要求见[美区 Apple ID 注册教程](/subscription/devices/us-apple-id)；没有符合条件的账号时，可改用本人地区可用且受支持的其他客户端，或使用[浏览器插件](/guide/installation)。

## 下载 Shadowrocket

如 [Shadowrocket 官方 App Store 页面](https://apps.apple.com/us/app/shadowrocket/id932747118)在你的合法账户地区可用，可从商店购买或安装。

## 添加订阅

在**无忧行 - 控制面板**里点击左侧导航栏**订阅节点**  ，找到Shadowrocket订阅地址并点击**复制**。

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FR0ByTjT0xp3A9tvDTjft_2Fimage_2.png" alt="无忧行控制面板">

<div class="tip custom-block" style="padding-top: 8px">

手机上也能取订阅地址：用手机浏览器打开 <https://jego.us> 登录即可复制。

</div>

打开 **Shadowrocket**，点击右上角**＋**，类型选择 "**Subscribe** (订阅)"。 粘贴订阅链接至 URL 后，点击右上角 "**完成**"，Shadowrocket 将从订阅链接获取节点。

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FOBAhmS7As9DK6SaRhEkD_2Fimage_3.png" alt="添加订阅">

## 选择节点

选择需要使用的节点，打开右上角的**开关**，在弹出的 "**添加 VPN 配置**" 中点击"**允许**"，输入 iOS 设备密码后自动回到 Shadowrocket 即连接成功。

::: info 节点选择
如果你感觉节点速度慢，请在下方更换节点即可。全局路由中，配置模式会自动代理大部分国外网站，如果你访问的网站仍然缓慢，请切换至代理模式。
:::

## <img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F4lRzV037szhl6p8vID4X_2Fimage_1.png" alt="连接界面">

## **自动更新**

打开 Shadowrocket，点击底部导航栏的「**设置**」进入设置页面，点击下面的「**订阅**」，开启「**打开时更新**」和「**自动后台更新**」， 软件将会在后台自动更新订阅，免去你的麻烦。

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FnkMkolFKD3sT6aZExoM3_2Fimage_2.png" alt="自动更新">

## 选择代理模式

轻点「首页 / Home」>「全局路由 / Global Routing」，根据你的需求选择代理模式：

### **配置 / Config：只代理国外流量**

不要导入来源、维护状态和内容未经核验的第三方远程配置。需要规则分流时，优先使用 Jego 控制面板提供的对应订阅地址，并在导入前确认域名与账户一致。

适用于同时使用国内外服务的用户。\
配置模式下，中国大陆的流量走本地直连，不经过代理服务器。\
在大陆网站上查询 IP 得到的是本地 IP 地址。\
在国外网站上查询 IP 得到的是代理 IP 地址。\
分流规则无法做到全面且具有时效性，如果遇到以下情况，请尝试全局代理。

* 无法打开国际网站；
* 加载国际网站缓慢；

### **代理 / Proxy：代理所有流量**

适用于不依赖大陆服务的用户。

代理模式下，国外流量正常走代理；大陆流量也会经过代理服务器，能用但速度明显变慢。

### **直连 / Direct：不代理任何流量**

选择此模式将导致无法翻墙，与关闭 VPN 的效果一致。

### **场景 / Scene：根据场景代理流量**

你可以根据自身需要，自定义所需网络、路由、节点等代理条件。
