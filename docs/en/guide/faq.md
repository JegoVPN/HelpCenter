---
translationKey: guide-faq
contentType: troubleshooting
product: both
productArea: support
uiSurface: null
locale: en
status: current
owner: docs
reviewStatus: verified
lastVerified: 2026-07-10
platforms: []
tools: []
appliesTo: []
sources: ["human-product-decision@2026-07-10", "cloud/app/chromev2@1.5.10"]
title: FAQ - User Guide
description: Short answers about AI routes, website location, private windows, firewalls, and extension diagnostics.
---

# FAQ

Here are a few common questions about using Jego.

### Do all routes support Gemini, ChatGPT, Claude, and other AI products?

Not every route is suitable for AI products. Choose by how you use Jego:

- In the browser extension, use **Rules** mode and a node marked `[AI]` for ChatGPT, Claude, Grok, and similar products;
- In the browser extension, use **Global** mode and a suitable node for Google AI products such as Gemini, AI Studio, and NotebookLM;
- In a mobile subscription client, choose a node in the `🤖 ChatGPT Group` group.

See the [AI product access guide](/en/guide/chatgpt-access) for the browser-extension steps.

### Gemini, ChatGPT, Claude, or another overseas website does not open?

Open [Diagnostics](/en/guide/network-diagnostics) to view how the current route is working. The page helps you see whether to choose another route or adjust Proxy Rules; keep using the matching AI route described above.

### Why does Google or ChatGPT show a location different from the selected node?

A node name represents the Jego route location. A website may also use the signed-in account, browser data, and device information, so the displayed location may not exactly match the node name. Account region, feature availability, and usage limits remain subject to the destination website's own rules. See Google's guide to [understanding and managing location in Google Search](https://support.google.com/websearch/answer/179386?hl=en).

### How do I use Jego in a private browsing window?

Open `chrome://extensions` in Chrome or `edge://extensions` in Edge. Open Jego **Details**, enable **Allow in Incognito / Allow in InPrivate**, and then open a new Incognito or InPrivate window.

### The old “turn off the firewall” advice is not suitable. What should I do instead?

Keep the system firewall enabled. If the firewall or security software shows a blocked item, review that specific application or connection and add only the necessary allowance for Chrome or Edge. You can then use [Diagnostics](/en/guide/network-diagnostics) to confirm the current connection status.

## Use extension diagnostics yourself

When you want to check how the Jego browser extension is working, select **Jego icon → Dashboard → Diagnostics**. The page uses the results to show the next step; see [Diagnostics](/en/guide/network-diagnostics) for the full guide.

## Contact support

If a message concerns an account, payment, or Jego service, open [Contact support](/en/guide/support) and choose the matching category.
