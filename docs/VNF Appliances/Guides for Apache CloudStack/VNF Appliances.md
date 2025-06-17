---
sidebar_position: 1
title: VNF Appliances
---

## <span style={{ color: '#003366' }}>Virtual Network Function Appliances</span>

**Virtualised Network Functions (VNFs)** refer to virtualized software applications that provide network services, such as routers, firewalls, load balancers, and WAN optimizers. Unlike traditional hardware-based network devices, VNFs run on virtualized infrastructure, offering flexibility, scalability, and cost efficiency.

**Stack Console** simplifies the deployment and management of VNF appliances, enabling users to scale and adapt their network infrastructure based on demand. This guide will walk you through the process of creating a VNF appliance using **Stack Console**.

----------

### <span style={{ color: '#003366' }}>Creating a VNF Appliance</span>

- From the left-hand menu, click on the **VNF Appliances** tab.
- You will be redirected to the **VNF Appliances** page.

![VNF Appliances Page](images/stackconsole-create-vnf-app.png)

- To create a VNF appliance, click on **Create VNF Appliances** or the **plus (+)** icon located on the right side of the VNF Appliances page. This will open the VNF Appliances creation page.

### <span style={{ color: '#003366' }}>Choose a Location</span>

- Select the data center location where your server will be physically hosted.
- Choose from the available locations listed.

![Choose Location](images/stackconsole-create-instance-location.png)

### <span style={{ color: '#003366' }}>Choose an Image</span>

- Select an operating system or application template to install on your server.
- Available options include popular OS images. Alternatively, you can import a custom ISO.
- **Note**: For Microsoft Windows, only official evaluation versions are available.

![Choose Image](images/stackconsole-create-instance-choose-images.png)

### <span style={{ color: '#003366' }}>Choose the Type of CPU Allocation</span>

- Select the CPU resource allocation that fits your workload:

![Choose CPU Type](images/stackconsole-create-instance-choose-type.png)

  - **Shared CPU**: Affordable, with resources shared among users. Ideal for development, testing, and low-performance workloads like small websites.
  - **Dedicated CPU**: Provides exclusive resources for consistent performance. Perfect for production environments, high-traffic applications, and databases.
  - **High-Frequency Compute**: Offers high clock speeds for compute-intensive tasks like simulations, financial modeling, and low-latency applications.
  - **Cloud GPU**: Delivers GPU acceleration for demanding tasks like machine learning, AI, video rendering, and scientific simulations.

### <span style={{ color: '#003366' }}>Choose a Plan</span>

- Choose a plan based on your requirements like CPU, Memory, Storage, and Bandwidth. You can also create a custom plan if needed.

![Choose Plan](images/stackconsole-create-plan-vnf-app.png)

  - **General Compute (GC)**: Designed for balanced workloads, offering a mix of CPU, memory, storage, and bandwidth. Ideal for general-purpose applications, web servers, and testing environments.

### <span style={{ color: '#003366' }}>Assign to a Project</span>

- Assign the server to one of your projects to organize and manage resources effectively.

![Assign to Project](images/stackconsole-create-instance-choose-project.png)

### <span style={{ color: '#003366' }}>Choose a Network</span>

- Select the network for your instance based on your connectivity and security needs. For more details about available network options, refer to the respective network guides.
- If you want to attach the appliance to an existing network, you can choose from available networks.

![Choose Network](images/stackconsole-create-networks-vnf-app.png)

  - **Public Network**: A simple, pre-configured network designed for external connectivity. Includes cloud firewall protection, port forwarding, and remote access VPN. Ideal for users who require straightforward, hassle-free connectivity.
  - **VPC Network**: An advanced networking solution offering complete control over traffic routing and enhanced security. Supports VPN gateway, site-to-site VPN connections, and traffic segregation.

  **Note:** By default, a VPC is created with a random **CIDR** block and one network tier.

- You can choose whether to enable public IPv4 for internet access to your server.

![Enable Public IP](images/stackconsole-create-instance-enable-public-ip.png)

### <span style={{ color: '#003366' }}>Choose Affinity Groups</span>

- Choose an Affinity Group or create one by selecting **Create Affinity Groups**.

![Choose Affinity Group](images/stackconsole-select-ag.png)

### <span style={{ color: '#003366' }}>Configure Server Settings</span>

- Configure additional settings for your server.
- You can **Add SSH Key** for secure access. Click on **Add Now** to add an SSH key.
- **Note**: For some OS images, such as Arch Linux, an SSH key is required because password login is not supported.

![Add SSH Key](images/stackconsole-create-instance-add-ssh.png)

- Add the name of the SSH key with the key value and click on **Add SSH Key**.

![Add SSH Key Details](images/stackconsole-create-instance-add-ssh-kay.png)

- Add a startup script to automate specific actions during initialization. Click on **Add Now** to add a startup script for your appliance.

![Add Startup Script](images/stackconsole-create-instance-add-startup-script.png)

### <span style={{ color: '#003366' }}>Advanced Settings (Optional)</span>

- Configure additional VM settings for optimized performance, security, and flexibility by enabling **Advanced Mode**.

![Advanced Settings](images/stackconsole-create-instance-advance-mode.png)

  - **Boot Mode**: Select Legacy or Secure boot for system startup security.
  - **Boot Type**: Choose between UEFI (modern firmware) or BIOS (traditional firmware).
  - **Enable Dynamic Scaling**: Allows automatic resource scaling based on workload demands.

### <span style={{ color: '#003366' }}>Server Hostname</span>

- Provide a unique **Server Name** and a valid **Server Hostname** for your appliance to identify it easily in your dashboard.

![Server Hostname](images/stackconsole-create-instance-server-hostname.png)

### <span style={{ color: '#003366' }}>Review and Deploy</span>

- Choose the desired **Billing Cycle** for your appliance. VNF Appliances support Hourly, Monthly, Quarterly, Semiannually, Yearly, Bi-annually, and Tri-annually billing cycles. 
- They also support all major billing rules: Date to Date, Fixed Calendar Month, Unfixed Calendar Month, Fixed Prorata, and Unfixed Prorata.
- They support multiple packages depending on SSD size and data center location. This enables deployment of network functions with regional and performance-based customization.
- Verify all the configuration details and review the price summary. Click on **Review & Deploy** to create the instance.

![Review and Deploy](images/stackconsole-create-instance-depoly.png)

### <span style={{ color: '#003366' }}>Conclusion</span>

By following this guide, you can easily create and manage VNF appliances on Stack Console. VNF appliances provide a flexible and scalable solution for deploying network services in a virtualized environment. For further assistance, refer to the Stack Console documentation or reach out to support.

:::tip
**See also:**  
- **[Public Network](./../../Networks/Guides%20For%20Apache%20CloudStack/Public%20Network/Create%20Public%20Network.md)**
- **[VPC Network](./../../Networks/Guides%20For%20Apache%20CloudStack/VPC%20Network/Create%20VPC%20Network.md)**
- **[Affinity Group ](../../Affinity%20Groups/Create%20Affinity%20Groups.md)**
- **[Public IP Address](../../Networks/Guides%20For%20Apache%20CloudStack/Public%20IP%20Address.md)**
- **[Create Templates](../../Templates/Create%20Templates.md)**

:::
