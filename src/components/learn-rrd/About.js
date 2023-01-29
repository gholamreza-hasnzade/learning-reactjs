import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/");
    };
    return (
        <div>
            <h1>About</h1>
            <button onClick={handleClick}>back</button>
        </div>
    );
};

export default About;
