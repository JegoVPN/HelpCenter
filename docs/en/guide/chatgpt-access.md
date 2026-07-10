---
translationKey: guide-chatgpt-access
contentType: how-to
product: browser-extension
productArea: browser-extension
uiSurface: null
locale: en
status: current
owner: docs
reviewStatus: verified
lastVerified: 2026-07-10
platforms: [chrome, edge]
tools: []
appliesTo: []
sources: ["human-product-decision@2026-07-10", "cloud/app/chromev2@1.5.10"]
title: AI Product Access Guide
description: Use Jego's default rules and a suitable route for OpenAI, Anthropic, Grok, and other AI products.
---

# AI Product Access Guide

This page is for the Jego browser extension in Chrome and Edge. Keep the existing Proxy Rules, then choose Rules or Global mode for the AI product.

**Gemini example**

<img src="/images/jego-v1.5.10/ai-gemini-jego-en.png" alt="Access Gemini with the Jego browser extension">

## Keep the default Proxy Rules

Open **Control Panel → Proxy Rules** and keep Jego's existing default settings. You do not need to add separate AI product domains.

<img src="/images/jego-v1.5.9/dashboard-proxy-policy-empty-en.png" alt="Jego default Proxy Rules screen">

## Choose a suitable route

For ChatGPT, Claude, Grok, and similar products, return to the extension popup, select **Rules** mode, and choose a node marked `[AI]`.

<img src="/images/jego-v1.5.9/popup-paid-rules-ai-en.png" alt="Choose an AI node in Jego" width="280">

## Use Global mode for Google AI products

For Google AI products such as Gemini, AI Studio, and NotebookLM, select **Global** mode in the extension popup and then choose a suitable node.

<img src="/images/jego-v1.5.9/popup-paid-global-auto-en.png" alt="Use Jego Global mode for Google AI products" width="280">
