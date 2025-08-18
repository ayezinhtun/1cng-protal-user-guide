---
sidebar_position: 4
title: SSH Keys
---

## <span style={{ color: '#003366' }}>SSH Key Access</span>

SSH keys offer a secure and convenient method for accessing your virtual machine without using passwords. With SSH key authentication, you reduce the risk of brute-force attacks and streamline the login process by using encrypted public-private key pairs.

----------

- To view or manage your SSH keys, go to the **VM settings** and navigate to the **SSH Keys** section.

![SSH Keys Section](../images/vmset_open_neb_7.png)

This section displays all SSH public keys authorized to access the VM. These keys are typically configured during VM creation, but they can also be updated as needed.

:::warning

You need to stop the Instance to perform reset SSH Key operation.

:::

----------

### <span style={{ color: '#003366' }}>Conclusion</span>

SSH key authentication offers a more secure and efficient alternative to traditional password-based logins. By managing your authorized keys through the VM settings, you ensure controlled access to your instance. Regularly audit your SSH keys to maintain a secure environment and revoke any unused or outdated keys.

:::tip
**See also:**  
- **[Connect With SSH](../Connect%20With%20SSH.md)**  
:::
