import React from "react";
import Image from "react-bootstrap/Image";
import bg from "./bg.png";
const RightSide = () => {
    return (
        <div>
            <Image src={bg} thumbnail style={{ border: "none" }} />
        </div>
    );
};

export default RightSide;
