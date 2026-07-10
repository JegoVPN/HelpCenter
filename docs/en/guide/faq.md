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
description: Short answers about AI routes, website location, private windows, firewalls, subscription clients, and extension updates.
---

# FAQ

Here are a few common questions about using Jego.

### Do all routes support Gemini, ChatGPT, Claude, and other AI products?

Different AI products may work best with different routes:

- In the browser extension, choose a node marked `[AI]`;
- In a mobile subscription client, choose a node in the `🤖 ChatGPT Group` group;
- For Google AI products such as Gemini, AI Studio, and NotebookLM, use **Global** mode.

See the [AI product access guide](/en/guide/chatgpt-access) for the complete steps.

### Gemini, ChatGPT, Claude, or another overseas website does not open?

Open [Diagnostics](/en/guide/network-diagnostics) to view how the current route is working. The page helps you see whether to choose another route or adjust Proxy Rules; keep using the matching AI route described above.

### Why does Google or ChatGPT show a location different from the selected node?

A node name represents the Jego route location. A website may also use the signed-in account, browser data, and device information, so the displayed location may not exactly match the node name. Account region, feature availability, and usage limits remain subject to the destination website's own rules. See Google's guide to [understanding and managing location in Google Search](https://support.google.com/websearch/answer/179386?hl=en).

### How do I use Jego in a private browsing window?

Open `chrome://extensions` in Chrome or `edge://extensions` in Edge. Open Jego **Details**, enable **Allow in Incognito / Allow in InPrivate**, and then open a new Incognito or InPrivate window.

### The old “turn off the firewall” advice is not suitable. What should I do instead?

Keep the system firewall enabled. If the firewall or security software shows a blocked item, review that specific application or connection and add only the necessary allowance for Chrome or Edge. You can then use [Diagnostics](/en/guide/network-diagnostics) to confirm the current connection status.

## Desktop and mobile subscription clients

Open [Subscription service](/en/subscription/), choose the current device, and then open the matching client guide. Installation, subscription import, update, and connection steps remain on that client's own page.

## Extension updates

For store-installed versions, see [Stay Connected](/en/guide/keep-updated). To confirm the mode, node, and working status after an update, continue with [Updates and recovery](/en/guide/plugin-maintenance).

## Contact support

If a message concerns an account, payment, or Jego service, open [Contact support](/en/guide/support) and choose the matching category.
