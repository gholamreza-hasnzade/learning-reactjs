import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Courses from "./Courses";

const Sablearn = () => {
    return (
        <>
            <Header />
            <Routes>
                {" "}
                <Route path="/courses" element={<Courses />} />
            </Routes>
        </>
    );
};

export default Sablearn;
