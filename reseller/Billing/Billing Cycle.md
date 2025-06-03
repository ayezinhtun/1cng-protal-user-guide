# Billing Cycle

---
## <span style={{ color: '#003366' }}>PREPAID Billing Cycle</span>

### Admin to Reseller Billing

- **Billing Basis**: Hourly only
- **Fund Requirement**: Reseller must maintain sufficient funds.
- **Usage Calculation**: Calculated hourly as soon as a reseller's customer creates any paid service (irrespective of billing mode or cycle).

#### Invoice Generation
- **Infra Credit**: Immediate invoice upon actual fund transfer.
- **Service Usage**: Invoice is generated on the **1st of the next month**.

#### Quota Management
- Admin can assign a **quota** to the reseller.
- If **reseller's quota is exceeded**, their customers cannot create any resources — even if customers have quota left.

#### Disciplinary Actions
- If **reseller has insufficient funds**, customers cannot create services.
- Message displayed to customers:
  > You can not create services at the moment. Please contact the administrator.

#### Taxation
- Taxation can be configured by the **Super Admin** based on:
  - **Branch**
  - **Country**
- Taxes applied to **resellers based on their country**.
- Super Admin can **exempt specific resellers** from tax.

---

### Reseller to Customer Billing

- **Billing Modes Supported**:
  - PREPAID
  - POSTPAID
  - MANUAL
- **Billing Rules**: Follow **global billing cycles** set by the Super Admin.
- **Reseller-specific billing rules are not allowed**.

#### Invoice Generation
- Based on the customer's billing mode:
  - PREPAID
  - POSTPAID
  - MANUAL

#### Quota Management
- Reseller assigns quota to each customer.
- If **customer exceeds quota**, no resource creation is allowed.
- Customers can send **quota increase requests** to the reseller.

#### Disciplinary Actions
Triggers when:
1. **Low Balance**:  
   - When balance goes **negative**, a freeze timer starts.
   - If timer threshold is crossed, actions are enforced.

2. **Unpaid Invoice**:  
   - Freeze timer starts from **due date**.
   - Once timer matches disciplinary setting, service operations are halted.

> If insufficient funds are available:
> - New services **cannot be created**
> - **Renewals are paused**

#### Taxation
- Tax rules can be defined by **Reseller** based on:
  - **Branch**
  - **Country**
- Taxes are applied **based on the customer’s country**.
- Resellers can **exempt specific customers** from tax.

---
## <span style={{ color: '#003366' }}>POSTPAID Billing Cycle</span>

### Admin to Reseller Billing

- **Billing Basis**: Hourly
- **Threshold System**:
  - Set threshold at **reseller level** during creation.
  - Optional: Override with specific threshold in **reseller overview**.
  - If no value, global threshold from **currency settings** is applied.
  - Default value `0` means **global threshold is enforced**.
  - Once **threshold is reached**, service creation is blocked.

#### Usage Calculation
- Hourly, immediately when reseller's customer creates a service.

#### Invoice Generation
- Generated **when hourly service usage hits threshold**.
- **Auto-processed** in postpaid mode.

#### Payment Method
- Reseller must **add a credit card**.

---

### Reseller to Customer Billing

- **Billing Modes Supported**:
  - PREPAID
  - POSTPAID
  - MANUAL
- **Billing Rules**: Governed by global cycles set by the **Super Admin**.
- No customization of billing cycles per reseller.

---
## <span style={{ color: '#003366' }}>MANUAL Billing Cycle</span>

### Manual Billing System

- Behaves similarly to POSTPAID.
- **Invoices are not auto-processed**.
- Payment must be made **manually**.
- Follows **global billing rules** defined by the Super Admin.

---

