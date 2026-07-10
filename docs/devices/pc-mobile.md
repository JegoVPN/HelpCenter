---
translationKey: devices-pc-mobile
contentType: device-guide
product: subscription-service
productArea: device-selection
uiSurface: null
locale: zh-Hans
status: current
owner: docs
reviewStatus: needs-review
lastVerified: null
platforms: [windows, macos, linux, android, ios, harmonyos]
tools: []
appliesTo: []
sources: []
title: 如何在电脑或手机上翻墙 - 设备支持
description: 无忧行会员如何在 Windows、Mac、Linux、Android、iPhone、iPad 和 HarmonyOS 上选择客户端并导入订阅节点。
---

# 如何在电脑或手机上翻墙

无忧行会员可以把订阅节点添加到 Windows、Mac、Linux、Android、iPhone、iPad 和 HarmonyOS 的兼容客户端中，让浏览器之外的应用也能使用代理。先选择设备，再跟着对应教程安装和导入即可。

::: info 快速上手
为了让能您快速上手，我们提供了各种网络代理工具程序（大陆用户通常称之为"梯子"）的初级使用指南，请根据您的需求选择适合您的指南认真阅读。

如想深入研究还请自行在YouTube上搜索相关的视频教程。
:::

| 操作系统 | 设备 | 使用指南 |
| --- | --- | --- |
| <img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F7Hh3XGbbAH0jtCKDKIF6_2Fandroid_3.svg" width="38" height="28" alt="安卓图标"> | **安卓设备** | [安卓手机怎么翻墙](/devices/android) |
| <img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F7GBp8VQdHNWWH3aalDTP_2Fios_3.svg" width="38" height="28" alt="iOS图标"> | **苹果手机、iPad设备** | [苹果手机/iPad 怎么翻墙](/devices/ios) |
| <img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FbeA5N21M1iATQm5HiGND_2Fwin_1.svg" width="38" height="28" alt="Windows 图标"> | **Windows PC 电脑** | [Windows PC电脑怎么翻墙](/devices/windows) |
| <img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FrUGve1gm2gP1sXdvgjCw_2Fapple_1.svg" width="38" height="28" alt="macOS 图标"> | **苹果Mac 电脑** | [苹果Mac 电脑怎么翻墙](/devices/mac) |
| <img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FJJlooO6sJC8xrcR6vqGj_2Flinux_1.svg" width="38" height="28" alt="Linux 图标"> | **Linux 电脑** | [Linux 电脑怎么翻墙](/devices/linux) |
| <img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FhUBqYs4CpmMcueAi690m_2FHMOS_Logo_Icon_1.svg" width="38" height="28" alt="HarmonyOS 图标"> | **华为鸿蒙设备** | [华为鸿蒙手机怎么翻墙](/devices/harmony) |

## 常见问题

### 1、关于应该使用什么客户端

下面的表格会同时告诉你客户端的维护状态、适用用户，以及 Jego 支持情况。Jego 已不支持 v2rayN、v2rayNG、Loon 和 OneClick；新用户直接选择标为“适合大多数用户”的客户端即可。

<ToolCatalog locale="zh" />

选好客户端后，点击名称进入完整教程。需要复制或更新订阅时看[订阅管理](/subscription/management)，连接失败时看[客户端故障排查](/troubleshooting/client)。

旧页还列过 Hiddify、Karing、ClashMi 和特定旧版 Clash Verge Rev 的负面结论，但没有可核验来源，因此本次不继续发布那些定性说法。选择目录外工具时请自行核对官方来源、许可证、维护状态和安全公告。

### 2、这些软件里的系统代理和虚拟网卡/tun的区别

系统代理是操作系统提供的代理接口；是否遵守由应用实现决定，浏览器通常会读取该设置，但仍应以实际连接结果为准。

虚拟网卡/TUN 模式创建虚拟网络接口，并按客户端配置处理被路由到该接口的流量。路由例外、权限、其他 VPN 和应用实现仍可能影响结果，因此不能写成“保证所有请求都经过”。

#### 结论：

需要覆盖不遵守系统代理的应用时，可评估客户端的 TUN 模式并逐项验证；只处理浏览器流量时，可使用系统代理或浏览器插件。

<span style="color:green;">如果需求仅限浏览器，</span>[<span style="color:green;">可以从无忧行浏览器插件开始。</span>](/guide/usage)

### 3、开启软件的 TUN 模式后设置无忧行插件

如果你已经在 FlClash、Clash Verge Rev、sing-box、v2rayN 等代理软件里开启了虚拟网卡/TUN 模式，电脑上的网络请求已经由这些软件接管并判断是否代理。这时浏览器里的无忧行插件应该保持关闭。

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FISwY5XX4FX2qker0nOYC_2Fimage_3.png" alt="无忧行插件关闭模式界面" width="280">

在插件小窗里点击<span style="background-color:grey; color:white; padding:2px 6px; border-radius:3px;">关闭</span>，让插件保持上图所示状态。TUN 模式开启期间只保留客户端这一层代理，可以减少浏览器流量重复处理、速度变慢或规则冲突。

这里的<span style="background-color:grey; color:white; padding:2px 6px; border-radius:3px;">关闭</span>只是关闭无忧行插件自己的浏览器代理功能，不会关闭你正在使用的代理软件和 TUN 模式。简单来说：用代理软件的 TUN 模式翻墙时，无忧行插件保持关闭；只想让浏览器翻墙时，再使用[无忧行浏览器插件](/guide/usage)。更多插件模式说明可查看[模式选择](/guide/mode-selection)。
