---
translationKey: network-diagnostics
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
title: 网络诊断 - 使用指南
description: 使用网络诊断了解无忧行代理工作状态，并判断下一步该切换节点还是调整代理策略。
---

# 无忧行网络诊断使用指南

想了解无忧行代理工作状态时，可以打开**网络诊断**。按照当前加速状态、常用网站连接结果和网址走向依次查看，就能判断下一步该切换节点，还是调整代理策略。

打开方法：点击无忧行图标 → **控制面板** → **网络诊断**。

<img class="jego-wide-screenshot" src="/images/jego-v1.5.10/network-diagnostics-zh.png" alt="无忧行控制面板中的中文网络诊断页面">

## 当前加速状态 {#current-status}

第一步先看**当前模式**和**当前节点**，它们决定后面的检测会使用哪种连接方式：

- **规则**：按照代理规则处理浏览器请求；
- **全局**：全部浏览器请求经过当前节点，本地地址直接连接；
- **关闭**：浏览器使用本地网络。

使用无忧行连接时，选择**规则**或**全局**模式。当前节点就是代理流量使用的线路。

## 连接检测 {#connection-check}

第二步，在“常用网站能不能上”区块点击**检查**。无忧行会检测：

- Google
- YouTube
- GitHub
- OpenAI
- Apple

检测完成后，每个网站会显示一种结果：

- **可访问**：当前连接可以访问这个网站；
- **无法访问**：只有一个网站显示这个结果时，继续查询它的网址走向；多个网站都显示这个结果时，回到插件弹窗切换节点，再检查一次；
- **未检测**：点击**检查**开始检测。

## 查网址走向 {#route-check}

第三步，在“查网址走向”中填写主域名，例如 `openai.com`，然后点击**检查**。

页面会显示：

- **走代理**：这个域名会经过当前无忧行节点。需要更换线路时，切换节点后再试；
- **直连**：这个域名会使用本地网络。需要让它使用无忧行时，前往[代理策略](/guide/proxy-strategy)添加规则；
- **暂时判断不了**：等待路由数据同步完成，刷新页面后再次检查。

换节点后仍有多个网站无法访问时，可以到[常见问题](/guide/faq)按条目自查，或带上检测结果[联系客服](/guide/support)。
