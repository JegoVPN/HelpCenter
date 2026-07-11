---
translationKey: guide-nodes
contentType: reference
product: general
productArea: network-reference
uiSurface: null
locale: zh-Hans
status: current
owner: docs
reviewStatus: needs-review
lastVerified: null
platforms: []
tools: []
appliesTo: []
sources: []
title: 节点介绍 - 使用指南
description: 用简单的话了解无忧行节点类型，并按当前网络情况选择合适节点。
---

<script setup>
import edgeSvg from '../.vitepress/svgs/node-edge.svg?raw'
import optimizedSvg from '../.vitepress/svgs/node-optimized.svg?raw'
import transitSvg from '../.vitepress/svgs/node-transit.svg?raw'
import ieplSvg from '../.vitepress/svgs/node-iepl.svg?raw'
</script>

# 节点介绍

节点可以理解为无忧行提供的不同网络线路。线路会经过你的本地网络、运营商、无忧行节点和目标网站，其中任何一段拥堵，都可能影响最终速度。下面用简单的话介绍界面中常见的四类线路。

## <span style="color:red;">先说结论</span>

::: tip 重要提醒
<span style="color:red;">如无特殊需求，首选**自动选择**。</span>

不同地区、不同运营商连接同一个节点，结果也可能不同。**自动选择**会从账号当前可用的线路中帮你选择，最适合第一次使用。网站仍不理想时，再做[节点测速](/guide/network-diagnostics-node-speed)并手动更换。
:::

## 科普：速度取决于最差的那一段

访问境外网站时，一次请求大致会经过这些环节：

> 你的设备 → 你的路由器、光猫 → 你的当地运营商（电信/联通/移动） → 国内公网 → 无忧行国内入口服务器 → 专线或 IEPL → 境外出口服务器 → YouTube

无忧行只能优化其中一部分。家里的 Wi-Fi、当地运营商、跨境线路、节点负载和目标网站都会影响体验，所以“换了高级节点”也不一定能解决本地网络本身的问题。

::: warning 举个例子
如果从你家到**无忧行入口服务器**这一段速率本身就不理想，相当于路上已经在“堵车”，后面的线路再快也会受影响。这一段由你的家庭网络和当地运营商决定；无忧行的优化从流量到达无忧行入口服务器之后才开始。
:::

## <span style="color:orange;">边缘网络（境外）</span>

<div v-html="edgeSvg"></div>

**原理：** 流量从你的设备出发，直接跨越公共互联网连接到境外服务器，全程走公网，没有任何针对中国大陆网络的特殊优化。

这类线路主要通过公共互联网连接境外节点，覆盖面广，平时使用简单直接。高峰期或网络波动时，速度和连通性可能变化。

::: info 使用提示
它的实际表现最依赖你所在地区和运营商。连不上时先用自动选择，或换另一条已通过节点测速的线路。
:::

::: tip 适合场景
适合日常轻量使用，或者先快速确认无忧行能否正常连接。
:::

## 大陆优化线路（境外）

<div v-html="optimizedSvg"></div>

**原理：** 优化线路会尝试使用更适合中国大陆网络的运营商或路由，改善跨境路径中的一段。实际走哪条网络会随节点调整，不能只看名称判断。

相对普通公网，它在部分地区和时段可能更顺畅；但回程拥堵、当地运营商或目标网站也可能让差别变小。

::: info 使用提示
优化线路不等于任何时候都更快。用同一个网站在相近时间比较，结果更有参考价值。
:::

::: tip 适合场景
适合经常访问境外网站、希望比普通公网更稳定的用户。
:::

## <span style="color:purple;">大陆中转线路</span>

<div v-html="transitSvg"></div>

**原理：** 中转线路会先连接一个更靠近用户的入口，再转发到境外出口。这样可以改善“用户到入口”这一段，但线路多了一次转发，也可能多一个故障点。

实际速度仍取决于入口、跨境段和出口当时是否拥堵。

::: info 限制说明
跨境出口段依然走公网或优化线路，出口稳定性受境外节点和跨境链路质量影响；

依然需要出境流量穿越防火墙，无法做到零过墙风险。
:::

::: tip 适合场景
普通线路经常波动时，可以换到中转线路比较一下，再用目标网站验证。
:::

## <span style="color:green;">IEPL 内网专线</span>

<div v-html="ieplSvg"></div>

**原理：** IEPL 是 International Ethernet Private Line（国际以太网专线）的缩写，通常指运营商提供的专线传输。无忧行用这个标签区分线路类型，但具体节点的物理路径会随网络部署调整。

专线可以让中间某一段少受公共网络拥堵影响；本地 Wi-Fi、当地运营商、境外出口和目标网站仍会影响最后的体验。

::: info 使用提示
“专线”不是永远不会故障的保证。当前节点能否使用，以节点测速和实际网站结果为准。
:::

::: tip 适合场景
适合对稳定性要求较高，并希望减少公共网络波动的用户。
:::

## 综合对比

| 线路标签 | 可以怎么理解 | 适合先尝试的情况 |
|---|---|---|
| 边缘网络 | 主要走公共互联网连接境外节点 | 日常轻量使用、先确认基本连接 |
| 大陆优化线路 | 对跨境路径中的部分线路做优化 | 普通线路高峰期波动较大 |
| 大陆中转线路 | 先连接入口，再转发到境外出口 | 本地直连到境外不稳定 |
| IEPL 内网专线 | 中间某段使用专线类传输 | 更看重稳定性，希望减少公网波动 |

::: info 提示
Pro、Ultra 等线路是否出现在列表中，取决于当前账号和会员等级。具体可以在弹窗节点列表和[会员体系](/membership/benefits)中查看。
:::
