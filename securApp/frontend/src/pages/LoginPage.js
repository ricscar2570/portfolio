import React from "react";

// LoginPage to redirect users to login endpoint
const LoginPage = () => {
    const handleLogin = () => {
        window.location.href = "/auth/login"; // Redirect to the OAuth login endpoint
    };

    return (
        <div>
            <h1>Login</h1>
            <button onClick={handleLogin}>Login with OAuth</button>
        </div>
    );
};

export default LoginPage;
