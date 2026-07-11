---
jegoSupport: supported
tool: guiforsing-box
clientKind: null
minimumOs: []
architectures: []
subscriptionFormats: []
lifecycle: current
recommendation: advanced
securityStatus: needs-review
supportedVersions: []
replacements: []
officialSources: [https://github.com/GUI-for-Cores/GUI.for.SingBox]
translationKey: tool-guiforsing-box
contentType: tool-guide
product: subscription-service
productArea: tools
uiSurface: null
locale: zh-Hans
status: current
owner: docs
reviewStatus: needs-review
lastVerified: 2026-07-10
platforms: [windows, macos, linux]
tools: [guiforsing-box]
appliesTo: []
sources: [https://github.com/GUI-for-Cores/GUI.for.SingBox]
title: GUI.for.SingBox - 工具软件
description: 介绍如何安装 GUI.for.SingBox、导入无忧行订阅并开始连接。
---

# GUI.for.SingBox

GUI.for.SingBox是开源社区基于sing-box内核在Windows系统里做的图形客户端。它提供了直观的图形界面来管理sing-box代理配置，支持订阅导入、节点选择等功能。

::: info 欢迎
欢迎阅读2025年GUI.for.SingBox使用教程
:::

> 提示：GUI.for.SingBox 的上手体验一般。如果不是特别需要 sing-box 内核，建议优先使用 [FlClash](flclash)。

## 获取 GUI.for.SingBox

可以通过Github下载并进行安装

* [GitHub Releases](https://github.com/GUI-for-Cores/GUI.for.SingBox/releases)

打开Github Release页面后，会看到很多安装包，根据你的Windows系统版本下载对应的安装包即可。

## GUI.for.SingBox Windows版本使用教程

### 复制订阅地址

在**无忧行 - 控制面板**里点击左侧导航栏**订阅节点**  ，找到**Sing-Box**订阅地址并点击**复制**。

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FQ9Ncmw0YFCe4ziEMoSuw_2Fimage_3.png" alt="Sing-Box订阅地址">

<div class="tip custom-block" style="padding-top: 8px">

手机上也能取订阅地址：用手机浏览器打开 <https://jego.us> 登录即可复制。

</div>

### 基础设置

下载后先点开 `Settings - Kernel` 然后看sing-box标题下面的 `Local` 有没有内核版本，如下面第一张图所示就是没有，需要点击右侧蓝色的按钮`Update:版本` 进行安装。以后内核有新版本时，也在这里点击更新。

![刚下载](/images/guiforsingbox_no_kernel.png)

![有内核才能使用](/images/guiforsingbox_with_kernel.png)

如上面第二张图所示，sing-box 下方 Local 有版本号GUI.for.SingBox才处于可用状态。

### 添加订阅和启动

打开GUI.for.SingBox客户端，进入`Overview -> QuickStart`

1. Remote URL黏贴从无忧行复制的`sing-box的订阅URL`
2. 直接点击`Save`
3. 默认会创建一个`ID_`开头的配置文件，直接点击`Click to Start`

![快速开始步骤1](/images/guiforsingbox_quickstart1.png)

![快速开始步骤2](/images/guiforsingbox_quickstart2.png)

启动后打开 www.google.com 等境外网站，能正常访问就说明连接成功。要换节点时，进入左侧的`代理`页，在 ❇️Manual Select 分组中选择一个可用节点。启动失败时，先回 `Settings - Kernel` 确认内核已安装，再换一个节点重试。

另外建议去设置里打开以管理员身份运行：对于非 Windows Administrators 用户组成员，建议勾选此项，以避免 TUN 模式启动失败。
