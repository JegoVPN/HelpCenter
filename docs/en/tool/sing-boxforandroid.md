---
title: sing-box for Android - Tools & Software
description: sing-box for Android, abbreviated as SFA, is a graphical interface client officially launched by sing-box, open source, free and ad-free.
---

# sing-box for Android

sing-box for Android, abbreviated as SFA, is a graphical interface client officially launched by sing-box, open source, free and ad-free.

## <img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FX6LBfzRlMdWyQVvPC9eg_2Fimage_1.png" width="26" height="26" alt="sing-box icon"> Get sing-box for Android

Android users with Google Play can install sing-box for Android through Play

* [Play Store](https://play.google.com/store/apps/details?id=io.nekohasekai.sfa)
* [Play Store (Beta)](https://play.google.com/apps/testing/io.nekohasekai.sfa)

Android users without Google Play can download and install sing-box for Android through Github

* [GitHub Releases](https://github.com/SagerNet/sing-box/releases)

Additional explanation:

* SFA is the abbreviation of sing-box for Android.

## Add Subscription

In the **Jego - Control Panel**, click on **Subscription Nodes** in the left navigation bar, find the **Sing-Box** subscription address and click **Copy**.

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FQ9Ncmw0YFCe4ziEMoSuw_2Fimage_3.png" alt="Sing-Box subscription address">

<div class="tip custom-block" style="padding-top: 8px">

Jego subscription service mobile panel: <https://jego.us>

</div>

## sing-box for Android Usage Tutorial

### Add Subscription

Open the sing-box client, go to `Profiles -> New Profile -> Create Manually`

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FRsirhK17unPD2bwSZu8I_2FScreenshot_2025-07-30-08-16-51-152_io_nekohasekai_sfa_1.jpg" alt="Create configuration 1" width="300"> <img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FdSI01lsngpzA8cjod7zZ_2FScreenshot_2025-07-30-08-17-06-236_io_nekohasekai_sfa_2.jpg" alt="Create configuration 2" width="300">

1. Fill in `Jego` in Name
2. Select `Remote` for Type
3. Paste the `sing-box subscription URL` copied from Jego in URL
4. Don't change anything else, just click `Create`

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2Fsl4SHLXeYbC8vhLnqFNM_2FScreenshot_2025-07-30-08-17-51-367_io_nekohasekai_sfa_3.jpg" alt="Configuration settings" width="300">

### Enable sing-box

Click `Dashboard`, make sure Profile selects the Jego just created, then click the ` ▶ ` button in the bottom right corner to enable sing-box.

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FBQfwN7xlCao01P3bCfBM_2FScreenshot_20250728_173617_com_android_vpndialogs_1.jpg" alt="VPN permission" width="300"> <img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2Fq5glu31ZimAgjcxXLi5E_2FScreenshot_20250728_173755_io_nekohasekai_sfa_2.jpg" alt="sing-box running" width="300">

The first time you start, you'll also be prompted for VPN permission, just click OK.

#### Overview tab: Select internet mode

`Rule` - Smart routing mode, automatically selects direct connection or proxy based on rules  
`Direct` - Direct connection mode, all traffic bypasses proxy  
`Global` - Global proxy mode, all traffic goes through proxy

Reminder: The first time you use it, all three modes may not be selected. It's recommended to click on Rule.

#### Groups tab: Switch node servers

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F4cQ0AKNudR808MoJ1zOt_2FScreenshot_2025-07-30-08-18-21-604_io_nekohasekai_sfa_1.jpg" alt="Node selection 1" width="300"> <img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F8rR5ZcKgpR3OQPVHoAPx_2FScreenshot_2025-07-30-08-18-27-812_io_nekohasekai_sfa_2.jpg" alt="Node selection 2" width="300">

The default is auto-select. Here auto-select is on the `🇸🇬 Direct｜Singapore Four` server. Click `Auto Select` to manually select other servers.

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