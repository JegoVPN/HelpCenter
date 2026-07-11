---
translationKey: guide-mode-selection
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
title: Mode Selection - User Guide
description: Learn how Jego Rules, Global, and Off handle browser requests.
---

# Mode Selection

The top of the Jego popup shows the modes available to the current account. **Rules** follows proxy rules, **Global** proxies all browser requests, and **Off** uses the local connection. Switch according to how you want the browser to connect.

## Rules mode: follow proxy rules

Rules mode handles each browser request according to Jego's proxy rules. A rule can match a domain, IP address, or IP subnet. Requests marked for proxy use the current node, while direct requests use the local connection.

<img src="/images/jego-v1.5.9/popup-paid-rules-auto-en.png" alt="Jego Rules mode" width="280" />

In Rules mode:

- domains or IP addresses matched by a proxy rule use the current node;
- domains, IP addresses, or subnets matched by a direct rule use the local connection;
- requests not matched by a custom rule continue through Jego's built-in rules;
- local addresses always connect directly and never go through a node.

If a domain or IP address does not follow the expected proxy rule, open **Dashboard → Diagnostics → Connection → Rules Check** to view the match result.

## Global mode: proxy all browser requests

Global mode sends all browser requests through the current Jego node, while local addresses still connect directly.

<img src="/images/jego-v1.5.9/popup-paid-global-auto-en.png" alt="Jego Global mode" width="280" />

In Global mode:

- all browser requests use the proxy;
- browser requests not matched by a Rules entry also use the current node;
- local addresses still connect directly.

Switch back to Rules whenever you want proxy-rule routing. Mode changes affect only the browser where Jego is installed.

## Off: use the local connection

Off stops Jego from proxying browser traffic. Websites use the local connection. The popup may keep the previously selected node name, but the node is not active and cannot be changed while Jego is off.

<img src="/images/jego-v1.5.9/popup-paid-off-en.png" alt="Jego Off mode" width="280" />

When Jego is Off:

- browser websites use the local connection;
- the saved node does not take part in the connection.

## Free version interface

The member popup shows Rules / Global / Off. The Free popup shows Connect / Off.

- **Connect:** turns Jego on;
- **Off:** uses the local connection.

The example below shows the Free interface and helps Free users recognize the Connect and Off states.

<div class="jego-popup-state-grid">
  <figure>
    <figcaption>Free version: Connected</figcaption>
    <img src="/images/jego-v1.5.9/popup-free-on-en.png" alt="Free version connected interface">
  </figure>
  <figure>
    <figcaption>Free version: Off</figcaption>
    <img src="/images/jego-v1.5.9/popup-free-off-en.png" alt="Free version off interface">
  </figure>
</div>

## Browser icon state

Free version icon states:

| Connected | Off |
| --- | --- |
| <img src="/images/jego-v1.5.9/icon-rule-48.png" alt="Connected icon" width="32" /> | <img src="/images/jego-v1.5.9/icon-off-48.png" alt="Off icon" width="32" /> |

Member icon states:

| When in Global mode | When in Rules mode | When Off |
| --- | --- | --- |
| <img src="/images/jego-v1.5.9/icon-global-48.png" alt="Global mode icon" width="32" /> | <img src="/images/jego-v1.5.9/icon-rule-48.png" alt="Rules mode icon" width="32" /> | <img src="/images/jego-v1.5.9/icon-off-48.png" alt="Off icon" width="32" /> |


After switching, wait for the small dot at the top to become the Jego logo again, then reload the website. Use [Rules Check](/en/guide/network-diagnostics#route-check) to confirm the actual route.
