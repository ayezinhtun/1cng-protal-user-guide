---
sidebar_position: 5  
hide_title: false  
---

## <span style={{ color: '#003366' }}>Cloud Provider Setup for Ceph in Stack Console</span>

The **Cloud Provider Setup** tab allows administrators to configure **Ceph** as a storage provider in Stack Console. This enables centralized provisioning and management of Ceph-based object storage directly from the CMP (Cloud Management Platform).

### <span style={{ color: '#003366' }}>How Stack Console Communicates with Ceph</span>

Stack Console communicates with **Ceph** using the Ceph **dashboard username and password**.  
For every ObjectStorage resource created in the CMP, a corresponding object is created in Ceph.

:::note
Ensure that **at least one Ceph Zone** is created and properly **synced with the CMP** before starting the integration.
:::

---

### <span style={{ color: '#003366' }}>Steps to Configure Ceph Cloud Provider</span>

- From the left-hand side navigation under the **Orchestrator** section, click on **Cloud Provider Setup**. Click **Add Setup** to begin configuring a new cloud provider.

:::note
If the setup has already been created by the Stack Console team, it's recommended to **edit** the existing entry instead of creating a new one.
:::

- **Cloud Provider:** Select **Ceph (ceph)** from the dropdown.
- **Setup Name:** Provide a meaningful name for the setup (e.g., `Ceph Storage Setup`).
- **Services:** Choose **Object Storage**.
- **Monitoring Provider:** Select **NONE** if monitoring is not in use.
- **Timezone:** Set the appropriate timezone (e.g., `UTC`).
- **API Endpoint:** Enter the Ceph dashboard API endpoint. This can be a private URL or IP (e.g., `https://ceph-dashboard.internal.local`).
- **API Key:** Input the **Ceph Dashboard username**.
- **API Secret:** Enter the corresponding **Ceph Dashboard password**.
- **S3 Endpoint:** Provide the **public S3 endpoint**. CMP uses this endpoint for bucket-level operations, and end users also connect to this endpoint via CLI tools.
- **Status:** Choose **Active** to enable the configuration.

---

### <span style={{ color: '#003366' }}>Additional Configuration</span>

- **One GB Multiplier (Gigabyte Definition):** Choose how 1 GB is calculated — `1024 MB` (Binary) or `1000 MB` (Decimal).
- **Data Transfer Out (In GB):** Set the default data transfer limit per Ceph account (e.g., `100`; use `-1` for unlimited).
- **Bandwidth (In MBPS):** Define the default bandwidth allocation per account (e.g., `-1` for unlimited).

Once all required fields are completed, click **Submit** to save the configuration.

---

### <span style={{ color: '#003366' }}>Conclusion</span>

Integrating Ceph with Stack Console provides scalable, resilient object storage capabilities within your cloud platform. Ensure correct API access, endpoints, and synchronization with Ceph zones for successful setup.
