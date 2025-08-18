---
sidebar_position: 1
title: Virtual Machine
---

### <span style={{ color: '#003366' }}>Create Virtual Machine Package</span>

- From the left-hand side of the page under the **Billing Setup** section, click on **Rate Cards** to view the list of rate cards.
- To create rate card packages, click on three dots besides rate card and select **Packages**. 
- Select **Virtual Machine** to view the created packages and to create new one click on **Create Package**.

:::warning

VM Packages are strongly dependent on storage settings. If we disable any storage setting, associated packages will not be shown for end customers.

:::

### <span style={{ color: '#003366' }}>Compute and Storage Configuration</span>

- **Package Name:** Enter a unique, identifiable name for the VM package.
- **Cloud Provider:** Choose the cloud provider where the VM will be hosted.
- **Cloud Provider Setup:** Select the specific setup or configuration (such as credential profile).
- **Zone:** Specify the geographic zone or availability region for the VM.
- **Storage Category:** Choose the storage type (e.g., SSD, HDD).
- **Compute Category:** Select the compute class (e.g., General Purpose, High Performance).
- **OS Family:** Choose the operating system family (e.g., Linux, Windows).
- **vCore CPU:** Enter the number of virtual CPUs to allocate.
- **Memory (In MB):** Specify RAM in megabytes.
- **Storage (In GB):** Specify disk storage space in gigabytes.
- **Bandwidth (In GB):** (Optional) Enter the monthly bandwidth allowance.
- **Status:** Set the package as Active or Inactive.
- **Tag:** Use one or more of the following tags:
    - `Recommended` – Highlighted package chosen by admins based on popularity, balance, or value.
    - `Pocket Friendly` – Cost-effective packages ideal for budget-conscious users.
    - `Top Selling` – Most frequently selected by users; high-demand offering.
    - `Free Trial` – Includes a limited free usage period for evaluation purposes.
- **Plan Category:** Select the performance tier:
    - `Basic` – An entry-level plan with minimal resources. Ideal for small workloads, dev/testing, or personal projects.
    - `Advanced` – A mid-tier option offering more compute and storage. Suitable for moderate business workloads.
    - `Entry` – A starter plan with limited specs at a very low cost. Good for one-time use or beginners.
    - `High Performance` – A premium plan designed for compute-intensive workloads like big data, AI/ML, or enterprise apps.
- **Billing Cycle and Pricing:** Set the price based on the selected currency and billing duration.
    - **Currency:** Choose the billing currency (e.g., INR, TRY).
    - **Hourly / Monthly / Yearly:** Specify cost for billing cycle.

:::note
Leave OTC field empty if not applicable.
:::

Once all fields are completed, click **Submit** to save and activate the VM Package.

---

### <span style={{ color: '#003366' }}>Conclusion</span>

The VM Package section provides full control over the compute offerings available to users. By combining flexible specs, pricing, and tagging, you can tailor packages to fit various customer needs.

