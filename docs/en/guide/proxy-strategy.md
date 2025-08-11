---
title: Proxy Strategy - User Guide
description: Setting up proxy strategy can make foreign websites automatically go through proxy, while domestic video sites don't go through proxy, etc.
---

# Proxy Strategy

::: danger Notice for Mainland China Users
<span style="color:red;">Jego's Rule mode has pre-configured almost all commonly used websites and IP addresses in mainland China. No need to add these websites to direct connection rules during daily use.</span>
:::

## Configuration Rules

In **Jego - Control Panel**, click **Proxy Strategy** in the left navigation bar, then click **Add Proxy Strategy**.

::: info Example Description
The example shows accessing BBC via London node, accessing Nikkei Chinese via Tokyo node, and accessing Bilibili without going through proxy.
:::

1. Select London node for Proxy Server
2. Fill in <span style="color:blue;">`bbc.com`</span> in Domain/Host List (if there are multiple domains, separate them with English commas and spaces) and click Save.
3. Continue adding proxy strategy, select Tokyo node for Proxy Server
4. Fill in <span style="color:blue;">`nikkei.com`</span> in Domain/Host List (if there are multiple domains, separate them with English commas and spaces) and click Save.
5. Continue adding proxy strategy, select Direct Connection [No Proxy] for Proxy Server
6. Fill in <span style="color:blue;">`acg.tv acgvideo.com b23.tv bilibili.com bilibili.tv biliapi.net biliapi.com bilivideo.com hdslb.com upos-hz-mirrorakam.akamaized.net`</span> in Domain/Host List and click Save.

![Proxy Strategy Configuration](/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F5RzPsyUBc5EyBgkQyZ9h_2Fimage_3.png)

After successful configuration, when using Jego in <span style="color:green;">`Rules`</span> mode, <span style="color:blue;">`Bilibili`</span> will be direct connection, <span style="color:blue;">`bbc.com`</span> and <span style="color:blue;">`*.bbc.com`</span> will go through London server, <span style="color:blue;">`nikkei.com`</span> and <span style="color:blue;">`*.nikkei.com`</span> will go through Tokyo server.

::: danger Important Reminder
1. <span style="color:red;">Only enter the domain name, don't enter</span><span style="color:red;">`https://`</span> <span style="color:red;"></span><span style="color:red;">and</span> <span style="color:red;"></span><span style="color:red;">`http://`</span> <span style="color:red;"></span><span style="color:red;">.</span>
2. <span style="color:red;">Main domain name represents wildcard domain,</span><span style="color:blue;">`bbc.com`</span><span style="color:red;">represents</span><span style="color:blue;">`*.bbc.com`</span><span style="color:red;">`and`</span><span style="color:blue;">`*.*.bbc.com`</span> <span style="color:red;">.</span>
:::

## OpenAI and Bing

Since Jego provides services for [How to Access New Bing, Copilot or ChatGPT](/en/guide/chatgpt-access) on the server side, we strongly recommend that you <span style="color:red;">**do not**</span> set any strategies regarding `bing.com` and `openai.com`.

## Efficient and Practical

Configuring rules properly can allow you to enjoy more freely and high-speed surfing within the country. 