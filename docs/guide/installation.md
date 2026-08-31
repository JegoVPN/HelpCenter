---
translationKey: guide-installation
contentType: how-to
product: browser-extension
productArea: browser-extension
uiSurface: null
locale: zh-Hans
status: current
owner: docs
reviewStatus: verified
lastVerified: 2026-08-31
platforms: [chrome, edge]
tools: []
appliesTo: []
sources: [https://support.google.com/chrome/answer/2664769, https://learn.microsoft.com/en-us/troubleshoot/microsoft-edge/development/self-host-extension-deploy, human-browser-test@chrome-149-edge-150-macos-2026-07-11, https://help.adspower.com/docs/extensions, https://doc.bitbrowser.net/zh/help1/kuo-zhan-zhong-xin-gong-neng, https://gologin.com/docs/browser-profiles/profile-features/browser-extensions/adding-browser-extensions, https://multilogin.com/help/profile-management/installing-browser-extensions]
title: 如何安装 - 使用指南
description: 在 Chrome、Edge 或基于 Chromium 的指纹浏览器中安装无忧行，并确认插件已经启用。
---

# 如何安装

无忧行推荐安装在 Chrome 或 Microsoft Edge。直接从浏览器的官方扩展商店安装最简单；使用 Chromium/Chrome 内核的指纹浏览器环境，通常也可以通过 Chrome 扩展入口安装。商店暂时无法使用时，本页还保留了手动安装方法。

::: tip 安装前先确认版本
可以在[更新插件](/guide/keep-updated)页面查看当前官方发布入口。保持浏览器和无忧行为最新版本，可以及时获得功能改进和问题修复；实际连接情况还会受到所在地区和目标网站的影响。
:::

## 先按浏览器进入安装步骤 {#在线安装}

<div class="installation-choice-grid">
  <a class="installation-choice-card" href="#chrome-install"><strong>Google Chrome</strong><span>从 Chrome Web Store 安装</span></a>
  <a class="installation-choice-card" href="#edge-install"><strong>Microsoft Edge</strong><span>从 Microsoft Edge 扩展商店安装</span></a>
  <a class="installation-choice-card" href="#fingerprint-browser-install"><strong>指纹浏览器</strong><span>在 Chromium 浏览器环境中安装</span></a>
</div>

## 在 Microsoft Edge 中安装 {#edge-install}

开始前先把 Edge 更新到最新版本。

### 从 Edge 扩展商店安装

1. 打开[无忧行的 Microsoft Edge 扩展商店页面](https://microsoftedge.microsoft.com/addons/detail/bkpoijbobhmbglhjjmnoedomdoabilol)。
2. 点击页面右上角的**获取**，按照浏览器提示完成安装。
3. 安装后如果 Edge 提示扩展正在控制代理设置，先核对扩展名称、来源和权限。确认安装的是无忧行后，按浏览器提示保留更改。

### 商店暂时无法使用时，手动安装

优先使用 Edge 扩展商店。需要手动安装时，先从无忧行官网下载 ZIP 安装包，解压后找到 CRX 文件，再按下面的步骤操作：

1. 从[无忧行官网](https://jegocloud.com/zh/)下载 ZIP 安装包，解压后找到里面的 `.crx` 文件。
2. 在 Edge 地址栏输入 `edge://extensions/`，打开扩展管理页。
3. 打开页面上的**开发人员模式**。
4. 把 `.crx` 文件从访达或文件资源管理器拖到 Edge 的扩展管理页中。
5. 页面出现安装确认时，核对扩展名称是**无忧行**，然后点击**添加扩展**。
6. 安装完成后，确认无忧行出现在扩展列表中并已启用。

<span id="edge-crx-video"></span>

下面的视频演示了在 Edge 中开启开发人员模式、拖入 CRX 并完成安装的过程：

<video class="installation-video" controls playsinline preload="metadata" aria-label="Edge 拖入 CRX 安装无忧行视频">
  <source src="/videos/jego-edge-crx-install-20260711.mp4" type="video/mp4">
  你的浏览器无法播放此视频。
</video>

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

安装完成后，接下来可以[注册账户](/guide/registration)，再按[开始使用无忧行](/guide/usage)完成登录、模式和节点设置。

## 在 Google Chrome 中安装 {#chrome-install}

开始前先把 Chrome 更新到最新版本。

### 从 Chrome Web Store 安装

1. 打开[无忧行的 Chrome Web Store 页面](https://chromewebstore.google.com/detail/bnnamacamhjbdoimlbkegmbgkekphcbb)。
2. 点击页面右上角的 **Add to Chrome**，按照浏览器提示完成安装。

### 商店暂时无法使用时，手动安装

优先使用 Chrome Web Store。需要手动安装时，先从无忧行官网下载 ZIP 安装包，解压后找到 CRX 文件，再按下面的步骤操作：

1. 从[无忧行官网](https://jegocloud.com/zh/)下载 ZIP 安装包，解压后找到里面的 `.crx` 文件。
2. 在 Chrome 地址栏输入 `chrome://extensions/`，打开扩展程序管理页。
3. 打开页面上的**开发者模式**。
4. 把 `.crx` 文件从访达或文件资源管理器拖到 Chrome 的扩展程序管理页中。
5. 页面出现安装确认时，核对扩展名称是**无忧行**，然后点击**添加扩展程序**。
6. 安装完成后，确认无忧行出现在扩展程序列表中并已启用。

下面的图片展示了把 CRX 文件拖入 Chrome 扩展程序管理页的位置：

<img src="/images/jego-chrome-crx-drag-install-20260711.png" alt="把无忧行 CRX 文件拖入 Chrome 扩展程序管理页">

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
QQ 浏览器、360 浏览器和指纹浏览器如果支持安装 Chrome 扩展，通常就可以安装无忧行。请先把浏览器更新到当前稳定版；Firefox 类型的环境、云手机和移动端环境不适用本教程。
:::

### 指纹浏览器 {#fingerprint-browser-install}

指纹浏览器通常把每个账号放在独立的“浏览器环境”或“配置文件”里。无忧行只需要安装到你准备使用的那个环境中。

1. 创建或选择要使用无忧行的环境。如果可以选择浏览器类型，请选择 **Chrome** 或 **Chromium**。
2. 在指纹浏览器主界面或环境设置中找到**扩展中心**、**扩展程序**或 **Extensions**。
3. 选择**添加 Chrome 商店扩展**，粘贴[无忧行的 Chrome Web Store 链接](https://chromewebstore.google.com/detail/bnnamacamhjbdoimlbkegmbgkekphcbb)，再选择需要使用无忧行的环境并启用。如果没有这个入口，就先启动该环境，在里面打开同一个链接并点击 **Add to Chrome**。
4. 保存后完全关闭并重新打开该环境。看到无忧行图标后，点击图标、登录账户并选择模式和节点，安装就完成了。

不同产品的入口名称不完全相同，可以参考 [AdsPower](https://help.adspower.com/docs/extensions)、[比特浏览器](https://doc.bitbrowser.net/zh/help1/kuo-zhan-zhong-xin-gong-neng)、[GoLogin](https://gologin.com/docs/browser-profiles/profile-features/browser-extensions/adding-browser-extensions) 和 [Multilogin](https://multilogin.com/help/profile-management/installing-browser-extensions) 的官方扩展说明。

#### 安装后看不到或无法连接

- **看不到无忧行：**回到扩展中心，确认无忧行已经分配给当前环境并处于启用状态，然后重新打开这个环境。
- **已经安装但无法连接：**先停用当前环境里的其他代理或 VPN 扩展。如果指纹浏览器还为这个环境设置了单独的代理，把它改为直连或关闭后再试。
- **没有 Chrome 商店入口：**如果该浏览器明确支持导入 `.crx`，可以从[无忧行官网](https://jegocloud.com/zh/)下载当前 ZIP 安装包，解压后使用其中的 `.crx`。不要从第三方网站下载或转换插件；浏览器不接受该格式时，请查看它的官方扩展说明或联系其客服。

连接后可以按[开始使用无忧行](/guide/usage)确认模式、节点和访问状态。

### QQ浏览器

1. 访问[无忧行官网](https://jegocloud.com/zh/)，下载 **CRX package for Jego**，解压 ZIP 文件后取得 `.crx` 文件。

2. 打开 QQ 浏览器，点击右上角的 **≡**，再点击**应用中心**。

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FNu4OazcBbbAFfWuQgezF_2Fimage_2.png" alt="QQ浏览器应用中心" width="300">

3. 点击**管理我的应用**，再在右上角打开**开发者模式**。

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F89zJpPggJ1YdQjAXLRra_2Fimage_3.png" alt="QQ浏览器开发者模式">

4. QQ 浏览器当前版本允许外部 CRX 时，把从无忧行官网取得的 CRX 拖到扩展页，并按页面提示核对权限、完成安装。如果当前版本不接受该文件，请使用浏览器提供的扩展安装入口。

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FDBP0gASUKK3dAUPq95HO_2F20250310-162502_1.gif" alt="QQ浏览器13.6版本 安装录屏">

### 360浏览器

1. 访问[无忧行官网](https://jegocloud.com/zh/)，下载 **CRX package for Jego**，解压 ZIP 文件后取得 `.crx` 文件。

2. 打开 360 浏览器，点击右上角四个彩色方块的图标，再点击**管理**。

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FgcDXVCfrl7t3dVK5jghY_2Fimage_2.png" alt="360浏览器管理界面" width="300">

3. 在新页面右上角点击**高级管理**。

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FBe1trubV92DFGWVGoa5L_2Fimage_3.png" alt="360浏览器高级管理">

4. 在页面右上角打开**开发者模式**。

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FDWVaPCNn9QB2NmtZXyng_2Fimage_1.png" alt="360浏览器开发者模式">

5. 360 浏览器当前版本允许外部 CRX 时，把从无忧行官网取得的 CRX 拖到扩展页，并按页面提示核对权限、完成安装。如果当前版本不接受该文件，请使用浏览器提供的扩展安装入口。

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F4oRzIdJCgphxrFgU4Cls_2F20250310-163456_2.gif" alt="360浏览器15版本 安装录屏">

## 在电脑或手机的其他应用中使用

浏览器插件只控制安装了无忧行的浏览器。需要在电脑或手机的其他应用中翻墙时，请查看[如何在电脑或手机上翻墙](/subscription/)。
