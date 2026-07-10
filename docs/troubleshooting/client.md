---
translationKey: troubleshooting-client
contentType: troubleshooting
product: subscription-service
productArea: troubleshooting
uiSurface: null
locale: zh-Hans
status: current
owner: docs
reviewStatus: needs-review
lastVerified: null
dateModified: 2026-07-10
platforms: [windows, macos, linux, android, ios, ipados, harmonyos]
tools: []
appliesTo: []
sources: []
title: 无忧行订阅客户端故障排查
description: 订阅无法导入、没有节点、连接打不开、所有网站失败或更新后异常时，按现象一步一步排查。
---

# 无忧行订阅客户端故障排查

先从[按设备安装](/subscription/#按设备安装)进入正在使用的客户端教程，依次完成安装、导入订阅、选择节点和打开连接。

## 1. 订阅无法导入

打开对应的[设备教程](/subscription/#按设备安装)，再从无忧行控制面板复制订阅。按客户端教程选择对应的订阅类型并导入。

## 2. 导入成功但没有可用项

在客户端里找到刚添加的订阅，手动点击一次更新、同步或刷新。确认订阅已启用，并查看教程是否还需要选择配置文件。仍然为空时，从控制面板重新复制一次订阅并再次导入。

## 3. 有节点但无法启动连接

确认已经选择一个节点，并打开客户端的连接开关。手机第一次连接时通常会出现系统 VPN 权限提示，需要允许。仍然失败就换一个节点，同时保持系统防火墙正常开启。

## 4. 已连接但所有网站都失败

先断开客户端，确认普通网络本身能上网。然后检查是否同时开着多个 VPN 或代理，只保留当前客户端，再更新订阅并换一个节点。浏览器插件的问题可以用无忧行的[连接检测](/guide/network-diagnostics#connection-check)，但它不能代替手机或电脑客户端的检查。

## 5. 只有部分网站失败

检查客户端当前是规则还是全局模式，并查看这个网站的域名有没有被设为直连。也可以切到全局模式做一次对比；如果只有登录或某项功能失败，还要查看该网站自己的账号和服务状态。

## 6. 更新后出现问题

记下更新前后的版本，到对应工具教程查看已知问题。安装包请从工具官网、官方仓库或应用商店获取。当前工具如果已标为“不推荐”“已停用”或“Jego 不再支持”，请按页面给出的替代工具迁移。

## 选择对应的工具教程

从[按设备安装](/subscription/#按设备安装)进入当前系统，再打开正在使用的客户端教程。页面会保留该客户端自己的安装、导入和更新步骤。

仍无法解决时，向[客服](/guide/support)提供客户端和系统版本、发生时间、错误文字、节点名称和操作步骤。
