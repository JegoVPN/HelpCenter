---
translationKey: devices-tvos
contentType: device-guide
product: subscription-service
productArea: device-selection
uiSurface: clash-tvos
locale: zh-Hans
status: current
owner: docs
reviewStatus: verified
lastVerified: 2026-09-01
dateModified: 2026-09-01
platforms: [tvos]
tools: [clash]
appliesTo: [jego-subscription]
sources: [https://clash.md/zh/platforms/tvos, https://clash.md/zh/guide/tvos, https://apps.apple.com/app/id6794257189]
title: tvOS 翻墙指南 - Apple TV 设备支持
description: 在 Apple TV 上安装 Clash、添加无忧行 Mihomo 订阅、选中配置并启动。
---

# tvOS 翻墙指南

Apple TV 当前推荐使用 Apple 原生版 [Clash tvOS（官网）](https://clash.md/zh/platforms/tvos)。请先从 [App Store 下载 Clash](https://apps.apple.com/app/id6794257189)；下面直接说明如何添加无忧行订阅并启动。

## 复制 Mihomo 订阅

1. 在手机或电脑打开 [无忧行控制面板](https://jego.us) 并登录。
2. 进入 **订阅节点**。
3. 找到 **Mihomo** 订阅地址，点 **复制**。

<img class="jego-wide-screenshot" src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2Fbf6ZGnMBZioZr9rD5P5J_2Fimage_2.png" alt="无忧行控制面板中的 Mihomo 订阅地址" loading="lazy">

## 添加配置并启动

按图中 1–3 的顺序添加配置并返回 Home。首次选择 **START** 时，按 tvOS 提示允许添加 VPN 配置。

<div class="clash-step-grid clash-step-grid--wide">
  <figure>
    <img src="/images/clash-apple/tvos/01-first-launch.webp" alt="Apple TV 首次打开 Clash 时的 Add a profile 页面" loading="lazy">
    <figcaption>1. 首次打开后选择 Add a profile。</figcaption>
  </figure>
  <figure>
    <img src="/images/clash-apple/tvos/03-filled-subscription-blurred.webp" alt="Apple TV 添加 Profile 页面已输入经过模糊处理的 Mihomo 订阅地址" loading="lazy">
    <figcaption>2. 粘贴 Mihomo 地址后选择 Add profile；图中地址已模糊。</figcaption>
  </figure>
  <figure>
    <img src="/images/clash-apple/tvos/04-home-ready.webp" alt="Apple TV 已选中无忧行 JegoVPN.com、Rule 模式且可以启动" loading="lazy">
    <figcaption>3. 回到 Home，确认无忧行配置和 Rule，然后选择 START。</figcaption>
  </figure>
</div>

输入长地址时，可以使用附近 iPhone 或 iPad 弹出的 Apple TV 键盘，也可以使用 Apple TV Remote 的键盘输入。

## 选择节点

1. 在 Home 选择 **Node**，或进入 **Utilities** → **Nodes**。
2. 用 Siri Remote 在左侧选择策略组，再在右侧选择节点。
3. 当前节点会显示 **In use**。

Apple TV 显示已有延迟记录，但不提供 iPhone、iPad 和 Mac 上的 **Test All**。日常使用请选择 **Rule**；Direct 模式下不显示节点列表是正常现象。

## 添加后无法启动

先回到 Profile 详情确认 `无忧行 JegoVPN.com` 显示 **In use**，再重新选择 Rule 并启动。如果配置没有更新，重新输入从无忧行控制面板复制的 Mihomo 订阅。

更多 Apple TV 界面说明见 [Clash 官方 tvOS 指南](https://clash.md/zh/guide/tvos)。

其他 Apple 设备的教程可从 [Clash Apple 使用指南](/guide/clash-apple) 选择 iOS 或 macOS。
