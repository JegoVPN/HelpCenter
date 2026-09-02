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
lastVerified: 2026-09-02
dateModified: 2026-09-02
platforms: [ios, ipados]
tools: [clash]
appliesTo: [jego-subscription]
sources: [https://clash.md/zh/platforms/ios, https://clash.md/zh/guide/ios, https://apps.apple.com/app/id6794257189?platform=iphone]
title: Clash for iOS 使用指南 - 无忧行订阅
description: 在 iPhone 和 iPad 上安装 Clash、添加无忧行 Mihomo 订阅、选中配置并从首页启动。
---

# Clash for iOS 使用指南

本页适用于 iPhone 和 iPad。请先从 [Clash iOS 官网](https://clash.md/zh/platforms/ios) 或 [App Store](https://apps.apple.com/app/id6794257189?platform=iphone) 安装 Apple 原生版 Clash。

## 复制 Mihomo 订阅

1. 打开 [无忧行控制面板](https://jego.us) 并登录。
2. 进入 **订阅节点**。
3. 找到 **Mihomo** 订阅地址，点 **复制**。

<img class="jego-wide-screenshot" src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2Fbf6ZGnMBZioZr9rD5P5J_2Fimage_2.png" alt="无忧行控制面板中的 Mihomo 订阅地址" loading="lazy">

## iPhone：添加并启动

按图中 1–5 的顺序操作。第一次启动时，按 iOS 提示允许添加 VPN 配置。

<div class="clash-step-grid clash-step-grid--phone">
  <figure>
    <img src="/images/clash-apple/iphone/01-home-not-connected.webp" alt="iPhone 上未启动的 Clash 首页与顶部 Profile 入口" loading="lazy">
    <figcaption>1. 点击蓝色启动按钮左边的配置名字，进入配置中心。</figcaption>
  </figure>
  <figure>
    <img src="/images/clash-apple/iphone/02-add-profile-entry.webp" alt="iPhone 配置页面中被标出的添加配置入口" loading="lazy">
    <figcaption>2. 在配置页点「添加配置」。</figcaption>
  </figure>
  <figure>
    <img src="/images/clash-apple/iphone/03-filled-subscription-blurred.webp" alt="iPhone 添加 Profile 页面，已填写无忧行 JegoVPN.com 与经过模糊处理的 Mihomo 订阅地址" loading="lazy">
    <figcaption>3. 选择 Link，粘贴 Mihomo 地址并填写名称；图中地址已模糊。</figcaption>
  </figure>
  <figure>
    <img src="/images/clash-apple/iphone/04-profile-selected.webp" alt="iPhone Profiles 页面已选中无忧行 JegoVPN.com" loading="lazy">
    <figcaption>4. 点无忧行配置，确认左侧出现勾选。</figcaption>
  </figure>
  <figure>
    <img src="/images/clash-apple/iphone-home-connected.jpg" alt="iPhone 真机上无忧行 JegoVPN.com 使用 Rule 模式并成功启动" loading="lazy">
    <figcaption>5. 回到首页选 Rule 并启动；绿色 STOP 表示正在运行。</figcaption>
  </figure>
</div>

## iPad：添加并启动

按图中 1–4 的顺序操作；第一次启动时允许添加 VPN 配置。

<div class="clash-step-grid">
  <figure>
    <img src="/images/clash-apple/ipad/01-home-not-connected.webp" alt="iPad 上未启动的 Clash 首页与 Profiles 侧边栏入口" loading="lazy">
    <figcaption>1. 首页和 Profiles 都在左侧栏；顶部显示当前 Profile。</figcaption>
  </figure>
  <figure>
    <img src="/images/clash-apple/ipad/02-profiles-and-add-cropped.webp" alt="iPad Profiles 页面中的 Add Profile 入口与当前配置" loading="lazy">
    <figcaption>2. 进入 Profiles，点 Add Profile；勾选表示当前配置。</figcaption>
  </figure>
  <figure>
    <img src="/images/clash-apple/ipad/03-filled-subscription-blurred-cropped.webp" alt="iPad 添加 Profile 页面，已填写无忧行名称与经过模糊处理的 Mihomo 订阅地址" loading="lazy">
    <figcaption>3. 粘贴 Mihomo 地址、填写名称并点 Add；图中地址已模糊。</figcaption>
  </figure>
  <figure>
    <img src="/images/clash-apple/ipad/04-home-connected-cropped.webp" alt="iPad 已选中无忧行 Profile、Rule 模式并成功启动" loading="lazy">
    <figcaption>4. 返回首页选择 Rule 并启动；绿色 STOP 和启动时长表示已连接。</figcaption>
  </figure>
</div>

如果 iPad 分屏后界面变窄，底部会出现和 iPhone 相似的菜单。这时点首页顶部的配置名称，就能进入配置页。

## 选择节点

<div class="clash-step-grid clash-step-grid--phone">
  <figure>
    <img src="/images/clash-apple/iphone-home-connected.jpg" alt="iPhone 上已启动的 Clash 首页与 Proxies 入口" loading="lazy">
    <figcaption>1. 在首页点 Proxies（代理）。</figcaption>
  </figure>
  <figure>
    <img src="/images/clash-apple/iphone/05-proxy-selection.webp" alt="iPhone 上的策略组和节点选择页面，当前节点左侧有蓝色勾选" loading="lazy">
    <figcaption>2. 点开一个分组，再点要用的节点；蓝色勾表示已经选中，绿色数字越小通常越快。</figcaption>
  </figure>
</div>

<div class="clash-step-grid clash-step-grid--wide">
  <figure>
    <img src="/images/clash-apple/ipad/05-proxy-selection.webp" alt="iPad 上从左侧栏进入代理后的策略组和节点选择页面" loading="lazy">
    <figcaption>iPad：从首页左侧栏点「代理」，再点开分组选择节点。想重新测速时，点闪电按钮。</figcaption>
  </figure>
</div>

日常使用选 **Rule**，Clash 会根据你打开的网站使用对应的节点分组。第一次使用时，建议把每个分组都点开看一次：**Manual Select**、**ChatGPT Group** 等手动分组各选一个节点；**Auto Select** 会自己选择，不用设置。只有想让所有流量都走同一线路时才用 **Global**；**Direct** 是不使用代理。

## 添加后没有节点

如果添加后看不到节点，先回到配置页，确认 `无忧行 JegoVPN.com` 左侧有勾，再点一次更新。还是没有，就回无忧行控制面板重新复制 **Mihomo** 订阅，然后重新添加。

更多 iPhone 与 iPad 界面说明见 [Clash 官方 iOS 指南](https://clash.md/zh/guide/ios)。

其他 Apple 设备的教程可从 [Clash Apple 使用指南](/guide/clash-apple) 选择 macOS 或 tvOS。
