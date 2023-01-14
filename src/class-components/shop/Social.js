import React, { Component } from "react";
import Youtube_Logo from "./images/Youtube_Logo.png";
export default class Social extends Component {
    render() {
        return (
            <li>
                <a href="sabzlearn.ir" target="_blank">
                    <img src={Youtube_Logo} alt="Youtube_Logo.png" />
                </a>
            </li>
        );
    }
}
