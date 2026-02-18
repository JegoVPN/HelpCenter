---
title: Node Introduction - User Guide
description: Before selecting Jego's various nodes, you must understand the basic network knowledge.
---

<script setup>
import edgeSvg from '../../.vitepress/svgs/node-edge.svg?raw'
import optimizedSvg from '../../.vitepress/svgs/node-optimized.svg?raw'
import transitSvg from '../../.vitepress/svgs/node-transit.svg?raw'
import ieplSvg from '../../.vitepress/svgs/node-iepl.svg?raw'
</script>

# Node Introduction

The node routes of a proxy service can essentially be distinguished by the **entry and exit paths of traffic**. Understanding this core logic will help you choose the most suitable route based on your network environment. Our node servers are mainly composed of the following four solutions.

## <span style="color:red;">Conclusion First</span>

::: danger Important Reminder
<span style="color:red;">If there are no special requirements, prefer</span><span style="color:red;">**Auto Selection**</span><span style="color:red;">.</span>

Due to different network environments in various regions, not every user can smoothly connect to every node server. When Jego is in **Auto Selection** state, the program will automatically select a node server that can connect.
:::

## FYI: Your Speed Depends on the Weakest Link

The full path when you visit an overseas website (e.g. YouTube) looks roughly like this:

> Your Home → Your ISP (Telecom/Unicom/Mobile) → Domestic Public Network → Jego Domestic Entry Server → Private Line or IEPL → Overseas Exit Server → YouTube

Jego's private line or IEPL only handles the middle segment — the **cross-border transit**. Your overall internet experience depends on the **weakest segment** in this entire chain — this is known as the barrel effect.

::: warning Example
If your local network speed to China's cross-border backbone entry point is already poor, the segment from your home to Jego's entry server is already congested — our private line won't help no matter how fast it is. So when troubleshooting network issues, please first check your local network environment. See: [Optimize your local network and browser environment](/en/guide/faq#unable-to-open-gemini-chatgpt-claude-or-other-overseas-sites)
:::

## <span style="color:orange;">Edge Network (Overseas)</span>

<div v-html="edgeSvg"></div>

**How it works:** Traffic travels from your device directly across the public internet to an overseas server. The entire path goes through public networks without any special optimization for mainland China.

Cloud services provided by operators or merchants from around the world, providing international network capacity ranging from 100Mbps to 10Gbps. Since it uses the public internet, route quality is entirely dependent on the cross-border public network conditions between mainland China and overseas. Speed drops or disconnections may occur during peak hours or sensitive periods.

::: info Limitations
Cannot guarantee speed for users in mainland China;

Cannot guarantee connectivity for users in mainland China;

Users in Fujian, Henan, and Xinjiang regions of China may not be able to use it.
:::

::: tip Best For
Periods of relaxed network controls, or budget-sensitive users with light usage and low stability requirements.
:::

## <span style="color:blue;">Mainland Optimized Routes (Overseas)</span>

<div v-html="optimizedSvg"></div>

**How it works:** Servers are also located overseas and traffic still needs to cross the firewall, but the outbound and/or return paths use **premium backbone routes** such as China Telecom CN2 GIA, China Unicom AS9929, or China Mobile CMIN2, rather than ordinary public networks.

Composed of backbone networks and premium business networks, it is the highest-level bearer network between mainland China and the global network. Compared to direct connections, cross-border routing quality is higher with lower latency and better stability, but bandwidth resources are limited and pricing is typically higher.

::: info Limitations
Cannot provide unlimited data transmission;

Cannot guarantee connectivity for users in mainland China;

During certain specific periods, cannot guarantee connectivity for users in mainland China;

Users in Fujian, Henan, and Xinjiang regions of China may not be able to use it.
:::

::: tip Best For
Daily high-frequency use, video conferencing, streaming, and other scenarios requiring decent speed and stability, but with limited budget and no access to private lines.
:::

## <span style="color:purple;">Mainland Transit Server Routes</span>

<div v-html="transitSvg"></div>

**How it works:** A transit server is deployed within mainland China as an **entry point**. Your traffic first connects to this domestic server, which then forwards it to an overseas exit node. The final outbound traffic still needs to cross the firewall, but the entry segment (from you to the transit server) is completed entirely within domestic networks, ensuring connection quality.

The domestic access segment is stable with low latency from user to transit entry, and is less affected by local ISP network quality. Compared to direct connections, connectivity is generally better in complex network environments. Transit servers are additional infrastructure, resulting in higher costs and relatively limited node availability.

::: info Limitations
The cross-border exit segment still uses public or optimized routes, and exit stability is affected by overseas node and cross-border link quality;

Outbound traffic still needs to cross the firewall, so zero-firewall-crossing risk cannot be guaranteed.
:::

::: tip Best For
Users with complex network environments where direct connection routes are frequently unstable, who need better entry-point stability.
:::

## <span style="color:green;">IEPL Private Lines</span>

<div v-html="ieplSvg"></div>

**How it works:** IEPL (International Ethernet Private Line) is a carrier-grade **end-to-end private network circuit**. Through cooperation with operators such as China Telecom, China Unicom, and China Mobile, a dedicated channel is built on internal backbone networks. Traffic **never passes through the public internet**, meaning it **does not need to cross the firewall**.

Using BGP protocol in close cooperation with multiple partners, a global private communication channel is built that can automatically optimize network structure according to real-time routing protocols. Latency is extremely low with minimal jitter, and links can be quickly switched during internal operator failures. This ensures that users in mainland China can continuously enjoy stable and efficient global network services.

::: info Advantages
Traffic travels through operator intranets, naturally bypassing GFW inspection — theoretically the most stable option;

Provides 24/7 stable and high-speed network access experience for users in mainland China;

Can guarantee connectivity for users in mainland China.
:::

::: tip Best For
Users with extremely high requirements for stability and low latency, advanced users who need to maintain constant availability during sensitive periods.
:::

## Comprehensive Comparison

| Route Type | Entry Point | Crosses Firewall | Stability | Max Speed | Cost |
|---|---|---|---|---|---|
| Edge Network (Direct) | Overseas | Yes | Low | High | Low |
| Mainland Optimized (Premium) | Overseas (Premium) | Yes | Medium | Medium-High | Medium |
| Mainland Transit Server | Domestic Transit | Yes | High | High | High |
| IEPL Private Line | Private Line | No | Highest | High | High | 