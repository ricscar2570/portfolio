import React from "react";
import Dashboard from "../components/Dashboard";

// HomePage combines the Dashboard component
const HomePage = () => {
    return (
        <div>
            <h1>Welcome to Security Monitoring System</h1>
            <Dashboard />
        </div>
    );
};

export default HomePage;
