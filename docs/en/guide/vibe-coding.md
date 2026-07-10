---
translationKey: guide-vibe-coding
contentType: how-to
product: subscription-service
productArea: scenario-tutorial
uiSurface: null
locale: en
status: current
owner: docs
reviewStatus: needs-review
lastVerified: null
platforms: [windows, macos, linux]
tools: [flclash]
appliesTo: []
sources: []
title: How to Use Jego for Vibe Coding - AI Development Tools Proxy Configuration Tutorial
description: Configure and verify a proxy path for an IDE or CLI using FlClash as the example, while separating connectivity from third-party account eligibility.
---

# How to Use Jego for Vibe Coding

## AI Development Tools Proxy Configuration Tutorial

<img src="/images/ClaudeCode.png" alt="Claude Code AI Development Tool Interface" style="border-radius: 8px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); margin: 20px 0;">

This guide uses the Jego subscription service and FlClash to configure a proxy for an IDE or command-line tool.

::: tip Applicable Scope
This tutorial uses the FlClash desktop interface. Other clients have different menus; [Install by device](/en/subscription/#install-by-device) opens the matching complete guide.

The key is understanding virtual network adapter mode and node routing strategies.
:::

## Configuration Steps

### 1. Dashboard: Enable Virtual Network Adapter and Rule Mode

In FlClash's dashboard:

* Enable <span style="background-color:green; color:white; padding:2px 6px; border-radius:3px;">Virtual Network Adapter</span> (TUN mode)
* Outbound Mode, select <span style="background-color:green; color:white; padding:2px 6px; border-radius:3px;">Rule Mode</span>

<img src="/images/vibecoding/1.png" alt="Dashboard: Enable Virtual Network Adapter and Rule Mode" style="border-radius: 8px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); margin: 16px 0; max-width: 800px; width: 100%;">

::: info Why a virtual network adapter helps
Virtual Network Adapter (TUN) mode can process traffic the operating system routes to the virtual interface and is often used for desktop apps that ignore system proxy. Permissions, route exceptions, other VPNs, and app behavior still matter, so it cannot guarantee that every request uses the proxy.

If you only need browser access, we recommend using the [Jego browser extension](/en/guide/usage).
:::

### 2. Profiles Page: Select Subscription

On the Profiles page:

* Make sure to select the <span style="background-color:green; color:white; padding:2px 6px; border-radius:3px;">Jego</span> subscription file
* Keep the default auto-update settings

### 3. Proxy Page: Node Selection

Configure the following on the proxy page (node selection):

* Under **❇️Manual Select**, choose a current candidate exposed by the Control Panel that can connect.
* If **🤖 ChatGPT Group** still appears, choose a candidate from it and verify with the real API destination. “Hong Kong Ultra” and “Singapore Pro+” in the screenshot are historical examples, not promises that those names or performance remain.

<img src="/images/vibecoding/2.png" alt="Proxy Page: Node Selection" style="border-radius: 8px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); margin: 16px 0; max-width: 800px; width: 100%;">

::: tip Node Selection Guide
Node names and groups come from the current subscription configuration and can change. Compare bandwidth, stability, and third-party availability through actual results on the same network and at the same time.
:::

### 4. Start Service

Return to the dashboard and click the <span style="background-color:green; color:white; padding:2px 6px; border-radius:3px;">Start</span> button in the lower right corner to activate the proxy service.

<img src="/images/vibecoding/3.png" alt="Start Service" style="border-radius: 8px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); margin: 16px 0; max-width: 800px; width: 100%;">

After starting, check the status, start time, virtual-adapter state, and outbound mode shown by the app, then open a test page or run the command below to confirm the connection.

### 5. Request Page: Verify Traffic Routing

On the request page (or connections page), confirm that traffic is being routed correctly:

* Check whether an AI hostname such as `api.openai.com` or `api.anthropic.com` matches the node currently chosen for the AI group.
* Check whether an ordinary hostname matches the expected general group or direct rule. Record only hostnames; never publish query strings, tokens, or request content.

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
   * **Rule Target**: Click to select, e.g., `DIRECT` (direct connection)
6. Click save

<img src="/images/vibecoding/4.png" alt="Custom Routing: Add override rules (Overrides)" style="border-radius: 8px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); margin: 16px 0; max-width: 800px; width: 100%;">

After this setup, visits to DeepSeek.com will bypass the proxy and use your local network directly.
:::

## Verify Configuration

You may query the public exit IP for this command. A third-party lookup service sees that exit address; skip this step if undesired and inspect the client's request page instead:

```bash
curl ip.sb
```

The returned address belongs only to this test request. Your IDE or CLI may use different settings, so test the actual tool after configuring it.

::: tip Further Verification
You can also try using AI features in Cursor or other AI coding tools, such as code completion or chat, to verify that you can access AI services normally.
:::

## Common Issues

### AI tool connection failure

1. **Check if virtual network adapter is enabled**: Ensure TUN mode is active
2. **Check node selection**: Confirm that the current AI group has a usable candidate selected.
3. **Check subscription updates**: Run one manual update per the client tutorial and record its time.
4. **Review request logs**: Inspect only redacted lines relevant to this incident; never publish tokens or request content.

### Using system proxy mode

Yes, depending on whether the AI tool honors system proxy or supports proxy environment variables. Test system proxy first; if the app demonstrably bypasses it, evaluate TUN and retest. Neither method guarantees stability.

### Configure other proxy tools

The objective is similar, but menus and capabilities are not necessarily the same. Follow the specific tool tutorial for proxy entry, rule mode, node groups, and verification rather than copying FlClash buttons or old node names.

## Related Links

* [FlClash Complete Tutorial](/en/subscription/clients/flclash) - Learn all FlClash features
* [Clash Verge Rev Tutorial](/en/subscription/clients/clashverge) - Multi-platform client tutorial
* [sing-box Tutorial](/en/subscription/clients/sing-box) - Lightweight proxy tool
* [Node Selection Guide](/en/guide/node-selection) - Choose and verify a candidate node
* [Device Configuration Overview](/en/subscription/) - View proxy guides for all devices
