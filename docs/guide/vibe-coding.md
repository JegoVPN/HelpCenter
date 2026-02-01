---
title: 如何使用无忧行进行 Vibe Coding - AI 编程工具代理配置教程
description: 为 Cursor、Claude Code、Google Antigravity、OpenAI Codex 等 AI 编程工具配置无忧行代理，实现流畅的 AI 辅助编程体验。以 FlClash 为例的详细配置教程。
---

# 如何使用无忧行进行 Vibe Coding

## AI 编程工具代理配置教程

<img src="/images/ClaudeCode.png" alt="Claude Code AI 编程工具界面" style="border-radius: 8px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); margin: 20px 0;">

随着 Cursor、Claude Code、Google Antigravity、OpenAI Codex 乃至 OpenClaw 等 AI 工具的热度攀升，针对大家近期频繁咨询的配置问题，我们以 FlClash 为例（其他产品也类似）撰写了以下教程。请参照以下步骤完成设置，无论是 IDE 还是 CLI，我们都会让你 AI 生产力无忧行。

::: tip 适用范围
本教程以 FlClash 为例进行说明，但配置思路同样适用于其他代理工具，如 Clash Verge Rev、sing-box、GUI.for.SingBox 等。关键在于理解虚拟网卡模式和节点分流策略。
:::

## 配置步骤

### 1. 仪表盘页面：启用虚拟网卡和规则模式

在 FlClash 的仪表盘页面中：

* 启用<span style="background-color:green; color:white; padding:2px 6px; border-radius:3px;">虚拟网卡</span>（TUN 模式）
* 选择<span style="background-color:green; color:white; padding:2px 6px; border-radius:3px;">规则模式</span>

::: info 为什么要用虚拟网卡？
虚拟网卡（TUN）模式能够拦截系统所有网络流量，确保 AI 编程工具的所有请求都经过代理判断。这对于 Cursor、Claude Code 等需要频繁调用 API 的工具至关重要。

如果你只是浏览器使用，建议使用[无忧行浏览器插件](/guide/usage)。
:::

### 2. 配置页面：选择订阅文件

在配置页面中：

* 切记选中<span style="background-color:green; color:white; padding:2px 6px; border-radius:3px;">无忧行</span>的订阅文件
* 保持默认的自动更新设置

### 3. 代理页面：节点选择

在代理页面（节点选择）中进行以下配置：

* **Manual Select** 选：<span style="background-color:green; color:white; padding:2px 6px; border-radius:3px;">香港 Ultra</span>
* **ChatGPT Group** 选：<span style="background-color:green; color:white; padding:2px 6px; border-radius:3px;">新加坡 Pro+</span>

::: tip 节点选择说明
* **香港 Ultra**：用于常规流量（如浏览网页、YouTube 等），速度快且稳定
* **新加坡 Pro+**：专门用于 AI 相关服务（OpenAI、Anthropic、Google AI 等），针对 AI API 优化
:::

### 4. 启动服务

返回仪表盘，点击右下角的<span style="background-color:green; color:white; padding:2px 6px; border-radius:3px;">开启</span>按钮启动代理服务。

### 5. 请求页面：检查分流

在请求页面（或连接页面）中确认流量分流是否正确：

* ✅ AI 相关域名（如 `api.openai.com`、`api.anthropic.com`）经由<span style="background-color:green; color:white; padding:2px 6px; border-radius:3px;">新加坡 Pro+</span>
* ✅ 常规流量（如 YouTube、Google）经由<span style="background-color:green; color:white; padding:2px 6px; border-radius:3px;">香港 Ultra</span>

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
   * **规则目标**：点击后选择，如 `DIRECT`（直连）、`REJECT`（拒绝）
6. 点击保存

这样设置后，访问 DeepSeek.com 将不经过代理，直接使用本地网络访问。
:::

## 验证配置

在命令行（Terminal）中输入以下命令，检查是否已成功获取境外 IP：

```bash
curl ip.sb
```

如果返回的是境外 IP 地址（非中国大陆 IP），说明配置成功！

::: tip 进一步验证
你也可以在 Cursor 或其他 AI 编程工具中尝试使用 AI 功能，如代码补全、对话等，验证是否能正常访问 AI 服务。
:::

## 常见问题

### 为什么 AI 工具连接失败？

1. **检查虚拟网卡是否启用**：确保 TUN 模式已开启
2. **检查节点选择**：确认 ChatGPT Group 选择了新加坡 Pro+ 节点
3. **检查订阅更新**：确保订阅文件是最新的
4. **查看请求日志**：在请求页面查看具体的连接失败原因

### 可以用系统代理模式吗？

不推荐。系统代理模式下，某些 AI 工具的请求可能不会经过代理，导致连接失败。虚拟网卡模式能够拦截所有流量，确保稳定性。

### 其他代理工具怎么配置？

配置思路相同：

1. 启用虚拟网卡（TUN）模式
2. 选择规则模式
3. 正确分配节点（AI 服务用新加坡 Pro+，常规流量用香港 Ultra）

## 相关链接

* [FlClash 详细使用教程](/tool/flclash) - 了解 FlClash 的完整功能
* [Clash Verge Rev 教程](/tool/clashverge) - 另一款优秀的多平台代理工具
* [sing-box 教程](/tool/sing-box) - 轻量级代理工具
* [节点选择指南](/guide/node-selection) - 了解如何选择最适合的节点
* [设备配置总览](/devices/pc-mobile) - 查看所有设备的翻墙指南
