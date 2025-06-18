---
sidebar_position: 3
title: Portal Access
---

# <span style={{ color: '#003366' }}>Stack Console Guide for Portal Access and Levels</span>

This guide provides a complete overview of the different portals in the Stack Console system, their purpose, user access levels, and the billing flow between the entities involved.

---

## <span style={{ color: '#003366' }}>🔐 1. Super Admin Portal</span>

**Access**: Cloud Provider (Platform Owner)  
**URL**: Internal / Platform Default

### <span style={{ color: '#003366' }}>Description</span>  
The Super Admin Portal is the central control panel for the cloud provider. It provides full visibility and management capabilities over all users and system entities.

### <span style={{ color: '#003366' }}>Capabilities</span>
- View and manage:
  - Regular customers
  - Resellers
  - Vendors
- Access all modules
- Perform administrative tasks across all accounts

---

## <span style={{ color: '#003366' }}>🧑‍💼 2. Reseller Dashboard</span>

**Access**: Reseller  
**URL**: Opens on the **provider’s domain**

### <span style={{ color: '#003366' }}>Description</span>  
This dashboard is used by resellers to manage their business relationship with the provider. It is separate from the reseller’s customer-facing portal.

### <span style={{ color: '#003366' }}>Capabilities</span>
- View and manage billing details
- Pay bills to the super admin
- Manage white-label portal domain URLs
- Manage SSL certificates

---

## <span style={{ color: '#003366' }}>🏷️ 3. Reseller Portal</span>

**Access**: Reseller and their customers  
**URL**: Hosted on the **reseller’s own custom domain**

### <span style={{ color: '#003366' }}>Description</span>  
The Reseller Portal is the actual white-labeled portal provided by the reseller to their customers. It includes extensive setup and configuration options.

### <span style={{ color: '#003366' }}>Capabilities</span>
- **Portal Setup**:
  - Branding settings
  - SMTP configuration
  - Payment gateway setup
  - Invoice numbering settings
- **Customer Management**:
  - Onboard new customers
  - Manage customer rate cards
- **Modules**:
  - All modules available same as super admin, **excluding** cloud provider setup-related modules

---

## <span style={{ color: '#003366' }}>👥 4. Customer Dashboard</span>

**Access**: End Customers  
**URL**: Hosted on the **provider’s domain**

### <span style={{ color: '#003366' }}>Types</span>
- **Reseller Customer Dashboard**:  
  - For customers onboarded by a reseller  
  - Opens on the **provider’s domain**
- **Regular Customer Dashboard**:  
  - For customers directly under the provider  
  - Opens on the **provider’s domain**

---

## <span style={{ color: '#003366' }}>💳 5. Billing Flow</span>

- **Super Admin → Reseller**
  - The super admin bills the reseller for services
- **Reseller → His Customer**
  - The reseller bills their own customers

---

## <span style={{ color: '#003366' }}>📊 Summary Table</span>

| Portal              | URL Location           | Used By            | Key Functions                                             |
|---------------------|------------------------|---------------------|-----------------------------------------------------------|
| Super Admin Portal  | Provider domain         | Super Admin         | Manage all users, full system control                     |
| Reseller Dashboard  | Provider domain         | Reseller            | Billing, white-label domain, SSL setup                    |
| Reseller Portal     | Reseller custom domain  | Reseller & Customers| Portal setup, onboarding, rate cards                      |
| Customer Dashboard  | Provider domain         | Customers           | Service access and management                             |
