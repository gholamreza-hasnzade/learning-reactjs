import React, { Component } from "react";

import "./temp.css";
class Temp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temp: 0,
            tempClass: "cold",
        };
    }
    addToTemp() {
        if (this.state.temp > 30) {
            return false;
        }
        this.setState((prevStat) => {
            return { temp: prevStat.temp + 1 };
        });
        if (this.state.temp >= 15) {
           this.setState({
            tempClass: "hot"
           })
        }
    }
    minusFromTemp() {
        if (this.state.temp <= 0) {
            return false;
        }
        this.setState((prevStat) => {
            return { temp: prevStat.temp - 1 };
        });
        if (this.state.temp <= 15) {
            this.setState({
             tempClass: "cold"
            })
         }
    }
    render() {
        return (
            <div>
                <div className={`box ${this.state.tempClass}`}>
                    {this.state.temp}
                </div>
                <button onClick={this.addToTemp.bind(this)}>add to temp</button>
                <button onClick={this.minusFromTemp.bind(this)}>
                    mines to temp
                </button>
            </div>
        );
    }
}

export default Temp;
