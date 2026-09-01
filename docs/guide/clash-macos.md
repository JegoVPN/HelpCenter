---
translationKey: guide-clash-macos
contentType: how-to
product: subscription-service
productArea: tools
uiSurface: clash-macos
locale: zh-Hans
status: current
owner: docs
reviewStatus: verified
lastVerified: 2026-09-01
dateModified: 2026-09-01
platforms: [macos]
tools: [clash]
appliesTo: [jego-subscription]
sources: [https://clash.md/zh/platforms/macos, https://clash.md/zh/guide/macos, https://apps.apple.com/app/id6794257189]
title: Clash for macOS 使用指南 - 无忧行订阅
description: 在 Mac 上安装 Clash、添加无忧行 Mihomo 订阅、选中配置并从首页启动。
---

# Clash for macOS 使用指南

请先从 [Clash macOS 官网](https://clash.md/zh/platforms/macos) 或 [App Store](https://apps.apple.com/app/id6794257189) 安装 Apple 原生版 Clash。

## 复制 Mihomo 订阅

1. 打开 [无忧行控制面板](https://jego.us) 并登录。
2. 进入 **订阅节点**。
3. 找到 **Mihomo** 订阅地址，点 **复制**。

<img class="jego-wide-screenshot" src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2Fbf6ZGnMBZioZr9rD5P5J_2Fimage_2.png" alt="无忧行控制面板中的 Mihomo 订阅地址" loading="lazy">

## 添加配置并启动

按图中 1–3 的顺序添加并选中配置。第一次启动时，按 macOS 提示允许 Clash 添加 VPN 配置。

<div class="clash-step-grid clash-step-grid--wide">
  <figure>
    <img src="/images/clash-apple/macos/01-home.webp" alt="Mac 上的 Clash 首页与左侧配置入口" loading="lazy">
    <figcaption>1. 从首页左侧栏进入配置；顶部显示当前 Profile。</figcaption>
  </figure>
  <figure>
    <img src="/images/clash-apple/macos/02-profiles-and-add.webp" alt="Mac 配置页面已选中无忧行 JegoVPN.com 并显示添加配置入口" loading="lazy">
    <figcaption>2. 点添加配置；添加完成后也在这里选中无忧行配置并确认勾选。</figcaption>
  </figure>
  <figure>
    <img src="/images/clash-apple/macos/04-filled-subscription-blurred.webp" alt="Mac 添加配置窗口，已填写无忧行名称与经过模糊处理的 Mihomo 订阅地址" loading="lazy">
    <figcaption>3. 选择链接，粘贴 Mihomo 地址、填写名称并点添加；图中地址已模糊。</figcaption>
  </figure>
</div>

添加完成后回到首页，确认顶部是 `无忧行 JegoVPN.com`、出站模式为 **规则**，再点右上角 **启动**。

## 选择节点

1. 从左侧栏进入 **代理（Proxies）**。
2. 打开策略组并选择一个节点。
3. 连接后可用 **Test All** 比较延迟。

日常使用请选择 **Rule**。菜单栏可以快速启动、停止以及切换 Rule / Global / Direct；选择节点仍需回到主窗口的 Proxies。

## 更新订阅

在配置列表右键 `无忧行 JegoVPN.com` 并选择同步；也可以打开配置详情后使用 **Sync Now**。如果同步后没有节点，请从无忧行控制面板重新复制 Mihomo 订阅再添加。

更多 Mac 界面说明见 [Clash 官方 macOS 指南](https://clash.md/zh/guide/macos)。

其他 Apple 设备的教程可从 [Clash Apple 使用指南](/guide/clash-apple) 选择 iOS 或 tvOS。
