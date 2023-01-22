import React from "react";

const Todo = (props) => {
    const { id, title, completed, onRemove, onEdit } = props;
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
};

export default Todo;
