---
sidebar_position: 3  
title: Service Contract  
---

## <span style={{ color: '#003366' }}>What is a Service Contract?</span>

A **Service Contract** is a predefined agreement between the service provider and the customer for a fixed duration, where the customer agrees to use the services and pay on a monthly basis throughout the contract period.

This system ensures predictable billing, better service planning, and customer commitment.

---

## <span style={{ color: '#003366' }}>Enabling the Contract System</span>

- The contract system is controlled globally.
- You can enable or disable it from **Global Settings** by toggling the **enable_service_contract** flag.
- Once enabled, contract-related configurations and features become available across the platform.

:::tip
Enable this feature only if you plan to offer long-term service contracts with fixed billing cycles.
:::

---

## <span style={{ color: '#003366' }}>Supported Payment Modes</span>

The **contract feature** is applicable only for the following payment modes:

- **Postpaid**  
- **Manual**  

:::warning
The contract system **does not support Prepaid** payment mode.
:::

---

## <span style={{ color: '#003366' }}> Supported Billing Cycles</span>

You can create contracts with the following billing cycles:

- **Quarterly** – every 3 months  
- **Semi-annually** – every 6 months  
- **Yearly** – every 12 months  
- **Bi-annually** – twice a year*  
- **Tri-annually** – every 4 months or 3 times a year*

:::note
Bi-annual and tri-annual options are optional and can be enabled based on business requirements.
:::

---

## <span style={{ color: '#003366' }}> How to Configure a Service Contract</span>

Contracts are configured and managed from the **Billing Rules** section.

The following fields must be set:

- **Contract Status** – Active or Inactive  
- **Cancellation Deadline** – Number of months before cancellation is allowed  
- **Contract Discount** – Optional percentage discount  
- **Billing Rules** – Set to **Date to Date Always**

---

## <span style={{ color: '#003366' }}> Contract Execution</span>

When a customer provisions a **Virtual Machine (VM)** or any contract-bound service:

- Contract terms apply immediately  
- The customer is billed monthly  
- Cancellation and discount rules are automatically applied and enforced

---

## <span style={{ color: '#003366' }}> Invoicing and Billing Process</span>

- Invoices are generated automatically on the **1st of every month**  
- Charges reflect the **monthly cost** of services under contract  
- **Pro-rata billing** is applied for:
  - The first month (from contract start date to month-end)
  - The final month (from month start to contract end date)

The system handles discounts and cancellation enforcement based on contract settings.

---

## <span style={{ color: '#003366' }}> Plan Change and Contract Handling</span>

If a customer upgrades or changes their plan during the contract:

- The existing contract is **canceled**
- A **new contract** is created with the updated plan and price
- A **pro-rata invoice** is generated for the current month

**Example:**  
Contract: *15 Jan 2025 – 15 Jan 2026*  
Plan upgrade on *15 Feb 2025* results in:

- Pro-rata invoice for **1 Feb – 15 Feb** (old plan)  
- New contract from **15 Feb 2025** (new plan)  
- Next billing on **1 Mar** reflects charges from **15 Feb – 28 Feb**

---

## <span style={{ color: '#003366' }}> Benefits of Using Service Contracts</span>

- Predictable monthly revenue  
- Discount incentives for long-term commitments  
- Reduced early cancellations  
- Transparent, enforceable billing and cancellation rules

---

## <span style={{ color: '#003366' }}> Example Use Case</span>

**Scenario:** A customer provisions a VM with a 1-year contract

- Contract Start: **15 Jan 2025**  
- Billing Amount: **₹1,000/month**  
- Pro-rata billing:
  - **15 Jan – 31 Jan 2025**
  - **1 Jan – 15 Jan 2026**
- Invoices auto-generated on the **1st** of each month  
- Cancellation blocked until **6 months** completed  
- **10% contract discount** applied (if configured)

:::note
This feature is ideal for subscription-based businesses offering services over extended periods.
:::

---

## <span style={{ color: '#003366' }}>Conclusion</span>

The **Service Contract** module ensures structured billing, transparent cancellation rules, and optional discounts. It enhances clarity for both the service provider and customer, especially for long-term service commitments.
