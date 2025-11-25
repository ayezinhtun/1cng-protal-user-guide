---
sidebar_position: 1
title: Compute Instance
---

## <span style={{ color: '#003366' }}>Compute Instance</span>

A **Compute Instance** is a virtual server in the cloud that functions similarly to a physical computer. It has its own CPU, memory, and storage, allowing you to install software, run applications, or host websites. With a Compute Instance, you have complete control over your server environment, making it flexible for various tasks. Compute Instances are a fundamental component of cloud services, enabling users to quickly launch and scale servers as needed.

----------

### <span style={{ color: '#003366' }}>Creating a Compute Instance on 1CNG</span>

This guide provides step-by-step instructions for creating a cloud server instance, which offers flexible and scalable computing power for running applications, managing volumes, and adapting resources to your needs.

- From the left-hand menu, click on the **Instances** tab.
- You will be redirected to the **Instances** page.

![Instances Page](images/create-instance.png)

- To create an instance, click the **plus (+)** icon located on the right side of the Instances page. This will open the Instance creation page.

### <span style={{ color: '#003366' }}>Choose a Location</span>

- Select the data center location where your server will be physically hosted.
- Choose from the available locations listed.

![Choose Location](images/choose-location.png)

### <span style={{ color: '#003366' }}>Choose an Image</span>

- Select an operating system or application template to install on your server.
- Available options include popular OS images. Alternatively, you can import a custom ISO.
- **Note**: For Microsoft Windows, only official evaluation versions are available.

![Choose Image](images/compute-instance-choose-image.jpg)
### <span style={{ color: '#003366' }}>Choose a Plan</span>

- Choose a plan based on your requirements like CPU, memory, storage, and bandwidth. You can also create a custom plan if needed.

![Choose Plan](images/choose-plan.png)

  - **Memory Dense Plus**: Memory-Dense Plus Instances offer a 1:8 CPU-to-memory ratio, providing maximum memory capacity for the most demanding workloads. With high-performance CPUs and ultra-fast NVMe SSD storage.
  - **Memory Dense**: Memory-Dense Instances feature a 1:6 CPU-to-memory ratio, delivering high memory capacity for workloads that require extensive data processing. Powered by high-performance CPUs and NVMe SSD storage.
  - **Compute Dense Plus**: Extra CPU-Optimized Instances offer a 1:1 CPU-to-Memory ratio, delivering superior processing power with high-frequency CPUs (1 GHz+) and ultra-fast NVMe SSD storage.
  - **Compute Dense**: CPU-Optimized Instances feature a 1:2 CPU-to-memory ratio, balancing high-performance processing with increased memory capacity. Powered by high-frequency CPUs and NVMe SSD storage.
  - **Balance**: Balanced Instances offer a 1:4 CPU-to-memory ratio, providing an optimal mix of compute power and memory efficiency. With high-performance CPUs and NVMe SSD storage.

### <span style={{ color: '#003366' }}>Assign to a Project</span>

- Assign the server to one of your projects to organize and manage resources effectively.

![Assign to Project](images/choose-project.png)

### <span style={{ color: '#003366' }}>Choose a Network</span>

- Select the network for your instance based on your connectivity and security needs. For more details about available network options, refer to the respective network guides.

![Choose Network](images/choose-network.png)

  - **Public Network**: A simple, pre-configured network designed for external connectivity. Includes cloud firewall protection, port forwarding, and remote access VPN. Ideal for users who require straightforward, hassle-free connectivity.
  - **VPC Network**: A Virtual Private Cloud (VPC) offering complete control over traffic routing and enhanced security. Supports VPN gateway, site-to-site VPN connections, and traffic segregation for better security and performance.

  **Note:** By default, a VPC is created with a random **CIDR** block and one network tier.

- You can choose whether to enable public IPv4 for internet access to your server.

![Enable Public IP](images/stackconsole-create-instance-enable-public-ip.png)

### <span style={{ color: '#003366' }}>Configure Server Settings</span>

- Configure additional settings for your server:
  - **Add SSH Key** for secure access. Click on **Add Now** to add an SSH key.
  - **Note**: For some OS images, such as Arch Linux, an SSH key is required because password login is not supported.

![Add SSH Key](images/stackconsole-create-instance-add-ssh.png)

- Add the name of the SSH key with the key value and click **Add SSH Key**.

![Add SSH Key Details](images/add-sshkey.png)

- Add a startup script to automate specific actions during instance initialization. Click on **Add Now** to add a startup script.

![Add Startup Script](images/stackconsole-create-instance-add-startup-script.png)

### <span style={{ color: '#003366' }}>Advanced Settings (Optional)</span>

- Configure additional VM settings for optimized performance, security, and flexibility by enabling **Advanced Mode**.

![Advanced Mode](images/advanced-mode.png)

  - **Boot Mode**: Select Legacy or Secure boot for system startup security.
  - **Boot Type**: Choose between UEFI (modern firmware) or BIOS (traditional firmware).
  - **Enable Dynamic Scaling**: Allows automatic resource scaling based on workload demands.

### <span style={{ color: '#003366' }}>Server Hostname</span>

- Provide a unique **Server Name** and a valid **Server Hostname** for your instance to identify it easily in your dashboard.

![Server Hostname](images/server-hostname.png)

### <span style={{ color: '#003366' }}>Review and Deploy</span>

- Choose the desired **Billing Cycle** for your instance. Instance supports the following billing cycles: Hourly, Monthly, Quarterly, Semiannually, Yearly, Bi-annually, and Tri-annually. 

- It also supports a comprehensive set of billing rules, including Date to Date, Fixed Calendar Month, Unfixed Calendar Month, Fixed Prorata, and Unfixed Prorata.

- It supports multiple instance packages such as General Purpose, Compute-Optimized, and Memory-Optimized. These options allow users to choose configurations tailored to their workload performance and memory needs.

- Verify all the configuration details and review the price summary. Click on **Review & Deploy** to create the instance.

![Review and Deploy](images/billing-circle.png)

----------

### <span style={{ color: '#003366' }}>Conclusion</span>

Creating a Compute Instance on 1CNG is a straightforward process that provides you with the flexibility and scalability needed to meet your computing requirements. By following this guide, you can configure your instance to suit your specific needs, whether for development, production, or specialized workloads. Regularly review and optimize your instance settings to ensure efficient resource utilization and enhanced performance. For further assistance, explore the 1CNG documentation or reach out to support.

:::tip
**See also:**  
- **[Instance Overview](./Instance%20Overview.md)**  
<!-- - **[Instance Backups](./Instance%20Backups.md)**   -->
- **[VM Activity Logs](./VM%20Activity%20Logs.md)**
:::
