import React, { Component } from "react";
import Book from "./Book";

class AddForm extends Component {
    constructor() {
        super();

        this.state = {
            books: [],
            title: "",
            author: "",
            year: "",
        };
    }

    handleClick = (e) => {
        e.preventDefault();
        const { title, author, year } = this.state;
        if (title && author && year) {
            const newBook = {
                id: this.state.books.length + 1,
                title,
                author,
                year,
            };
            this.setState({
                books: [...this.state.books, newBook],
            });

            this.setState({
                title: "",
                author: "",
                year: "",
            });
        }
    };

    handleChange(evt, field) {
        // check it out: we get the evt.target.name (which will be either "email" or "password")
        // and use it to target the key on our `state` object with the same name, using bracket syntax
        this.setState({ [field]: evt.target.value });
    }

    render() {
        const { title, author, year, books } = this.state;
        console.log(books);
        return (
            <>
                <form
                    id="book-form"
                    autoComplete="off"
                    onSubmit={this.handleClick}
                >
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            id="title"
                            className="form-control"
                            value={title}
                            onChange={(event) =>
                                this.handleChange(event, "title")
                            }
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="author">Author</label>
                        <input
                            type="text"
                            id="author"
                            className="form-control"
                            value={author}
                            onChange={(event) =>
                                this.handleChange(event, "author")
                            }
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="year">Year</label>
                        <input
                            type="text"
                            id="year"
                            className="form-control"
                            value={year}
                            onChange={(event) =>
                                this.handleChange(event, "year")
                            }
                        />
                    </div>
                    <input
                        type="submit"
                        value="Add Book"
                        className="btn btn-warning btn-block add-btn w-100 mt-3"
                    />
                </form>
                <table className="table table-striped mt-5 text-center">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody id="book-list">
                        {books.map((book, index) => (
                            <Book key={index} {...book} />
                        ))}
                    </tbody>
                </table>
            </>
        );
    }
}

export default AddForm;
