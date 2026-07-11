---
translationKey: guide-proxy-strategy
contentType: how-to
product: browser-extension
productArea: browser-extension
uiSurface: control-panel
locale: en
status: current
owner: docs
reviewStatus: verified
lastVerified: 2026-07-10
dateModified: 2026-07-10
platforms: [chrome, edge]
tools: []
appliesTo: []
sources: ["cloud/app/chromev2@1.5.10", "cloud/locales/en.csv"]
title: Proxy Rules - User Guide
description: In Rules mode, choose a Jego node or a direct connection for selected domains or IP addresses, then view, edit, and check the saved rule.
---

# Proxy Rules

Rules mode already includes Jego's default rules, so most websites work without any custom setup. Add your own rule when you want a specific website to always use one node or always use the local connection.

::: info Proxy Rules apply in Rules mode
Global sends all browser requests through the current node, while Off uses the local connection. Custom Proxy Rules apply when Jego is in **Rules** mode.
:::

## Add a Proxy Rule

When no custom rules have been added yet, the page looks like this:

![Empty Proxy Rules page](/images/jego-v1.5.9/dashboard-proxy-policy-empty-en.png)

1. Select the Jego icon and open the **Dashboard**.
2. Open **Proxy Rules** in the sidebar, then select **Add Proxy Rules**.
3. Under **Proxy Server**, choose how matching addresses should connect:
   - choose a Jego node to send them through that node;
   - choose **Direct (No Proxy)** to use the local connection.
4. Under **Domain/Host List**, enter a website domain such as `bbc.com`. Put multiple entries on separate lines. You can also enter an IPv4 address when needed; IPv4 ranges such as `1.1.1.*` apply only to direct-connection rules.
5. Select **Save**. Jego returns to the Proxy Rules list, where the saved route and addresses are shown.

The simplest format is a root domain. For example, `bbc.com` also covers subdomains such as `www.bbc.com`.

## Enter domains and IP addresses

- **Use one route for several addresses:** Put the domains or IP addresses in one rule, one entry per line. They will all use the selected node or direct connection.
- **Use different routes for different addresses:** Create separate rules. For example, save `bbc.com` with a London node and `nikkei.com` with a Tokyo node as two rules.
- **Use a root domain for a website:** `bbc.com` covers its subdomains, so you do not need to add `www.bbc.com` separately.
- **Route by IP when needed:** A single IPv4 address can use a node or connect directly. IPv4 ranges such as `1.1.1.*` apply only when Proxy Server is set to **Direct (No Proxy)**; sending a whole range through a node is not supported yet.

A custom rule affects only matching addresses. Other websites continue to follow Jego's existing default rules.

## Three examples

- **Send BBC through a London node:** Select a London node under Proxy Server and enter `bbc.com` under Domain/Host List.
- **Send Nikkei Chinese through a Tokyo node:** Select a Tokyo node and enter `nikkei.com`.
- **Connect to Bilibili directly:** Select **Direct (No Proxy)** and enter `bilibili.com`.

Node names can vary by account and current availability. Choose the matching location from your own list.

![Proxy Strategy Configuration](/images/jego-v1.5.9/dashboard-proxy-policy-example-en.png)

With these three rules saved, Rules mode sends BBC and its subdomains through the London node, Nikkei Chinese and its subdomains through the Tokyo node, and the Bilibili root domain and its subdomains through the local connection.

## Confirm the saved rule in the list

After saving, each row in the Proxy Rules list represents one rule. **Proxy Server** shows the selected node or direct connection, while **Domain/Host** shows the matching addresses. Check these two columns to confirm your selection.

To add more addresses to the same route, select **Edit** and add them to the existing rule. To use a different route, select **Add Proxy Rules** and create another rule. This keeps the purpose of each rule clear.

## View or adjust a saved rule

1. Return to the extension popup and choose **Rules** mode.
2. Open the destination website normally.
3. To confirm its route, open **Diagnostics → Connection** and enter the domain under **Rules Check**.
4. Return to the Proxy Rules list at any time to **Edit** the node or addresses, or **Delete** a rule you no longer need. After deletion, those addresses continue through Jego's remaining rules.

See [Rules Check](/en/guide/network-diagnostics#route-check) for the full checking flow.

## AI Products

These services normally use Jego's existing default rules; choose the correct route, then see [How to access AI products with Jego](/en/guide/chatgpt-access) for detailed steps.
