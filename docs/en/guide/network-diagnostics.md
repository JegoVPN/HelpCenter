---
translationKey: network-diagnostics
contentType: diagnostic
product: browser-extension
productArea: browser-extension
uiSurface: control-panel
locale: en
status: current
owner: docs
reviewStatus: verified
lastVerified: 2026-07-10
dateModified: 2026-07-10
platforms: [chrome, edge]
tools: []
appliesTo: []
sources: ["cloud/app/chromev2@1.5.10"]
title: Diagnostics - User Guide
description: Use Diagnostics to understand how the Jego proxy is working and decide whether to change the node or adjust Proxy Rules.
---

# Jego Diagnostics guide

To understand how the Jego proxy is working, open **Diagnostics**. Check the current acceleration status, common website results, and website route in order to see whether the next step is changing the node or adjusting Proxy Rules.

To open it: click the Jego icon → **Control Panel** → **Diagnostics**.

<img class="jego-wide-screenshot" src="/images/jego-v1.5.10/network-diagnostics-en.png" alt="The Jego Diagnostics page in the Control Panel">

## Current Acceleration Status {#current-status}

First, check the **current mode** and **current node**. They determine how the checks below connect:

- **Rules:** Jego handles browser requests according to its proxy rules;
- **Global:** all browser requests use the current node, while local addresses connect directly;
- **Off:** the browser uses the local connection.

To use Jego, select **Rules** or **Global** mode. The current node is the route used by proxied traffic.

## Connection Check {#connection-check}

Next, select **Check** under **Connectivity check**. Jego will test:

- Google
- YouTube
- GitHub
- OpenAI
- Apple

Each website will show one result:

- **Reachable:** the current connection can reach this website;
- **Unreachable:** if only one website shows this result, check its route next; if several websites show it, choose another node in the popup and run the check again;
- **Not checked:** select **Check** to begin.

## Check a Website's Route {#route-check}

Finally, enter a root domain such as `openai.com` under **Rules Check**, then select **Check**.

The page will show:

- **Proxy:** the domain will use the current Jego node. To use another route, choose a different node and try again;
- **Direct:** the domain will use the local connection. To send it through Jego, add a rule under [Proxy Rules](/en/guide/proxy-strategy);
- **Could not determine route:** wait for routing data to finish syncing, then reload the page and check again.
