---
sidebar_position: 9
title: Template
---

### <span style={{ color: '#003366' }}>Create Template Package</span>

- From the left-hand side of the page under the **Billing Setup** section, click on **Rate Cards** to view the list of rate cards.
- To create rate card packages, click on three dots besides rate card and select **Packages**.
- Select **Template** to view the created packages and to create new one click on **Create Package**.

:::warning
- For templates, we have settings in global settings, number of free templates. If free templates count is greater than 0 those many templates pricing will not be shown to user, it will be 0
- Global Settings key: free_templates. Keep value false if need to disable free templates
:::

### <span style={{ color: '#003366' }}>Custom Template Configuration</span>

- **Package Name:** Enter a unique, identifiable name for the template package.
- **Cloud Provider:** Choose the cloud provider where the custom template will be hosted.
- **Cloud Provider Setup:** Select the specific setup or configuration (such as credential profile).
- **Zone:** Specify the geographic zone or availability region for the custom template.
- **Tag:** Use one or more of the following tags:
    - `Recommended` – Highlighted package chosen by admins based on popularity, balance, or value.
    - `Pocket Friendly` – Cost-effective packages ideal for budget-conscious users.
    - `Top Selling` – Most frequently selected by users; high-demand offering.
    - `Free Trial` – Includes a limited free usage period for evaluation purposes.
- **Status:** Set the package as Active or Inactive.
- **Billing Cycle and Pricing (per GB):** Set the price based on the selected currency and usage.
    - **Currency:** Choose the billing currency (e.g., INR, TRY).
    - **Hourly (per GB):** Specify the cost per GB per hour.

:::note
Leave OTC field empty if not applicable.
:::

Once all fields are completed, click **Save** to create and activate the Custom Template Package.

---

### <span style={{ color: '#003366' }}>Conclusion</span>

The Template Package section lets you offer reusable virtual machine templates tailored to user needs. With granular billing and flexible tagging, templates can be delivered efficiently to streamline deployment workflows.
