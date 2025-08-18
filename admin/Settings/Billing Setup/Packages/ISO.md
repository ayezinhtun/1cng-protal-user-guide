---
sidebar_position: 10
title: ISO
---

### <span style={{ color: '#003366' }}>Create ISO Package</span>

- From the left-hand side of the page under the **Billing Setup** section, click on **Rate Cards** to view the list of rate cards.
- To create rate card packages, click on three dots besides rate card and select **Packages**.
- Select **ISO** to view the created packages and to create new one click on **Create Package**.

:::warning
- For ISOs, we have settings in global settings, number of free ISOs. If free ISOs count is greater than 0 those many ISOs pricing will not be shown to user, it will be 0
- Global Settings key: free_iso. Keep value false if need to disable free ISOs
:::

### <span style={{ color: '#003366' }}>ISO Configuration</span>

- **Package Name:** Enter a unique, identifiable name for the ISO package.
- **Cloud Provider:** Choose the cloud provider where the ISO will be hosted.
- **Cloud Provider Setup:** Select the specific setup or configuration (such as credential profile).
- **Zone:** Specify the geographic zone or availability region for the ISO.
- **Tag:** Use one or more of the following tags:
    - `Recommended` – Highlighted package chosen by admins based on popularity, balance, or value.
    - `Pocket Friendly` – Cost-effective packages ideal for budget-conscious users.
    - `Top Selling` – Most frequently selected by users; high-demand offering.
    - `Free Trial` – Includes a limited free usage period for evaluation purposes.
- **Status:** Set the package as Active or Inactive.
- **Billing Cycle and Pricing (per GB):** Set the price based on the selected currency and storage usage.
    - **Currency:** Choose the billing currency (e.g., INR, TRY).
    - **Hourly (per GB):** Specify the cost per GB per hour.

:::note
Leave OTC field empty if not applicable.
:::

Once all fields are completed, click **Save** to create and activate the ISO Package.

---

### <span style={{ color: '#003366' }}>Conclusion</span>

The ISO Package section allows you to manage custom bootable images for VMs and servers. With flexible billing and zone-specific deployment, ISO packages make operating system installation and custom configurations efficient and scalable.
