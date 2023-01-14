import React, { Component } from "react";
import Note from "./Note";
import ColorBox from "./ColorBox";
import "./App.css";
export default class NoteApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: [
                "#fff",
                "#FFD37F",
                "#FFFA81",
                "#D5FA80",
                "#78F87F",
                "#79FBD6",
                "#79FDFE",
                "#7AD6FD",
                "#7B84FC",
                "#D687FC",
                "#FF89FD",
            ],
            notes: [],
            noteTitle: "",
            inputColor: "#fff",
        };
    }

    changeBackground = (bgcolod) => {
        const colors = this.state.colors;
        const newBg = colors.find((color) => color === bgcolod);
        this.setState({
            inputColor: newBg,
        });
    };
    addToNote = () => {
        console.log(this.state);
        const { noteTitle, inputColor, notes } = this.state;

        if (noteTitle) {
            const newNote = {
                id: notes.length + 1,
                title: noteTitle,
                color: inputColor,
            };

            this.setState({
                notes: [...notes, newNote],
                noteTitle: "",
                inputColor: "#fff",
            });
        }
    };
    render() {
        const { colors, notes, noteTitle } = this.state;
        return (
            <>
                <div>
                    <section id="home">
                        <div className="container">
                            <div className="header upper">
                                SabzLearn Note App
                            </div>

                            <br />
                            <br />
                            <div className="flex row-gt-sm">
                                <div className="flex flex-50-gt-sm">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto">
                                        <input
                                            id="input-field"
                                            className="form-control"
                                            type="text"
                                            style={{
                                                backgroundColor:
                                                    this.state.inputColor,
                                            }}
                                            value={noteTitle}
                                            placeholder="Something here..."
                                            onChange={(e) =>
                                                this.setState({
                                                    noteTitle: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto">
                                        <div id="color-select">
                                            {colors.map((color, index) => (
                                                <ColorBox
                                                    color={color}
                                                    key={index}
                                                    onBackground={
                                                        this.changeBackground
                                                    }
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto my-1 text-right">
                                        <button
                                            id="btn-save"
                                            type="button"
                                            className="btn btn-outline-info"
                                            onClick={this.addToNote}
                                        >
                                            <span className="fa fa-plus"></span>
                                        </button>
                                        <button
                                            id="btn-delete"
                                            type="button"
                                            className="btn btn-outline-danger"
                                        >
                                            <span
                                                id="btn-icon"
                                                className="fa fa-eraser"
                                            ></span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex row-gt-sm">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                    <div className="container">
                                        <div className="row">
                                            {notes.map((note) => (
                                                <div
                                                    id="listed"
                                                    className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 p-3 card-columns"
                                                    key={note?.id}
                                                >
                                                    <Note {...note} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </>
        );
    }
}
