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

This page is for the Jego browser extension in Chrome and Edge. OpenAI, Anthropic, Grok, and similar AI products normally work with Jego's existing default rules. Choose a suitable route for the product.

## Keep the default Proxy Rules

Open **Control Panel → Proxy Rules** and keep Jego's existing default settings. You do not need to add separate AI product domains.

<img src="/images/jego-v1.5.9/dashboard-proxy-policy-empty-en.png" alt="Jego default Proxy Rules screen">

## Choose a suitable route

Return to the extension popup, select **Rules** mode, and then choose a route suitable for the AI product. A node marked `[AI]` is a useful starting point.

<img src="/images/jego-v1.5.9/popup-paid-rules-ai-en.png" alt="Choose an AI node in Jego" width="280">

## View the current connection status

To confirm how the current route is working, open [Diagnostics](/en/guide/network-diagnostics) and view Connection Check and the website route.

For account and feature messages shown after sign-in, follow the information on the AI product's page.
