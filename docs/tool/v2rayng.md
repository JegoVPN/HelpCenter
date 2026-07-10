---
jegoSupport: unsupported
tool: v2rayng
clientKind: null
minimumOs: []
architectures: []
subscriptionFormats: []
lifecycle: current
recommendation: not-recommended
securityStatus: needs-review
supportedVersions: []
replacements: [sing-boxforandroid, flclash]
officialSources: [https://github.com/2dust/v2rayNG, https://play.google.com/store/apps/details?id=com.v2ray.ang]
translationKey: tool-v2rayng
contentType: tool-guide
product: subscription-service
productArea: tools
uiSurface: null
locale: zh-Hans
status: current
owner: docs
reviewStatus: needs-review
lastVerified: 2026-07-10
platforms: [android]
tools: [v2rayng]
appliesTo: []
sources: [https://github.com/2dust/v2rayNG, https://play.google.com/store/apps/details?id=com.v2ray.ang]
title: v2rayNG - 工具软件
description: v2rayNG 第三方项目可能仍在维护，但 Jego 已不再支持；本页保留历史 Android 教程并提供受支持替代项。
---

# v2rayNG

v2rayNG是Android系统即安卓手机系统下的代理软件客户端，功能强大且支持多种代理协议，如VMess、VLESS、Shadowsocks、Socks、Trojan等代理协议。

::: danger 不推荐使用
v2rayNG 第三方项目可能仍在维护，但 Jego 已不再支持其当前订阅协议，因此不推荐继续用于 Jego。本页保留为历史教程，并提供受支持的替代工具。

请使用[无忧行推荐的客户端](/devices/pc-mobile#_1、关于应该使用什么客户端)
:::

## <img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2Fr7lhxwWpINBib1IY4DuB_2Fimage_2.png" width="26" height="26" alt="v2rayNG图标"> 获取 v2rayNG

#### 下载链接：

[https://github.com/2dust/v2rayNG/releases ](https://github.com/2dust/v2rayNG/releases)

[https://play.google.com/store/apps/details?id=com.v2ray.ang ](https://play.google.com/store/apps/details?id=com.v2ray.ang)

新手使用建议下载稳定版本，即版本号后标记为 `Latest` 的版本。

## 安装教程

安装教程很简单，如果是通过应用商店下载的，那么直接根据提示下载并安装即可，如果是通过官网下载或其他第三方下载的，下载完后获得文件为 `v2rayNG_x.x.x.apk` 文件，其中后缀 `.apk` 为安卓系统的安装包，`x.x.x` 代表版本号，然后点击安装即可，十分简单。

安装完后，打开软件进入主界面，即配置文件界面，如下图所示。

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F7FunPj6PcfmBUFTM9uKV_2Fimage_3.png" alt="v2rayNG主界面" width="300">

## **添加订阅：**

在**无忧行 - 控制面板**里点击左侧导航栏**订阅节点** ，找到**v2rayNG**订阅地址并点击**复制**。

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FvcuzdBLdVvZgq9XT0TZy_2Fimage_1.png" alt="无忧行控制面板">

<div class="tip custom-block" style="padding-top: 8px">

无忧行订阅服务手机面板：<https://jego.us>

</div>

如下图所示点击软件主界面左上角`三道杠`按钮，在弹出窗口进入系统设置界面，然后点击订阅设置，如下图所示。

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FrnZkA6aiORpPAnFztckr_2Fimage_2.png" alt="系统设置" width="300">

在弹出的订阅设置主界面，点击右上角的 ➕ 号按钮即可出现添加订阅界面，在备注处输入自己能区分这个订阅节点的内容，然后在地址(url)处输入订阅地址，最后点击右上角的 ✔ 按钮，即可添加订阅地址，如下图所示。

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FTL4yXRVv0pQOONIhX9LK_2Fimage_3.png" alt="添加订阅" width="300">

最后也是最重要的一步，返回到软件主界面，然后点击最右上角的`三束点`按钮，在弹出界面选择更新订阅，如下图所示。

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FjOfYRUemiPtnmLfQCTEy_2Fimage_1.png" alt="更新订阅" width="300">

至此，通过订阅地址方式添加代理服务器就成功了。

## 使用教程

### 代理服务器

在软件的主界面中可以看到自己通过手动添加或者订阅设置添加的所有代理服务器列表，其中每一条代理服务器最右边的竖条代表选定服务器的状态，其中`灰色`代表未选中，`绿色`代表选中。

每一条代理服务器的操作都可以在这里进行，右边三个图标分别代表分享节点服务器、编辑节点服务器、删除节服务器。

**启动代理服务器**

点击软件主界面右小角的 V 字图标启动代理，首次配置会提示是否创建代理，即软件界面中的网络链接请求，点击确定启动。

**切换代理服务器**

在有多条代理服务器的时候，只需要直接点击想要链接的那条代理服务器，即可切换代理服务器，无论是未链接状态还是已链接状态，都可以进行切换。

### 路由设置

路由设置的原理是将入站数据按需求由不同的出站链接发出，从而达到按需代理的目的。这一功能的常见用法的分流国内外流量，可以通过内部机制判断不同地区的流量，然后将他们发送到不同的出站代理，在v2rayNG中，有三种路由配置可以设置，分别是域名策略、自定义规则、预定义规则。

**域名策略**

在域名策略中，系统一共内置了三种域名策略可以选择。

* Asls
* IPIfNonMatch
* IPOnDemand

根据不同的需求选择合适的域名策略，一般默认即可。

**自定义规则**

在自定义规则中，可通过自定义来设置需要代理的网址或IP、直连的网址或IP、阻止的网址或IP，从而达到个性化的代理需求。

**预定义规则**

新手推荐使用这个，在预定义规则中，系统已经内置好了不同的路由规则。

* 全局代理
* 绕过局域网地址而后代理
* 绕过大陆地址而后代理
* 绕过局域网及大陆地址而后代理
* 全局直连

根据不同的需求选择合适的预定义规则，一般选择`绕过局域网及大陆地址而后代理`。
