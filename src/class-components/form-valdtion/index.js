import React, { Component } from "react";

import "./Form.css";
class FormValdtion extends Component {
    constructor() {
        super();
        this.state = {
            firstNameData: "",
            lastNameData: "",
            emailData: "",
            submitted: false,
            allValid: false,
        };
    }
    handleChange(evt, field) {
        // check it out: we get the evt.target.name (which will be either "email" or "password")
        // and use it to target the key on our `state` object with the same name, using bracket syntax
        this.setState({ [field]: evt.target.value });
    }
    submitHandler = (e) => {
        e.preventDefault();
        const { firstNameData, lastNameData, emailData } = this.state;
        this.setState({ submitted: true });
        if (
            firstNameData.length !== 0 &&
            lastNameData.length !== 0 &&
            emailData.length !== 0
        ) {
            this.setState({ allValid: true });

            setTimeout(() => {
                this.setState({ allValid: false });
            }, 2000);
        }

        // console.log(this.state.firstNameData, this.state.lastNameData);
    };
    render() {
        const { firstNameData, lastNameData, emailData, submitted, allValid } =
            this.state;
        return (
            <div className="form-container">
                <form
                    className="register-form"
                    onSubmit={this.submitHandler}
                    autoComplete="off"
                >
                    {allValid && (
                        <div className="success-message">
                            Success! Thank you for registering
                        </div>
                    )}

                    <input
                        id="first-name"
                        className="form-field"
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        value={firstNameData}
                        onChange={(event) =>
                            this.handleChange(event, "firstNameData")
                        }
                    />
                    {submitted && firstNameData.length === 0 && (
                        <span id="first-name-error">
                            Please enter a first name
                        </span>
                    )}
                    <input
                        id="last-name"
                        className="form-field"
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        value={lastNameData}
                        onChange={(event) =>
                            this.handleChange(event, "lastNameData")
                        }
                    />
                    {submitted && lastNameData.length === 0 && (
                        <span id="last-name-error">
                            Please enter a last name
                        </span>
                    )}
                    <input
                        id="email"
                        className="form-field"
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={emailData}
                        onChange={(event) =>
                            this.handleChange(event, "emailData")
                        }
                    />
                    {submitted && emailData.length === 0 && (
                        <span id="email-error">
                            Please enter an email address
                        </span>
                    )}
                    <button className="form-field" type="submit">
                        Register
                    </button>
                </form>
            </div>
        );
    }
}

export default FormValdtion;
