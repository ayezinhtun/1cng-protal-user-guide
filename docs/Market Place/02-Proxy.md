---
title: "HAProxy"
---

# HAProxy

This marketplace app is installed based on Ubuntu 24.04 LTS OS and  HAProxy version is 3.2.

![HAProxy](images/image.png)

### <span style={{ color: '#003366' }}>HAProxy Overview</span>

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

**FRONTEND_PORT** <br />
Set listen port number of frontend IP address

**BACKEND_PORT** <br />
Set listen port number of backend IP addresses

**FRONTEND_IP** <br />
It will be taken from server’s IP address of default network interface

**BACKEND_MODE** <br />
To specify the type of traffic being processed `{ tcp | http | log | spop }`

**CHECK_URI** <br />
Specifically configured via <span style={{ color: '#EE4B2B' }}>option httpchk</span> and the <span style={{ color: '#EE4B2B' }}>check</span> parameter on a server line enables HTTP health checks to monitor backend server health by querying a specific URI.

**CHECK_INTERVAL** <br />
Health check interval  eg. 10s for 10 seconds

**LB_ALGO** <br />
 Which are configured using the balance directive in the backend section of the haproxy.cfg file. 

`{ roundrobin | leastconn | source | first | hash | uri }`

### <span style={{ color: '#003366' }}>DDoS and Rate Limiting</span>

**MAX_REQ_RATE** <br />
Maximum allowed request rate. Default value is 600.

**MAX_CONN_RATE** <br />
Maximum allowed connection rate. Default value is 50.

**MAX_CONN_CUR** <br />
Maximum concurrent session. Default value is 100.

**STICK_TABLE_SIZE** <br />
Maximum number of records , 1m means 1,048,576 records. Default value is 200k.

**STICK_TABLE_EXPIRE** <br />
A record’s expiration time, s for second and m for minute. Default value is 10m.


### <span style={{ color: '#003366' }}>Example configuration:</span>

MAX_REQ_RATE=100 - requests per 10s <br />
MAX_CONN_RATE=30 - new connections per 10s <br />
MAX_CONN_CUR=20  - concurrent connections <br />
STICK_TABLE_SIZE="200k" <br />
STICK_TABLE_EXPIRE="10m"

### <span style={{ color: '#003366' }}>Default Configuration File</span>

```
/etc/haproxy/haproxy.cfg
```

### <span style={{ color: '#003366' }}>Reference URLs</span>

- [HAProxy Configuration Overview](https://www.haproxy.com/documentation/haproxy-configuration-tutorials/proxying-essentials/configuration-basics/overview/)
- [HAProxy Stick Tables](https://www.haproxy.com/documentation/haproxy-configuration-tutorials/proxying-essentials/custom-rules/stick-tables/)
- [HAProxy Configuration Manual](https://www.haproxy.com/documentation/haproxy-configuration-manual/latest/)
