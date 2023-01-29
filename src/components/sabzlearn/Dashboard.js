import React from "react";
import { isLogin } from "./utils";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
    const isUserLogin = isLogin("Reza");
    return (
        <div>
            {isUserLogin ? (
                <h1 style={{ textAlign: "center" }}>Dashboard</h1>
            ) : (
                <Navigate to="/login" />
            )}
        </div>
    );
};

export default Dashboard;
