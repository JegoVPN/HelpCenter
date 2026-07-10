---
translationKey: guide-mode-selection
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
title: 模式选择 - 使用指南
description: 了解无忧行的规则、全局和关闭模式，以及每种模式如何处理浏览器请求。
---

# 模式选择

无忧行弹窗顶部会显示账号当前可用的模式。**规则**按代理规则分流，**全局**让全部浏览器请求都走代理，**关闭**则使用本地网络。按自己的使用需要直接切换即可。

## 规则模式：按代理规则分流

规则模式会按照无忧行的代理规则处理每个浏览器请求。规则可以匹配域名、IP 地址或 IP 网段；需要代理的请求走当前节点，需要直连的请求使用本地网络。

<img src="/images/jego-v1.5.9/popup-paid-rules-auto-zh.png" alt="无忧行规则模式界面" width="280">

使用规则模式时：

- 命中代理规则的域名或 IP 地址经过当前节点；
- 命中直连规则的域名、IP 地址或网段使用本地网络；
- 没有命中自定义规则时，继续按无忧行的内置规则处理。

如果某个域名或 IP 地址仍没有按预期走代理，可以用**控制面板 → 网络诊断 → 连接检测 → 查网址走向**查看匹配结果。

## 全局模式：全部浏览器请求都走代理

全局模式会让全部浏览器请求经过当前无忧行节点，本地地址仍直接连接。

<img src="/images/jego-v1.5.9/popup-paid-global-auto-zh.png" alt="无忧行全局模式界面" width="280">

使用全局模式时：

- 全部浏览器请求都会走代理；
- 没有命中规则的浏览器请求也会经过当前节点；
- 本地地址仍直接连接。

需要按代理规则分流时，再切回规则模式即可。模式切换只影响安装无忧行的浏览器。

## 关闭：使用本地网络

选择关闭后，无忧行不会代理浏览器流量，网页全部使用本地网络。弹窗可能仍保留上次选择的节点名称，但这个节点不会工作，节点列表也不能切换。

<img src="/images/jego-v1.5.9/popup-paid-off-zh.png" alt="无忧行关闭模式界面" width="280">

选择关闭后：

- 浏览器网站使用本地网络；
- 当前保存的节点不会参与连接；
- 节点测速页面会按需要提示切换到这个状态。

## 按钮和截图不一样时

账号方案不同，弹窗可能显示“开启/关闭”，也可能显示“规则/全局/关闭”。以你的弹窗为准：

- **开启**相当于启用当前账号提供的代理模式；
- **规则**和**全局**按上面的说明选择；
- **关闭**始终表示使用本地网络。

下面是免费版界面示例，帮助免费用户辨认开启和关闭状态。

<div class="jego-popup-state-grid">
  <figure>
    <figcaption>免费版开启状态</figcaption>
    <img src="/images/jego-v1.5.9/popup-free-on-zh.png" alt="免费版开启界面">
  </figure>
  <figure>
    <figcaption>免费版关闭状态</figcaption>
    <img src="/images/jego-v1.5.9/popup-free-off-zh.png" alt="免费版关闭界面">
  </figure>
</div>

## 浏览器图标状态

免费版图标状态：

| 开启时 | 关闭时 |
| --- | --- |
| <img src="/images/jego-v1.5.9/icon-rule-48.png" alt="开启图标" width="32" /> | <img src="/images/jego-v1.5.9/icon-off-48.png" alt="关闭图标" width="32" /> |

会员版图标状态：

| 全局模式时 | 规则模式时 | 关闭时 |
| --- | --- | --- |
| <img src="/images/jego-v1.5.9/icon-global-48.png" alt="全局模式图标" width="32" /> | <img src="/images/jego-v1.5.9/icon-rule-48.png" alt="规则模式图标" width="32" /> | <img src="/images/jego-v1.5.9/icon-off-48.png" alt="关闭图标" width="32" /> |

切换后请等顶部小圆点重新变回无忧行图标，再刷新网页。需要确认实际走向时，可以打开[查询网址走向](/guide/network-diagnostics#route-check)。
