---
translationKey: guide-clash-ios
contentType: how-to
product: subscription-service
productArea: tools
uiSurface: clash-ios
locale: zh-Hans
status: current
owner: docs
reviewStatus: verified
lastVerified: 2026-09-12
dateModified: 2026-09-12
platforms: [ios, ipados]
tools: [clash]
appliesTo: [jego-subscription]
sources: [https://clash.md/zh/platforms/ios, https://clash.md/zh/guide/ios, https://apps.apple.com/app/id6794257189?platform=iphone]
title: Clash for iOS 使用指南 - 无忧行订阅
description: 在 iPhone 和 iPad 上安装 Clash，在配置中心粘贴无忧行 Mihomo 地址创建配置，并从首页启动。
---

# Clash for iOS 使用指南

本页适用于 iPhone 和 iPad。请先从 [Clash iOS 官网](https://clash.md/zh/platforms/ios) 或 [App Store](https://apps.apple.com/app/id6794257189?platform=iphone) 安装 Apple 原生版 Clash。

## 复制 Mihomo 订阅

1. 打开 [无忧行控制面板](https://jego.us) 并登录。
2. 进入 **订阅节点**。
3. 找到 **Mihomo** 订阅地址，点 **复制**。

<img class="jego-wide-screenshot" src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2Fbf6ZGnMBZioZr9rD5P5J_2Fimage_2.png" alt="无忧行控制面板中的 Mihomo 订阅地址" loading="lazy">

Clash 把节点和规则都放在**配置中心**里管理。粘贴一次地址，它会下载节点、配好规则，生成一份可以直接启动的配置。

## iPhone：创建配置并启动

按图中 1–7 的顺序操作。第一次启动时，按 iOS 提示允许添加 VPN 配置。

<div class="clash-step-grid clash-step-grid--phone">
  <figure>
    <img src="/images/clash-apple/iphone/01-home.webp" alt="iPhone 上刚安装好的 Clash 首页，顶部显示内置的 Direct 配置" loading="lazy">
    <figcaption>1. 点首页顶部的配置名，打开配置中心。刚装好时这里是内置的 Direct。</figcaption>
  </figure>
  <figure>
    <img src="/images/clash-apple/iphone/02-profile-center.webp" alt="iPhone 上的 Clash 配置中心，顶部有配置库、节点库、规则库三个页签" loading="lazy">
    <figcaption>2. 点「创建配置」，右上角的加号也是同一个入口。</figcaption>
  </figure>
  <figure>
    <img src="/images/clash-apple/iphone/03-create-node-link.webp" alt="iPhone 上的创建节点页面，链接页签中已粘贴配置链接" loading="lazy">
    <figcaption>3. 在「链接」页签粘贴刚复制的 Mihomo 地址，点「下一步」。Clash 会先把节点下载下来。</figcaption>
  </figure>
  <figure>
    <img src="/images/clash-apple/iphone/04-select-nodes.webp" alt="iPhone 上的选择节点页面，无忧行 JegoVPN.com 已勾选" loading="lazy">
    <figcaption>4. 回到「选择节点」，无忧行这一条已经勾上，直接点「下一步」。</figcaption>
  </figure>
  <figure>
    <img src="/images/clash-apple/iphone/05-select-rules.webp" alt="iPhone 上的选择规则页面，默认配置已选中" loading="lazy">
    <figcaption>5. 规则保持「默认配置」，点「完成」。</figcaption>
  </figure>
  <figure>
    <img src="/images/clash-apple/iphone/06-finish.webp" alt="iPhone 上的完成页面，显示名称、节点和规则" loading="lazy">
    <figcaption>6. 名称留空就会用来源的名字「无忧行 JegoVPN.com」，直接点「保存」。</figcaption>
  </figure>
  <figure>
    <img src="/images/clash-apple/iphone/07-home-running.webp" alt="iPhone 上已启动的 Clash 首页，按钮显示为绿色停止" loading="lazy">
    <figcaption>7. 回到首页，出站模式保持「规则」，点启动。按钮变成绿色的「停止」就表示正在运行。</figcaption>
  </figure>
</div>

## iPad：创建配置并启动

步骤和 iPhone 一样，入口换到了左侧栏。

<div class="clash-step-grid">
  <figure>
    <img src="/images/clash-apple/ipad/01-home.webp" alt="iPad 上刚安装好的 Clash，左侧栏有首页、代理、规则和配置" loading="lazy">
    <figcaption>1. 点左侧栏的「配置」。刚装好时顶部是内置的 Direct。</figcaption>
  </figure>
  <figure>
    <img src="/images/clash-apple/ipad/02-profile-center.webp" alt="iPad 上的配置中心，右侧是配置库、节点库和规则库" loading="lazy">
    <figcaption>2. 点「创建配置」，右上角的加号也是同一个入口。</figcaption>
  </figure>
  <figure>
    <img src="/images/clash-apple/ipad/03-create-node-link.webp" alt="iPad 上弹出的创建节点窗口，链接页签中已粘贴配置链接" loading="lazy">
    <figcaption>3. 向导以窗口弹出。在「链接」页签粘贴 Mihomo 地址，点「下一步」。</figcaption>
  </figure>
  <figure>
    <img src="/images/clash-apple/ipad/04-select-nodes.webp" alt="iPad 上的选择节点窗口，无忧行 JegoVPN.com 已勾选" loading="lazy">
    <figcaption>4. 无忧行这一条已经勾上，点「下一步」。接下来的选择规则和完成两步与 iPhone 相同。</figcaption>
  </figure>
  <figure>
    <img src="/images/clash-apple/ipad/05-home-running.webp" alt="iPad 上已启动的 Clash，按钮显示为绿色停止" loading="lazy">
    <figcaption>5. 回到首页，出站模式保持「规则」，点启动。</figcaption>
  </figure>
  <figure>
    <img src="/images/clash-apple/ipad/06-proxies.webp" alt="iPad 上从左侧栏进入代理后的分组和节点列表" loading="lazy">
    <figcaption>6. 选节点点左侧栏的「代理」，再点开分组选节点。</figcaption>
  </figure>
</div>

分屏或把窗口拖窄时，界面会换成和 iPhone 一样的底部页签，操作不变。

## 选择节点

<div class="clash-step-grid clash-step-grid--phone">
  <figure>
    <img src="/images/clash-apple/iphone/07-home-running.webp" alt="iPhone 上已启动的 Clash 首页与代理卡片" loading="lazy">
    <figcaption>1. 在首页点「代理」卡片。</figcaption>
  </figure>
  <figure>
    <img src="/images/clash-apple/iphone/08-proxies.webp" alt="iPhone 上的代理页面，展开的分组中有一个节点带蓝色勾选和延迟" loading="lazy">
    <figcaption>2. 点开分组再点节点。蓝色勾表示已经选中，绿色毫秒数越小通常越快。想重新测速就点闪电按钮。</figcaption>
  </figure>
</div>

默认配置会生成两个分组：**PROXY** 是主选择组，**AUTO** 会自己挑延迟低的节点。想固定用某个地区，就在 PROXY 里选具体节点；不想操心就让它留在 AUTO。

## 出站模式

首页的**出站模式**卡片有三个选项：

- **规则**：按配置里的规则分流，国内网站和局域网直连，其余流量走你选的节点。日常使用选这个。
- **全局**：所有流量都走同一个节点。
- **直连**：不使用代理。

## 更新配置链接

无忧行调整节点后，在配置中心里刷新一次就能拿到最新节点。

<div class="clash-step-grid clash-step-grid--phone">
  <figure>
    <img src="/images/clash-apple/iphone/09-node-library.webp" alt="iPhone 上的节点库页面，列出配置链接来源和更新全部外部资源按钮" loading="lazy">
    <figcaption>点首页的配置名打开配置中心，切到「节点库」，再点「更新全部外部资源」。</figcaption>
  </figure>
</div>

点来源右侧的 ⓘ，可以只更新这一条。

## 添加后没有节点

先确认地址粘完整了，从控制面板复制时请用 **复制** 按钮，手动选中容易漏掉字符。然后到节点库点一次 **更新来源**。如果列表仍然是空的，回无忧行控制面板重新复制 **Mihomo** 订阅地址，在配置中心重新创建一次节点。

更多 iPhone 与 iPad 界面说明见 [Clash 官方 iOS 指南](https://clash.md/zh/guide/ios)。

其他 Apple 设备的教程可从 [Clash Apple 使用指南](/guide/clash-apple) 选择 macOS 或 tvOS。
