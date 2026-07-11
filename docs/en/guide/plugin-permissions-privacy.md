---
translationKey: plugin-permissions-privacy
contentType: reference
product: browser-extension
productArea: browser-extension
uiSurface: plugin-popup
locale: en
status: current
owner: docs
reviewStatus: verified
lastVerified: 2026-07-10
dateModified: 2026-07-10
platforms: [chrome, edge]
tools: []
appliesTo: []
sources: [https://jegocloud.com/policy]
title: Jego browser permissions explained
description: "Understand Jego's four extension permissions, its host_permissions website access permission, and where to find its official Privacy Policy — in plain language."
---

# Jego browser permissions explained

Jego needs the browser permissions below to save your settings, switch the proxy, keep the connection updated, and run Diagnostics.

| Permission | What Jego uses it for |
|---|---|
| `storage` | Save extension settings and sign-in state |
| `proxy` | Send browser traffic through the mode and node you choose |
| `alarms` | Refresh connection information on a schedule |
| `management` | Identify other proxy extensions so multiple proxies do not control the browser at the same time |
| `host_permissions` · `all URLs` | Get service configuration, run the Connection check, and run Node test |

See the [extension popup](/en/guide/plugin-features) for the modes and node controls these permissions support.

## Check permissions during install or update

1. Get Jego only from a source listed in the [installation guide](/en/guide/installation).
2. Open the Chrome or Edge extension manager and check Jego's name, version, and permissions.
3. If an update suddenly requests a new permission, record the permission and version, then use [Contact support](/en/guide/support) before accepting it.
4. Enable Incognito/InPrivate access only if you actually plan to use Jego there.

Use the official sources above so the extension name, version, and permissions match this guide.

For the complete privacy explanation, read [Jego's official Privacy Policy](https://jegocloud.com/policy).
