---
sidebar_position: 2
title: Network Overview
---

## <span style={{ color: '#003366' }}>Isolated Network Overview</span>

A **Isolated Network** is a logically isolated network within a cloud environment. It allows you to control network settings such as IP addressing, subnets, routing, and security.

- To view a network instance, go to the **Networks** and navigate to the **Isolated Networks** section, where you can view the Isolated network and its size. 

![alt text](images/public-network-overview1.jpg)

- From **Details** tab you can view the detailed overview of your Isolated network.

![alt text](images/public-detail1.png)

- **Public ID**: The ID assigned to the Public.
- **Network Type:** Isolated (no external access) or Cached (temporary storage optimization).
- **Traffic Types:** The Guest user-facing traffic or Public internet access traffic.   
- **Required Files:** Essential for network operation.  
- **Redundant Router Files:** Backup router configurations.  
- **Persistent Files:** Configuration files retained across reboots.  
- **Gateway:** Access point between networks.  
- **Netmask:** Defines the subnet IP range.  
- **CIDR:** Specifies the network’s IP range.  
- **Account:** Represents the network’s name or identifier.  


### <span style={{ color: '#003366' }}>Conclusion</span>

The **Isolated Network Overview** provides key details about your network’s configuration, including its type, traffic handling, and essential parameters like gateway, netmask, and CIDR. This helps in monitoring, managing, and ensuring efficient operation of your Isolated network.

:::tip
**See also:**  
- **[Create Isolated Network](./Create%20Public%20Network.md)**
- **[Public IP Address](./Public%20IP%20Address.md)**
:::
