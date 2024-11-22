
import React, { useEffect, useState } from 'react';
import api from '../api';

function CostDashboard() {
    const [costs, setCosts] = useState([]);

    useEffect(() => {
        const fetchCosts = async () => {
            const response = await api.get('/cost/aws');
            setCosts(response.data.ResultsByTime);
        };
        fetchCosts();
    }, []);

    return (
        <div>
            <h2>Cost Dashboard</h2>
            {costs.map((entry) => (
                <div key={entry.TimePeriod.Start}>
                    <p>{entry.TimePeriod.Start}: ${entry.Total.UnblendedCost.Amount}</p>
                </div>
            ))}
        </div>
    );
}

export default CostDashboard;
