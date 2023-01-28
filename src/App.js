import React from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<Contact />} path="/contact" />
                <Route element={<About />} path="/about" />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
