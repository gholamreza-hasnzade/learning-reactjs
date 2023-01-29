import React from "react";

import {  BrowserRouter } from "react-router-dom";
import Sablearn from "./components/sabzlearn";
/* import Home from "./components/learn-rrd/Home";
import Contact from "./components/learn-rrd/Contact";
import About from "./components/learn-rrd/About";
import Posts from "./components/learn-rrd/Posts";
import Post from "./components/learn-rrd/Post"; */

const App = () => {
    return (
        <BrowserRouter>
            <Sablearn />
            {/* <Routes>
                  <Route element={<Home />} path="/" />
                <Route element={<Contact />} path="/contact" />
                <Route element={<About />} path="/about" />
                <Route element={<Posts />} path="/posts" />
                <Route element={<Post />} path="/post/:id" />
                <Route element={<h1>404</h1>} path="*" />
            </Routes> */}
        </BrowserRouter>
    );
};

export default App;
