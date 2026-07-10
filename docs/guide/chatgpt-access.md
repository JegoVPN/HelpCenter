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

本页适用于 Chrome 和 Edge 的无忧行浏览器插件。OpenAI、Anthropic、Grok 等 AI 产品通常使用无忧行现有的默认策略，选择合适的线路即可。

## 保持默认代理策略

打开**控制面板 → 代理策略**，保持无忧行现有的默认设置即可，不需要另外添加 AI 产品域名。

<img src="/images/jego-v1.5.9/dashboard-proxy-policy-empty-zh.png" alt="无忧行代理策略默认界面">

## 选择合适的线路

回到插件弹窗，选择**规则**模式，再选择适合该 AI 产品的线路。带 `[AI]` 标注的节点可以直接作为参考。

<img src="/images/jego-v1.5.9/popup-paid-rules-ai-zh.png" alt="无忧行选择 AI 节点" width="280">

## 查看当前连接状态

想确认当前线路的工作状态，可以打开[网络诊断](/guide/network-diagnostics)，查看连接检测和网址走向。

AI 产品登录后的账户与功能提示，以该产品页面的说明为准。
