---
translationKey: network-diagnostics-node-speed
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
title: Node Test - User Guide
description: Use Node Test to see which nodes are currently available, compare their relative responses, and choose a suitable node in the Jego popup.
---

# Jego Node Test guide

To see which Jego nodes are currently available, open **Node Test**. It checks the nodes shown for your account and marks this run with green lightning, yellow, or failed results to help you choose a suitable node.

To open it: click the Jego icon → **Control Panel** → **Diagnostics** → **Node Test**.

Node Test compares whether routes connect and how they respond in this run. It is not a download speed test, and the page does not show milliseconds.

## Start Node Test

1. Follow the page hint and switch Jego **Off**.
2. Select **Test all nodes**.
3. Wait for every node to finish.

A longer node list takes a little more time. Keep the current network unchanged and wait for all results to appear.

## Read the Node Test results

- **Green lightning:** The node connected and is among the 10 relatively fastest results in this run.
- **Yellow indicator:** The node connected and responded relatively more slowly in this run.
- **Failed:** The node did not connect in this run, so choose a node with green lightning or a yellow indicator.

These indicators apply to the current run. The next test will update them for the network state at that time.

## Choose a suitable node

Node Test displays the results; switching nodes is done in the Jego popup:

1. Remember the node name you want to use.
2. Click the Jego icon.
3. Select **Rules** or **Global** mode.
4. Open the node list and choose the node you saw in the results.
5. Reopen the website to use that route.

Start with a green-lightning node in the location you need. If that location only has a yellow indicator, the node still connected in this run and can also be selected.

After choosing a node, use [Connection Check](/en/guide/network-diagnostics#connection-check) to review common website connections or [Website Route Check](/en/guide/network-diagnostics#route-check) to see whether a specific website uses Jego or the local connection.
