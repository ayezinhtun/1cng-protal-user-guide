---
sidebar_position: 13
title: Unit Pricing
---

### <span style={{ color: '#003366' }}>Set Unit Pricing</span>

- From the left-hand side of the page under the **Billing Setup** section, click on **Rate Cards** to view the list of rate cards.
- To configure unit pricing, click on the three dots beside a rate card and select **Packages**.

:::warning
The following unit prices are based on a monthly rate.
:::

### <span style={{ color: '#003366' }}>Unit Pricing Configuration</span>

- **Cloud Provider:** Choose the cloud provider for which unit pricing is being configured.
- **Cloud Provider Setup:** Select the specific setup or configuration (such as credential profile).
- **Zone:** Specify the geographic zone or availability region.
- **Storage Category:** Select the relevant storage type (e.g., SSD, HDD).
- **Status:** Set the pricing as Active or Inactive.

### <span style={{ color: '#003366' }}>Billing Cycle and Pricing</span>

Set the monthly cost for each unit resource under the selected currency.
- **Currency:** Choose the billing currency (e.g., INR, TRY).

:::note
At the time of preparing predefined packages, make sure these custom unit pricing calculations and predefined pricing calculations match, or at least custom packages calculation should be higher than predefined packages; this should not be less than the predefined packages.
:::

- **1 CPU per month:** If a user requests his own required CPU in custom packages, then CMP calculates the pricing based on this unit pricing. 
- **1 GB Memory per month:** If a user requests his own required memory in custom packages, then CMP calculates the pricing based on this unit pricing. 
- **1 GB Storage per month:** If a user requests his own required storage in custom packages, then CMP calculates the pricing based on this unit pricing. 
- **1 GB Bandwidth per month:** 
    - As CloudStack provides the usage details for incoming and outgoing traffic at the network level, at CMP we have used this same package, and we can charge for bandwidth at the network level. 
    Ref: https://www.shapeblue.com/cloudstack-usage-service-deep-dive/ 
    - At Unit pricing, we accept the per GB per month price, and based on this, we calculate the pricing for bandwidth usage.
    - As a provider, if we wanted to give free bandwidth for 1 TB and charge for bandwidth that goes beyond this 1 TB. For this, we have one setting in cloud provider setup where we can set the free bandwidth value in GB. This is monthly basis; every month bandwidth usage gets reset to zero, and bandwidth usage starts from zero.

Once all fields are filled in, click **Submit** to apply the unit pricing configuration.

---

### <span style={{ color: '#003366' }}>Conclusion</span>

The Unit Pricing section provides foundational pricing for compute, memory, storage, and networking resources. Accurate unit pricing ensures consistent billing logic across packages and services, making it a vital part of the billing setup.
