---
translationKey: guide-chatgpt-access
contentType: how-to
product: browser-extension
productArea: browser-extension
uiSurface: null
locale: zh-Hans
status: current
owner: docs
reviewStatus: verified
lastVerified: 2026-07-10
platforms: [chrome, edge]
tools: []
appliesTo: []
sources: ["human-product-decision@2026-07-10", "cloud/app/chromev2@1.5.10"]
title: AI 产品访问指南
description: 使用无忧行默认策略和合适的线路访问 OpenAI、Anthropic、Grok 等 AI 产品。
---

# AI 产品访问指南

本页适用于 Chrome 和 Edge 的无忧行浏览器插件。保持现有代理策略，再根据 AI 产品选择规则或全局模式即可。

**ChatGPT 使用示例**

<img src="/images/jego-v1.5.10/ai-chatgpt-jego-zh.png" alt="使用无忧行浏览器插件访问 ChatGPT">

## 保持默认代理策略

打开**控制面板 → 代理策略**，保持无忧行现有的默认设置即可，不需要另外添加 AI 产品域名。

<img src="/images/jego-v1.5.9/dashboard-proxy-policy-empty-zh.png" alt="无忧行代理策略默认界面">

## 选择合适的线路

访问 ChatGPT、Claude、Grok 等 AI 产品时，回到插件弹窗，选择**规则**模式，再选择带 `[AI]` 标注的节点。

<img src="/images/jego-v1.5.9/popup-paid-rules-ai-zh.png" alt="无忧行选择 AI 节点" width="280">

## Google AI 产品使用全局模式

访问 Gemini、AI Studio、NotebookLM 等 Google AI 产品时，在插件弹窗选择**全局**模式，再选择合适的节点。

<img src="/images/jego-v1.5.9/popup-paid-global-auto-zh.png" alt="使用无忧行全局模式访问 Google AI 产品" width="280">
