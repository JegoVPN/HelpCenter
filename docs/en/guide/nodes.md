---
translationKey: guide-nodes
contentType: reference
product: general
productArea: network-reference
uiSurface: null
locale: en
status: current
owner: docs
reviewStatus: needs-review
lastVerified: null
platforms: [chrome, edge]
tools: []
appliesTo: []
sources: []
title: Node Introduction - User Guide
description: Learn Jego node types in plain language and choose one for the current connection.
---

<script setup>
import edgeSvg from '../../.vitepress/svgs/node-edge.svg?raw'
import optimizedSvg from '../../.vitepress/svgs/node-optimized.svg?raw'
import transitSvg from '../../.vitepress/svgs/node-transit.svg?raw'
import ieplSvg from '../../.vitepress/svgs/node-iepl.svg?raw'
</script>

# Node Introduction

A node is a Jego network route. Each connection passes through your local network, ISP, a Jego node, and the destination website. Congestion in any one part can affect the final speed. The four labels below explain common route types in plain language.

## <span style="color:red;">Conclusion First</span>

::: danger Important Reminder
<span style="color:red;">If there are no special requirements, prefer</span><span style="color:red;">**Auto Selection**</span><span style="color:red;">.</span>

The same node can behave differently across regions and ISPs. **Auto Select** chooses from the routes currently available to the account and is the easiest place to start. If a site still feels slow, run [Node Test](/en/guide/network-diagnostics-node-speed) and choose another node.
:::

## FYI: Your Speed Depends on the Weakest Link

The full path when you visit an overseas website (e.g. YouTube) looks roughly like this:

> Your Home → Your ISP (Telecom/Unicom/Mobile) → Domestic Public Network → Jego Domestic Entry Server → Private Line or IEPL → Overseas Exit Server → YouTube

Jego can optimize only part of this path. Home Wi-Fi, the local ISP, cross-border links, node load, and the destination website all affect the result. A premium node cannot fix a poor local connection by itself.

::: warning Example
If your local connection to the cross-border backbone entry point is already congested, every route after that point will also be affected. Start by checking the local network environment. See: [Check the local network and browser](/en/guide/faq#gemini-chatgpt-claude-or-another-website-does-not-connect)
:::

## <span style="color:orange;">Edge Network (Overseas)</span>

<div v-html="edgeSvg"></div>

**How it works:** Traffic travels from your device directly across the public internet to an overseas server. The entire path goes through public networks without any special optimization for mainland China.

This route mainly reaches an overseas node through the public internet. It has broad coverage and is easy to use, but speed and availability can change during busy periods.

::: info Usage tip
Results depend heavily on your region and ISP. If it fails, return to Auto Select or choose another route that passed Node Test.
:::

::: tip Best For
Everyday light use, or a quick first check that Jego can connect.
:::

## <span style="color:blue;">Mainland Optimized Routes (Overseas)</span>

<div v-html="optimizedSvg"></div>

**How it works:** An optimized route tries to use a carrier or path that works better for mainland-China connectivity. The exact underlying network can change as nodes are adjusted, so the label alone does not identify one carrier.

It may feel smoother than ordinary public routing in some regions or time periods. Return routing, local ISP congestion, or the destination can still reduce the difference.

::: info Usage tip
Optimized does not mean faster at every moment. Compare the same website around the same time for a useful result.
:::

::: tip Best For
Frequent international browsing when ordinary public routes fluctuate during busy periods.
:::

## <span style="color:purple;">Mainland Transit Server Routes</span>

<div v-html="transitSvg"></div>

**How it works:** A transit route first reaches a nearer entry and then forwards traffic to the overseas exit. This can improve the first part of the path, but the extra hop can also become another failure point.

Actual speed still depends on congestion at the entry, cross-border segment, and exit.

::: info Limitations
The cross-border exit segment still uses public or optimized routes, and exit stability is affected by overseas node and cross-border link quality;

Outbound traffic still needs to cross the firewall, so zero-firewall-crossing risk cannot be guaranteed.
:::

::: tip Best For
When direct overseas routes are unstable, compare a transit route and then test the actual website again.
:::

## <span style="color:green;">IEPL Private Lines</span>

<div v-html="ieplSvg"></div>

**How it works:** IEPL means International Ethernet Private Line, a carrier private-line transport product. Jego uses the label to distinguish a route type, while the physical path can change as the network is deployed and adjusted.

A private-line segment can reduce exposure to public-network congestion in the middle of the path. Local Wi-Fi, ISP access, overseas exit, and the destination still affect the final experience.

::: info Usage tip
Private line does not mean a route can never fail. Use Node Test and the actual website to check the current result.
:::

::: tip Best For
Users who value stability and want to reduce the effect of public-network congestion.
:::

## Comprehensive Comparison

| Route label | Simple meaning | Try it when |
|---|---|---|
| Edge network | Mainly uses the public internet to reach an overseas node | Everyday light use or a first connection check |
| Mainland optimized | Optimizes part of the cross-border route | Ordinary public routes fluctuate at busy times |
| Mainland transit | Reaches an entry first, then forwards to the overseas exit | A direct overseas route is unstable |
| IEPL | Uses a private-line-style transport for a middle segment | Stability matters and you want less public-network fluctuation |

::: info Note
Whether Pro, Ultra, or another route appears depends on the account and VIP level. Check the popup node list and [Membership Benefits](/en/membership/benefits).
:::
