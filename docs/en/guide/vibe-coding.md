---
title: Vibe Coding with Jego - AI Development Tools Setup
description: Configure Jego proxy for AI coding tools like Cursor, Claude Code, Google Antigravity, and OpenAI Codex. A comprehensive setup guide using FlClash as an example.
---

# Vibe Coding with Jego Guide

<img src="/images/ClaudeCode.png" alt="Claude Code AI Development Tool Interface" style="border-radius: 8px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); margin: 20px 0;">

As AI tools like Cursor, Claude Code, Google Antigravity, OpenAI Codex, and OpenClaw gain popularity, we've created this tutorial to address frequently asked configuration questions. Using FlClash as an example (other tools follow similar principles), this guide will help you set up Jego for seamless AI-powered development, whether you're using an IDE or CLI.

::: tip Applicable Scope
This tutorial uses FlClash as an example, but the configuration principles apply to other proxy tools such as Clash Verge Rev, sing-box, and GUI.for.SingBox. The key is understanding virtual network adapter mode and node routing strategies.
:::

## Configuration Steps

### 1. Dashboard: Enable Virtual Network Adapter and Rule Mode

In FlClash's dashboard:

* Enable <span style="background-color:green; color:white; padding:2px 6px; border-radius:3px;">Virtual Network Adapter</span> (TUN mode)
* Select <span style="background-color:green; color:white; padding:2px 6px; border-radius:3px;">Rule Mode</span>

::: info Why Use Virtual Network Adapter?
Virtual Network Adapter (TUN) mode intercepts all system network traffic, ensuring that all requests from AI coding tools are properly routed through the proxy. This is crucial for tools like Cursor and Claude Code that frequently call APIs.

If you only need browser access, we recommend using the [Jego browser extension](/en/guide/usage).
:::

### 2. Configuration Page: Select Subscription

On the configuration page:

* Make sure to select the <span style="background-color:green; color:white; padding:2px 6px; border-radius:3px;">Jego</span> subscription file
* Keep the default auto-update settings

### 3. Proxy Page: Node Selection

Configure the following on the proxy page (node selection):

* **Manual Select**: Choose <span style="background-color:green; color:white; padding:2px 6px; border-radius:3px;">Hong Kong Ultra</span>
* **ChatGPT Group**: Choose <span style="background-color:green; color:white; padding:2px 6px; border-radius:3px;">Singapore Pro+</span>

::: tip Node Selection Guide
* **Hong Kong Ultra**: For regular traffic (browsing, YouTube, etc.), fast and stable
* **Singapore Pro+**: Specifically for AI services (OpenAI, Anthropic, Google AI, etc.), optimized for AI APIs
:::

### 4. Start Service

Return to the dashboard and click the <span style="background-color:green; color:white; padding:2px 6px; border-radius:3px;">Start</span> button in the lower right corner to activate the proxy service.

### 5. Request Page: Verify Traffic Routing

On the request page (or connections page), confirm that traffic is being routed correctly:

* ✅ AI-related domains (e.g., `api.openai.com`, `api.anthropic.com`) go through <span style="background-color:green; color:white; padding:2px 6px; border-radius:3px;">Singapore Pro+</span>
* ✅ Regular traffic (e.g., YouTube, Google) goes through <span style="background-color:green; color:white; padding:2px 6px; border-radius:3px;">Hong Kong Ultra</span>

::: warning Custom Routing
If you need custom routing rules, you can add override rules (Overrides) in FlClash.

**Example Steps**:

For instance, if you need DeepSeek.com to connect directly (without proxy), follow these steps:

1. On the configuration page, click the <span style="background-color:green; color:white; padding:2px 4px; border-radius:3px;">three dots ⋮</span> in the upper right corner of the Jego subscription card
2. Select <span style="background-color:green; color:white; padding:2px 6px; border-radius:3px;">More</span>
3. Click <span style="background-color:green; color:white; padding:2px 6px; border-radius:3px;">Overrides</span>
4. Click <span style="background-color:green; color:white; padding:2px 6px; border-radius:3px;">Add</span>
5. In the popup dialog, configure:
   * **Rule Name**: Click to select, e.g., `DOMAIN-SUFFIX` (domain suffix matching)
   * **Rule Content**: Click to enter, e.g., `deepseek.com` (main domain or subdomain)
   * **Rule Target**: Click to select, e.g., `DIRECT` (direct connection), `REJECT` (reject)
6. Click save

After this setup, visits to DeepSeek.com will bypass the proxy and use your local network directly.
:::

## Verify Configuration

Run the following command in your terminal to check if you've successfully obtained a foreign IP:

```bash
curl ip.sb
```

If it returns a foreign IP address (non-China mainland IP), your configuration is successful!

::: tip Further Verification
You can also try using AI features in Cursor or other AI coding tools, such as code completion or chat, to verify that you can access AI services normally.
:::

## Common Issues

### Why is my AI tool connection failing?

1. **Check if virtual network adapter is enabled**: Ensure TUN mode is active
2. **Check node selection**: Confirm that ChatGPT Group is set to Singapore Pro+ node
3. **Check subscription updates**: Make sure your subscription file is up to date
4. **Review request logs**: Check the request page for specific connection failure reasons

### Can I use system proxy mode?

Not recommended. In system proxy mode, some AI tool requests may not go through the proxy, causing connection failures. Virtual network adapter mode intercepts all traffic, ensuring stability.

### How do I configure other proxy tools?

The configuration approach is the same:

1. Enable virtual network adapter (TUN) mode
2. Select rule mode
3. Properly assign nodes (Singapore Pro+ for AI services, Hong Kong Ultra for regular traffic)

## Related Links

* [FlClash Complete Tutorial](/en/tool/flclash) - Learn all FlClash features
* [Clash Verge Rev Tutorial](/en/tool/clashverge) - Another excellent multi-platform proxy tool
* [sing-box Tutorial](/en/tool/sing-box) - Lightweight proxy tool
* [Node Selection Guide](/en/guide/node-selection) - Learn how to choose the best nodes
* [Device Configuration Overview](/en/devices/pc-mobile) - View proxy guides for all devices
