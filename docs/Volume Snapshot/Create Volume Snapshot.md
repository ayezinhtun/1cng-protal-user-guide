---
sidebar_position: 1
title: Create Volume Snapshot
---

## <span style={{ color: '#003366' }}>Volume Snapshot of Virtual Machine</span>

**Volume Snapshots** capture the current state of a volume at a specific point in time, ensuring data integrity and providing a reliable solution for backup and recovery. These snapshots allow you to quickly restore your volume to its exact state at the time of creation, helping to recover from accidental deletion, corruption, or system failures.

With **1CNG**, you can easily create and manage volume snapshots through an intuitive interface, ensuring your data remains secure and consistent. This guide will walk you through the process of creating a volume snapshot step-by-step.

----------

### <span style={{ color: '#003366' }}>Creating a Volume Snapshot of Block Storage</span>

- From the left-hand menu, click on the **Snapshots** tab.
- You will be redirected to the **Snapshots** page. Go to the **Volume Snapshot** tab.

![Volume Snapshot Page](images/create-volume-snapshots.png)

- To create a snapshot, click on **Take Snapshot** or the **plus (+)** icon located on the right side of the page.

### <span style={{ color: '#003366' }}>Choose a Location</span>

- Select the data center location where your server will be physically hosted.
- Choose from the available locations listed.

![Choose Location](images/snapshot-select-location.png)

### <span style={{ color: '#003366' }}>Assign to a Project</span>

- Assign the snapshot to one of your projects to organize and manage resources effectively.

![Assign to Project](images/snapshot-choose-project.png)

### <span style={{ color: '#003366' }}>Choose Block Storage</span>

- From the **Volumes** list, select the volume for which you want to create a snapshot.

![Choose Block Storage](images/choose-block-storage.png)

### <span style={{ color: '#003366' }}>Choose Snapshot Name</span>

- Provide a unique **Snapshot Name** for your volume snapshot to identify it easily in your dashboard.

![Choose Snapshot Name](images/snapshot-name.png)

### <span style={{ color: '#003366' }}>Create Snapshot</span>

- Choose the desired **Billing Cycle** for your snapshot. Snapshots and backups support only Hourly billing cycles. The only billing rule supported is Fixed Prorata.
- Only one package per zone is supported for VM Snapshot, BS Snapshot, and VM Backup. Automatic VM backups cost 20% of the virtual machine price if enabled from the admin.
- Verify all the configuration details and review the price summary. Click on **Take Snapshot** to create the snapshot of the volume.

![Create Snapshot](images/create-snapshots.png)

### <span style={{ color: '#003366' }}>Conclusion</span>

By following this guide, you can easily create and manage volume snapshots on 1CNG. Volume snapshots provide a reliable way to back up your data, ensuring data integrity and enabling quick recovery in case of accidental deletion, corruption, or system failures. For further assistance, refer to the 1CNG documentation or reach out to support.

:::tip
**See also:**  
- **[Create Volume](./../Volume/Create%20Block%20Storage.md)**  
- **[VM Snapshot](./../VM%20Snapshots/Create%20Instance%20Snapshot.md)**
<!-- - **[Create Backups](./../Backups/Create%20Backups.md)** -->
:::