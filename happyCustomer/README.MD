# **Happy Customer!**

**Happy Customer!** is a CRM system designed to help businesses improve customer interactions, streamline sales and support processes, and automate marketing tasks. With a simple and intuitive interface, **Happy Customer!** provides powerful tools to manage clients, track sales opportunities, and handle support tickets efficiently.

---

## 🎯 **Learning Objectives**

1. Understand how to develop a modern CRM system using a full-stack approach.
2. Learn to implement secure authentication with JSON Web Tokens (JWT).
3. Gain insights into creating responsive and user-friendly interfaces with React and Material-UI.
4. Master the integration of MongoDB for managing customer and sales data.
5. Apply Docker for containerization and deployment of backend and database services.
6. Explore CI/CD automation using GitHub Actions.
7. Utilize libraries like Chart.js and Recharts for building interactive dashboards.
8. Learn best practices in API security and optimization using Helmet and Express Rate Limit.

---

## 🚀 **Key Features**

- **Contact Management**: Easily view and update customer details.  
- **Sales Opportunity Tracking**: Monitor the status of sales opportunities with a visual pipeline.  
- **Marketing Automation**: Create marketing campaigns and send automated emails to customers.  
- **Support Ticket Management**: Quickly respond to customer inquiries to enhance service quality.  
- **Reporting and Dashboards**: Access key metrics and analyze sales and marketing performance.  
- **Secure Authentication**: Safeguard access using JSON Web Tokens (JWT).  
- **Modern and Responsive UI**: A responsive interface built with Material-UI and Redux.  

---

## 🛠️ **Technologies Used**

- **Frontend**: React, Redux, Redux Toolkit, React Router, Material-UI  
- **Backend**: Node.js, Express.js, Mongoose  
- **Database**: MongoDB  
- **Authentication**: JSON Web Tokens (JWT)  
- **Security**: Helmet, Express Rate Limit  
- **Deployment**: Docker, Heroku, Netlify  

---

## 🚀 **Installation and Setup**

### **Prerequisites**

Ensure the following tools are installed:
- [Node.js](https://nodejs.org/)  
- [MongoDB](https://www.mongodb.com/)  
- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) (optional but recommended)  

### **Environment Variables Configuration**

Create a `.env` file in the `server` directory and include the following variables:
```plaintext
MONGO_URI=mongodb://localhost:27017/happy-customer
JWT_SECRET=your_jwt_secret

Steps to Run

    Clone the repository:

git clone https://github.com/your-username/happy-customer-crm.git
cd happy-customer-crm

Install dependencies:

    Backend:

cd server
npm install

Frontend:

    cd ../client
    npm install

Start the application:

    Using Docker Compose (Recommended):

docker-compose up

This will launch both the backend and MongoDB in Docker containers. The server will be available at http://localhost:5000.

Without Docker:

    Start MongoDB locally.
    Run the backend:

cd server
npm start

Run the frontend:

            cd ../client
            npm start

            The frontend will be available at http://localhost:3000.

📋 API Endpoints

The API is structured to handle authentication, customer management, and sales opportunities.
Authentication

    POST /api/auth/register: Register a new user.
    POST /api/auth/login: Authenticate a user and return a JWT.

Customers

    GET /api/customers: Retrieve all customers for the authenticated user.
    POST /api/customers: Create a new customer.
    PUT /api/customers/:id: Update customer details.
    DELETE /api/customers/:id: Delete a customer.

🧪 Testing and CI/CD
Docker and Testing

The project includes Docker configurations. Using docker-compose up will run the server and MongoDB in isolated containers.
GitHub Actions

The repository features a CI/CD pipeline using GitHub Actions for testing and deployment. Each push to the main branch triggers a workflow for deployment to Heroku (configurable in .github/workflows/deploy.yml).
📈 Advanced Features

    Dashboards and Reports: View KPIs and sales metrics through interactive charts using libraries like Chart.js and Recharts.
    Marketing Automation: Automatically send emails to customers based on segmentation (e.g., new customers, inactive customers).
    API Protection: Includes rate limiting and security middleware with Helmet and Express Rate Limit.

🐳 Deployment

The application is deployment-ready for Heroku and Netlify. Follow the docker-compose configuration steps to deploy both the backend and MongoDB easily.
Heroku and Netlify

    Install Heroku CLI and Netlify CLI.
    Configure environment variables on Heroku for MongoDB and JWT.
    Deploy the frontend to Netlify for an optimized and scalable distribution.

🤝 Contributing

Contributions are welcome! If you’d like to add new features or improve existing code, feel free to submit a pull request.
📄 License

Distributed under the MIT License. See the LICENSE file for more details.
📝 Author

Created by Riccardo Scaringi.

Thank you for using Happy Customer!. If you have any questions or suggestions, don’t hesitate to reach out!
