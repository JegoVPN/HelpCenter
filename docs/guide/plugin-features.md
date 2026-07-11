---
translationKey: plugin-features
contentType: feature-overview
product: browser-extension
productArea: browser-extension
uiSurface: plugin-popup
locale: zh-Hans
status: current
owner: docs
reviewStatus: verified
lastVerified: 2026-07-10
dateModified: 2026-07-10
platforms: [chrome, edge]
tools: []
appliesTo: []
sources: ["cloud/app/chromev2@1.5.10"]
title: 无忧行插件弹窗：模式、节点和常用入口
description: 了解无忧行插件弹窗里的关闭、规则、全局模式、节点选择、会员信息和控制面板入口。
---

# 无忧行插件弹窗

安装好无忧行后，点击 Chrome 或 Edge 右上角的无忧行图标，就能看到插件弹窗。这里集中显示模式、当前节点、会员信息，以及控制面板等常用入口。

第一次安装、登录和开始使用的完整步骤，请看[开始使用无忧行](/guide/usage)。这页只说明弹窗里的各个区域。

<img class="jego-wide-screenshot" src="/images/jego-v1.5.10/plugin-popup-browser-zh.png" alt="在 Chrome 浏览器中打开无忧行中文插件弹窗">

## 模式开关

- **规则**：按代理规则处理域名和 IP 地址；需要代理的请求走当前节点，直连规则使用本地网络。
- **全局**：全部浏览器请求都经过当前节点，本地地址仍直接连接。
- **关闭**：停止浏览器加速，网页会使用原来的网络连接。关闭时，下面保存的节点不会工作。

会员版弹窗显示“规则 / 全局 / 关闭”；免费版显示“开启 / 关闭”，点**开启**即开始使用。

想了解更多例子，可以看[如何选择上网模式](/guide/mode-selection)。

## 当前节点

**当前节点**显示浏览器请求正在使用的无忧行线路。点击这一栏可以打开节点列表：

- **自动选择**：由无忧行选择当前线路。
- **具体节点**：直接选择列表中的地区或线路。
- **关闭模式**：节点列表不能操作，切换到规则或全局后即可选择。

更详细的选择方法见[如何选择节点](/guide/node-selection)。

## 会员信息和底部入口

登录后，弹窗会显示免费版、体验或会员状态。会员账号还会看到有效期，以及升级或续费入口。

弹窗底部可以进入**控制面板**和**使用指南**；退出登录在控制面板的账户菜单里。

[控制面板](/guide/control-panel)里可以查看当前模式和节点、检查 Google 是否能连接、管理代理规则，并打开完整的网络诊断。账号不同，看到的会员、订阅、账单或支持入口也可能不同。

## 相关指南

- 检查网站连接：[无忧行网络诊断使用指南](/guide/network-diagnostics)
- 想指定某个网站走代理：[自定义代理策略](/guide/proxy-strategy)
- 插件需要更新：[更新插件](/guide/keep-updated)
- 想了解插件为什么需要权限：[权限、隐私与安全](/guide/plugin-permissions-privacy)
