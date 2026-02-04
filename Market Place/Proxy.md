---
title: "HAProxy Server"
---

# HAProxy Server

This marketplace app is installed based on Ubuntu 24.04 LTS OS and  HAProxy version is 3.2.

![HAProxy](images/image.png)

### <span style={{ color: '#003366' }}>Overview</span>

This HAProxy server acts as a load balancer and reverse proxy for backend applications.
It distributes incoming traffic across multiple backend services to provide:

- High availability
- Load balancing
- Fault tolerance
- Centralized access point 


### <span style={{ color: '#003366' }}>What This HAProxy Instance Does</span>

Depending on your deployment, this HAProxy server may:

- Accept HTTP / HTTPS traffic
- Forward requests to one or more backend services
- Perform health checks
- Route traffic based on  or paths
- Provide a read-only statistics dashboard
  

### <span style={{ color: '#003366' }}>Environment Variables</span>

- **FRONTEND_PORT** - set listen port number of frontend IP address
- **FRONTEND_IP** - it will be taken from server’s IP address of default network interface
- **BACKEND_MODE** - To specify the type of traffic being processed `{ tcp | http | log | spop }`
- **CHECK_URI** - specifically configured via <span style={{ color: '#EE4B2B' }}>option httpchk</span> and the <span style={{ color: '#EE4B2B' }}>check</span> parameter on a server line enables HTTP health checks to monitor backend server health by querying a specific URI.
- **CHECK_INTERVAL** - Health check interval  eg. 10s for 10 seconds
- **LB_ALGO** - which are configured using the balance directive in the backend section of the haproxy.cfg file. 



### <span style={{ color: '#003366' }}>DDoS and Rate Limiting</span>

- **MAX_REQ_RATE** - Maximum allowed request rate 
- **MAX_CONN_RATE** - Maximum allowed connection rate
- **MAX_CONN_CUR** - Maximum concurrent session 
- **STICK_TABLE_SIZE** -  Maximum number of records , 1m means 1,048,576 records
- **STICK_TABLE_EXPIRE** - A record’s expiration time, s for second and m for minute


### <span style={{ color: '#003366' }}>Example configuration:</span>

- MAX_REQ_RATE=100 - requests per 10s
- MAX_CONN_RATE=30 - new connections per 10s
- MAX_CONN_CUR=20  - concurrent connections
- STICK_TABLE_SIZE="200k"
- STICK_TABLE_EXPIRE="10m"

### <span style={{ color: '#003366' }}>Default Configuration File</span>

```
/etc/haproxy/haproxy.cfg
```

### <span style={{ color: '#003366' }}>Reference URLs</span>

- [HAProxy Configuration Overview](https://www.haproxy.com/documentation/haproxy-configuration-tutorials/proxying-essentials/configuration-basics/overview/)
- [HAProxy Stick Tables](https://www.haproxy.com/documentation/haproxy-configuration-tutorials/proxying-essentials/custom-rules/stick-tables/)
- [HAProxy Load Balancing Algorithms](https://www.haproxy.com/glossary/what-are-load-balancing-algorithms)
