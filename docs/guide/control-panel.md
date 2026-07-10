---
translationKey: control-panel
contentType: feature-overview
product: browser-extension
productArea: browser-extension
uiSurface: control-panel
locale: zh-Hans
status: current
owner: docs
reviewStatus: verified
lastVerified: 2026-07-10
dateModified: 2026-07-10
platforms: [chrome, edge]
tools: []
appliesTo: []
sources: ["cloud/app/chromev2@1.5.10"]
title: 无忧行控制面板：连接状态和常用入口
description: 打开无忧行控制面板，先看当前模式、节点和 Google 可达性，再按需要进入代理策略、网络诊断、订阅节点和账号服务。
---

# 无忧行控制面板

插件弹窗适合快速切换模式和节点，控制面板则把连接状态、网络诊断、订阅节点和账号服务放在一个完整页面里。点击插件弹窗底部的**控制面板**即可打开。

<img class="jego-wide-screenshot" src="/images/jego-v1.5.10/control-panel-zh.png" alt="无忧行中文控制面板首页">

## 打开后，先看首页的三个状态

首页中间的**加速状态**集中显示三项信息：

- **当前模式**：显示规则、全局或关闭。规则和全局表示无忧行已经开启；关闭表示浏览器使用本地网络。
- **当前节点**：显示已经选择的线路。关闭模式下仍可能保留节点名称，但不会使用这条线路。
- **Google 可达性**：显示“可访问”时，说明在当前设置下可以连接 Google。

需要检查连接时，直接点击这一区域下方的**网络诊断**。页面会带你检查常见网站、当前规则和节点。

首页下面的**系统公告**会显示版本发布、线路调整和使用提醒。左侧选择日期，右侧就会显示对应内容。

## 左侧菜单按需要打开

### 浏览器连接

- **代理策略**：为指定域名或 IP 添加代理或直连规则。完整步骤见[自定义代理策略](/guide/proxy-strategy)。
- **网络诊断**：检查当前模式、节点、常见网站、网址走向、节点速度和加密 DNS。第一次使用从[网络诊断总览](/guide/network-diagnostics)开始。

### 电脑和手机

- **订阅节点**：会员在这里取得订阅地址，再导入受支持的电脑或手机客户端。按设备选择方法见[订阅服务](/subscription/)。

### 账号和服务

- **活动中心**：查看当前账号可以参加的活动。
- **联系客服**：提交问题并查看客服回复。
- **会员续费**：查看当前可购买或续费的会员方案。
- **支付记录**：查看已经创建的订单和付款状态。
- 页面底部的**使用指南**会回到帮助中心；**联系客服**可以直接进入支持入口。

## 常见操作从这里开始

- 查看一个网址会走代理还是直连：[查询网址走向](/guide/network-diagnostics#route-check)
- 比较当前账号里的节点：[节点测速](/guide/network-diagnostics-node-speed)
- 让指定网站按自己的规则连接：[自定义代理策略](/guide/proxy-strategy)
- 在电脑或手机的其他应用中使用：[订阅服务](/subscription/)
- 复制、导入或更新订阅：[订阅管理](/subscription/#复制和更新订阅)

不同账号看到的菜单会有一些差别。需要的入口没有显示时，先确认已经登录并更新无忧行，再重新打开控制面板。仍然找不到时，记录插件版本和菜单名称后[联系客服](/guide/support)。
