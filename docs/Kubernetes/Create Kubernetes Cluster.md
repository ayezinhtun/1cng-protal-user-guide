---
sidebar_position: 1
title: Create Kubernetes Cluster
---

## <span style={{ color: '#003366' }}>Kubernetes Cluster</span>

A **Kubernetes** cluster is a set of preconfigured machines (nodes) that work together to run containerized applications in an automated and scalable way. Kubernetes manages the deployment, scaling, and operation of application containers across multiple nodes.

In **Stack Console**, you can easily set up a Kubernetes cluster to manage your applications, scale resources, and maintain high availability.

----------

### <span style={{ color: '#003366' }}>Creating a Kubernetes Cluster</span>

- From the left-hand menu, click on the **Kubernetes** tab.
- You will be redirected to the **Kubernetes** page.

![Kubernetes Page](images/kb_1.png)

- To create a cluster, click on **Create Cluster** or the **Create New** icon located on the right side of the page.

### <span style={{ color: '#003366' }}>Choose a Location</span>

- Select the data center location where your Kubernetes cluster will be deployed.
- Choose from the available locations listed.

![Choose Location](images/kb_7.png)

### <span style={{ color: '#003366' }}>Assign to a Project</span>

- Assign the cluster server to one of your projects to organize and manage resources effectively.

![Assign to Project](images/kb_2.png)

### <span style={{ color: '#003366' }}>Choose Network</span>

- Set up or choose a network for your server. This can be an isolated private network, or you can create an elastic network to connect multiple regions.
- Alternatively, you can also create or set up a new network by selecting **Create New Network**.

![Choose Network](images/kb_8.png)

### <span style={{ color: '#003366' }}>Choose Cluster Capacity</span>

- You can select the predefined **Node Plan** with fixed configurations for CPU, memory, and storage.
- For a more tailored solution, you can create a **Custom Plan** by specifying CPU, memory, storage, and node count. More nodes improve scalability and distribute workloads efficiently.

![Choose Cluster Capacity](images/kb_3.png)

### <span style={{ color: '#003366' }}>Advanced Settings (Optional)</span>

- You can **Enable High Availability** for better redundancy and add **Control Nodes** to ensure stability in case of failures.

![Advanced Settings](images/kb_4.png)

- Configure additional settings for your server:
  - **Add SSH Key** for secure access. Click on **Add Now** to add an SSH key.
  - **Note**: For some OS images, such as Arch Linux, an SSH key is required because password login is not supported.

![Add SSH Key](images/kb_9.png)

- Add the name of the SSH key with the key value and click **Add SSH Key**.

![Add SSH Key Details](images/kb_10.png)

### <span style={{ color: '#003366' }}>Choose Cluster Name</span>

- Provide a unique **Cluster Name** for your Kubernetes cluster to identify it easily in your dashboard.

![Choose Cluster Name](images/kb_5.png)

### <span style={{ color: '#003366' }}>Create Cluster</span>

- Choose the desired **Billing Cycle** for your cluster. You can choose either Hourly or Monthly.
- Verify all the configuration details and review the price summary. Click on **Create Cluster** to create the cluster.

![Create Cluster](images/kb_6.png)

### <span style={{ color: '#003366' }}>Conclusion</span>

By following this guide, you can easily create and manage a Kubernetes cluster on Stack Console. Kubernetes clusters provide a powerful way to deploy, scale, and manage containerized applications with high availability and efficiency. For further assistance, refer to the Stack Console documentation or reach out to support.
