---
translationKey: troubleshooting-client
contentType: troubleshooting
product: subscription-service
productArea: troubleshooting
uiSurface: null
locale: en
status: current
owner: docs
reviewStatus: needs-review
lastVerified: null
dateModified: 2026-07-10
platforms: [windows, macos, linux, android, ios, ipados, harmonyos]
tools: []
appliesTo: []
sources: []
title: Fix a Jego subscription client
description: Follow simple steps when a subscription will not import, nodes are missing, a connection will not start, every website fails, or an update caused a problem.
---

# Fix a Jego subscription client

Start from [Install by device](/en/subscription/#install-by-device), open the guide for the client you use, and follow its installation, subscription import, node selection, and connection steps.

## 1. Subscription will not import

Open your [device guide](/en/subscription/#install-by-device), then copy the subscription again from the Jego Control Panel. Use the subscription type named by the client guide and import that URL into the client.

## 2. Import succeeds but no usable item appears

Find the new subscription in the client and select Update, Sync, or Refresh once. Confirm that it is enabled and check whether the guide requires selecting a profile. If the list stays empty, copy the subscription from the Control Panel and import it again.

## 3. Nodes appear but the connection will not start

Select a node and turn on the client's connection switch. Phones normally show a system VPN permission prompt the first time; allow it. If the connection still fails, choose another node while keeping the system firewall on.

## 4. Connected but every site fails

Disconnect the client and confirm that the normal internet connection works. Make sure another VPN or proxy is not running, update the subscription once, and try another node. Browser-extension problems can use Jego [Connection Check](/en/guide/network-diagnostics#connection-check), but it does not test the phone or computer client.

## 5. Only some sites fail

Check whether the client is using Rules or Global mode and whether that domain is set to Direct. Try Global once to compare. If only sign-in or one feature fails, also check the website's own account requirements and service status.

## 6. A client update introduced the issue

Record the versions before and after the update, then check the matching client guide for known issues. Get installers from the tool's official website, repository, or app store. If the page says Not recommended, Discontinued, or No longer supported by Jego, move to one of its listed replacements.

## Choose the matching client guide

Open [Install by device](/en/subscription/#install-by-device), choose the current system, and then open the guide for the client in use. Its installation, import, and update steps remain on that page.

If the problem remains, send [Support](/en/guide/support) the client and operating-system versions, time, error text, node name, and steps to reproduce.
