---
sidebar_position: 5
hide_title: false
---

## <span style={{ color: '#003366' }}>Cloud Provider Setup for Veeam in Stack Console</span>

The **Cloud Provider Setup** tab enables administrators to configure Veeam as a backup provider in Stack Console, allowing seamless integration for data protection and disaster recovery operations.

### <span style={{ color: '#003366' }}>Steps to Configure Veeam Cloud Provider</span>

- From the left-hand side navigation under the **Orchestrator** section, click on **Cloud Provider Setup**. Click **Add Setup** to begin configuring a new cloud provider.

:::note
If the setup has already been created by the Stack Console team, it's recommended to **edit** the existing entry instead of creating a new one.
:::

- **Cloud Provider:** Select **Veeam (veeam)** from the dropdown.
- **Setup Name:** Provide a meaningful name for the setup (e.g., `Veeam Setup 1`).
- **Services:** Choose **Veeam Backup**.
- **Monitoring Provider:** Select **NONE** if not using a monitoring tool.
- **Timezone:** Set the appropriate timezone (e.g., `UTC`).
- **API Endpoint:** Enter the Veeam API URL (e.g., `https://veeam.antyxsoft.io`).
- **API Key:** Input the Veeam user’s API key.
- **API Secret:** Enter the corresponding Veeam password or secret.
- **API Version:** Specify the Veeam API version (e.g., `v3`).
- **Status:** Choose **Active** to enable the configuration.


#### Additional Configuration

- **One GB Multiplier (Gigabyte Definition):** Choose how 1 GB is calculated—`1024 MB` (Binary) or `1000 MB` (Decimal).
- **Data Transfer Out (In GB):** Set the default data transfer limit per Veeam account (e.g., `100`; use `-1` for unlimited).
- **Bandwidth (In MBPS):** Define the default bandwidth allocation per account (e.g., `-1` for unlimited).
- Once all fields are filled, click **Submit** to save the configuration.

---

### <span style={{ color: '#003366' }}>Conclusion</span>

Configuring Veeam as a cloud provider in Stack Console enables centralized backup management and efficient orchestration of data protection services. Ensure correct API credentials and default policies are applied for a successful setup.

For more help, refer to the Stack Console documentation or contact support.
