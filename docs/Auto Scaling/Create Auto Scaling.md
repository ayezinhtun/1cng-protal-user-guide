
## <span style={{ color: '#003366' }}>Auto-scaling</span>

**Auto-scaling** is a cloud computing feature that automatically adjusts the number of virtual machine (VM) instances in response to real-time demand. It ensures that your applications remain available and perform optimally while minimizing costs by scaling resources up or down based on usage.

--------

### <span style={{ color: '#003366' }}>Creating Auto-scaling</span>

- From the left-hand side menu, click on the **Auto-scaling** tab.
- To create a auto-scaling, click the **Auto-scaling** or **Create New** icon located on the right side of the page. This will open the auto-scaling creation menu.

![Auto Scaling](images/auto-scaling.png)

### <span style={{ color: '#003366' }}>Assign to a Project</span>

- Assign the load balancer to one of your projects to organize and manage resources effectively.

![Auto Scaling](images/as-choose-project.png)

### <span style={{ color: '#003366' }}>Choose a Location</span>

- Select the data center location where your server will be physically hosted.
- Choose from the available locations listed.

![Auto Scaling](images/as-select-location.png)

### <span style={{ color: '#003366' }}>Choose Network</span>

- Set up or choose a network for your server. This can be an isolated private network, or you can create an elastic network to connect multiple regions.
- Alternatively, you can also create or set up a new network by selecting **Create New Network**.

![Auto Scaling](images/as-choose-network.png)

### <span style={{ color: '#003366' }}>Select Load Balancer</span>

- A load balancer distributes incoming traffic across multiple VM instances. Select the **Load Balancer** you want from the available list.

![Auto Scaling](images/as-select-load-balancer.png)

### <span style={{ color: '#003366' }}>Set Forwarding Rules</span>

- Configure forwarding rules to define how traffic should be distributed across your servers.
- Provide a the port range for incoming traffic with **Public** and **Private** ports.

![Auto Scaling](images/as-select-rule.png)

### <span style={{ color: '#003366' }}>Choose Image</span>

- Select an operating system or application template to install on your server.

![Auto Scaling](images/as-choose-image.png)

### <span style={{ color: '#003366' }}>Choose Plan</span>

- Choose a plan based on your requirements like CPU, memory, storage, and bandwidth. You can also create a custom plan if needed.
- The cost will adjust according to the resources you select.

![Auto Scaling](images/as-compute-offering.png)

### <span style={{ color: '#003366' }}>Server Settings</span>

- In server settings, you can add password to your server to enhance security. Click on **Set now**.
- Enter **Username** and **Password** then clcik on **Confirm** to add password. 

![Auto Scaling](images/as-server-setting.png)

### <span style={{ color: '#003366' }}>Capacity Planner</span>

- Enter the minimum and maximum number of instances and enter the grace period in seconds. 

![Auto Scaling](images/as-capacity-planner.png)

### <span style={{ color: '#003366' }}>Set Up Policies</span>

- A **Scale Up** policy is triggered when resource usage exceeds a defined threshold, adding more instances to handle increased demand.

![Auto Scaling](images/as-scale-up-policy.png)

- A **Scale Down** policy is triggered when resource demand drops, reducing the number of active instances to save costs.

![Auto Scaling](images/as-scale-down.png)

- Click on **Expression** to add expression to your Scale up and Scale down policies. Provide the **Counter**, **Operator** and **Threshold** and click on **Submit**. 

![Auto Scaling](images/as-add-condition.png)


### <span style={{ color: '#003366' }}>Choose Auto-scaling Name</span>

- Provide a unique **Auto-scaling Name** for your Auto-scaling to identify it easily in your dashboard.

![Auto Scaling](images/as-autoscalingtest.png)

### <span style={{ color: '#003366' }}>Create Auto-scaling</span>

- Choose the desired **Billing Cycle** for your Auto-scaling. Autoscaling supports Monthly, Quarterly, Semiannually, Yearly, Bi-annually, and Tri-annually billing cycles. 
- The billing rules include Date to Date, Fixed Calendar Month, Unfixed Calendar Month, Fixed Prorata, and Unfixed Prorata.
- There is no specific package detail provided, but autoscaling follows the same billing model as other scalable services to adapt to workload demands.
- Verify all the configuration details and review the price summary. Click on **Create** to create the Auto-scaling.

![Auto Scaling](images/as-create-autoscale.png)

### <span style={{ color: '#003366' }}>Conclusion</span>

Auto-scaling is a powerful feature that helps you maintain application performance, availability, and cost efficiency by automatically adjusting resources based on demand. By carefully configuring networks, load balancers, server settings, and scaling policies, you can ensure that your workloads adapt seamlessly to varying traffic patterns.