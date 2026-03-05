---
title: "What is MarketPlace App?"
---

# Marketplace App

### <span style={{ color: '#003366' }}>What are Marketplace Apps?</span>

- Marketplace apps are similar to normal VM templates but come with **pre-installed applications**.
- The **service provider** is responsible for preparing these images/templates with the required applications already installed.
- Example: A WordPress Marketplace App is essentially a VM image where the cloud provider has pre-installed **WordPress** on an OS like **Ubuntu** or **CentOS**.
- This allows end users to deploy ready-to-use applications quickly without manual installation.


### <span style={{ color: '#003366' }}>What are Environment Variables and Their Role in Marketplace Apps?</span>

- During deployment, certain application settings need to be configured **dynamically**.
- Example: For a WordPress app, the **username**, **password**, and **site URL** must be set at deployment time.

### <span style={{ color: '#003366' }}>Instance Base Configuration & Security Hardening</span>
To ensure stability, troubleshooting capability, and baseline security, all instances provisioned through our marketplace are deployed with essential system utilities and SSH protection mechanisms preconfigured.


### <span style={{ color: '#003366' }}>Pre-Installed Basic Packages</span>
The following standart Linux utilities are installed by default:

| Package     | Description |
|-------------|-------------|
| net-tools   | Provides networking utilities such as ifconfig, netstat, and route. |
| bind9-utils | DNS diagnostic tools including dig and nslookup. |
| wget        | Command-line utility for downloading files via HTTP/HTTPS. |
| curl        | Tool for transferring data and testing API or web connectivity. |
| traceroute  | Used to analyze network routing paths to remote systems. |
| rsyslog     | System logging service for log management and monitoring. |

### <span style={{ color: '#003366' }}>SSH Security Protection (Fail2Ban Enabled)</span>
To enhance security, Fail2Ban is preconfigured to protect SSH acess against brute-force attacks.

### <span style={{ color: '#003366' }}>Active SSH Protection Settings</span>
The following policy is enforced:
- Max Retry Attempts: 5 failed login attempts
- Ban Duration: 15 minutes
- Monitored Service: SSH
- Action: Automatic IP address ban upon exceeding retry limit

This configuration helps mitigate unauthorized access attempts while maintaining legitimate user accessibility.