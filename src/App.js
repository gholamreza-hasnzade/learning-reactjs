import React from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Posts from "./components/Posts";
import Post from "./components/Post";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<Contact />} path="/contact" />
                <Route element={<About />} path="/about" />
                <Route element={<Posts />} path="/posts" />
                <Route element={<Post />} path="/post/:id" />
                <Route element={<h1>404</h1>} path="*" />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
