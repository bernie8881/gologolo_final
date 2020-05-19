import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import gql from "graphql-tag";
import { Query } from "react-apollo";

class LoginScreen extends Component {
    render() {
        return (
            <div className="container row">
                <div className="col s4"></div>
                <div className="col s8">
                    <div id="home_banner_container">
                        @todo
                        <br />
                        Login
                    </div>
                    <button>
                        <Link id="add_logo_button" to="/create">
                            Login
                        </Link>
                    </button>
                    <button>
                        <Link id="log_out_button" to="/create">
                            Register
                        </Link>
                    </button>
                </div>
            </div>
        );
    }
}

export default LoginScreen;
