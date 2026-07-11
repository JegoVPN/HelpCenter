---
jegoSupport: unsupported
tool: clash-for-windows
clientKind: null
minimumOs: []
architectures: []
subscriptionFormats: []
lifecycle: discontinued
recommendation: not-recommended
securityStatus: blocked
supportedVersions: []
replacements: [flclash, clashverge]
officialSources: []
translationKey: tool-clash-for-windows
contentType: tool-guide
product: subscription-service
productArea: tools
uiSurface: null
locale: zh-Hans
status: current
owner: docs
reviewStatus: needs-review
lastVerified: 2026-07-10
platforms: [windows, macos]
tools: [clash-for-windows]
appliesTo: []
sources: []
title: Clash for Windows - 工具软件
description: Clash for Windows 的安装与订阅教程，以及 FlClash 等受支持的 Mihomo 系列替代客户端。
---

# Clash for Windows

Clash for Windows 已下架、不再获得安全更新，建议改用 FlClash 等受支持的 Mihomo 系列客户端。

::: danger 不推荐使用
该软件已经好几年不更新了，无忧行不推荐大家继续使用。

请使用[无忧行推荐的客户端](/subscription/#_1、关于应该使用什么客户端)
:::

::: danger 已下架
Clash for Windows已于2023年11月2日下架。
:::

::: info 替代方案
可以移步 [Mihomo系列软件](/subscription/clients/mihomo) 页面获取最新软件。
:::

## <img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F4VjXObRb6A8YcNiBGA9e_2Fclash_2.png" width="26" height="26" alt="Clash图标"> 历史安装说明

旧归档站不是官方、受维护或可验证完整性的分发入口，本页不再提供下载链接。请安装上方列出的受维护替代工具；以下步骤与截图仅用于从旧设备迁移订阅和识别设置。不要从搜索结果下载名称相似的 `.7z`、`.exe` 或 `.dmg` 文件。

## 添加 Clash 配置订阅

### **添加订阅：**

在**无忧行 - 控制面板**里点击左侧导航栏**订阅节点** ，找到**Clash/Mihomo Series**订阅地址并点击**复制**。

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FZi4WzVyeec9wgY50xRLc_2Fimage_2.png" alt="无忧行控制面板">

<div class="tip custom-block" style="padding-top: 8px">

手机上也能取订阅地址：用手机浏览器打开 <https://jego.us> 登录即可复制。

</div>

打开 Clash for Windows，点击窗口左侧的 **Profiles** (配置文件)。

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FKUWlGIFpAyHjpFHOAhYE_2Fimage_3.png" alt="Profiles页面">

在 Profiles 页面顶部，粘贴 **Clash 配置订阅链接**，随后点击 **Download** 下载配置文件。

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FFXfU18yTGxoAoAIfYaGe_2Fimage_1.png" alt="下载配置">

下载成功后，Clash for Windows 将自动切换至下载的配置文件。

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FbOBW1Ud8wrXZ9pMWTw1x_2Fimage_2.png" alt="配置成功">

## 使用说明 {#dai-li-proxies}

### 常规 General {#chang-gui-general}

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FN1xu9dCMCxl1cWQXK0Co_2Fimage_3.png" alt="常规设置">

在常规页面下可以清楚了解当前配置文件的设置，譬如常规的 http 和 socks5 代理端口等，方便对某些应用单独进行配置代理。

#### 选项说明 {#xuan-xiang-shuo-ming}

* Port：Mixed(Http+Socks) 代理端口
* Allow LAN：是否允许局域网代理
  * 网络图标：显示网卡信息
* Log Level：Clash 核心日志等级
* IPV6: 是否启用 IPV6
* Home Directory：Clash 配置文件目录（不建议修改此目录下文件内容）
* GeoIP Database：GeoIP 数据库更新
* UWP Loopback：UWP 应用联网限制解除工具
* Service Mode: 虚拟网卡安装(TUN 模式)
  * 地球图标：显示 Service Mode 在线状态
* TUN Mode: 是否启用 TUN 模式
  * 设置图标：打开 TUN 模式设置面板
* TAP Device：虚拟网卡安装(TAP 模式)
* Mixin: 是否启用 Mixin 模式
  * 设置图标：启动编辑器修改 Mixin 配置
* System Proxy：系统代理开关
* Start with Windows/macOS/Linux：开机自启动开关

#### 点击行为 {#dian-ji-hang-wei}

* Clash for Windows（标题）：快速重启软件
* v x.x.x: 当显示`new`提示时可以直接点击下载新版安装包 (每隔 6 小时检查一次更新)
* Connected/Disconnected：文件夹中显示当前日志文件

#### 右侧对应点击行为 {#you-ce-dui-ying-dian-ji-hang-wei}

* Port:
  * 终端图标: 使用命令行设置系统代理
  * 循环图标: 随机设置 Mixed 端口
  * 端口号：修改 Mixed Port
* Log Level: 设置日志类型
* IPv6：设置是否启用 IPv6 连接逻辑
* Clash Core
  * 盾牌图标: 添加 Allow LAN 与 System Stack 的防火墙规则
  * 内核版本号: 打开 Clash 内核控制 Web 页面
* UWP Loopback：快速打开回环代理限制器
* Home Directory：快速打开配置文件目录
* GeoIP Database：点击更新 GeoIP 库 （macOS 可用）
* TAP Device：打开 TAP 模式虚拟网卡控制面板（Windows 可用）

### 代理 Proxies {#dai-li-proxies-2}

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F0ItaMGtYXVi98CkgiosU_2Fimage_1.png" alt="代理页面">

代理页面主要的作用就是**切换代理模式**和**切换节点**

#### 切换代理模式 {#qie-huan-dai-li-mo-shi}

Clash 共有三种工作模式：

* 全局（Global）：所有请求直接发往**代理服务器**
* 规则（Rule）：所有请求**根据配置文件规则进行分流**
* 直连（Direct）：所有请求**直接发往目的地**

切换不同模式时，对应的节点列表会对应变化

#### 切换节点 {#qie-huan-jie-dian}

::: tip 延迟测试
延迟测试(网络图标)可测试所有节点的延迟，可在Settings→Latency Test URL修改测试URL

节点按照策略组分开，并可以以组为单位进行延迟测试，可以方便选出延迟更低的节点。
:::

## 常见问题 {#qa}

### **首次运行 Clash 的注意事项**

1. 不要关闭系统防火墙或整体退出安全软件。若启动被拦截，只核对 Clash 可执行文件的来源和完整性，并为该程序设置最小范围例外；复测后删除不再需要的例外。
2. 必须解压缩后再运行，不能直接在压缩包里运行。
3. 运行后屏幕底部任务栏将显示 Clash 图标「猫咪」。
   * 如果你看不到 Clash 图标，它可能已被收起：点击任务栏的「^」（显示隐藏的图标）即可找到。
   * 双击任务栏 Clash 图标可显示软件主界面。

### 获取订阅地址

1. 务必 🚫 **禁用网页翻译功能**，否则获取的订阅地址有可能出错。
2. 在**无忧行 - 控制面板**里点击左侧导航栏**订阅节点**，找到 **Clash/Mihomo Series** 订阅地址并点击**复制**。

### **下载或更新订阅出错**

以下 3 种原因最常见，按下列顺序排查即可：

1. **🐷 订阅地址错误**
   * 确保是在**无忧行 - 控制面板**里复制的订阅地址。
2. **📶 网络原因**
   * 尝试更换网络，例如：自己或朋友的手机热点，家里、公司、隔壁的 WIFI 等。
   * 尝试关闭 Clash > General > System Proxy 。
   * 尝试退出其它 VPN 或代理软件。
   * 尝试重启电脑、猫、路由器。
   * 保持系统防火墙开启。若日志明确显示浏览器或客户端被阻止，只按系统或组织管理员要求添加最小范围的应用例外，复测后撤销临时规则。

## 设置代理模式

前往「代理 | Proxies」界面，根据你的需求选择代理模式：

### **全局连接 | Global：代理所有流量**

* 适用于不依赖国内服务的用户。
* 国外流量正常走代理；大陆流量也会经过代理服务器，能用但速度明显变慢。
* 此模式下 🈲 **不能选 DIRECT 和 REJECT 节点**，它们会导致无法上网。

### **规则判断 | Rules：只代理国外流量**

适用于同时使用国内外服务的用户。

* 规则模式下，中国大陆的流量走本地直连，不经过代理服务器。
* 在国内網站上查询 IP 得到的是本地 IP 地址。
* 在国外网站上查询 IP 得到的是代理 IP 地址。

分流规则无法做到全面且具有时效性，如果遇到以下情况，请尝试全局代理。

* 无法打开国际网站；
* 加载国际网站缓慢；
* 无法解锁 Netflix / Spotify 等区域限制内容。

### **直接连接 | Direct：不代理任何流量**

选择此模式将导致无法翻墙，与关闭 VPN 的效果一致。

### **脚本模式 | Script：灵活地自定义规则**

官方手册：[https://lancellc.gitbook.io/clash/clash-config-file/script](https://lancellc.gitbook.io/clash/clash-config-file/script)

## 故障排查

### **已选择可用节点，但 Chrome 无法访问境外网站**

有以下 2 种原因：

*   **1️⃣ 与无忧行扩展程序冲突**。

    1. 前往 Chrome  > 无忧行
    2. 在插件小弹窗将无忧行的模式切换为直连模式即可。

* **2️⃣ 权限不足无法跟随系统代理。**
  1. 右键点击 Chrome 快捷方式，选取属性。
  2. 在目标后面添加**一个空格**和**启动参数**：--proxy-server="http://127.0.0.1:7890"

### **360 / QQ / 搜狗等浏览器无法访问境外网站**

不要使用国产浏览器访问境外网站，防止泄露浏览器历史记录。

国内浏览器出现无法使用的情况，我们不提供技术支持。

### **LINE 无法连接服务器**

LINE 不会跟随系统代理设置，需要在 LINE 的高级设置里手动配置代理：

1. 确保浏览器可以正常访问境外网站。
2. ✅ 启用代理服务器
3. 代理服务器：**HTTP** 或 **SOCKS5 。**
4. 服务器：**127.0.0.1**:**7890**
