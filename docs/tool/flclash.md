---
jegoSupport: supported
tool: flclash
clientKind: null
minimumOs: []
architectures: []
subscriptionFormats: []
lifecycle: current
recommendation: recommended
securityStatus: needs-review
supportedVersions: []
replacements: []
officialSources: [https://github.com/chen08209/FlClash]
translationKey: tool-flclash
contentType: tool-guide
product: subscription-service
productArea: tools
uiSurface: null
locale: zh-Hans
status: current
owner: docs
reviewStatus: needs-review
lastVerified: 2026-07-10
platforms: [windows, macos, linux, android]
tools: [flclash]
appliesTo: []
sources: [https://github.com/chen08209/FlClash]
title: FlClash - 工具软件
description: 基于Mihomo（原ClashMeta）的多平台代理客户端，简单易用，开源无广告。
---

# FlClash

基于Mihomo（原ClashMeta）的多平台代理客户端，简单易用，开源无广告。

::: info 欢迎
欢迎阅读2025年FlClash使用教程
:::

FlClash 是基于 Mihomo（原 Clash Meta）的开源客户端，官方提供 Windows、macOS、Linux 和 Android 版本。

## <img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2Fu2sHeQjHJurcgVhJB1zO_2Ficon_2.png" width="26" height="26" alt="FlClash图标"> 获取 FlClash

1. Github release: [https://github.com/chen08209/FlClash/releases](https://github.com/chen08209/FlClash/releases)

打开Github Release页面后，会看到很多安装包，不用紧张，根据你的操作系统下载和安装即可。

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FmV6rxFWJRr8WsZsZFpbr_2Fimage_3.png" width="260">

**下载说明：**

* 先展开对应 Release 的 Assets，并查看发布说明；
* 根据操作系统和 CPU 架构选择明确匹配的包；
* 不要机械下载“第一个”文件，也不要从非官方镜像取得安装包；
* 架构或包格式不确定时，先查项目说明再安装。


### 操作界面

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FW2zBR48roOx17y7sNV6x_2Fmobile_1.gif" alt="移动版本" width="300"> <img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FOgxjjepQyUiBKRRpzqkt_2Fdesktop_2.gif" alt="桌面版本">

## 添加订阅

在**无忧行 - 控制面板**里点击左侧导航栏**订阅节点** ，找到Mihomo 订阅地址并点击**复制**。

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2Fbf6ZGnMBZioZr9rD5P5J_2Fimage_2.png" alt="无忧行控制面板">

<div class="tip custom-block" style="padding-top: 8px">

手机上也能取订阅地址：用手机浏览器打开 <https://jego.us> 登录即可复制。

</div>

打开 FlClash，依次进入 **配置** > **新配置+** > **URL** 。

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FA1tnxVXgicb51EQ4sbmy_2Fimage_3.png" alt="新配置+"> <img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FUCyxhXIZubhodcSGWnUg_2Fimage_1.png" alt="URL">

复制刚才的URL到对话框里，然后点击提交。导入成功后，你会在配置页面看到已导入的代理配置。

点击配置文件右上角 **三个点 -> 编辑** 除了名称，其他不要动。

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FZ1SIaan4pDUJBVK1Eag5_2Fimage_2.png" alt="编辑配置">

点击配置文件右上角 **三个点 -> 同步** 就是更新订阅文件的意思。

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FSUZB0uhm5ulHogGxgLEG_2Fimage_3.png" alt="更新配置">

### 配置覆写规则（可选）

如果需要自定义某些域名的代理行为，可以通过添加覆写规则来实现：

1. 在配置页面，点击订阅配置卡片右上角的<span style="background-color:green; color:white; padding:2px 4px; border-radius:3px;">三个点 ⋮</span>
2. 选择 <span style="background-color:green; color:white; padding:2px 6px; border-radius:3px;">更多</span>
3. 点击 <span style="background-color:green; color:white; padding:2px 6px; border-radius:3px;">覆写</span>
4. 点击 <span style="background-color:green; color:white; padding:2px 6px; border-radius:3px;">添加</span>
5. 在弹出的对话框中配置：
   * **规则名称**：点击后选择，如 `DOMAIN-SUFFIX`（域名后缀匹配）
   * **规则内容**：点击后填写，如 `example.com`（主域名或者二级三级域名）
   * **规则目标**：点击后选择，如 `DIRECT`（直连）、`REJECT`（拒绝）、`MATCH`（匹配）
6. 点击保存

::: tip 使用场景
覆写规则适用于需要特定域名走指定节点的场景，如 AI 开发工具、特定网站加速等。详见 [Vibe Coding 配置指南](/guide/vibe-coding)。
:::

## 开启代理

然后回到仪表盘：**出站模式选规则**，**虚拟网卡打开**，然后点击**右下角的开始**。

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FMsBeIDztWugUwwvG8IFR_2Fimage_1.png" alt="开启代理">

### FlClash成功运行时的界面如下：

1. 网络检测的IP从中国变为境外
2. 开启按钮变成运行时长的统计

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FEwI9BEZZXjF4t3HaMnab_2Fimage_2.png" alt="成功运行中">

## 节点选择

::: info 代理界面BUG - 重启大法好
<img src="/images/FlClash-Config.png" alt="代理选择">
如遇到代理界面只显示配置文件（不显示节点服务器），这是第一次添加配置时FlClash的界面BUG，重启FlClash就好了。
:::

点击代理：根据自己实际情况来选择。

注：延时低的不代表速度快，延时高的不代表速度慢，自己感受着来。

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FliJ718yvcBlnxgOf1dw6_2Fimage_3.png" alt="节点选择">

## 选择出站模式

### **规则 / Rule：只代理国外流量**

适用于同时使用国内外服务的用户。

规则模式下，中国大陆的流量走本地直连，不经过代理服务器。

在大陆网站上查询 IP 得到的是本地 IP 地址。

在国外网站上查询 IP 得到的是代理 IP 地址。

分流规则无法做到全面且具有时效性，如果遇到以下情况，请尝试全局代理。

* 无法打开国际网站；
* 加载国际网站缓慢；

### **直连 / Direct：不代理任何流量**

选择此模式将导致无法翻墙，与不开 VPN 的效果一致。

### **全局 / Global：代理所有流量**

适用于不依赖大陆服务的用户。

国外流量正常走代理；大陆流量也会经过代理服务器，能用但速度明显变慢。

## FlClash手机版本使用教程

请从这个视频的2分04秒看起。

<YouTube videoId="HtZWdMHui6I" title="FlClash 使用教程视频" />
