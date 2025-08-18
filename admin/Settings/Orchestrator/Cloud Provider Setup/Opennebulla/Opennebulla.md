---
sidebar_position: 6
hide_title: false
---

## <span style={{ color: '#003366' }}>Cloud Provider Setup for OpenNebula in Stack Console</span>

The **Cloud Provider Setup** tab allows administrators to configure OpenNebula (Cirrus) in Stack Console, enabling virtual machine provisioning, networking, autoscaling, Kubernetes, and more.

### <span style={{ color: '#003366' }}>Steps to Configure OpenNebula Cloud Provider</span>

- Navigate to the **Cloud Provider Setup** section under the **Orchestrator** menu. Click on **Add Setup** to begin configuration.

:::note
If this setup was added by the Stack Console team, edit the existing setup instead of creating a new one.
:::

- **Cloud Provider:** Select **OpenNebula (cirrus)** from the dropdown.
- **Setup Name:** Enter a recognizable name (e.g., `Open Nebula 01`).
- **Services:** Choose from the applicable services.
- **Monitoring Provider:** You can choose **ZABBIX** or any other monitoring provider, and add the setup URL.
- **Timezone:** Set the appropriate timezone (e.g., `Asia/Kolkata`). The selected timezone must match the cloud provider's timezone. If the timezones do not match, VM monitoring data may not display correctly in Stack Console.
- **API Endpoint:** Input OpenNebula RPC URL (e.g., `http://202.65.135.189:2633/RPC2`).
- **API Key:** Enter the OpenNebula admin username.
- **API Secret:** Enter the OpenNebula admin password. If the API secret or password is configured to expire automatically, you will need to update it each time it changes to avoid authentication failures.
- **API Version:** Specify the version of OpenNebula in use (e.g., `6.6.1`).
- **Status:** Set to **Active** to enable the configuration.

#### Additional Configuration

- **Public Network ID:** Set the network ID used to allocate public IPs (e.g., `28`).
- **One Flow URL:** Base URL for OpenNebula OneFlow (e.g., `http://202.65.135.189`).
- **LB Template ID:** ID of the load balancer VM template (e.g., `159`).
- **LB Number of VM Instance:** Number of VMs used in the load balancer (e.g., `1`).
- **LB Protocol:** Choose the protocol for the load balancer (e.g., `TCP`).
- **LB Method:** Select the method for traffic handling (e.g., `NAT`).
- **LB Schedule:** Load balancing algorithm (e.g., `rr` for round-robin).
- **K8s Template ID:** Kubernetes VM template ID (e.g., `130`).
- **Default Security Group:** ID of the default security group (e.g., `0`).
- **Network Template ID:** ID of the network template used to create new networks (e.g., `5`).
- **VN MAD:** Specify the Virtual Network Manager (e.g., `vxlan`).
- **Open Nebula Excl Users:** User ID to exclude from provisioning (e.g., `0`).
- **Phy Dev:** Physical interface for bridging (e.g., `bond-DFW`).
- **Bridge:** Bridge name to use in OpenNebula (e.g., `onebr0`).
- **Gateway:** Set the default gateway (e.g., `10.10.10.1`).
- **Network Address:** Base network address (e.g., `10.10.10.0`).
- **Network Mask:** Subnet mask (e.g., `255.255.255.0`).
- **DNS:** DNS server to assign to VMs (e.g., `8.8.8.8`).
- **AR IP:** Start IP for address range (e.g., `10.10.10.1`).
- **AR Size:** Number of IPs in the address range (e.g., `256`).
- **Virtual Router Number of VM Instance:** Number of VMs in a virtual router setup (e.g., `1`).
- **VR VM Template ID:** Template ID used for virtual router VMs (e.g., `62`).
- **One GB Multiplier (Gigabyte Definition):** Define 1 GB as `1024 MB` (binary standard).
- **Automatic VLAN ID:** Set to **Yes** to auto-assign VLANs during network creation.
- **VM Password Required:** Set to **No** if VMs do not require a password at provisioning.
- **Method:** Select the IP allocation method (e.g., `none` for default behavior).
- **AR Type:** Choose address range type (e.g., `IP4` for IPv4).
- Click **Submit** to complete and save the configuration.

---

### <span style={{ color: '#003366' }}>Conclusion</span>

OpenNebula cloud provider integration in Stack Console allows administrators to deliver full-stack VM orchestration, autoscaling, and Kubernetes services with customized networking and security. Accurate configuration ensures smooth operation and provisioning workflows.
For help or troubleshooting, refer to official Stack Console documentation or reach out to support.
