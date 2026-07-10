---
translationKey: plugin-permissions-privacy
contentType: reference
product: browser-extension
productArea: browser-extension
uiSurface: plugin-popup
locale: zh-Hans
status: current
owner: docs
reviewStatus: verified
lastVerified: 2026-07-10
dateModified: 2026-07-10
platforms: [chrome, edge]
tools: []
appliesTo: []
sources: [https://jegocloud.com/policy]
title: 无忧行浏览器权限说明
description: "用简单的话了解无忧行的四项扩展权限、host_permissions 网站访问权限和官方隐私说明。"
---

# 无忧行浏览器权限说明

无忧行需要下面这些浏览器权限，才能保存设置、切换代理、保持连接并使用网络诊断。

| 权限名称 | 用来做什么 |
|---|---|
| `storage` | 保存你的插件设置和登录状态 |
| `proxy` | 让浏览器流量按无忧行的模式和节点访问网站 |
| `alarms` | 定时更新连接所需的信息 |
| `management` | 识别其他代理扩展，避免多个代理同时控制浏览器设置 |
| `host_permissions` · `all URLs` | 用于获取服务配置、连接检测和节点测速 |

插件里的模式和节点怎么使用，可以看[插件弹窗](/guide/plugin-features)。

## 安装和更新时核对权限

1. 只从[安装教程](/guide/installation)列出的入口获取无忧行。
2. 在 Chrome 或 Edge 的扩展管理页查看插件名称、版本和权限。
3. 如果一次更新突然要求以前没有的新权限，先记下权限名称和版本，再通过[联系支持](/guide/support)确认。
4. 只有确实要在无痕窗口使用时，才打开“允许无痕模式”。

安装包只从上面的官方入口获取，这样浏览器显示的名称、版本和权限才能与教程对应。

完整隐私说明见 [Jego 官方隐私政策](https://jegocloud.com/policy)。
