---
sidebar_position: 3
title: Add Network
---

## <span style={{ color: '#003366' }}>Add VPC Network</span>

The Network tab displays all networks already created inside the VPC. You can also add a new network if needed.
- Navigate to the **Network** tab. Click **Add Network** to create a new network.

![alt text](images/vpc_net_3.png)

- To add VPC network you need to fill the form with network details.

![alt text](images/vpc_net_4.png)

- **Name**: The identifier for the network.
- **Description**: A summary of the network's purpose.
- **Network**: The subnet CIDR block (e.g., 192.168.1.0/24).
- **ACL (Access Control List)**: A predefined or new ACL to control inbound/outbound traffic.
- **Gateway**: The network gateway for routing traffic.
- **Network Mask**: Network mask in whcih the network is situated.
- Click **Submit** to create the new network.

### <span style={{ color: '#003366' }}>Conclusion</span>

Adding a **VPC Network** allows you to define custom subnets, gateways, and ACLs for better traffic control and organization. With proper configuration, you can create secure and efficient network environments tailored to your project needs.

:::tip
**See also:**  
- **[VPC Network Overview](./Network%20Overview.md)**
- **[Network ACL List](./Network%20ACL%20List.md)**
- **[VPN Gateway](./Site%20VPN.md)**
- **[VPN Connections](./VPN%20Connection.md)**
:::


