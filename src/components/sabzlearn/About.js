import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function About() {
    const navigate = useNavigate();
    return (
        <div>
            <h3 style={{ textAlign: "center" }}>Welcome To About Page :))</h3>

            <button
                onClick={() => {
                    navigate("/courses", {
                        replace: false,
                    });
                }}
            >
                ثبت نام در دوره
            </button>

            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <Link to="setting">Setting</Link>

                <Link to="dashboard">Dashboard</Link>
            </div>

            <hr />
            <Outlet />
        </div>
    );
}
