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
                {" "}
                <Route path="/courses" element={<Courses />} />
                <Route path="/course/:courseID" element={<MainCourse />} />
                <Route path="/about/*" element={<About />} />
            </Routes>
        </>
    );
};

export default Sablearn;
