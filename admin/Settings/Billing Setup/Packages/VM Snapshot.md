---
sidebar_position: 7
title: VM Snapshot
---

### <span style={{ color: '#003366' }}>Create VM Snapshot Package</span>

- From the left-hand side of the page under the **Billing Setup** section, click on **Rate Cards** to view the list of rate cards.
- To create rate card packages, click on three dots besides rate card and select **Packages**.
- Select **VM Snapshot** to view the created packages and to create new one click on **Create Package**.

:::warning
- For snapshots, we have settings in global settings, number of free snapshots. If free snapshots count is greater than 0, those many snapshots pricing will not be shown to user, it will be 0.
- Global Settings key: free_snapshot. Keep value false if need to disable free snapshots.
:::

### <span style={{ color: '#003366' }}>Snapshot Configuration</span>

- **Package Name:** Enter a unique, identifiable name for the snapshot package.
- **Cloud Provider:** Choose the cloud provider where the snapshot service will be managed.
- **Cloud Provider Setup:** Select the specific setup or configuration (such as credential profile).
- **Zone:** Specify the geographic zone or availability region for the snapshot.
- **Tag:** Use one or more of the following tags:
    - `Recommended` – Highlighted package chosen by admins based on popularity, balance, or value.
    - `Pocket Friendly` – Cost-effective packages ideal for budget-conscious users.
    - `Top Selling` – Most frequently selected by users; high-demand offering.
    - `Free Trial` – Includes a limited free usage period for evaluation purposes.
- **Status:** Set the package as Active or Inactive.
- **Billing Cycle and Pricing:** Set the price per GB based on the selected currency and billing duration.
    - **Currency:** Choose the billing currency (e.g., INR, TRY).
    - **Hourly (per GB):** Specify the cost per GB per hour. 

:::note
Leave OTC field empty if not applicable.
:::

Once all fields are completed, click **Save** to create and activate the VM Snapshot Package.

---

### <span style={{ color: '#003366' }}>Conclusion</span>

The VM Snapshot Package section enables users to back up and restore VM states efficiently. With pricing based on storage usage, you can offer flexible, cost-effective snapshot solutions aligned with infrastructure needs.
