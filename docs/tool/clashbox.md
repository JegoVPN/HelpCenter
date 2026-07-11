---
jegoSupport: experimental
tool: clashbox
clientKind: null
minimumOs: []
architectures: []
subscriptionFormats: []
lifecycle: experimental
recommendation: advanced
securityStatus: needs-review
supportedVersions: []
replacements: []
officialSources: [https://github.com/xiaobaigroup/ClashBox, https://appgallery.huawei.com/app/detail?id=org.xbgroup.clashbox]
translationKey: tool-clashbox
contentType: tool-guide
product: subscription-service
productArea: tools
uiSurface: null
locale: zh-Hans
status: current
owner: docs
reviewStatus: needs-review
lastVerified: 2026-07-10
platforms: [harmonyos]
tools: [clashbox]
appliesTo: []
sources: [https://github.com/xiaobaigroup/ClashBox, https://appgallery.huawei.com/app/detail?id=org.xbgroup.clashbox]
title: ClashBox - 工具软件
description: 介绍 ClashBox 在 HarmonyOS 上的安装和订阅步骤；该软件尚未开源，安装前请留意页面内的安全提示与 PuraX 外屏白名单限制。
---

# ClashBox

ClashBox/ClashNEXT是首个基于Navigation框架的HarmonyOS NEXT(OpenHarmony)平台的代理软件，使用改版的Mihomo(ClashMeta)内核。

欢迎阅读2025年的ClashBox/ClashNEXT使用教程

::: danger 注意
ClashBox暂未开源，请谨慎使用。
:::

::: info 已上架境外AppGallery
[https://appgallery.huawei.com/app/detail?id=org.xbgroup.clashbox](https://appgallery.huawei.com/app/detail?id=org.xbgroup.clashbox)
:::

**软件特色**

ArkTS开发：前端部分使用ArkTS开发，更流畅，动效更丰富;

炫酷界面：使用HarmonyOS NEXT设计风格，采用类[Surfboard](surfboard)的UI排版设计，支持深色模式、模糊效果等，使用体验上更进一步；

多端适配：UI方面对手机、平板、折叠屏、鸿蒙电脑甚至PuraX外屏*都进行了适配；

内核：使用 Mihomo（Clash Meta）相关实现；具体版本、功能差异和稳定性以项目当前说明为准；

核心恢复：由于HarmonyOS NEXT的后台调度机制尚不成熟，软件可能存在后台进程被系统关闭的情况，因此ClashBox内置了核心恢复功能，系统杀进程后将自动恢复核心进程（开启“后台运行-模拟画中画”后将自动启用本功能）。

<img src="/images/clashbox_photo_1.png" alt="ClashBox" width="300">

::: info 外屏说明
PuraX外屏目前仅显示华为白名单内的App，在本软件获得白名单之前暂不可用。
:::

## <img src="/images/clashbox-logo-new.png" width="26" height="26" alt="ClashBox图标"> 获取 ClashBox/ClashNEXT

优先从[华为 AppGallery 官方页面](https://appgallery.huawei.com/app/detail?id=org.xbgroup.clashbox)获取。可见性由华为与开发者按设备和合法账户地区决定；不要通过虚构地区、重复注册账号或切换节点规避商店限制。

开发者可从官方 GitHub 仓库取得项目发布，并使用华为官方开发者工具按当前文档安装：
* Github下载：[https://github.com/xiaobaigroup/ClashBox/releases](https://github.com/xiaobaigroup/ClashBox/releases)
* 或者使用[DevEco Testing](https://developer.huawei.com/consumer/cn/deveco-testing/)进行安装

::: warning 开发者安装
开发者工具安装需要理解签名、权限和有效期。若华为官方工具因账户、设备或地区策略拒绝操作，请查阅华为当前开发者文档，不要伪装 IP 或账户地区绕过限制。
:::

::: warning 签名有效期
自签名应用的有效期和开发者要求会随华为政策、账户与工具版本变化。安装前查阅[华为开发者认证入口](https://developer.huawei.com/consumer/cn/verified/enrollment)及当前官方文档；本页不保留未经核验的固定天数。
:::

## 添加订阅

在**无忧行 - 控制面板**里点击左侧导航栏**订阅节点** ，找到Mihomo 订阅地址并点击**复制**。

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2Fbf6ZGnMBZioZr9rD5P5J_2Fimage_2.png" alt="无忧行控制面板">

<div class="tip custom-block" style="padding-top: 8px">

手机上也能取订阅地址：用手机浏览器打开 <https://jego.us> 登录即可复制。

</div>

## ClashBox/ClashNEXT 使用教程

### 配置订阅
打开`ClashBox`进入`配置`页面，点击右下角的` + `添加订阅：选择从 URL 导入，粘贴刚才复制的 Mihomo 订阅地址并保存。配置列表出现新条目即添加成功（界面细节以当前版本为准）
<img src="/images/clashbox_photo_2025-08-03_10-56-23.jpg" alt="ClashBox" width="297" heigh="640">

### 启动代理
打开`ClashBox`，在`主页`直接点击右下角的` ▶ `启动即可翻墙。
<img src="/images/clashbox_photo_2025-08-07_13-06-45.jpg" alt="ClashBox" width="297" heigh="640">

### 节点切换
打开`ClashBox`进入`代理`页面，然后根据需求选择即可。

其使用方法和同类软件大同小异，可以参考[FlClash](flclash) ，也可以参考鼻祖产品[Clash for Android](clash-for-android)
