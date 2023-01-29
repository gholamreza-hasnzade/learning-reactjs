import React from "react";
import { isLogin } from "./utils";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    const isUserLogin = isLogin("admin");
    return <div> {isUserLogin ? <Outlet /> : <Navigate to="/login" />}</div>;
};

export default PrivateRoute;
