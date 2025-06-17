---
sidebar_position: 10
title: System Errors
---

## <span style={{ color: '#003366' }}>System Error Overview</span>

The **System Error** tab in Stack Console displays detailed records of operational errors occurring across the platform. Each log entry includes key details such as the error message, username associated with the action, and the cloud provider (e.g., Cloud Stack).

- These errors typically arise from failed API operations or misconfigurations—such as applying invalid IP reservations, attempting to delete a VPC still in use, or assigning a default NIC that’s already set. 

-----

![System Error Log Overview](images/system_err.png)

- By showing the originating account or user, the log helps administrators trace issues back to specific actions, making debugging faster and more accurate.

-----

## <span style={{ color: '#003366' }}>Conclusion</span>

The **System Errors** tab acts as a centralized logging tool for monitoring and diagnosing failures. It equips administrators with the context needed to investigate and resolve issues efficiently, ensuring smoother platform operations and minimizing downtime.
