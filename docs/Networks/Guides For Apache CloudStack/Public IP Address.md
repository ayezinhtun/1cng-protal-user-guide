---
sidebar_position: 3
title: Public IP Address
---

## <span style={{ color: '#003366' }}>Public IP Address</span>

A **Public IP** in Stack Console is an internet-facing IP address assigned to cloud resources, allowing them to be accessible from outside the private network. Public IPs are essential for web servers, APIs, and other services requiring direct internet access.

-----

### <span style={{ color: '#003366' }}>View Public IPs</span>

- From the left-hand menu, click on the **Networks** tab.
- You will be redirected to the **Networks** page. Go to the **Public IP Address** tab where you will see the Public IPs listed.

![Public IP List](images/public_ip_1.png)

### <span style={{ color: '#003366' }}>Public IP Details</span>

- To view more detail, click on the public IP instance.
- From the **Details** tab you can view the details like IP address, network name, account details, and country zone.

![Public IP Details](images/public_ip_2.png)

### <span style={{ color: '#003366' }}>Add Firewall Rule</span>

- Go to the **Firewall** tab where you will see firewall rules which have been set before. 
- To add firewall rule click on **Add Firewall Rule**.

![Firewall Rules Tab](images/public_ip_3.png)

- Add source CIDR, and select protocol from TCP, UDP, ICMP.
- Add the Start and End port and click on **Add Firewall Rule**.

![Add Firewall Rule Form](images/public_ip_4.png)


### <span style={{ color: '#003366' }}>Add Port Forwarding Rule</span>

- Go to the **Port Forwarding** tab where you will see port forwarding rules which have been set before. 
- To add port forwarding rule click on **Add Rule**.

![Port Forwarding Tab](images/public_ip_5.png)

- **Private Port Range (Start - End)**: This defines the port range on your internal (private) network where traffic will be forwarded.
- **Public Port Range (Start - End)**: This defines the external (public) ports that will be accessible from the internet.
- **Protocol**: Choose TCP, UDP, or Both depending on the service requirements.
- **Instance**: Select the VM instance device that will receive the forwarded traffic.
- Click on **Submit** to save and create the rule.

![Add Port Forwarding Rule](images/public_ip_6.png)

### <span style={{ color: '#003366' }}>Enable Remote Access VPN</span>

- Go to the **Remote Access VPNs** tab where you will see option to set remote access VPN.
- If you need secure remote access to the private network, click on **Enable Remote Access VPN** to activate a VPN connection.

![Enable Remote Access VPN](images/public_ip_7.png)

-----

### <span style={{ color: '#003366' }}>Conclusion</span>

By following this guide, you can effectively manage Public IPs in Stack Console — whether it’s assigning IPs, applying firewall rules, configuring port forwarding, or enabling VPN access. These options help ensure your virtual infrastructure is accessible and secure.
