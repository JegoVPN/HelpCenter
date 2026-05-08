---
title: sing-box for Apple platforms - Tools & Software
description: sing-box for Apple platforms is called sing-box VT in Apple Store, a brand new kernel that supports almost all current protocols, and is the only free, open source, ad-free and good tool in App Store.
---

# sing-box for Apple platforms

sing-box for Apple platforms is called sing-box VT in Apple Store, a brand new kernel that supports almost all current protocols, and is the only free, open source, ad-free and good tool in App Store.

## <img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FX6LBfzRlMdWyQVvPC9eg_2Fimage_1.png" width="26" height="26" alt="sing-box icon"> Get sing-box for Apple platforms

### Apple Family Series

macOS iOS iPadOS tvOS can be installed through Apple Store, the only threshold is that you need a non-mainland China Apple ID

* [App Store](https://apps.apple.com/app/sing-box-vt/id6673731168)

::: info Registration Tutorial
If you want to register your own non-mainland App Store account, see the [US Apple ID Registration Guide](/en/devices/us-apple-id), or purchase a ready-made account.
:::

macOS can also be installed through Github and command line

* [GitHub Releases](https://github.com/SagerNet/sing-box/releases)
* Command line: `brew install sfm`

Additional explanation:

* SFI is the abbreviation of sing-box for iOS;
* SFM is the abbreviation of sing-box for macOS;
* SFT is the abbreviation of sing-box for tvOS.

## Add Subscription

In the **Jego - Control Panel**, click on **Subscription Nodes** in the left navigation bar, find the **Sing-Box** subscription address and click **Copy**.

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FQ9Ncmw0YFCe4ziEMoSuw_2Fimage_3.png" alt="Sing-Box subscription address">

<div class="tip custom-block" style="padding-top: 8px">

Jego subscription service mobile panel: <https://jego.us>

</div>

## sing-box for macOS /SFM Usage Tutorial

### Add Subscription

Open the sing-box client, go to `Profiles -> New Profile`

1. Fill in `Jego` in Name
2. Select `Remote` for Type
3. Paste the `sing-box subscription URL` copied from Jego in URL
4. Don't change anything else, just click `Create`

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FUVouSyaeUPhkLV9rNm2A_2Fimage_1.png" alt="macOS configuration settings">

### Enable sing-box

Click Dashboard, make sure Profile selects the Jego just created, then click the `start button` in the red circle.

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FFn3jEa3uWX1o2927aGHo_2Fimage_2.png" alt="macOS enable sing-box">

#### Overview - Select internet mode

Reminder: The first time you use it, all three modes may not be selected. It's recommended to click on `Rule`.

`Rule` - Smart routing mode, automatically selects direct connection or proxy based on rules  
`Direct` - Direct connection mode, all traffic bypasses proxy  
`Global` - Global proxy mode, all traffic goes through proxy

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FOHCHUCUIQ4chAL7HNnPm_2Fimage_3.png" alt="macOS internet mode">

#### Groups - Switch node servers

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F1pikxhPrKq6ac7M6ltdW_2Fimage_1.png" alt="macOS node selection">

On this Tab, you can manually choose the node server you want to use.

## sing-box for iOS / SFI Usage Tutorial

### Add Subscription

Open the sing-box client, go to `Profiles -> New Profile`

1. Fill in `Jego` in Name
2. Select `Remote` for Type
3. Paste the `sing-box subscription URL` copied from Jego in URL
4. Don't change anything else, just click `Create`

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FAmFAcPyKVpuBQXXrvZKK_2F20250714-162644_2.png" alt="iOS configuration settings 1" width="300"> <img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2Ff2h51eKe6LMghnHdmdzl_2F20250714-162647_3.png" alt="iOS configuration settings 2" width="300">

### Enable sing-box

Click `Dashboard`, make sure Profile selects the Jego just created, then click the `Enabled` switch.

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FxZVgmsq4OQLsT2eLghMZ_2F20250714-162650_1.png" alt="iOS enable sing-box 1" width="300"> 

The usage logic is similar to macOS above, using the same UI framework.

#### Overview tab - Select internet mode
<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2Fu0p5d9m5Kv1ZFfm2hvm8_2F20250715-064637_2.png" alt="iOS enable sing-box 2" width="300">
Reminder: The first time you use it, all three modes may not be selected. It's recommended to click on `Rule`.

`Rule` - Smart routing mode, automatically selects direct connection or proxy based on rules  
`Direct` - Direct connection mode, all traffic bypasses proxy  
`Global` - Global proxy mode, all traffic goes through proxy

#### Groups tab - Switch node servers
<img src="/images/singbox-ios-groups.png" alt="sing-box groups" width="300">

On this Tab, you can manually choose the node server you want to use.

## sing-box Common Issues

### 🚫 Cannot access foreign websites but can access domestic websites?

**🟡 Situation 1: Just started**

When sing-box just starts, before processing foreign domain name resolution, it will first conduct a URL speed test on all available nodes to select the fastest node to complete subsequent DNS resolution. Therefore, before the speed test is completed, you may temporarily be unable to access foreign websites.

> ✅ Solution: If you don't want to wait for the speed test process, you can manually select an available node, so you can immediately access foreign websites.

**🟡 Situation 2: Same problem occurs during use**

If you also suddenly cannot access foreign websites during use, it's likely that the currently selected node is unavailable or has poor connection quality.

> ✅ Solution: Please check the connectivity of the current node, and manually switch to a stable available node when necessary to restore access.

---

**💡** Note: This problem will not affect access to domestic websites, nor will it affect the use of services based on foreign IP (such as Telegram), only affecting access to foreign domain name websites.

### ⚠️ Report "Service Error", cannot start service

If you encounter the error shown in the image below when starting:

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FI7tmp4qdI0FYxbbPmGdN_2F20250720133807_3.jpg" alt="Service error" width="300">

```xml
(packet-tunnel) error: start service: initialize rule-set[2]: initial rule-set: geosite-geolocation-cn: Get "https://raw.githubusercontent.com/SagerNet/sing-geosite/rule-set/geosite-geolocation-cn.srs": context deadline exceeded | initialize rule-set[2]: initial rule-set: geoip-cn: Get "https://raw.githubusercontent.com/SagerNet/sing-geoip/rule-set/geoip-cn.srs": initialize rule-set[2]: initial rule-set: geosite-geolocation-cn: Get "https://raw.githubusercontent.com/SagerNet/sing-geosite/rule-set/geosite-geolocation-cn.srs": context deadline exceeded | initialize rule-set[2]: initial rule-set: geosite-geolocation-!cn: Get "https://raw.githubusercontent.com/SagerNet/sing-geosite/rule-set/geosite-geolocation-!cn.srs": initialize rule-set[2]: initial rule-set: geosite-geolocation-cn: Get "https://raw.githubusercontent.com/SagerNet/sing-geosite/rule-set/geosite-geolocation-cn.srs": context deadline exceeded
```

**🟡 Problem cause:** This is because your network environment cannot access GitHub, causing the rule files to fail to load.

✅ **Solution:** Please try switching networks, such as:

* Switch to other Wi-Fi
* Switch to mobile network (such as 4G/5G)
* Change network operator (such as from China Telecom to China Unicom, ask friends for hotspot)

**💡** Note: Once the rule files are successfully loaded once, this error will not appear again. 
