// API services for frontend to interact with backend

const BASE_URL = "/api/security";

export const fetchAlerts = async () => {
    const response = await fetch(`${BASE_URL}/alerts`);
    if (!response.ok) throw new Error("Failed to fetch alerts.");
    return response.json();
};

export const performScan = async (url) => {
    const response = await fetch(`${BASE_URL}/scan`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
    });
    if (!response.ok) throw new Error("Failed to perform scan.");
    return response.json();
};
