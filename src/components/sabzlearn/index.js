import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Courses from "./Courses";
import About from "./About";
import MainCourse from "./MainCourse";

const Sablearn = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/courses" element={<Courses />} />
                <Route path="/course/:courseID" element={<MainCourse />} />
                <Route path="/about/*" element={<About />}>
                    <Route
                        path="setting"
                        element={<p style={{ textAlign: "center" }}>Setting</p>}
                    />
                    <Route
                        path="dashboard"
                        element={
                            <p style={{ textAlign: "center" }}>Dashboard</p>
                        }
                    />
                </Route>
            </Routes>
        </>
    );
};

export default Sablearn;
