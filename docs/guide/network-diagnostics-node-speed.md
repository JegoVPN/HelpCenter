---
translationKey: network-diagnostics-node-speed
contentType: diagnostic
product: browser-extension
productArea: browser-extension
uiSurface: control-panel
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
title: 节点测速 - 使用指南
description: 使用节点测速查看当前可用节点和相对响应结果，再回到插件弹窗选择合适的节点。
---

# 无忧行节点测速使用指南

想了解哪些无忧行节点当前可用时，可以打开**节点测速**。它会依次检测账号中显示的节点，并用绿色闪电、黄色和失败标记显示本次结果，帮助你选择合适的节点。

打开方法：点击无忧行图标 → **控制面板** → **网络诊断** → **节点测速**。

节点测速看的是线路能否连接和本次相对响应，不是下载速度。页面不会显示毫秒。

## 开始节点测速

1. 按页面提示，将无忧行切换到**关闭**。
2. 点击**测试全部节点**。
3. 等待页面完成所有节点的检测。

节点较多时，检测会多用一点时间。保持当前网络不变，等待结果全部显示即可。

## 看懂测速结果

- **绿色闪电**：这个节点可以连接，而且是本轮结果中相对较快的前 10 个之一。
- **黄色标记**：这个节点可以连接，本轮响应相对较慢。
- **失败**：本轮没有连上这个节点，直接选择带绿色闪电或黄色标记的节点即可。

这些标记只代表本次测速。下次打开页面重新测速时，结果会按当时的网络状态更新。

## 选择合适的节点

节点测速页面负责显示结果，切换节点在插件弹窗中完成：

1. 记住想使用的节点名称。
2. 点击浏览器右上角的无忧行图标。
3. 选择**规则**或**全局**模式。
4. 打开节点列表，选择刚才看到的节点。
5. 重新打开网页即可使用这条线路。

优先选择目标地区带绿色闪电的节点。目标地区只有黄色标记时，该节点本轮仍然可以连接，也可以直接使用。

选择节点后，可以用[连接检测](/guide/network-diagnostics#connection-check)查看常用网站的连接状态，也可以用[查询网址走向](/guide/network-diagnostics#route-check)确认指定网址使用无忧行还是本地网络。
