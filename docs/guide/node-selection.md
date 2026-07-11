---
translationKey: guide-node-selection
contentType: how-to
product: browser-extension
productArea: browser-extension
uiSurface: plugin-popup
locale: zh-Hans
status: current
owner: docs
reviewStatus: verified
lastVerified: 2026-07-10
platforms: [chrome, edge]
tools: []
appliesTo: []
sources: ["cloud/app/chromev2@1.5.10", "cloud/locales/zh_CN.csv"]
title: 节点选择 - 使用指南
description: 新手先用自动选择；需要改善连接时，再做节点测速并手动更换无忧行节点。
---

# 节点选择

节点可以理解为无忧行提供的网络线路。选择规则或全局模式后，点击弹窗里的**当前节点**就能打开节点列表；关闭模式下节点列表不能操作。

## 自动选择

**当前节点**显示为“自动选择”时（如下图），表示由无忧行自动挑选线路：

<img src="/images/jego-v1.5.9/popup-paid-rules-auto-zh.png" alt="自动选择界面" width="280">

不知道选哪个时，直接使用**自动选择**。无忧行会从账号当前可用的线路中为你选择节点，适合第一次使用和日常浏览。

自动选择会随线路情况变化，不代表永远固定在同一个地区。某个网站仍打不开或速度不理想时，可以先做[节点测速](/guide/network-diagnostics-node-speed)，再手动选一个本次可用的节点。

## 手动选择

### 节点选择方法

1. 点击下图标记的位置，展开节点列表。

<img src="/images/jego-v1.5.9/popup-node-select-collapsed-zh.png" alt="节点选择界面" width="280">

2. 上下滚动列表，点击想使用的节点。节点名称通常会显示地区或线路信息。

<img src="/images/jego-v1.5.9/popup-node-select-open-zh.png" alt="节点滚动界面" width="280">

3. 选择后，顶部无忧行图标会变成呼吸的小圆点。等它重新变回无忧行图标，再刷新目标网页。

当当前节点不再显示“自动选择”，而是你选中的节点名称时，就表示手动选择已保存。

<img src="/images/jego-v1.5.9/popup-manual-node-selected-zh.png" alt="手动选择界面" width="280">

## 什么时候需要手动选择

- 自动选择的节点暂时连不上；
- 网站能打开，但感觉明显较慢；
- 想用节点测速里带绿色闪电的线路。

如果只是某一个网站打不开，先[查网址走向](/guide/network-diagnostics#route-check)，确认它是否“走代理”。节点能用并不代表每个网站都会自动走代理。

## 节点列表为空或不能点击

- 显示关闭模式：先切换到规则或全局。
- 完全没有节点：确认已经登录，并查看会员或体验状态。
- 切换一直没有结束：重新打开弹窗；仍然失败时记录插件版本和节点名称后[联系客服](/guide/support)。

如果你想进一步了解无忧行的全球网络节点，请访问：

[节点介绍](/guide/nodes)
