
import React, { useEffect, useState } from 'react';
import api from '../api';

function Dashboard() {
    const [resources, setResources] = useState([]);

    useEffect(() => {
        const fetchResources = async () => {
            const response = await api.get('/resources');
            setResources(response.data);
        };
        fetchResources();
    }, []);

    return (
        <div>
            <h2>Dashboard</h2>
            <ul>
                {resources.map((resource, index) => (
                    <li key={index}>{resource.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Dashboard;
