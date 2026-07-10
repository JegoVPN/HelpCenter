---
translationKey: plugin-maintenance
contentType: how-to
product: browser-extension
productArea: browser-extension
uiSurface: null
locale: zh-Hans
status: current
owner: docs
reviewStatus: needs-review
lastVerified: null
dateModified: 2026-07-10
platforms: [chrome, edge]
tools: []
appliesTo: []
sources: []
title: 无忧行插件更新与恢复
description: 查看无忧行版本、完成更新，并在更新后重新选择常用的模式和节点。
---

# 无忧行插件更新与恢复

想让无忧行保持最新版本，或在浏览器更新后重新确认插件状态时，可以按本页顺序操作。先确认版本，再重新选择规则模式和自动节点，最后到**网络诊断**查看当前工作状态。

## 确认并更新版本

1. 在地址栏输入 `chrome://extensions`；Edge 用户输入 `edge://extensions`。
2. 在扩展管理页找到无忧行，查看当前版本号。
3. 打开[防止失联](/guide/keep-updated)，核对最新版本和官方发布入口。
4. 按原来的安装方式完成更新，然后完全退出并重新打开浏览器。

从 Chrome 或 Edge 商店安装的版本，继续使用对应商店更新；手动安装的版本，按照“防止失联”页面的手动更新说明操作。

## 更新后重新打开无忧行

更新完成后，按下面几步重新选择日常使用的模式和节点：

1. 把无忧行切到关闭，再切回规则模式。
2. 把当前节点设为自动选择。
3. 完全退出浏览器，再重新打开。
4. 点击无忧行图标，确认弹窗显示规则模式和当前节点。

## 确认当前工作状态

进入**控制面板** → **网络诊断**。先看当前模式和节点，再查看常用网站的连接结果；需要确认某个网址时，还可以查询它会走代理还是直连。页面会帮助你确定下一步是切换节点，还是调整代理策略。

具体操作见[网络诊断](/guide/network-diagnostics)。

## 需要重新安装时

这一节只用于你已经决定重新安装，或客服明确请你重新安装的情况。

1. 记下当前版本、原来的安装来源，以及自己添加过的代理策略。
2. 在扩展管理页找到无忧行，点击**移除**。
3. 按[安装教程](/guide/installation)从原来的官方入口安装。
4. 登录账户，选择规则模式和自动节点。

## 获得更多帮助

需要客服协助时，可以提供浏览器版本、无忧行版本、操作系统，以及**网络诊断**页面的结果。联系方法见[联系支持](/guide/support)。
