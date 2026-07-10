---
translationKey: guide-installation
contentType: how-to
product: browser-extension
productArea: browser-extension
uiSurface: null
locale: zh-Hans
status: current
owner: docs
reviewStatus: needs-review
lastVerified: 2026-07-10
platforms: [chrome, edge]
tools: []
appliesTo: []
sources: [https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world, https://learn.microsoft.com/en-us/microsoft-edge/extensions/getting-started/extension-sideloading]
title: 如何安装 - 使用指南
description: 按浏览器选择官方入口，几步完成无忧行安装并确认插件已经启用。
---

# 如何安装

无忧行推荐安装在 Chrome 或 Microsoft Edge。直接从浏览器的官方扩展商店安装最简单；商店暂时无法使用时，本页也保留了手动安装方法。

::: tip 安装前先确认版本
可以在[防止失联](/guide/keep-updated)页面查看当前官方发布入口。保持浏览器和无忧行为最新版本，可以及时获得功能改进和问题修复；实际连接情况还会受到所在地区和目标网站的影响。
:::

## 先按浏览器进入安装步骤 {#在线安装}

<div class="installation-choice-grid">
  <a class="installation-choice-card" href="#chrome-install"><strong>Google Chrome</strong><span>从 Chrome Web Store 安装</span></a>
  <a class="installation-choice-card" href="#edge-install"><strong>Microsoft Edge</strong><span>从 Microsoft Edge 扩展商店安装</span></a>
</div>

## 在 Microsoft Edge 中安装 {#edge-install}

开始前先把 Edge 更新到最新版本。

### 从 Edge 扩展商店安装

1. 打开[无忧行的 Microsoft Edge 扩展商店页面](https://microsoftedge.microsoft.com/addons/detail/bkpoijbobhmbglhjjmnoedomdoabilol)。
2. 点击页面右上角的**获取**，按照浏览器提示完成安装。
3. 安装后如果 Edge 提示扩展正在控制代理设置，先核对扩展名称、来源和权限。确认安装的是无忧行后，按浏览器提示保留更改。

### 商店暂时无法使用时，手动安装

优先使用 Edge 扩展商店。无忧行官网提供手动安装包时，可以按下面的步骤安装：

1. 从[无忧行官网](https://jegocloud.com/zh/)下载手动安装包并解压。
2. 在 Edge 地址栏输入 `edge://extensions/`。
3. 打开页面上的**开发人员模式**。
4. 点击 **Load unpacked**，选择解压后直接包含 `manifest.json` 的文件夹。
5. 如果下载内容只有 `.crx` 文件，请改用扩展商店或 Edge 当前允许的安装方式；**Load unpacked** 选择的是文件夹，不是 `.crx` 文件。

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FfcXOYhXbZ9Tr2bWUoI5p_2Fimage_3.png" alt="Edge 插件管理界面">

<span id="安装完成后-固定无忧行图标"></span>
<span id="安装后的初始设置"></span>

### 固定无忧行图标 {#edge-pin}

把无忧行固定到 Edge 工具栏后，以后点击右上角的图标就能直接打开插件。

1. 打开 Edge，点击右上角的菜单按钮（三个水平点）。
2. 进入**扩展 → 管理扩展**。
3. 找到**无忧行**，确认扩展已经启用。
4. 点击地址栏右侧的扩展图标，打开扩展列表。
5. 点击无忧行右侧的图钉图标，把它固定到工具栏。
6. 地址栏右侧出现无忧行图标后，就可以直接点击使用。

<img class="installation-settings-image" src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2Fg4tbKt6AKXlmq4DaA3H6_2Fimage_3.png" alt="Edge 设置界面">

## 在 Google Chrome 中安装 {#chrome-install}

开始前先把 Chrome 更新到最新版本。

### 从 Chrome Web Store 安装

1. 打开[无忧行的 Chrome Web Store 页面](https://chrome.google.com/webstore/detail/bnnamacamhjbdoimlbkegmbgkekphcbb)。
2. 点击页面右上角的 **Add to Chrome**，按照浏览器提示完成安装。

### 商店暂时无法使用时，手动安装

优先使用 Chrome Web Store。无忧行官网提供手动安装包时，可以按下面的步骤安装：

1. 从[无忧行官网](https://jegocloud.com/zh/)下载手动安装包并解压。
2. 在 Chrome 地址栏输入 `chrome://extensions/`。
3. 打开页面上的**开发者模式**。
4. 点击 **Load unpacked**，选择解压后直接包含 `manifest.json` 的文件夹。
5. 如果下载内容只有 `.crx` 文件，请改用 Chrome Web Store 或 Chrome 当前允许的安装方式；**Load unpacked** 选择的是文件夹，不是 `.crx` 文件。

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F8gEriEnVmF77fYUY2XxI_2Fimage_1.png" alt="Chrome 插件管理界面">

下面的录屏演示了 Chrome 的安装过程：

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FqJVM1Fphg1LsgyqucvDn_2F20250326-115951_2.gif" alt="Chrome 安装无忧行录屏演示">

### 固定无忧行图标 {#chrome-pin}

把无忧行固定到 Chrome 工具栏后，以后点击右上角的图标就能直接打开插件。

1. 打开 Chrome，点击右上角的菜单按钮（三个垂直点）。
2. 进入**扩展程序 → 管理扩展程序**。
3. 找到**无忧行**，确认扩展已经启用。
4. 点击地址栏右侧的扩展图标，打开扩展列表。
5. 点击无忧行右侧的图钉图标，让它显示为蓝色选中状态。
6. 地址栏右侧出现无忧行图标后，就可以直接点击使用。

<img class="installation-settings-image" src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FGzs5DCiSzki2ZpCWTW3Z_2Fimage_1.png" alt="Chrome 设置界面">

接下来可以[注册账户](/guide/registration)，再按[开始使用无忧行](/guide/usage)完成登录、模式和节点设置。

## 在其他 Chromium 浏览器中安装

::: warning 兼容性说明
QQ 浏览器、360 浏览器等 Chromium 浏览器的扩展兼容性和安装规则可能随版本变化。先升级到浏览器当前稳定版，并以该浏览器当前允许的扩展安装方式为准。
:::

### QQ浏览器

1. 访问[无忧行官网](https://jegocloud.com/)，下载 **CRX package for Jego**，解压 ZIP 文件后取得 `.crx` 文件。

2. 打开 QQ 浏览器，点击右上角的 **≡**，再点击**应用中心**。

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FNu4OazcBbbAFfWuQgezF_2Fimage_2.png" alt="QQ浏览器应用中心" width="300">

3. 点击**管理我的应用**，再在右上角打开**开发者模式**。

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F89zJpPggJ1YdQjAXLRra_2Fimage_3.png" alt="QQ浏览器开发者模式">

4. QQ 浏览器当前版本允许外部 CRX 时，把从无忧行官网取得的 CRX 拖到扩展页，并按页面提示核对权限、完成安装。如果当前版本不接受该文件，请使用浏览器提供的扩展安装入口。

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FDBP0gASUKK3dAUPq95HO_2F20250310-162502_1.gif" alt="QQ浏览器13.6版本 安装录屏">

### 360浏览器

1. 访问[无忧行官网](https://jegocloud.com/)，下载 **CRX package for Jego**，解压 ZIP 文件后取得 `.crx` 文件。

2. 打开 360 浏览器，点击右上角四个彩色方块的图标，再点击**管理**。

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FgcDXVCfrl7t3dVK5jghY_2Fimage_2.png" alt="360浏览器管理界面" width="300">

3. 在新页面右上角点击**高级管理**。

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FBe1trubV92DFGWVGoa5L_2Fimage_3.png" alt="360浏览器高级管理">

4. 在页面右上角打开**开发者模式**。

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FDWVaPCNn9QB2NmtZXyng_2Fimage_1.png" alt="360浏览器开发者模式">

5. 360 浏览器当前版本允许外部 CRX 时，把从无忧行官网取得的 CRX 拖到扩展页，并按页面提示核对权限、完成安装。如果当前版本不接受该文件，请使用浏览器提供的扩展安装入口。

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F4oRzIdJCgphxrFgU4Cls_2F20250310-163456_2.gif" alt="360浏览器15版本 安装录屏">

## 在电脑或手机的其他应用中使用

浏览器插件只控制安装了无忧行的浏览器。需要在电脑或手机的其他应用中翻墙时，请查看[如何在电脑或手机上翻墙](/devices/pc-mobile)。
