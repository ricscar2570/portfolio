# CI/CD Pipeline with Monitoring and Alerting 🚀

This project demonstrates a fully automated **Continuous Integration/Continuous Deployment (CI/CD)** pipeline for a web application. It includes robust monitoring and alerting, ensuring seamless application delivery and system health visibility.

By utilizing **Jenkins**, **Docker**, **Kubernetes**, **Prometheus**, and **Grafana**, this project showcases how to streamline the software lifecycle and maintain high performance in a production-ready environment.

---

## 🛠️ Features

- **Automated CI/CD Workflow**: Automated build, test, and deployment using **Jenkins**.
- **Containerized Application**: Using **Docker** for portability and scalability.
- **Kubernetes Orchestration**: Scalable deployment with AWS **Elastic Kubernetes Service (EKS)**.
- **Real-time Monitoring and Alerting**: Application and infrastructure health monitoring via **Prometheus** and **Grafana**.
- **Version Control Integration**: Seamless integration with **GitHub** for repository management.
- **Cloud-Native Hosting**: Deployed on **AWS** for high availability and performance.

---

## 🖥️ Tech Stack

| Technology      | Purpose                                      |
|------------------|----------------------------------------------|
| **Jenkins**      | Continuous Integration and Deployment        |
| **Docker**       | Containerization of the application          |
| **Kubernetes**   | Container orchestration                     |
| **Prometheus**   | Monitoring and alerting                     |
| **Grafana**      | Visualization of metrics and dashboards      |
| **AWS (EKS)**    | Cloud-based Kubernetes hosting              |
| **GitHub**       | Source control and versioning               |

---

## 📋 Prerequisites

1. **Docker** installed on your machine.
2. **Kubernetes cluster** (AWS EKS or local with Minikube).
3. **Jenkins server** (local or cloud-based).
4. **Prometheus and Grafana** set up in the Kubernetes cluster.
5. **AWS CLI** and **kubectl** configured to manage the EKS cluster.

---

## 🏗️ Architecture Diagram - Testuale

L'architettura del progetto segue un flusso strutturato e modulare che automatizza l'integrazione continua, il deployment continuo e il monitoraggio di un'applicazione web:

### 1. Source Code Management (GitHub)
- Gli sviluppatori committano e pushano il codice nel repository GitHub.
- Il repository è configurato con webhook per notificare i trigger degli eventi (es. push o pull request).

### 2. Continuous Integration and Deployment (Jenkins)
- **Pipeline CI/CD**:
  - Quando viene effettuato un push al repository GitHub, Jenkins avvia una pipeline preconfigurata.
  - La pipeline include le seguenti fasi:
    - **Build**: Creazione dell'immagine Docker dell'applicazione.
    - **Test**: Esecuzione di test automatici per validare il codice.
    - **Push**: Pubblicazione dell'immagine su un registry (es. Docker Hub o AWS ECR).
    - **Deploy**: Deploy dell'immagine al cluster Kubernetes.

### 3. Containerization (Docker)
- Il codice applicativo viene containerizzato in un'immagine Docker, rendendolo portabile e scalabile.
- Docker garantisce che l'applicazione funzioni in modo identico in qualsiasi ambiente.

### 4. Orchestration (Kubernetes)
- **Cluster Kubernetes**:
  - La piattaforma Kubernetes, ospitata su AWS EKS, gestisce il deployment dei container.
  - Manifests Kubernetes (Deployment, Service, Namespace) definiscono come il container viene eseguito.
- **Scalabilità**:
  - Kubernetes garantisce la scalabilità automatica dei container in base al carico.
  - Utilizza ReplicaSets per mantenere l'alta disponibilità.

### 5. Monitoring and Alerting (Prometheus e Grafana)
- **Prometheus**:
  - Monitora metriche chiave dell'applicazione e dell'infrastruttura.
  - Configurato con regole di alerting per notificare eventi critici (es. downtime).
- **Grafana**:
  - Visualizza le metriche raccolte in dashboard interattive e personalizzabili.
  - Accessibile tramite port-forwarding o configurazioni avanzate.

### 6. Hosting (AWS EKS)
- **Elastic Kubernetes Service (EKS)**:
  - Gestisce il cluster Kubernetes nel cloud.
  - Offre alta disponibilità e integrazione nativa con altri servizi AWS (es. bilanciamento del carico, IAM).
- **Load Balancer**:
  - Il servizio Kubernetes espone l'applicazione tramite un Load Balancer per gestire il traffico esterno.

---

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/ci-cd-monitoring-pipeline.git
cd ci-cd-monitoring-pipeline

2. Build and Run the Application Locally

    Build the Docker image:

docker build -t web-app:latest application/

Run the application:

    docker run -p 5000:5000 web-app:latest

    Access the application at http://localhost:5000.

3. CI/CD Pipeline with Jenkins

    Set up Jenkins:
        Install required plugins: Docker, Kubernetes, GitHub.

    Create a Pipeline:
        Use the Jenkinsfile provided in the jenkins directory.

    Trigger Builds:
        Commit and push changes to GitHub to start the pipeline.

4. Deploy to Kubernetes

    Set up the cluster:

        Create an AWS EKS cluster:

eksctl create cluster --name ci-cd-pipeline --region us-east-1 --nodegroup-name linux-nodes --node-type t2.micro --nodes 2

Configure kubectl:

    aws eks --region us-east-1 update-kubeconfig --name ci-cd-pipeline

Deploy manifests:

    Apply Kubernetes configurations:

        kubectl apply -f kubernetes/namespace.yaml
        kubectl apply -f kubernetes/deployment.yaml
        kubectl apply -f kubernetes/service.yaml

5. Monitoring with Prometheus and Grafana

    Deploy Prometheus and Grafana:
        Use Helm charts:

    helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
    helm repo update
    helm install prometheus prometheus-community/kube-prometheus-stack --namespace monitoring --create-namespace

Access Grafana:

    Port-forward to access Grafana locally:

        kubectl port-forward service/prometheus-grafana 3000:80 -n monitoring

        Open Grafana at http://localhost:3000. (Default credentials: admin/admin).

    Import Dashboards:
        Use the JSON file monitoring/grafana/dashboards/example-dashboard.json to set up metrics visualization.

    Configure Alerts:
        Use the alerts.yaml file for Prometheus alerting rules.

📈 Monitoring Dashboard Preview

(Add a screenshot of your Grafana dashboard here to illustrate metrics visualization.)
🤝 Contribution

Contributions are welcome! Please fork the repository, create a feature branch, and submit a pull request.
📜 License

This project is licensed under the MIT License. See the LICENSE file for details.
📬 Contact

For questions or support, feel free to reach out via email@example.com.
