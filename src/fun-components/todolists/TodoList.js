import React, { useState } from "react";
import Todo from "./Todo";
import Header from "./Header";
import "./App.css";

const TodoList = () => {
    const [todos, seTodos] = useState([]);
    const [todoTitle, setTodoTitle] = useState("");
    const [status, setStatus] = useState("all");

    const addTodo = (e) => {
        e.preventDefault();

        if (todoTitle) {
            const newTodo = {
                id: todos.length + 1,
                title: todoTitle,
                completed: false,
            };

            /*  seTodos({
                todos: [...todos, newTodo],
                todoTitle: "",
            }); */
            seTodos((prevState) => {
                return [...prevState, newTodo];
            });
            setTodoTitle("")
        }
    };
    const removeTodo = () => {

    }
    const editTodo = () => {

    }
    return (
        <>
            <Header />
            <form onSubmit={addTodo}>
                <input
                    type="text"
                    value={todoTitle}
                    name="todoTitle"
                    className="todo-input"
                    maxLength="40"
                    onChange={(e) => setTodoTitle(e.target.value)}
                />
                <button className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select
                        name="todos"
                        className="filter-todo"
                        /*  onChange={this.statusHandler} */
                    >
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>

            <div className="todo-container">
                <ul className="todo-list">
                    {status === "completed" &&
                        todos
                            .filter((todo) => todo.completed)
                            .map((todo) => (
                                <Todo
                                    key={todo.id}
                                    {...todo}
                                    onRemove={removeTodo}
                                    onEdit={editTodo}
                                />
                            ))}

                    {status === "uncompleted" &&
                        todos
                            .filter((todo) => !todo.completed)
                            .map((todo) => (
                                <Todo
                                    key={todo.id}
                                    {...todo}
                                    onRemove={removeTodo}
                                    onEdit={editTodo}
                                />
                            ))}

                    {status === "all" &&
                        todos.map((todo) => (
                            <Todo
                                key={todo.id}
                                {...todo}
                                onRemove={removeTodo}
                                onEdit={editTodo}
                            />
                        ))}
                </ul>
            </div>
        </>
    );
};

export default TodoList;
