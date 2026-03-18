---
title: "Docker"
---

### <span style={{ color: '#003366' }}>Overview</span>

This guide explains how to use the Docker-based application provided through the marketplace. It includes a brief introduction to Docker, how the application is deployed, and how to configure optional registry mirrors.

The application is pre-configured to run on:

- **Base OS:** Ubuntu 24.04
- **Docker Version:** 29.3

The goal is to provide a simple, flexible deployment with optional customization for image download sources (mirrors).


### <span style={{ color: '#003366' }}>What is Docker?</span>

Docker is a container platform that allows you to run applications in isolated environments called **containers**.

**Key Concepts**

- **Image:** A packaged application with dependencies
- **Container:** A running instance of an image
- **Docker Eniner:** the service that runs containers
- **Docker Compose:** Tool to define and run multi-container apps

**Benefits**
- Fast deployment
- Lightweight (compared to VMs)
- Consistent across environments
- Easy to scale and manage

### <span style={{ color: '#003366' }}>System Environment</span>

Your marketplace deployment includes:

**Base Opertiing System**

- Ubuntu 24.04 (minimal + essential packages)
- Preinstalled tools:
  - wget
  - curl
  - net-tools
  - traceroute
  - bind9-utils
  - fail2ban (basic security)

**Docker Environment**
- Doker Enginer 29.3
- Docker Compose (plugin-based)
- Docker service enabled at boot


### <span style={{ color: '#003366' }}>Registry Mirror Configuration</span>

To improve Docker image, pull speed, especially in restricted or slow networks, this deployment supports configurable registry mirrors.


### <span style={{ color: '#003366' }}>User Configuration Variables</span>

Users can customize mirror behavior using the following variables:

### <span style={{ color: '#003366' }}>DEFAULT_MIRROR</span>

DEFAULT_MIRROR=yes | no

- **yes**
  - Uses pre-configured mirror list provided by the system
  - Recommended for most users

- **no**
  - Disables default mirrors
  - Allows use of custom mirror list


### <span style={{ color: '#003366' }}>MIRROR_LIST</span>
MIRROR_LIST= `https://mirror1.example.com, https://mirror2.example.com`

If MIRROR_LIST is empty, following mirror sites will be used.

`https://mirror.gcr.io","https://docker.xuanyuan.me", "https://docker.mirrors.ustc.edu.cn`

Used only when: DEFAULT_MIRROR = no

- Accepts only comma separated URL list
- Overrides system-provided mirrors

**Example:**
![Docker](images/docker.jfif)


### <span style={{ color: '#003366' }}>Security Notes</span>
- Fail2ban is enabled with:
  - maxretry: 5
  - bantime: 15 minutes
- Avoid exposing Docker API publicly
- Use strong credentials for applications

### <span style={{ color: '#003366' }}>Summary</span>

This marketplace Docker application provides:

- Ready-to-use container environment
- Flexible mirror configuration
- Simple deployment via Docker Compose
- Stable base on Ubuntu 24.04 with Docker 29.3

Users can choose between default mirrors or fully customized registry sources, depending on their network and performance needs.
