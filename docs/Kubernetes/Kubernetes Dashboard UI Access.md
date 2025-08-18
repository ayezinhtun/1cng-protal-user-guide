---
sidebar_position: 4
title: Kubernetes Dashboard UI Access
---

## <span style={{ color: '#003366' }}>Kubernetes Dashboard UI Access</span>

**Kubernetes Dashboard** is a web-based UI that allows users to manage and monitor Kubernetes clusters through a visual interface. It supports deploying containerized applications, troubleshooting, and managing cluster resources.

-----

### <span style={{ color: '#003366' }}>Run Proxy Locally</span>

To access the dashboard, start the Kubernetes proxy service locally:

```bash
kubectl --kubeconfig /custom/path/kube.conf proxy
```

This will start a local server at `http://localhost:8001`.


### <span style={{ color: '#003366' }}>Open the Dashboard in Your Browser</span>

Once the proxy is running, open the following URL in your browser to access the Kubernetes Dashboard:

```
http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/
```

### <span style={{ color: '#003366' }}>Create a Token for Kubernetes Dashboard Login</span>

Since Kubernetes **v1.24.0**, there is no auto-generation of secret-based service account token due to security reason. You need to create a service account and an optional long-lived Bearer Token for the service account.

```yaml
apiVersion: v1
kind: Secret type: kubernetes.io/service-account-token
metadata:
name: kubernetes-dashboard-token namespace: kubernetes-dashboard annotations:
kubernetes.io/service-account.name: kubernetes-dashboard-admin-user
EOF
```

### <span style={{ color: '#003366' }}>Retrieve the Token</span>

Use the following command to retrieve the token for dashboard login:

```bash
kubectl --kubeconfig /custom/path/kube.conf describe secret $(kubectl --kubeconfig /custom/path/kube.conf get

secrets -n kubernetes-dashboard | grep kubernetes-dashboard-token | awk '{print $1}') -n kubernetes-dashboard
```

### <span style={{ color: '#003366' }}>More Information</span>

For more details on using and securing the Kubernetes Dashboard, refer to the official documentation:

🔗 [Accessing the Dashboard UI – Kubernetes Docs](https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/#accessing-the-dashboard-ui)

--------

### <span style={{ color: '#003366' }}>Conclusion</span>

By following this guide, you can securely access and manage your Kubernetes cluster using the Dashboard UI. Running the proxy locally, generating a service account token, and logging in via a secure browser interface gives you a convenient way to view and interact with your cluster resources.

:::tip
**See also:**  
- **[Create Kubernetes Cluster](./Create%20Kubernetes%20Cluster.md)**
- **[Kubernetes Cluster CLI](./Kubernetes%20Cluster%20via%20CLI.md)**
- **[Manage Kubernetes Cluster](./Kubernetes%20Cluster%20Overview.md)**
:::
