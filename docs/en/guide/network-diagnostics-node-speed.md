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
title: Node test - User Guide
description: Use Node test to see which nodes are currently available, compare their relative responses, and choose a suitable node in the Jego popup.
---

# Jego Node test guide

To see which Jego nodes are currently available, open **Node test**. It checks the nodes shown for your account and marks this run with green lightning, yellow, or **Unreachable** (gray dot) results to help you choose a suitable node.

To open it: click the Jego icon → **Dashboard** → **Diagnostics** → **Node test**.

Node test compares whether routes connect and how they respond in this run. It is not a download speed test, and the page does not show milliseconds.

## Start Node test

1. Follow the page hint and switch Jego **Off**.
2. Select **Test all nodes**.
3. Wait for every node to finish.

A longer node list takes a little more time. Keep the current network unchanged and wait for all results to appear.

## Read the Node test results

- **Green lightning:** The node connected and is among the 10 relatively fastest results in this run.
- **Green dot:** The node connected in this run; it is not among the 10 relatively fastest, but it is not noticeably slow either.
- **Yellow indicator:** The node connected and responded relatively more slowly in this run.
- **Unreachable** (gray dot): The node did not connect in this run, so choose a node with green lightning or a green dot instead.

These indicators apply to the current run. The next test will update them for the network state at that time.

## Choose a suitable node

Node test displays the results; switching nodes is done in the Jego popup:

1. Remember the node name you want to use.
2. Click the Jego icon.
3. Select **Rules** or **Global** mode.
4. Open the node list and choose the node you saw in the results.
5. Reopen the website to use that route.

Start with a green-lightning node in the location you need, then a green-dot node. If that location only has a yellow indicator, the node still connected in this run and can also be selected.

If every node fails, first make sure the local network itself works, or switch networks and test again; if everything still fails, [contact support](/en/guide/support) with a screenshot of the results.

After choosing a node, use [Connection](/en/guide/network-diagnostics#connection-check) to review common website connections or [Rules Check](/en/guide/network-diagnostics#route-check) to see whether a specific website uses Jego or the local connection.
