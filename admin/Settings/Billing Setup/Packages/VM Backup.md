---
sidebar_position: 11
title: VM Backup
---

### <span style={{ color: '#003366' }}>Create VM Backup Package</span>

- From the left-hand side of the page under the **Billing Setup** section, click on **Rate Cards** to view the list of rate cards.
- To create rate card packages, click on three dots besides rate card and select **Packages**.
- Select **VM Backup** to view the created packages and to create new one click on **Create Package**.

### <span style={{ color: '#003366' }}>VM Backup Configuration</span>

- **Package Name:** Enter a unique, identifiable name for the backup package.
- **Cloud Provider:** Choose the cloud provider where the backup service will be hosted.
- **Cloud Provider Setup:** Select the specific setup or configuration (such as credential profile).
- **Zone:** Specify the geographic zone or availability region for the backup service.
- **Tag:** Use one or more of the following tags:
    - `Recommended` – Highlighted package chosen by admins based on popularity, balance, or value.
    - `Pocket Friendly` – Cost-effective packages ideal for budget-conscious users.
    - `Top Selling` – Most frequently selected by users; high-demand offering.
    - `Free Trial` – Includes a limited free usage period for evaluation purposes.
- **Status:** Set the package as Active or Inactive.

:::note
**Snapshot Backup Pricing Calculation**
- Snapshot backup pricing is based on the size of the root volume. For example, if the pricing is configured as $1/hour/GB and the backup retention is set to 2 (or any other value), enabling snapshot backups for a 60GB volume will incur a charge of $60/hour (calculated as $1 x 60GB), regardless of the retention setting. It is recommended to carefully set the pricing with consideration to the number of retention copies configured.
- You can find retention settings in global settings with label “backup_limit”.
:::

- **Billing Cycle and Pricing (per GB):** Set the price for data backup based on the selected currency.
    - **Currency:** Choose the billing currency (e.g., INR, TRY).
    - **Hourly (per GB):** Specify the hourly cost per GB of backup storage.

Once all fields are completed, click **Save** to create and activate the VM Backup Package.

---

### <span style={{ color: '#003366' }}>Conclusion</span>

The VM Backup Package section ensures secure and reliable data protection for virtual machines. With granular pricing and flexible deployment zones, you can offer backup services tailored to customer retention and disaster recovery needs.
