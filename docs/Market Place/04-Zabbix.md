---
title: "Zabbix"
---

### <span style={{ color: '#003366' }}>Overview</span>

This guide provides instructions for deploying and using the Zabbix monitoring application from the marketplace.

The deployment is pre-configured with a stable LAMP stack and allows users to customize database credentials during setup.


### <span style={{ color: '#003366' }}>System Environment</span>

#### <span style={{ color: '#003366' }}>Base Operating System</span>

- Ubuntu 24.04


#### <span style={{ color: '#003366' }}>Pre-installed Components</span>

- Zabbix Server + Frontend
- MySQL Server 8.0.4
- Apache 2.4.58
- PHP (required for Zabbix frontend)

### <span style={{ color: '#003366' }}>What is Zabbix?</span>

#### <span style={{ color: '#003366' }}>Zabbix is an enterprise-grade monitoring solution used to track:</span>

- Servers and VMs
- Network devices
- Applications and services
- Databases


#### <span style={{ color: '#003366' }}>Key Features</span>
- Web-based dashboard
- Real-time monitoring
- Alerting & notifications
- Agent-based and agentless monitoring


### <span style={{ color: '#003366' }}>User Configuration Variables</span>

#### <span style={{ color: '#003366' }}>During deployment, users can define the following variables:</span>

**DB_ROOT_PASS:** MySQL root password and it is mandatory. <br />
**DB_ZBX_NAME:** Zabbix database name  <br />
**DB_ZBX_USER:** Zabbix databse username  <br />
**DB_ZBX_PASSWORD:** Zabbix database password

#### <span style={{ color: '#003366' }}>Default Behavior</span>
If optional variables are not provided, the system will automatically assign:

| Variable | Default Value |
| :--- | :--- |
| DB_ZBX_NAME | zabbix |
| DB_ZBX_USER | zabbix |
| DB_ZBX_PASSWD | zabbix |


Example:

![Zabbix](images/zabbix.png)

### <span style={{ color: '#003366' }}>Accessing Zabbix Web Interface</span>

Open browser and go to: `https://<your-server-ip>/zabbix `

**Default Login**

Username: Admin  <br/>
Password: zabbix


⚠️ Change the default password after first login.

### <span style={{ color: '#003366' }}>Security Recommendations</span>

- User strong database passwords
- Change default Zabbix admin password
- Restrict access to web UI (firewall or VPN)


### <span style={{ color: '#003366' }}>Summary</span>

This marketplace deployment provides:
- Pre-configured Zabbix monitoring stack
- Ubuntu 24.04 base system
- MySQL + Apache integration
- Flexible database configuration via user variables


Users are required to define only the MySQL root password, while other values default to zabbix, ensuring a quick and easy setup.
