import React from "react";
import { isLogin } from "./utils";
import { Navigate } from "react-router-dom";
// Rezastdio5020
const Panel = () => {
    const isUserLogin = isLogin("Reza");
    return (
        <div>
            {isUserLogin ? (
                <h1 style={{ textAlign: "center" }}>Panel</h1>
            ) : (
                <Navigate to="/login" />
            )}
        </div>
    );
};

export default Panel;
