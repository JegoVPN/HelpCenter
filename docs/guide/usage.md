---
translationKey: guide-usage
contentType: how-to
product: browser-extension
productArea: browser-extension
uiSurface: plugin-popup
locale: zh-Hans
status: current
owner: docs
reviewStatus: verified
lastVerified: 2026-07-10
platforms: [chrome, edge]
tools: []
appliesTo: []
sources: ["cloud/app/chromev2@1.5.10", "cloud/locales/zh_CN.csv"]
title: 如何翻墙 - 使用指南
description: 登录后选择规则模式和自动节点，只需几步就能在 Chrome 或 Edge 里使用无忧行访问全球网站。
---

# 如何翻墙

无忧行是专为 Chrome 和 Edge 设计的免费代理插件。安装后登录账号，选择模式和节点，就可以在当前浏览器里翻墙。第一次使用，建议先选**规则**模式和**自动选择**节点。

::: info 只影响当前浏览器
插件里的规则、全局和关闭模式，只控制安装了无忧行的浏览器。想让电脑或手机里的其他应用也翻墙，请看[如何在电脑或手机上使用无忧行](/devices/pc-mobile)。
:::

## 📺 视频教程

喜欢看视频的话，可以先看完整的安装与使用演示：

<YouTube videoId="buQRWqyO7UM" title="无忧行插件安装与使用教程" />

## 第一次使用，只要五步

1. 点击浏览器右上角的无忧行图标。
2. 还没登录时，输入邮箱和密码，点击**账户登录**；没有账号可以点**创建账户**。
3. 登录后选择**规则**模式。
4. 在**当前节点**中选择**自动选择**。
5. 打开 Google 或你想访问的网站；已经打开的网页可以刷新一次。

下面是免费版界面示例。插件会显示免费版、体验或会员状态；你能看到的模式和节点以当前账号为准。

<img src="/images/jego-v1.5.9/usage-free-browser-zh.png" alt="免费版翻墙">

如果你的界面只有“开启”和“关闭”，点击**开启**就是开始使用代理；点击**关闭**则恢复本地网络。新版界面会显示“规则、全局、关闭”三个选项，作用见下一节。

## 规则、全局和关闭

- **规则**：按代理规则处理域名和 IP 地址；需要代理的请求走当前节点，直连规则使用本地网络。
- **全局**：全部浏览器请求经过当前节点，本地地址仍直接连接。
- **关闭**：停止浏览器代理，所有网站使用原来的网络。

会员界面示例如下。右上角会显示会员状态，下面可以选择模式和节点。

<img src="/images/jego-v1.5.9/usage-paid-browser-zh.png" alt="旧版会员浏览器代理界面">

需要更多例子，请看[模式选择](/guide/mode-selection)。如果规则模式没有自动代理某个网站，可以在[代理策略](/guide/proxy-strategy)中添加它。

## 怎么换节点

点击**当前节点**下面的节点名称，打开列表后选择“自动选择”或一个具体地区。新手先用自动选择；当前线路不理想时再手动换一个。关闭模式下节点列表不能操作，需要先切换到规则或全局。

### 操作演示

下面的视频演示如何更换节点，以及如何在全局和规则模式之间切换。

<video src="/videos/20251108-182013.mp4" controls></video>


### 切换时请等小圆点结束

选择模式或节点后，顶部的无忧行图标会暂时变成呼吸的小圆点，表示插件正在保存并应用设置。此时按钮会暂时不能操作，请稍等。

<img src="/images/jego-v1.5.9/popup-switching-loading-zh.png" alt="保持耐心，继续等待" width="280">

小圆点重新变回无忧行图标后，说明这次切换已经处理完毕，再刷新目标网页。

<img src="/images/jego-v1.5.9/popup-manual-node-selected-zh.png" alt="成功" width="280">

## 网站连接仍未恢复

1. 先确认不是**关闭**模式。
2. 换一个节点，或运行[节点测速](/guide/network-diagnostics-node-speed)。
3. 打开**控制面板 → 网络诊断 → 连接检测**，点击“测一下”。
4. 只有一个网站失败时，用“查网址走向”检查它是否走代理。

更多帮助：[常见问题](/guide/faq) · [如何访问 ChatGPT、Copilot 等服务](/guide/chatgpt-access) · [联系客服](/guide/support)

## 如何在电脑或手机上使用无忧行进行翻墙

浏览器插件不会接管电脑或手机里的其他应用。会员可以使用无忧行订阅服务，按[设备选择指南](/devices/)安装合适的客户端。
