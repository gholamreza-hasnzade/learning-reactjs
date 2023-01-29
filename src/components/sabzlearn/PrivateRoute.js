import React from "react";
import { isLogin } from "./utils";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const isUserLogin = isLogin("admin");
    return <div> {isUserLogin ? { children } : <Navigate to="/login" />}</div>;
};

export default PrivateRoute;
