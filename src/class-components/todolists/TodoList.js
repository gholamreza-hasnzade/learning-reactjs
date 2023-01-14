import React, { Component } from "react";
import Header from "./Header";
import Todo from "./Todo";

import "./App.css";
export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            todoTitle: "",
            status: "all",
        };
    }
    addTodo = () => {};
    removeTodo = () => {};
    editTodo = () => {};
    todoTitleHandler = () => {};
    statusHandler = () => {};

    render() {
        const { todos } = this.state;
        return (
            <>
                <Header />
                <form>
                    <input type="text" className="todo-input" maxLength="40" />
                    <button className="todo-button" type="submit">
                        <i className="fas fa-plus-square"></i>
                    </button>
                    <div className="select">
                        <select name="todos" className="filter-todo">
                            <option value="all">All</option>
                            <option value="completed">Completed</option>
                            <option value="uncompleted">Uncompleted</option>
                        </select>
                    </div>
                </form>

                <div className="todo-container">
                    <ul className="todo-list">
                        {todos.map((todo) => (
                            <Todo key={todo?.id} {...todo} />
                        ))}
                    </ul>
                </div>
            </>
        );
    }
}
