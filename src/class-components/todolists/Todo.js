import React, { Component } from "react";

export default class Todo extends Component {
   
    render() {
        const { id, title, completed, onRemove, onEdit } = this.props;
        return (
            <div
                className={`todo ${completed ? "completed" : ""}`}
                style={{ display: "flex" }}
            >
                <li className="todo-item">{title}</li>

                <button className="check-btn" onClick={() => onEdit(id)}>
                    <i className="fas fa-check" aria-hidden="true"></i>
                </button>

                <button className="trash-btn" onClick={() => onRemove(id)}>
                    <i className="fas fa-trash" aria-hidden="true"></i>
                </button>
            </div>
        );
    }
}
