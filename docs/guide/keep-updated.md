---
translationKey: guide-keep-updated
contentType: how-to
product: browser-extension
productArea: browser-extension
uiSurface: null
locale: zh-Hans
status: current
owner: docs
reviewStatus: needs-review
lastVerified: null
platforms: [chrome, edge]
tools: []
appliesTo: []
sources: []
title: 更新插件 - 使用指南
description: 查看无忧行插件当前版本，在浏览器中完成更新，需要时重新安装。
---

# 更新插件

无忧行会持续更新插件版本。保持更新后，浏览器可以及时使用新的节点与连接设置。商店安装的插件通常会自动更新；需要立即确认时，按本页对应的浏览器步骤操作即可。

## 当前插件版本

<div class="version-card-grid">
  <a class="version-card" href="https://chromewebstore.google.com/detail/bnnamacamhjbdoimlbkegmbgkekphcbb">
    <span>Chrome</span>
    <strong>1.5.10</strong>
    <small>2026年8月31日 · Chrome Web Store</small>
  </a>
  <a class="version-card" href="https://microsoftedge.microsoft.com/addons/detail/bkpoijbobhmbglhjjmnoedomdoabilol">
    <span>Microsoft Edge</span>
    <strong>1.5.10</strong>
    <small>2026年8月31日 · Microsoft Edge 扩展商店</small>
  </a>
</div>

要查看本机已安装的版本：进入扩展管理页（`chrome://extensions/` 或 `edge://extensions/`），找到无忧行，点击**详情**（Edge 为**详细信息**）。

## 在 Chrome 中更新

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2Fomxd1Mr1qsuzHUduonWU_2Fchrome_1.png" width="38" height="28" alt="Chrome图标">

Chrome 通常会自动更新无忧行。需要立即检查时，下面三种方式任选一种即可：

1. 打开[无忧行的 Chrome Web Store 页面](https://chromewebstore.google.com/detail/bnnamacamhjbdoimlbkegmbgkekphcbb)，让 Chrome 检查商店版本。
2. 在地址栏输入 `chrome://extensions/`，打开扩展管理页，先打开**开发者模式**开关，左上角才会显示**更新**按钮。
3. 完全退出 Chrome 再重新打开，浏览器会自动检查扩展更新。

## 在 Edge 中更新

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F5JRmsC6cdLC8T1CMokaN_2Fmsedge_3.png" width="38" height="28" alt="Edge图标">

Edge 通常也会自动更新无忧行。需要立即检查时，下面三种方式任选一种即可：

1. 打开[无忧行的 Microsoft Edge 扩展商店页面](https://microsoftedge.microsoft.com/addons/detail/bkpoijbobhmbglhjjmnoedomdoabilol)，让 Edge 检查商店版本。
2. 在地址栏输入 `edge://extensions/`，打开扩展管理页，先打开**开发人员模式**开关，右上角才会显示**更新**按钮。
3. 完全退出 Edge 再重新打开，浏览器会自动检查扩展更新。

Edge 商店分批发布新版本期间，可以打开[在线安装说明](/guide/installation#在线安装)，核对当前可用的官方入口。

## 更新手动安装的版本

安装包支持以下浏览器，也适用于其他基于 Chromium（Chrome 内核）的浏览器：

<div class="manual-browser-grid">
  <span class="manual-browser-item"><img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F5C1uC1qTbxO3LKHO4oql_2Fmsedge_2.png" width="38" height="28" alt="Edge图标"><span>Edge</span></span>
  <span class="manual-browser-item"><img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FczhA5KDPiurdPyCanu1Z_2Fchrome_3.png" width="38" height="28" alt="Chrome图标"><span>Chrome</span></span>
  <span class="manual-browser-item"><img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FbhAczGOlghKJxh3Y4N7u_2FQQBrowser_1.png" width="38" height="28" alt="QQ浏览器图标"><span>QQ浏览器</span></span>
  <span class="manual-browser-item"><img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FYHwAipQtF3QwJ7z85hyz_2F360se_2.png" width="38" height="28" alt="360浏览器图标"><span>360浏览器</span></span>
</div>

需要手动安装包时，可以按固定格式组成下载地址：

1. 地址前半部分：`https://jegocloud.com/static/app/`
2. 安装包文件名：`JegoV` + 版本号 + `.zip`

以当前 `1.5.9` 版本为例，文件名是 `JegoV1.5.9.zip`。把地址前半部分和文件名连在一起，就是完整的下载地址。

也可以[联系支持](/guide/support)获取当前的 CRX 安装包。下载后，按照[安装教程](/guide/installation)里对应浏览器的手动安装步骤操作。

## 更新完成后

浏览器插件更新完成后，完全退出浏览器再重新打开。更新通常不会改变你的设置：点击无忧行图标，确认弹窗显示的还是你平时用的模式和节点即可；不确定选哪个节点时，用**自动选择**。

要确认整体工作状态，可以进入**控制面板** → **网络诊断**，查看当前模式、节点和常用网站的连接结果。

## 需要重新安装时

这一节只用于你已经决定重新安装，或客服明确请你重新安装的情况。

1. 记下当前版本和原来的安装来源；代理策略保存在你的账户里，重新登录后会自动恢复。
2. 在扩展管理页找到无忧行，点击**移除**。
3. 按[安装教程](/guide/installation)从原来的官方入口安装。
4. 登录账户，选择平时用的模式和节点。

## 联系支持

需要人工协助时，可以直接[联系支持](/guide/support)，并说明浏览器及无忧行版本、操作系统，以及**网络诊断**的检测结果。
