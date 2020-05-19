import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import gql from "graphql-tag";
import { Query } from "react-apollo";

class RegisterScreen extends Component {
    render() {
        return (
            <div className="container row">
                <div className="col s4">
                    <div className="form-group">
                        <label htmlFor="text">First Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="firstName"
                            //onChange={this.handleEditLogoText}
                            //value={this.state.text}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="text">Last Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="lastName"
                            //onChange={this.handleEditLogoText}
                            //value={this.state.text}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="text">Email:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="email"
                            //onChange={this.handleEditLogoText}
                            //value={this.state.text}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="text">Password:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="password"
                            //onChange={this.handleEditLogoText}
                            //value={this.state.text}
                        />
                    </div>
                </div>
                <div className="col s8">
                    <div id="home_banner_container">
                        GoLogoLo
                        <br />
                        Register
                    </div>
                    <button>
                        <Link id="register_button" to="/login">
                            Register
                        </Link>
                    </button>
                    <button>
                        <Link id="cancel_button" to="/login">
                            Cancel
                        </Link>
                    </button>
                </div>
            </div>
        );
    }
}

export default RegisterScreen;
