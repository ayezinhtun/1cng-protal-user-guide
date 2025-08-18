---
sidebar_position: 3
title: Kubernetes Cluster via CLI
---

## <span style={{ color: '#003366' }}>Accessing Kubernetes Cluster via CLI</span>

**Kubernetes CLI access** allows you to interact with your cluster directly from the terminal using `kubectl`. This is useful for inspecting, managing, and troubleshooting resources running in your cloud environment via **Stack Console**.

-----
### <span style={{ color: '#003366' }}>Download Kubeconfig for the Cluster</span>

The `kubectl` command-line tool uses kubeconfig files to find the information it needs to choose a cluster and communicate with the API server of a cluster.

### <span style={{ color: '#003366' }}>Download kubectl Tool</span>

Download the `kubectl` binary matching your cluster's Kubernetes version (v1.27.3):

- **Linux**: [Download](https://storage.googleapis.com/kubernetes-release/release/v1.27.3/bin/linux/amd64/kubectl)
- **macOS**: [Download](https://storage.googleapis.com/kubernetes-release/release/v1.27.3/bin/darwin/amd64/kubectl)
- **Windows**: [Download](https://storage.googleapis.com/kubernetes-release/release/v1.27.3/bin/windows/amd64/kubectl.exe)

### <span style={{ color: '#003366' }}>Use kubectl With Your Kubeconfig File</span>

You can now run `kubectl` commands using your downloaded kubeconfig file.

```bash
kubectl --kubeconfig /custom/path/kube.conf {COMMAND}
```

- **List Pods:**

```bash
kubectl --kubeconfig /custom/path/kube.conf get pods --all-namespaces
```

- **List Nodes:**

```bash
kubectl --kubeconfig /custom/path/kube.conf get nodes --all-namespaces
```

- **List Services:**

```bash
kubectl --kubeconfig /custom/path/kube.conf get services --all-namespaces
```
-------

### <span style={{ color: '#003366' }}>Conclusion</span>

By following this guide, you can set up and use the `kubectl` CLI to manage your Kubernetes clusters via the Stack Console. This method provides a powerful and flexible way to interact with cluster resources directly from your terminal. 

:::tip
**See also:**  
- **[Create Kubernetes Cluster](./Create%20Kubernetes%20Cluster.md)**
- **[Manage Kubernetes Cluster](./Kubernetes%20Cluster%20Overview.md)**
- **[Kubernetes Cluster UI Access](./Kubernetes%20Dashboard%20UI%20Access.md)**
:::

