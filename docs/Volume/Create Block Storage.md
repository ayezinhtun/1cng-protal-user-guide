---
sidebar_position: 1
title: Create Volume
---

## <span style={{ color: '#003366' }}>Block Storage Volumes</span>

**Block storage volumes** provide scalable NVMe SSD storage that can be attached to virtual machines, offering additional capacity for your data. Once attached, you can manually format and mount the volume to extend your VM's storage.

**1CNG** simplifies the deployment and management of Block Storage, enabling users to scale and adapt their infrastructure based on demand. This guide will walk you through the process of creating and attaching a block storage volume using **1CNG**.

----------

### <span style={{ color: '#003366' }}>Creating a Block Storage Volume on 1CNG</span>

- From the left-hand menu, click on the **Block Storages** tab.
- You will be redirected to the **Create Block Storage Volume** page.

![Create Block Storage](images/create-volume.png)

- To create a volume, click on **Create Block Storage** or the **plus (+)** icon located on the right side of the Create Block Storage page.

### <span style={{ color: '#003366' }}>Choose a Location</span>

- Select the data center location where your server will be physically hosted.
- Choose from the available locations listed.

![Choose Location](images/select-location.png)

### <span style={{ color: '#003366' }}>Assign to a Project</span>

- Assign the block storage volume to one of your projects to organize and manage resources effectively.

![Assign to Project](images/assign-project.png)

### <span style={{ color: '#003366' }}>Choose Instance</span>

- Select the virtual machine instance to which you want this block storage volume to be attached.

![Choose Instance](images/stackconsole-create-block-storages-select-instance.png)

### <span style={{ color: '#003366' }}>Select Volume Size</span>

- Select a volume size based on your requirements like **Storage Type** and **Size**. You can also create a custom volume if needed.
- These are some available options and their plans:

![Select Volume Size](images/choose-volume-size.png)

### <span style={{ color: '#003366' }}>Choose Volume Name</span>

- Provide a unique **Volume Name** for your volume to identify it easily in your dashboard.

![Choose Volume Name](images/choose-name.png)

### <span style={{ color: '#003366' }}>Create Volume</span>

- Choose the desired **Billing Cycle** for your volume. Volume supports Hourly, Monthly, Quarterly, Semiannually, Yearly, Bi-annually, and Tri-annually billing cycles. 
- The supported billing rules are Date to Date, Fixed Calendar Month, Unfixed Calendar Month, Fixed Prorata, and Unfixed Prorata.
- It supports multiple packages based on SSD size and data center location. This ensures flexibility in performance and regional data preferences.
- Verify all the configuration details and review the price summary. Click on **Create Volume** to create the volume.

![Create Volume](images/submit-volume.png)

### <span style={{ color: '#003366' }}>Conclusion</span>

By following this guide, you can easily create and manage block storage volumes on 1CNG. These volumes provide scalable and high-performance storage solutions for your virtual machines, enabling you to meet your data storage needs efficiently. For further assistance, refer to the 1CNG documentation or reach out to support.

:::tip
**See also:**  
- **[Volume Snapshot](./../Volume%20Snapshot/Create%20Volume%20Snapshot.md)**  
- **[VM Snapshot](./../VM%20Snapshots/Create%20Instance%20Snapshot.md)**
<!-- - **[Create Backups](./../Backups/Create%20Backups.md)** -->
:::