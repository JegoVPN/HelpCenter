---
translationKey: guide-node-selection
contentType: how-to
product: browser-extension
productArea: browser-extension
uiSurface: plugin-popup
locale: en
status: current
owner: docs
reviewStatus: verified
lastVerified: 2026-07-10
platforms: [chrome, edge]
tools: []
appliesTo: []
sources: ["cloud/app/chromev2@1.5.10", "cloud/locales/*.csv"]
title: Node Selection - User Guide
description: Start with Auto Select, then run Node Test and choose a Jego node manually when the connection needs improvement.
---

# Node Selection

A node is the Jego network route used to reach websites. Choose Rules or Global mode, then click the node under **Current location** to open the list. Node selection is disabled in Off mode.

## Auto Selection

When the node server is in: `🌐 Auto Select / Auto Selection`, as shown in the figure below:

<img src="/images/jego-v1.5.9/popup-paid-rules-auto-en.png" alt="Auto selection interface" width="280">

If you do not know which node to choose, use **Auto Select**. Jego selects from the routes currently available to your account, making it a good choice for first-time and everyday use.

Auto Select can change with network conditions and does not stay in one region forever. If a site remains unavailable or slow, run [Node Test](/en/guide/network-diagnostics-node-speed) and then select a node that worked in that run.

## Manual Selection

### Select a node

1. Click the node area shown below to open the list.

<img src="/images/jego-v1.5.9/popup-node-select-collapsed-en.png" alt="Node selection interface" width="280">

2. Scroll through the list and select a node. Names usually include a region or route label.

<img src="/images/jego-v1.5.9/popup-node-select-open-en.png" alt="Node scroll interface" width="280">

3. The Jego logo becomes a breathing dot while the change is applied. Wait for the logo to return before reloading the website.

When **Current location** shows the selected node name instead of Auto Select, the manual choice has been saved.

<img src="/images/jego-v1.5.9/popup-manual-node-selected-en.png" alt="Manual selection interface" width="280">

## When to select manually

- Auto Select cannot connect right now;
- the website opens but feels unusually slow;
- you want to use a route marked with green lightning in Node Test.

If only one site fails, run [Website Route Check](/en/guide/network-diagnostics#route-check) and see whether the domain is proxied. An available node does not mean every site automatically uses it.

## If the list is empty or disabled

- Jego is Off: choose Rules or Global first.
- No nodes appear: confirm that you are signed in and check membership or trial status.
- The change never finishes: reopen the popup. If it still fails, record the extension version and node name before [contacting support](/en/guide/support).

To learn more about Jego's global network nodes, visit:

[Node Introduction](/en/guide/nodes)
