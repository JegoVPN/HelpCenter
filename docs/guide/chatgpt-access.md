---
title: 如何解锁New Bing、Copilot或者ChatGPT - 使用指南
description: 如何用正确的姿势在中国大陆解锁New Bing、Copilot或者ChatGPT
---

# 如何解锁New Bing、Copilot或者ChatGPT

## 解锁流程

1️⃣ **第一步**，确保 **无忧行** 的 **控制面板 - 代理策略** 里没有<span style="color:blue;">`bing.com`</span>、<span style="color:blue;">`microsoft.com`</span>和<span style="color:blue;">`openai.com`</span>的访问策略：

<img src="/images/jego-v1.5.9/dashboard-proxy-policy-empty-zh.png" alt="代理策略">

::: danger 再次强调
<span style="color:red;">**再次强调：**</span>

<span style="color:red;">解锁ChatGPT和New Bing无需设置代理策略。</span>
:::

2️⃣ **第二步**，无忧行插件的模式处于<span style="background-color:green; color:white; padding:2px 6px; border-radius:3px;">全局</span>或者<span style="background-color:green; color:white; padding:2px 6px; border-radius:3px;">规则</span>均可，但服务器节点必须选择带有`[AI]`标注的节点：

<img src="/images/jego-v1.5.9/popup-paid-rules-ai-zh.png" alt="无忧行选择 AI 节点" width="280">

✅ **大功告成**，️你已经成功地完成了`Bing`、`Copilot`和`ChatGPT`解锁：

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F8xAkeKaPFvJCAt1MuBYf_2Fimage_2.png" alt="New Bing ✌">

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2Fz7RH5pwBUDwrBQdsdvah_2Fimage_3.png" alt="Copilot ✌">

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F8oyNaJcc0tFJdbungX6t_2Fimage_1.png" alt="ChatGPT ✌">

::: info 就是这么简单

使用无忧行解锁New Bing以及ChatGPT就是这么简单！
:::

---

## 常见问题：打不开New Bing、Copilot或者ChatGPT的网站了

请**优化本地网络和浏览器的环境**， 按照下面的步骤处理一下，<span style="background-color:red; color:white; padding:2px 6px; border-radius:3px;">每一步都很重要</span>：

### 1. 网络环境
1. 把路由器和本机的DNS改成阿里公共DNS: [alidns.com](http://alidns.com/) （[查看DNS设置帮助](https://www.alidns.com/knowledge?type=SETTING_DOCS#user_windows)）
   * 按设置帮助在DNS服务器地址中输入`223.5.5.5` 和 `223.6.6.6`。
2. 清理DNS缓存：
   * 点击`开始`->`运行`，输入`CMD`进入命令行模式。
   * 在命令行里输入`ipconfig/flushdns`按回车。
3. 关闭本地其他代理软件，如网易UU、讯飞游戏加速器、V2rayN、Clash等软件干扰
4. 打开 `系统设置`->`网络和Internet`->`代理` ，设置：
   * 自动检测设置：关闭
   * 使用设置脚本：关闭
   * 使用代理服务器：关闭

### 2. 浏览器环境
1. 升级浏览器至最新版本，清除所有Cookies和缓存并重启浏览器
2. 升级无忧行至[最新版本](/guide/keep-updated)，并只保留无忧行暂时禁用其他浏览器插件
3. 将无忧行设置为规则模式（免费为开启）
4. 重启浏览器

### 3. 再次访问
* 最好去无痕模式下开启无忧行注册一个境外的微软账户。
* 然后开启New Bing、Copilot或者ChatGPT

> 能访问New Bing或者ChatGPT之后，就可以尝试逐个开启其他插件或者软件了，目的是排查插件之间的相互影响。
