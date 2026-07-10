---
translationKey: guide-vibe-coding
contentType: how-to
product: browser-extension
productArea: scenario-tutorial
uiSurface: null
locale: zh-Hans
status: current
owner: docs
reviewStatus: needs-review
lastVerified: null
platforms: [chrome, edge]
tools: []
appliesTo: []
sources: []
title: 如何使用无忧行进行 Vibe Coding - AI 编程工具代理配置教程
description: 以 FlClash 为例，为 IDE 或 CLI 配置并验证代理路径，同时区分连接结果与第三方账户资格。
---

# 如何使用无忧行进行 Vibe Coding

## AI 编程工具代理配置教程

<img src="/images/ClaudeCode.png" alt="Claude Code AI 编程工具界面" style="border-radius: 8px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); margin: 20px 0;">

本教程以 FlClash 为例，介绍怎样给 IDE 和命令行工具配置代理。不同开发工具对系统代理、环境变量和 TUN 的支持不同，完成后请用实际工具测试一次。

::: tip 适用范围
本教程以 [FlClash](/subscription/clients/flclash) 的桌面界面为例。其他客户端的菜单会有差别，可以从[按设备安装](/subscription/#按设备安装)进入对应的完整教程。

关键在于理解虚拟网卡模式和节点分流策略。
:::

## 配置步骤

### 1. 仪表盘页面：启用虚拟网卡和规则模式

在 FlClash 的仪表盘页面中：

* 启用<span style="background-color:green; color:white; padding:2px 6px; border-radius:3px;">虚拟网卡</span>（TUN 模式）
* 出站模式选择<span style="background-color:green; color:white; padding:2px 6px; border-radius:3px;">规则模式</span>

<img src="/images/vibecoding/1.png" alt="仪表盘页面：启用虚拟网卡和规则模式" style="border-radius: 8px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); margin: 16px 0; max-width: 800px; width: 100%;">

::: info 使用虚拟网卡的原因
虚拟网卡（TUN）模式可以处理被操作系统路由到虚拟接口的流量，常用于不遵守系统代理的桌面应用。但权限、路由例外、其他 VPN 和应用实现仍会影响结果，不能保证所有请求都经过代理。

如果你只是浏览器使用，建议使用[无忧行浏览器插件](/guide/usage)。
:::

### 2. 配置页面：选择订阅文件

在配置页面中：

* 切记选中<span style="background-color:green; color:white; padding:2px 6px; border-radius:3px;">无忧行</span>的订阅文件
* 保持默认的自动更新设置

### 3. 代理页面：节点选择

在代理页面（节点选择）中进行以下配置：

* 在 **❇️Manual Select** 中选择控制面板当前提供且能连接的候选节点；
* 如果界面仍提供 **🤖 ChatGPT Group**，可选择其中的候选节点，再用真实 API 目标验证。截图中的“香港 Ultra”“新加坡 Pro+”只是旧版示例，不保证当前仍存在或具备固定性能。

<img src="/images/vibecoding/2.png" alt="代理页面：节点选择" style="border-radius: 8px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); margin: 16px 0; max-width: 800px; width: 100%;">

::: tip 节点选择说明
节点名称和分组来自当前订阅配置，可能更新。带宽、稳定性和第三方可用情况以相同网络与时间下的实际测试为准。
:::

### 4. 启动服务

返回仪表盘，点击右下角的<span style="background-color:green; color:white; padding:2px 6px; border-radius:3px;">开启</span>按钮启动代理服务。

<img src="/images/vibecoding/3.png" alt="启动服务" style="border-radius: 8px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); margin: 16px 0; max-width: 800px; width: 100%;">

启动后记录界面明确显示的核心状态、启动时间、虚拟网卡和出站模式。颜色或图标含义可能随版本变化，再打开测试页面或运行下面的命令确认连接。

### 5. 请求页面：检查分流

在请求页面（或连接页面）中确认流量分流是否正确：

* 检查 AI 相关 hostname（如 `api.openai.com`、`api.anthropic.com`）是否命中你为 AI 分组选择的当前节点；
* 检查一个普通 hostname 是否命中预期的通用分组或直连规则。只记录 hostname，不公开查询串、令牌或请求内容。

::: warning 自定义分流
如有自定义接管需求，可在 FlClash 中添加覆写规则（Overrides）。

**操作步骤示例**：

假设你需要让 DeepSeek.com 直连（不走代理），可按以下步骤操作：

1. 在配置页面，点击无忧行订阅卡片右上角的<span style="background-color:green; color:white; padding:2px 4px; border-radius:3px;">三个点 ⋮</span>
2. 选择 <span style="background-color:green; color:white; padding:2px 6px; border-radius:3px;">更多</span>
3. 点击 <span style="background-color:green; color:white; padding:2px 6px; border-radius:3px;">覆写</span>
4. 点击 <span style="background-color:green; color:white; padding:2px 6px; border-radius:3px;">添加</span>
5. 在弹出的对话框中配置：
   * **规则名称**：点击后选择，如 `DOMAIN-SUFFIX`（域名后缀匹配）
   * **规则内容**：点击后填写，如 `deepseek.com`（主域名或者二级三级域名）
   * **规则目标**：点击后选择，如 `DIRECT`（直连）
6. 点击保存

<img src="/images/vibecoding/4.png" alt="自定义分流：添加覆写规则（Overrides）" style="border-radius: 8px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); margin: 16px 0; max-width: 800px; width: 100%;">

这样设置后，访问 DeepSeek.com 将不经过代理，直接使用本地网络访问。
:::

## 验证配置

可以在命令行中查询本次公开出口 IP。第三方查询站会看到你的出口地址；不愿使用时跳过此步，改用客户端请求页核对路径：

```bash
curl ip.sb
```

返回的地址只能说明该命令这一次的出口，不能证明 IDE、CLI、全部域名或第三方账户也使用同一路径。

::: tip 进一步验证
你也可以在 Cursor 或其他 AI 编程工具中尝试使用 AI 功能，如代码补全、对话等，验证是否能正常访问 AI 服务。
:::

## 常见问题

### AI 工具连接失败

1. **检查虚拟网卡是否启用**：确保 TUN 模式已开启
2. **检查节点选择**：确认当前 AI 分组选择了一个可用候选节点
3. **检查订阅更新**：按客户端教程手动更新一次并记录时间
4. **查看请求日志**：只查看本次相关且已脱敏的错误行，不公开令牌或请求内容

### 使用系统代理模式

可以，但取决于 AI 工具是否遵守系统代理或支持代理环境变量。先用系统代理做最小测试；若应用明确绕过，再评估 TUN，并在切换后复验。两种方式都不保证稳定性。

### 配置其他代理工具

目标相同，但菜单和能力不一定相同：按对应工具教程确认代理入口、规则模式、节点分组和验证方法，不复制 FlClash 的按钮或旧节点名称。

## 相关链接

* [FlClash 详细使用教程](/subscription/clients/flclash) - 了解 FlClash 的完整功能
* [Clash Verge Rev 教程](/subscription/clients/clashverge) - 多平台代理工具教程
* [sing-box 教程](/subscription/clients/sing-box) - 轻量级代理工具
* [节点选择指南](/guide/node-selection) - 了解如何选择并验证候选节点
* [设备配置总览](/subscription/) - 查看所有设备的翻墙指南
