---
translationKey: guide-faq
contentType: troubleshooting
product: both
productArea: support
uiSurface: null
locale: zh-Hans
status: current
owner: docs
reviewStatus: verified
lastVerified: 2026-07-10
platforms: []
tools: []
appliesTo: []
sources: ["human-product-decision@2026-07-10", "cloud/app/chromev2@1.5.10"]
title: 常见问题 - 使用指南
description: AI 产品线路、网站位置、浏览器隐私模式、防火墙和插件网络诊断的简短说明。
---

# 常见问题

这里整理了使用无忧行时常见的几个问题。

### 所有线路都能进行 Gemini、ChatGPT、Claude 等 AI 产品的访问吗？

不是所有线路都适合 AI 产品，按使用方式选择即可：

- 使用浏览器插件访问 ChatGPT、Claude、Grok 等产品时，选择**规则**模式和带 `[AI]` 标注的节点；
- 使用浏览器插件访问 Gemini、AI Studio、NotebookLM 等 Google AI 产品时，选择**全局**模式和合适的节点；
- 使用手机订阅客户端时，选择 `🤖 ChatGPT Group` 分组中的节点。

浏览器插件的具体操作见[AI 产品访问指南](/guide/chatgpt-access)。

### 打不开 Gemini、ChatGPT、Claude 等境外的网站了？

打开[网络诊断](/guide/network-diagnostics)查看当前线路的工作状态。页面会帮助你确认应该切换线路，还是调整代理策略；AI 产品继续选择上面对应的线路即可。

### 为什么 Google、ChatGPT 显示的地理位置与节点服务器不符（区域判定错误）？

节点名称表示无忧行线路的位置，网站还可能参考登录账户、浏览器数据和设备信息，所以网页显示的位置不一定与节点名称完全相同。账户地区、功能开放范围和使用限额以目标网站自己的说明为准。Google 的位置说明见[了解和管理 Google 搜索时的位置信息](https://support.google.com/websearch/answer/179386?hl=zh-Hans)。

### 如何在浏览器的隐私模式里使用无忧行？

Chrome 打开 `chrome://extensions`，Edge 打开 `edge://extensions`。找到无忧行并进入**详情**，开启**在无痕模式下运行 / 在 InPrivate 中允许**，再打开新的无痕或 InPrivate 窗口。

### “建议关闭防火墙”并不合适，应该怎么设置？

请保持系统防火墙开启。若防火墙或安全软件显示拦截记录，只检查被拦截的具体应用或连接，并为 Chrome 或 Edge 添加必要的允许项；完成后可用[网络诊断](/guide/network-diagnostics)确认当前连接状态。

## 插件自助使用网络诊断

使用浏览器插件时，想自己查看无忧行当前的工作情况，可以点击**无忧行图标 → 控制面板 → 网络诊断**。页面会根据检测结果给出下一步，完整说明见[网络诊断](/guide/network-diagnostics)。

## 联系支持

页面提示属于账户、付款或产品服务时，直接进入[联系支持](/guide/support)选择对应类别。
