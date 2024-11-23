import React, { useEffect, useState } from "react";

// Dashboard component to display security alerts and initiate scans
const Dashboard = () => {
    const [alerts, setAlerts] = useState([]);
    const [url, setUrl] = useState("");
    const [loading, setLoading] = useState(false);

    // Fetch alerts on component mount
    useEffect(() => {
        fetch("/api/security/alerts")
            .then((response) => response.json())
            .then((data) => setAlerts(data))
            .catch((error) => console.error("Error fetching alerts:", error));
    }, []);

    // Trigger a scan on a specified URL
    const handleScan = () => {
        setLoading(true);
        fetch("/api/security/scan", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url }),
        })
            .then((response) => response.json())
            .then((data) => {
                setLoading(false);
                alert(data.success ? "Scan completed!" : data.message);
            })
            .catch((error) => {
                setLoading(false);
                console.error("Error performing scan:", error);
            });
    };

    return (
        <div>
            <h1>Security Monitoring Dashboard</h1>
            <input
                type="text"
                placeholder="Enter URL to scan"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
            />
            <button onClick={handleScan} disabled={loading}>
                {loading ? "Scanning..." : "Start Scan"}
            </button>
            <h2>Alerts</h2>
            <ul>
                {alerts.map((alert, index) => (
                    <li key={index}>
                        <strong>{alert.type}:</strong> {alert.message}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
