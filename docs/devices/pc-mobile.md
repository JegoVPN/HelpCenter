---
title: 如何在电脑或手机上翻墙 - 设备支持
description: 无忧行的订阅节点服务（大陆用户通常称之为"机场"）与Windows PC、macOS、iOS、iPadOS和Android、乃至鸿蒙系统上的众多网络代理工具程序（大陆用户通常称之为"梯子"）兼容。只需简单学习，就能轻松让电脑和手机上的所有应用程序都能翻墙，随时畅享全球无限制网络资源。
---

# 如何在电脑或手机上翻墙

无忧行的订阅节点服务（大陆用户通常称之为"机场"）与Windows PC、macOS、iOS、iPadOS和Android、乃至鸿蒙系统上的众多网络代理工具程序（大陆用户通常称之为"梯子"）兼容。只需简单学习，就能轻松让电脑和手机上的所有应用程序都能翻墙，随时畅享全球无限制网络资源。

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

::: info 免责声明
以下列表不代表无忧行团队的立场和观点。
:::

**推荐的**

* iOS iPadOS：[Surge](/tool/surge)、[sing-box](/tool/sing-boxforapple)、[Shadowrocket](/tool/shadowrocket)
* macOS：[Surge](/tool/surge)、[FlClash](/tool/flclash)、[ClashX.Meta](https://github.com/MetaCubeX/ClashX.Meta/releases)、[sing-box](/tool/sing-boxforapple)、[Shadowrocket](/tool/shadowrocket)、[Clash Verge Rev](/tool/clashverge)
* Android：[FlClash](/tool/flclash)、[ClashMetaForAndroid](https://github.com/MetaCubeX/ClashMetaForAndroid/releases)、[sing-box](/tool/sing-boxforandroid)
* Windows：[FlClash](/tool/flclash)、[sing-box](/tool/guiforsing-box)、[Clash Verge Rev](/tool/clashverge)

**不推荐的**

* Hiddify：假开源、违反上游协议
* Karing：sing-box 套皮广告软件、违反授权、假开源
* ClashMi：和Karing 是同一个作者，违反授权、假开源
* Clash Verge Rev v2.3 之前的版本，有高危提权漏洞
* Clash for Windows：删库、停更

### 2、这些软件里的系统代理和虚拟网卡/tun的区别

系统代理是Windows提供的代理接口，所有应用程序可以自愿遵守Windows代理规则也可以不遵守（浏览器都是遵守的，其他应用不好说）；

虚拟网卡/tun原理是代理软件内核新建了一个虚拟网卡，检查所有经过虚拟网卡的流量判断是否需要代理，这样的方式保证所有的请求都会经过代理软件来判断是否代理。

#### 结论：

想要电脑全局所有程序都翻墙，用虚拟网卡模式；\
想要浏览器翻墙，用系统代理模式。

<span style="color:green;">如果你的需求仅仅是在浏览器里实现翻墙，</span>[<span style="color:green;">无忧行浏览器插件才是最佳选择。</span>](/guide/usage)

### 3、开启了软件的 TUN 模式后，无忧行插件应该怎么设置？

如果你已经在 FlClash、Clash Verge Rev、sing-box、v2rayN 等代理软件里开启了虚拟网卡/TUN 模式，电脑上的网络请求已经由这些软件接管并判断是否代理。这时浏览器里的无忧行插件应该保持关闭。

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FISwY5XX4FX2qker0nOYC_2Fimage_3.png" alt="无忧行插件关闭模式界面" width="280">

在插件小窗里点击<span style="background-color:grey; color:white; padding:2px 6px; border-radius:3px;">关闭</span>，让插件处于上图所示状态。不要再同时开启插件里的<span style="background-color:green; color:white; padding:2px 6px; border-radius:3px;">全局</span>、<span style="background-color:green; color:white; padding:2px 6px; border-radius:3px;">规则</span>或<span style="background-color:green; color:white; padding:2px 6px; border-radius:3px;">开启</span>模式，否则浏览器流量可能被两层代理重复处理，导致访问异常、速度变慢或规则冲突。

这里的<span style="background-color:grey; color:white; padding:2px 6px; border-radius:3px;">关闭</span>只是关闭无忧行插件自己的浏览器代理功能，不会关闭你正在使用的代理软件和 TUN 模式。简单来说：用代理软件的 TUN 模式翻墙时，无忧行插件保持关闭；只想让浏览器翻墙时，再使用[无忧行浏览器插件](/guide/usage)。更多插件模式说明可查看[模式选择](/guide/mode-selection)。

