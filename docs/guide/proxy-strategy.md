---
title: 代理策略 - 使用指南
description: 设置好代理策略可以让国外的网站自动走代理，而国内的影视站则不走代理等等。
---

# 代理策略

::: danger 中国大陆地区用户注意
<span style="color:red;">无忧行的规则模式已预置几乎所有大陆常用的网站和IP地址，日常使用时无需再添加这些网站到直连规则。</span>
:::

## 配置规则

在**无忧行 - 控制面板**里点击左侧导航栏**代理策略** ，点击**添加代理策略**。

::: info 示例说明
示例以访问BBC经由伦敦节点、访问日经中文网经由东京节点、访问哔哩哔哩不经过代理为例。
:::

1. Proxy Server选择伦敦节点
2. Domain/Host List填写<span style="color:blue;">`bbc.com`</span>（如有多个域名请用英文的逗号和空格分隔）点击保存。
3. 继续添加代理策略，Proxy Server选择东京节点
4. Domain/Host List填写<span style="color:blue;">`nikkei.com`</span>（如有多个域名请用英文的逗号和空格分隔）点击保。
5. 继续添加代理策略，Proxy Server选择直连\[不走代理]
6. Domain/Host List填写<span style="color:blue;">`acg.tv acgvideo.com b23.tv bilibili.com bilibili.tv biliapi.net biliapi.com bilivideo.com hdslb.com upos-hz-mirrorakam.akamaized.net`</span>点击保存。

![代理策略配置](/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F5RzPsyUBc5EyBgkQyZ9h_2Fimage_3.png)

配置成功后，<span style="color:green;">`Rules`</span>模式下使用无忧行时，<span style="color:blue;">`哔哩哔哩`</span>都是直接连接，<span style="color:blue;">`bbc.com`</span>及<span style="color:blue;">`*.bbc.com`</span>都将走伦敦服务器，<span style="color:blue;">`nikkei.com`</span>及<span style="color:blue;">`*.nikkei.com`</span>都将走东京服务器。

::: danger 重要提醒
1. <span style="color:red;">只用输入域名即可，不用输入</span><span style="color:red;">`https://`</span> <span style="color:red;"></span><span style="color:red;">以及</span> <span style="color:red;"></span><span style="color:red;">`http://`</span> <span style="color:red;"></span><span style="color:red;">。</span>
2. <span style="color:red;">主域名即代表泛域名，</span><span style="color:blue;">`bbc.com`</span><span style="color:red;">即代表</span><span style="color:blue;">`*.bbc.com`</span><span style="color:red;">`以及`</span><span style="color:blue;">`*.*.bbc.com`</span> <span style="color:red;">。</span>
:::

## OpenAI和Bing

由于无忧行在服务端提供了 [如何解锁New Bing、Copilot或者ChatGPT](/guide/chatgpt-access)的服务，我们强烈建议您<span style="color:red;">**不要**</span>设置任何关于`bing.com`和`openai.com`的策略。

## 高效实用

配置好规则，可以让你更加畅快地享受境内自由且高速地冲浪。
