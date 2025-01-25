# That'sAllCloud

**That'sAllCloud** is a cloud resource management platform that empowers users to monitor and manage their resources across AWS, Azure, and Google Cloud Platform (GCP). Designed for simplicity and scalability, it includes secure Google OAuth authentication, real-time monitoring through Prometheus and Grafana, and Kubernetes-based scalable deployments.

---

## Features

**That'sAllCloud** offers a suite of features tailored for modern cloud management:

- **Cloud Resource Management**: Monitor and manage distributed cloud resources across multiple providers.
- **Secure Google OAuth 2.0 Authentication**: Ensure safe and streamlined login with your Google account.
- **Real-Time Monitoring and Metrics**: Collect and visualize resource usage metrics using Prometheus and Grafana.
- **Scalability with Kubernetes**: Benefit from automated instance replication and scalable deployments.
- **Containerization with Docker**: Leverage optimized Docker images for backend services, ensuring portability and performance.

---

## Technology Stack

This platform is built using cutting-edge technologies to deliver reliability, scalability, and ease of use:

- **Frontend**: React.js for a dynamic and responsive user interface.
- **Backend**: Node.js with Express.js and Mongoose for efficient API handling and database operations.
- **Database**: MongoDB for scalable and high-performance data storage.
- **Authentication**: Passport.js with Google OAuth 2.0 for secure user management.
- **Monitoring**: Prometheus for real-time metrics collection and Grafana for interactive visualizations.
- **Deployment**: Docker and Kubernetes for containerized, scalable infrastructure.
- **Infrastructure Automation**: Terraform for seamless cloud resource provisioning.

---

## Getting Started

Follow these steps to set up and run **That'sAllCloud** on your local or cloud environment.

### 1. Clone the Repository

git clone https://github.com/your-username/ThatsAllCloud.git
cd ThatsAllCloud

### 2. Install Dependencies

Navigate to the backend directory and install the required packages:

npm install

### 3. Configure Environment Variables

Create a .env file in the root directory and add the following:

PORT=5000
MONGO_URI=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=http://localhost:5000/auth/google/callback

Replace your_mongodb_connection_string, your_google_client_id, and your_google_client_secret with your credentials.
### 4. Run the Application Locally

Start the backend server:

node server.js

The application will be accessible at: http://localhost:5000.
Docker Deployment
Build the Docker Image

docker build -t thatsallcloud-backend:latest .

Run the Docker Container

docker run -p 5000:5000 thatsallcloud-backend:latest

Kubernetes Deployment

Ensure you have an active Kubernetes cluster and kubectl configured. Then apply the configuration files:

kubectl apply -f k8s/deployment.yaml

Check the status of pods and services:

kubectl get pods
kubectl get services

Real-Time Monitoring with Prometheus and Grafana
Prometheus Configuration

    Create a prometheus folder and add a prometheus.yml file:

global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'backend'
    static_configs:
      - targets: ['localhost:5000']

Run Prometheus:

    docker run -d -p 9090:9090 -v $(pwd)/prometheus/prometheus.yml:/etc/prometheus/prometheus.yml prom/prometheus

Prometheus will be available at: http://localhost:9090.
Grafana Configuration

    Run Grafana:

    docker run -d -p 3000:3000 grafana/grafana

    Access Grafana at: http://localhost:3000 (default credentials: username admin, password admin).

    Add Prometheus as a data source:
        Navigate to Configuration > Data Sources > Add data source.
        Select Prometheus and use http://localhost:9090 as the URL.

    Create dashboards and use queries like node_cpu_seconds_total to monitor metrics.

How to Use

    Authentication: Log in using Google OAuth at http://localhost:5000/auth/google.
    Resource Management: Once logged in, access http://localhost:5000/api/resources to view and manage cloud resources.
    Monitoring: Use Grafana to monitor backend metrics in real time.

Contributing

We welcome contributions to improve That'sAllCloud! To contribute:

    Fork the repository.
    Create a new branch:

    git checkout -b feature/your-feature-name

    Submit a pull request with a detailed description of your changes.

License

This project is licensed under the MIT License.
Why Choose That'sAllCloud?

With its seamless integration of multi-cloud resource management, real-time monitoring, and scalable infrastructure, That'sAllCloud simplifies cloud operations for teams and enterprises. Whether you're optimizing costs, improving resource visibility, or scaling your operations, this platform provides the tools you need to succeed in today’s dynamic cloud ecosystem.

Start managing your cloud resources with confidence today!


Further details:
That'sAllCloud is a cloud resource management platform that enables users to monitor and manage resources across multiple cloud service providers, such as AWS, Azure, and Google Cloud Platform. It consists of a backend developed in Node.js with Express.js, serving as an API server to handle and monitor resources, and a frontend built with React.js, offering a simple and interactive user interface. For deployment and monitoring, it leverages tools such as Docker, Kubernetes, Prometheus, and Grafana.

The software allows users to authenticate using their Google account via OAuth 2.0. This process is managed by the backend, which uses Passport.js to ensure a secure connection. Once authenticated, user details, such as name and email, are stored in a MongoDB database. Users can then authorize the application to connect to their cloud accounts and access data related to resources distributed across the various providers.

On the backend side, the application communicates with AWS services via the Cost Explorer API, with Azure through the Azure Resource Manager, and with Google Cloud Platform using the Google Cloud Resource Manager API. These services enable the collection of information such as resource costs and usage, which are then displayed on the frontend. For each cloud provider, the backend exposes dedicated APIs that are called by the frontend to fetch and display the requested information.

In the frontend, the application features a dashboard that aggregates information about active resources, showing details on costs and resource usage. The dashboard also integrates a monitoring system that uses Prometheus to collect metrics from the backend, such as CPU usage and the number of HTTP requests, and Grafana to visualize these metrics in interactive charts.

From a deployment perspective, the software utilizes Kubernetes to manage containers, ensuring scalability and high availability. Kubernetes handles load balancing and auto-scaling of pods based on demand using a Horizontal Pod Autoscaler configured for the backend. Secure connections are ensured through TLS certificates provided by Let's Encrypt, configured using an Ingress Controller.

For cost optimization, the application allows users to analyze spending data provided by AWS, Azure, and GCP. Additionally, the project includes an example Terraform configuration for the automated provisioning of cloud resources, such as an EC2 virtual machine on AWS.

In summary, That'sAllCloud is designed to simplify multi-cloud resource management, ensure scalability and security, and provide users with complete control over their cloud environments through a unified platform. If you'd like to delve deeper into the functionality of a specific component, I can provide further details.

