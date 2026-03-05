---
title: "WordPress Server"
---

# WordPress Server

### <span style={{ color: '#003366' }}>Overview</span>
WordPress is the most popular open-source Content Management System (CMS) used to build websites, blogs, landing pages, and even eCommerce platforms. It is based on PHP and MySQL. Its features can be extended with thousands of free plugins and themes.

WordPress installation is based on Ubuntu 24.04 OS and it consist of the following software packages:

- PHP 8.3.6
- PHP 8.3-fpm
- MYSQL 9.0.45
- Nginx 1.24.0

### <span style={{ color: '#003366' }}>Following environment variables are provided:</span>

**MYSQL_PORT_PASSWORD** <br />
Specifies the password for the MYSQL root user. This credential is required.

**MYSQL_WP_DB** <br />
This is for WordPress database name and default is wordpress.

**MYSQL_WP_PASSWORD** <br />
Defines the password for the WordPress database user and it is required.

**SERVER_FQDN** <br />
Specifies the Fully Qualified Domain Name (FQDN) of the server.

**SERVER_FQDN** is used to:
- Configure the web server virtual host
- Set the WordPress site URL
- Generate a self-signed SSL certificate for secure HTTPS access

### <span style={{ color: '#003366' }}>Example Configuration:</span>
![WordPress Server](images/wordpress.jfif)

### <span style={{ color: '#003366' }}>Security Recommendation</span>
For production deployments, it is strongly recommended to:
- Use strong, complex passwords
- Replace self-signed certificates with a trusted CA-issued SSL certificate
- Restrict database access to internal/private networks only















  
