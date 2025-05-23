# Billing Rules

**Billing Rules** determine how service start dates align with invoicing cycles. These rules govern how invoices are generated when services are created on dates that do not align exactly with the standard billing periods. Applicable to **quarterly**, **semiannual**, and **yearly** services. There are five primary billing rules, each with distinct invoice generation logic. 

---

## <span style={{ color: '#003366' }}>Billing Rule: UNFIXED_PRORATA</span>

### **Example: Yearly**
- **Service Created:** 25th April 2025  
- **Billing Cycle:** Yearly

#### **Invoice Generation**
- **Pro Rata Invoice:** 25th April 2025 to 30th April 2025  
- **Next Unfixed Invoice:** 1st May 2025 to 30th April 2026

---

### **Example: Quarterly**
(Quarters: Jan-Mar, Apr-Jun, Jul-Sep, Oct-Dec)
In Unfixed prorate invoice gets generated for created months' remaining days and next 3 months' invoice gets generated, no matter in which quarter currently we are

- **Service Created:** 25th Feb 2025  
- **Billing Cycle:** Quarterly

#### **Invoice Generation**
- **Pro Rata Invoice:** 25th Feb 2025 to 29th Feb 2025  
- **Next Unfixed Invoice:** 1st March 2025 to 31st May 2025

---
## <span style={{ color: '#003366' }}>Billing Rule: FIXED_PRORATA</span>

### **Example: Yearly**
- **Service Created:** 25th April 2025  
- **Billing Cycle:** Yearly

#### **Invoice Generation**
- **Pro Rata Invoice:** 25th April 2025 to 30th April 2025  
- **Next Fixed Invoice:** 1st May 2025 to 31st Dec 2025

---

### **Example: Quarterly**
(Fixed quarters: Jan-Mar, Apr-Jun, Jul-Sep, Oct-Dec)
In Unfixed prorated invoice gets generated for the created month's remaining days, and the next remaining days/month invoice gets generated until the end of the current quarter.

- **Service Created:** 25th Feb 2025  
- **Billing Cycle:** Quarterly

#### **Invoice Generation**
- **Pro Rata Invoice:** 25th Feb 2025 to 29th Feb 2025  
- **Next Fixed Invoice:** 1st March 2025 to 31st March 2025

---
## <span style={{ color: '#003366' }}>Billing Rule: DATE TO DATE</span>

### **Example: Yearly**
- **Service Created:** 25th April 2025  
- **Billing Cycle:** Yearly

#### **Invoice Generation**
- **Full Invoice:** 25th April 2025 to 24th April 2026 *(generate -1 day)*

---

### **Example: Monthly**
- **Service Created:** 25th April 2025  
- **Billing Cycle:** Monthly

#### **Invoice Generation**
- **Full Invoice:** 25th April 2025 to 24th May 2025 *(generate -1 day)*

---
## <span style={{ color: '#003366' }}>Billing Rule: FIXED_CALENDAR_MONTH</span>

### **Example: Yearly**
- **Service Created:** 25th April 2025  
- **Billing Cycle:** Yearly

#### **Invoice Generation**
- **Full Invoice:** 1st April 2025 to 31st Dec 2025

---
## <span style={{ color: '#003366' }}>Billing Rule: UNFIXED_CALENDAR_MONTH</span>

### **Example: Yearly**
- **Service Created:** 25th April 2025  
- **Billing Cycle:** Yearly

#### **Invoice Generation**
- **Pro Rata Invoice:** 1st April 2025 to 30th April 2025  
- **Next Fixed Invoice:** 1st May 2025 to 30th April 2026
