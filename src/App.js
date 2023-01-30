import React from "react";

import {  BrowserRouter } from "react-router-dom";
import Sablearn from "./components/sabzlearn";

const App = () => {
    return (
        <BrowserRouter>
            <Sablearn />
        </BrowserRouter>
    );
};

export default App;
