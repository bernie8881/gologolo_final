import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const GET_LOGOS = gql`
    {
        logos {
            _id
            text
            lastUpdate
        }
    }
`;

class HomeScreen extends Component {
    sort = (data) => {
        data.logos.sort((a, b) => b.lastUpdate.localeCompare(a.lastUpdate));
    };

    render() {
        return (
            <Query pollInterval={500} query={GET_LOGOS}>
                {({ loading, error, data }) => {
                    if (loading) return "Loading...";
                    if (error) return `Error! ${error.message}`;

                    return (
                        <div className="container row">
                            <div className="col s4">
                                <h3>Recent Work</h3>
                                {this.sort(data)}
                                {data.logos.map((logo, index) => (
                                    <div key={index} className="home_logo_link" style={{ cursor: "pointer" }}>
                                        <Link to={`/view/${logo._id}`}>{logo.text}</Link>
                                    </div>
                                ))}
                            </div>
                            <div className="col s8">
                                <div id="home_banner_container">
                                    GoLogoLo
                                    <br />
                                    List Maker
                                </div>
                                <button>
                                    <Link id="add_logo_button" to="/create">
                                        Add Logo
                                    </Link>
                                </button>
                                <button>
                                    <Link id="log_out_button" to="/login">
                                        Log Out
                                    </Link>
                                </button>
                            </div>
                        </div>
                    );
                }}
            </Query>
        );
    }
}

export default HomeScreen;
