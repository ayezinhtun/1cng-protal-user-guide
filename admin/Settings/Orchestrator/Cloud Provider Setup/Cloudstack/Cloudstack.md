---
sidebar_position: 5
hide_title: false
---

## <span style={{ color: '#003366' }}>Cloud Provider Setup for CloudStack in Stack Console</span>

The **Cloud Provider Setup** section allows administrators to integrate CloudStack environments with Stack Console for streamlined virtual resource provisioning, network configuration, and infrastructure management.

---

### <span style={{ color: '#003366' }}>Steps to Configure CloudStack Cloud Provider</span>

- Navigate to **Orchestrator → Cloud Provider Setup** in the Stack Console. Click **Add Setup** to create a new CloudStack configuration.

:::note
If a CloudStack setup already exists, it's recommended to use the **Edit** option to update it instead of creating a duplicate.
:::

- **Cloud Provider:** Select **CloudStack (nimbo)**.
- **Credential Of:** Choose the type of credential setup (Global/Admin/User).
- **Setup Name:** Provide a recognizable name for this setup.
- **Services:** Select required services (e.g., VM, Storage, Network, IP, etc.).
- **Monitoring Provider:** Choose any configured monitoring provider (e.g., Zabbix).
- **Timezone:** Select the appropriate timezone for the CloudStack region.
- **API Endpoint:** URL or IP of the CloudStack API endpoint.
- **API Key:** API key associated with the CloudStack user.
- **API Secret:** Secret key/password for the CloudStack API user.
- **API Version:** Specify the version (e.g., `4.18`).
- **Status:** Set to **Active** to enable usage in Stack Console.



#### Additional Configuration

- **Parent Domain ID:** ID of the parent domain under which users/projects are managed.
- **Free Bandwidth Threshold (In GB):** Set a usage threshold to trigger bandwidth alerts (e.g., `100`).
- **Default VPC ACL Allow ID:** ID of the default ACL that allows traffic for VPC setups.
- **Default Network Offering ID:** ID of the network offering used for Layer 3 networks.
- **Default L2 Network Offering ID:** ID of the Layer 2 network offering for isolated networks.
- **Custom Compute CPU Speed:** Optional custom CPU speed for compute flavors (in MHz).
- **One GB Multiplier (Gigabyte Definition):** Choose `1024` (binary) or `1000` (decimal).
- **VM Snapshot:** Select **Yes** or **No**, depending on whether instance snapshots are enabled.
- **Storage Cluster:** Choose the storage backend type (e.g., NFS, Ceph).
- **VM Settings:** Select default configuration behavior for VMs.
- **Hypervisor:** Choose the hypervisor used in CloudStack (e.g., KVM, XenServer).
- **Default Network Strategy:** Choose strategy like `Advanced`, `Basic`, or `Isolated`.
- **Project Setting:** Select how users are grouped (e.g., `Under Single Project` or `Multiple Projects`).
- **Default Egress Policy:** Define if egress is **Allow All**, **Deny All**, or custom.
- **Stop VM on Snapshot:** Choose **Yes** if VM should stop before snapshotting.
- **Delete Network on Last VM:** Choose **Yes** to delete network if the last VM is removed.
- **VM SSH Required:** Select **Yes** if SSH key injection is mandatory.
- **VM Password Required:** Select **Yes** if VMs must have a password set.
- **Expunge VM:** Choose **Yes** to automatically expunge VMs upon deletion.



- Once all configurations are filled, click **Submit** to save your setup.

---

### <span style={{ color: '#003366' }}>Conclusion</span>

The CloudStack integration in Stack Console enables robust orchestration for VMs, networks, and services. Proper configuration allows centralized management and monitoring across CloudStack environments. Use the setup to offer scalable cloud infrastructure to your users with automation and control.
For any troubleshooting or advanced configuration, refer to Stack Console documentation or support.
