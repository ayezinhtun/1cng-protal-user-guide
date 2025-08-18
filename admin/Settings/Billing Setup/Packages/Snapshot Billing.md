---
sidebar_position: 7
title: Snapshot Billing
---

## <span style={{ color: '#003366' }}>Snapshot Billing Rate & Examples</span>

All snapshots are charged at a fixed rate of **₹0.0097 per GB per hour**, regardless of their type (manual or scheduled) or location.

- Billing starts immediately upon snapshot creation.
- Incremental snapshots are billed only for the delta — the additional data since the last snapshot.

---

## <span style={{ color: '#003366' }}>Billing Example: How Snapshot Charges Work</span>

The scenarios below illustrate how snapshot billing is applied based on user actions and data changes.

---

### Case 1: User A Creates a Snapshot (S1)

**Action:** User A creates a snapshot of their service.  
**Snapshot Size:** 100 GB  
**Billing Start Time:** Immediate

**Calculation:**

    `₹0.0097 × 100 GB = ₹0.97 per hour`

#### Billing Overview

| Snapshot ID | Total Size (GB) | Billable Size (GB) | Billing Rate       | Cost Per Hour | Billing Status |
|-------------|------------------|---------------------|---------------------|----------------|-----------------|
| S1          | 100              | 100                 | ₹0.0097/GB/hour     | ₹0.97          | Active          |

---

### Case 2: Additional Data is Added and a New Snapshot (S2) is Taken

**Action:** User A adds 50 GB of data and creates Snapshot S2.  
**S1:** Still active and billed at 100 GB  
**S2:** Only includes the 50 GB delta.

**Calculations:**

- **S1:**  
  `₹0.0097 × 100 GB = ₹0.97 per hour`

- **S2:**  
  `₹0.0097 × 50 GB = ₹0.485 per hour`

#### Billing Overview

| Snapshot ID | Total Size (GB) | Billable Size (GB) | Billing Rate       | Cost Per Hour | Billing Status |
|-------------|------------------|---------------------|---------------------|----------------|-----------------|
| S1          | 100              | 100                 | ₹0.0097/GB/hour     | ₹0.97          | Active          |
| S2          | 150              | 50                  | ₹0.0097/GB/hour     | ₹0.485         | Active          |

:::note
Both snapshots are billed in parallel for their respective data sizes.
:::

---

### Case 3: Deletion of Snapshot S1 by User A

**Action:** Snapshot S1 is deleted.  
- **S1 billing stops immediately**
- **S2 now includes the full 150 GB** (100 GB inherited + 50 GB originally)

**New Calculation:**

    `₹0.0097 × 150 GB = ₹1.455 per hour`

#### Post-Deletion Billing Overview

| Snapshot ID | Total Size (GB) | Billable Size (GB) | Billing Rate       | Cost Per Hour | Billing Status |
|-------------|------------------|---------------------|---------------------|----------------|-----------------|
| S2          | 150              | 150 (100 + 50)      | ₹0.0097/GB/hour     | ₹1.455         | Active          |

:::info
- Even though billing for S1 stops, the data it shares with S2 is still kept and charged under S2.
- Snapshot billing is incremental — charges are calculated **per GB per hour**.  
- Multiple snapshots are billed in parallel for their respective data sizes.
:::

## <span style={{ color: '#003366' }}>Conclusion</span>

Snapshot billing is based on storage consumed per GB per hour, with incremental snapshots charging only for added data. Understanding how snapshots accumulate and are billed in parallel helps optimize storage use and control costs.

