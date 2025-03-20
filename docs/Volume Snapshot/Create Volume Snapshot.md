---
sidebar_position: 1
title: Create Volume Snapshot
---

## <span style={{ color: '#003366' }}>Volume Snapshot of Virtual Machine</span>

**Volume Snapshots** capture the current state of a volume at a specific point in time, ensuring data integrity and providing a reliable solution for backup and recovery. These snapshots allow you to quickly restore your volume to its exact state at the time of creation, helping to recover from accidental deletion, corruption, or system failures.

With **Stack Console**, you can easily create and manage volume snapshots through an intuitive interface, ensuring your data remains secure and consistent. This guide will walk you through the process of creating a volume snapshot step-by-step.

----------

### <span style={{ color: '#003366' }}>Creating a Volume Snapshot of Block Storage</span>

- From the left-hand menu, click on the **Snapshots** tab.
- You will be redirected to the **Snapshots** page. Go to the **Volume Snapshot** tab.

![Volume Snapshot Page](images/stackconsole-create-volume-snap.png)

- To create a snapshot, click on **Take Snapshot** or the **plus (+)** icon located on the right side of the page.

### <span style={{ color: '#003366' }}>Choose a Location</span>

- Select the data center location where your server will be physically hosted.
- Choose from the available locations listed.

![Choose Location](images/stackconsole-create-snapshot-vm-instance-location.png)

### <span style={{ color: '#003366' }}>Assign to a Project</span>

- Assign the snapshot to one of your projects to organize and manage resources effectively.

![Assign to Project](images/stackconsole-create-block-storages-select-project.png)

### <span style={{ color: '#003366' }}>Choose Block Storage</span>

- From the **Volumes** list, select the volume for which you want to create a snapshot.

![Choose Block Storage](images/stackconsole-create-volume-storage-snap.png)

### <span style={{ color: '#003366' }}>Choose Snapshot Name</span>

- Provide a unique **Snapshot Name** for your volume snapshot to identify it easily in your dashboard.

![Choose Snapshot Name](images/stackconsole-create-snapshot-vm-instance-snapshot.png)

### <span style={{ color: '#003366' }}>Create Snapshot</span>

- Choose the desired **Billing Cycle** for your snapshot. You can choose either Hourly or Monthly.
- Verify all the configuration details and review the price summary. Click on **Take Snapshot** to create the snapshot of the volume.

![Create Snapshot](images/stackconsole-create-snapshot-vm-instance-snapshot-takesnap.png)

### <span style={{ color: '#003366' }}>Conclusion</span>

By following this guide, you can easily create and manage volume snapshots on Stack Console. Volume snapshots provide a reliable way to back up your data, ensuring data integrity and enabling quick recovery in case of accidental deletion, corruption, or system failures. For further assistance, refer to the Stack Console documentation or reach out to support.
