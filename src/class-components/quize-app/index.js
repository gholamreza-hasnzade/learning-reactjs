import React, { Component } from "react";

import "./quize.css";
class GuizeApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            questions: [
                {
                    questionText: "What is the capital of France?",
                    answerOptions: [
                        { answerText: "New York", isCorrect: false },
                        { answerText: "London", isCorrect: false },
                        { answerText: "Paris", isCorrect: true },
                        { answerText: "Dublin", isCorrect: false },
                    ],
                },
                {
                    questionText: "Who is CEO of Tesla?",
                    answerOptions: [
                        { answerText: "Jeff Bezos", isCorrect: false },
                        { answerText: "Elon Musk", isCorrect: true },
                        { answerText: "Bill Gates", isCorrect: false },
                        { answerText: "Tony Stark", isCorrect: false },
                    ],
                },
                {
                    questionText: "The iPhone was created by which company?",
                    answerOptions: [
                        { answerText: "Apple", isCorrect: true },
                        { answerText: "Intel", isCorrect: false },
                        { answerText: "Amazon", isCorrect: false },
                        { answerText: "Microsoft", isCorrect: false },
                    ],
                },
                {
                    questionText: "How many Harry Potter books are there?",
                    answerOptions: [
                        { answerText: "1", isCorrect: false },
                        { answerText: "4", isCorrect: false },
                        { answerText: "6", isCorrect: false },
                        { answerText: "7", isCorrect: true },
                    ],
                },
            ],
            currentQuestion: 0,
            showScore: false,
            score: 0,
        };
    }
    handlerClick = (isCorrect) => {
        const { currentQuestion } = this.state;
        if (isCorrect) {
            this.setState((prevState) => {
                return {
                    score: prevState.score + 1,
                };
            });
        }
        if (currentQuestion === 3) {
            this.setState({ showScore: true });
        }
        this.setState((prevState) => {
            return {
                currentQuestion: prevState.currentQuestion + 1,
            };
        });
    };
    render() {
        const { questions, showScore, currentQuestion, score } = this.state;
        return (
            <div className="app">
                {/* next div is for showing user score */}
                {showScore ? (
                    <div className="score-section">
                        You scored {score} out of {questions.length}
                    </div>
                ) : (
                    <>
                        <div className="question-section">
                            <div className="question-count">
                                <span>Question {currentQuestion}</span>/{" "}
                                {questions.length}
                            </div>
                            <div className="question-text">
                                {questions[currentQuestion].questionText}
                            </div>
                        </div>

                        <div className="answer-section">
                            {questions[currentQuestion].answerOptions.map(
                                (question) => (
                                    <button
                                        key={question.answerText}
                                        onClick={() =>
                                            this.handlerClick(
                                                question.isCorrect
                                            )
                                        }
                                    >
                                        {question.answerText}
                                    </button>
                                )
                            )}
                        </div>
                    </>
                )}
            </div>
        );
    }
}

export default GuizeApp;
