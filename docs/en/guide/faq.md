---
translationKey: guide-faq
contentType: troubleshooting
product: both
productArea: support
uiSurface: null
locale: en
status: current
owner: docs
reviewStatus: verified
lastVerified: 2026-07-10
platforms: []
tools: []
appliesTo: []
sources: ["human-product-decision@2026-07-10", "cloud/app/chromev2@1.5.10"]
title: FAQ - User Guide
description: Answers about AI routes, overseas websites that do not open, location mismatches, subscription troubleshooting, private windows, and extension self-checks.
---

# FAQ

Here are a few common questions about using Jego.

### Do all routes support Gemini, ChatGPT, Claude, and other AI products?

Not every route is suitable for AI products. Choose by how you use Jego:

- In the browser extension, use **Rules** mode and a node marked `[AI]` for ChatGPT, Claude, Grok, and similar products;
- In the browser extension, use **Global** mode and a suitable node for Google AI products such as Gemini, AI Studio, and NotebookLM;
- In a mobile subscription client, choose a node in the `🤖 ChatGPT Group` group.

See [How to access AI products with Jego](/en/guide/chatgpt-access) for the browser-extension steps, and [How to use Jego for Vibe Coding](/en/guide/vibe-coding) for the subscription service.

### Gemini, ChatGPT, Claude, or another overseas website does not open?

Please **optimize your local network and browser environment** — go through every step below, each one matters:

**Network environment**

- **Update DNS:** Point your computer/router at a domestic public resolver — quickest is Alibaba `223.5.5.5` or Tencent `119.29.29.29`. For safer, tamper-proof **encrypted DNS (DoH/DoT)**, see 👉 [Encrypted DNS guide](/en/guide/encrypted-dns).
- **Clear the DNS cache:** Press `Win+R`, type `CMD`, press Enter, then run `ipconfig /flushdns`.
- **Disable other proxy apps** such as NetEase UU, iFlytek accelerators, V2rayN, or Clash — they interfere with each other.
- Open `Settings` -> `Network & Internet` -> `Proxy` and set:
  - Automatically detect settings: Off
  - Use setup script: Off
  - Use proxy server: Off

**Browser environment**

- Update your browser to the latest version, clear cookies and cache, then restart it (choosing the “All time” range signs you out of websites, so make sure you can sign back in to important accounts).
- Update Jego to the [latest version](/en/guide/keep-updated) and temporarily disable all other extensions, keeping only Jego.
- Set Jego to **Rules** mode (shown as **Connect** in the Free version).
- Restart the browser again.

> Once you can reach ChatGPT and similar sites again, re-enable other extensions one by one to check for conflicts.

### Why does Google or ChatGPT show a location different from the selected node?

**Root cause**

Mainstream platforms such as Google and OpenAI never rely on IP alone. They combine **cookies**, browser cache, account history, device fingerprints, and other telemetry to build a risk profile. When the same account hops between IPs or regions frequently, the system quickly flags it as proxy usage or a suspicious login, which may trigger extra verification or even restrictions. Keep your node stable and avoid cross-region switching when browsing overseas sites.

If you visited these services without a proxy before, or your browser still stores the real location, switching nodes afterward might not help, because the platform keeps reading the cached signals. Rapid node hopping can even get the account marked as “unusual activity” and hurt node reputation.

**Suggested reading:** [Understand and manage location in Google Search](https://support.google.com/websearch/answer/179386?hl=en)

**How to troubleshoot: run a clean test in a private window**

The idea is simple — first use an environment with no cache or cookies in the way to confirm the node itself is fine. If everything works in that clean window, the problem is just stale data in your normal browser, and a cleanup fixes it. Step by step:

- **Step 1 — Fully quit the browser.** Not just the tabs — exit the app completely, so no background process quietly reloads old cache.
- **Step 2 — Open a private window.** On Windows the shortcut is usually `Ctrl + Shift + N` (Edge uses `Ctrl + Shift + P`); on Mac it is `Cmd + Shift + N`. This window ignores your regular cookies and cache — think of it as a disposable, clean browser.
- **Step 3 — Let Jego run inside the private window.** Browsers disable all extensions in private mode by default, so flip the switch manually: open the extensions page (Chrome: `chrome://extensions`; Edge: `edge://extensions`), find **Jego**, open **Details**, and turn on **Allow in Incognito** (Edge: **Allow in InPrivate**). Skip this and the whole test is pointless — the private window would have no proxy at all.
- **Step 4 — In the private window, open Jego, switch to Global mode, and pick the node you want to test.** Once picked, stop switching — hopping between nodes makes target sites more likely to flag you.
- **Step 5 — Before opening the target site, check [IP111.cn](https://ip111.cn) first.** This confirms that the node you think you are on and the node you are actually on match. If IP111 shows the right location, the proxy side is fine.
- **Step 6 — Now open the site you were having trouble with (Google, ChatGPT, and so on).** If the location shows correctly here, you have all but confirmed it — the node is fine, and the culprit is stale data in your normal browser.
- **Step 7 — Go back to your normal browser and clean it out.** In browser settings, clear cookies and cache (time range “All time” — this signs you out of websites, so make sure you can sign back in to important accounts), then restart the browser. The target site should behave normally again.

### How do I use Jego in a private browsing window?

Open `chrome://extensions` in Chrome or `edge://extensions` in Edge. Open Jego **Details**, enable **Allow in Incognito / Allow in InPrivate**, and then open a new Incognito or InPrivate window.

### How do I check the extension with Diagnostics?

When you want to check how the Jego browser extension is working, select **Jego icon → Dashboard → Diagnostics**. The page uses the results to show the next step; see [Diagnostics](/en/guide/network-diagnostics) for the full guide.

### The subscription client cannot connect or keeps dropping?

Try these steps in order, testing again after each one:

1. First check the remaining monthly data on the **Mobile Proxy** page in the Dashboard — when the data is used up, the subscription stops connecting; see [Traffic limits](/en/abuse/limits) for how it resumes;
2. Copy the subscription URL again, update the subscription inside the client, then switch to another node in the group;
3. Update the client to the latest version;
4. On Windows, restart the client as administrator;
5. Temporarily turn off the system firewall or security software and retry; do not leave it off — once the blocker is confirmed, turn it back on and allow just the client;
6. Switch your local network to a public or encrypted resolver: the ISP's default DNS may be hijacked or poisoned, causing the subscription URL and node domains to resolve incorrectly; point your computer's or router's DNS at a public resolver — or, better, encrypted DNS (DoH/DoT) — and retry. See [Encrypted DNS guide](/en/guide/encrypted-dns) for resolvers and per-platform setup;
7. If the client settings include a DNS override option, turn it on and try again.

If none of this helps, [contact support](/en/guide/support) with the steps you tried.

### When should I contact support?

For connection problems, try the entries above first; if the problem is still there — or you simply don't want to keep fiddling — contact support anytime with the steps you tried and what you saw. That makes things much faster.

For account, payment, or service questions, open [Contact support](/en/guide/support) and choose the matching category.
