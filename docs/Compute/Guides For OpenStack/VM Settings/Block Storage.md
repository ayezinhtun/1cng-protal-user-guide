---
sidebar_position: 3
title: Block Storage
---

## <span style={{ color: '#003366' }}>Block Storage Overview</span>

Block Storage allows you to attach additional storage volumes to your virtual machine. These volumes act as independent, scalable disks that can be used for storing application data, backups, or other files. They are highly flexible and can be detached or re-attached to different instances without data loss. This is ideal for separating your operating system from application data to maintain modularity.

----------

- To view a volume instance, go to the **VM settings** and navigate to the **Volumes** section, where you can view the instance volume and its size.  
- If you want to see previously created snapshots for the volume, click the right arrow icon to expand the list.  
- To create a new snapshot, simply click the camera icon on the rightmost side. This will capture the current state of the volume, allowing you to restore it if needed.

![View Block Storage Volumes and Snapshots](../images/vmset-openstack-4.png)

----------

### <span style={{ color: '#003366' }}>Conclusion</span>

Block Storage in Stack Console provides modular and scalable storage solutions that allow for enhanced data management. By keeping your application data separate from the system files, you can easily back up, restore, and manage your environment. Regularly taking snapshots ensures you have recovery points in case of data loss or system failure.

:::tip
**See also:**  
- **[Create Volume](../../../Volume/Create%20Block%20Storage.md)**  
- **[Volume Snapshot](../../../Volume%20Snapshot/Create%20Volume%20Snapshot.md)**  
- **[VM Snapshot](../../../VM%20Snapshots/Create%20Instance%20Snapshot.md)**
:::
