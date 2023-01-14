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
    addTodo = (e) => {
        e.preventDefault();
        const { todoTitle, todos } = this.state;

        if (todoTitle) {
            const newTodo = {
                id: todos.length + 1,
                title: todoTitle,
                completed: false,
            };

            this.setState({
                todos: [...todos, newTodo],
                todoTitle: "",
            });
        }
    };
    removeTodo = (todoId) => {
        const mainTodos = this.state.todos;
        const filterTodo = mainTodos.filter((todo) => todo.id !== todoId);
        this.setState({
            todos: filterTodo,
        });
    };
    editTodo = (todoId) => {
        const newTodos = [...this.state.todos];
        newTodos.forEach((todo) => {
            if (todo.id === todoId) {
                todo.completed = !todo.completed;
            }
        });

        this.setState({
            todos: newTodos,
        });
    };
    statusHandler = (event) => {
        this.setState({
            status: event.target.value,
        });
    };

    todoTitleHandler(evt, field) {
        this.setState({ [field]: evt.target.value });
    }

    render() {
        const { todos, todoTitle } = this.state;
        return (
            <>
                <Header />
                <form onSubmit={this.addTodo}>
                    <input
                        type="text"
                        value={todoTitle}
                        className="todo-input"
                        maxLength="40"
                        onChange={(event) =>
                            this.todoTitleHandler(event, "todoTitle")
                        }
                    />
                    <button className="todo-button" type="submit">
                        <i className="fas fa-plus-square"></i>
                    </button>
                    <div className="select">
                        <select
                            name="todos"
                            className="filter-todo"
                            onChange={this.statusHandler}
                        >
                            <option value="all">All</option>
                            <option value="completed">Completed</option>
                            <option value="uncompleted">Uncompleted</option>
                        </select>
                    </div>
                </form>

                <div className="todo-container">
                    <ul className="todo-list">
                        {this.state.status === "completed" &&
                            this.state.todos
                                .filter((todo) => todo.completed)
                                .map((todo) => (
                                    <Todo
                                        key={todo.id}
                                        {...todo}
                                        onRemove={this.removeTodo}
                                        onEdit={this.editTodo}
                                    />
                                ))}

                        {this.state.status === "uncompleted" &&
                            this.state.todos
                                .filter((todo) => !todo.completed)
                                .map((todo) => (
                                    <Todo
                                        key={todo.id}
                                        {...todo}
                                        onRemove={this.removeTodo}
                                        onEdit={this.editTodo}
                                    />
                                ))}

                        {this.state.status === "all" &&
                            this.state.todos.map((todo) => (
                                <Todo
                                    key={todo.id}
                                    {...todo}
                                    onRemove={this.removeTodo}
                                    onEdit={this.editTodo}
                                />
                            ))}
                    </ul>
                </div>
            </>
        );
    }
}
