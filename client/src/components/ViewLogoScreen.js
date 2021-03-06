import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import gql from "graphql-tag";
import { Query, Mutation } from "react-apollo";
import TextEditWorkspace from "./TextEditWorkspace.js";

const GET_LOGO = gql`
    query logo($logoId: String) {
        logo(id: $logoId) {
            _id
            text
            texts
            color
            fontSize
            image
            imageWidth
            imageHeight
            backgroundColor
            borderColor
            borderRadius
            borderWidth
            padding
            margin
            width
            height
            lastUpdate
        }
    }
`;

const DELETE_LOGO = gql`
    mutation removeLogo($id: String!) {
        removeLogo(id: $id) {
            _id
        }
    }
`;

class ViewLogoScreen extends Component {
    exportLogo = (event) => {
        console.log("Export! " + event.target.value);
        // if (window.navigator.msSaveBlob) {
        //     window.navigator.msSaveBlob(event.data.msToBlob(), "logo.png");
        // } else {
        //     const a = document.createElement("a");
        //     document.appendChild(a);
        //     a.href = event.data.toDataURL();
        //     a.download = "logo.png";
        //     a.click();
        // }
    };

    render() {
        return (
            <Query pollInterval={500} query={GET_LOGO} variables={{ logoId: this.props.match.params.id }}>
                {({ loading, error, data }) => {
                    if (loading) return "Loading...";
                    if (error) return `Error! ${error.message}`;

                    return (
                        <div className="container">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <button>
                                        <Link to="/">Home</Link>
                                    </button>
                                    <button>
                                        <Link to="/login">Log Out</Link>
                                    </button>
                                    <h3 className="panel-title">View Logo</h3>
                                </div>
                                <div className="row">
                                    <div className="panel-body">
                                        <dl>
                                            <dt>Text:</dt>
                                            <dd>{data.logo.text}</dd>
                                            <dt>Texts:</dt>
                                            <dd>{data.logo.texts}</dd>
                                            <dt>Color:</dt>
                                            <dd>{data.logo.color}</dd>
                                            <dt>Font Size:</dt>
                                            <dd>{data.logo.fontSize}</dd>
                                            <dt>Image:</dt>
                                            <dd>{data.logo.image}</dd>
                                            <dt>Image Width:</dt>
                                            <dd>{data.logo.imageWidth}</dd>
                                            <dt>Image Height:</dt>
                                            <dd>{data.logo.imageHeight}</dd>
                                            <dt>Background Color:</dt>
                                            <dd>{data.logo.backgroundColor}</dd>
                                            <dt>Border Color:</dt>
                                            <dd>{data.logo.borderColor}</dd>
                                            <dt>Border Radius:</dt>
                                            <dd>{data.logo.borderRadius}</dd>
                                            <dt>Border Width:</dt>
                                            <dd>{data.logo.borderWidth}</dd>
                                            <dt>Padding:</dt>
                                            <dd>{data.logo.padding}</dd>
                                            <dt>Margin:</dt>
                                            <dd>{data.logo.margin}</dd>
                                            <dt>Logo Width:</dt>
                                            <dd>{data.logo.width}</dd>
                                            <dt>Logo Height:</dt>
                                            <dd>{data.logo.height}</dd>
                                            <dt>Last Updated:</dt>
                                            <dd>{data.logo.lastUpdate}</dd>
                                        </dl>
                                        <Mutation mutation={DELETE_LOGO} key={data.logo._id} onCompleted={() => this.props.history.push("/")}>
                                            {(removeLogo, { loading, error }) => (
                                                <div>
                                                    <form
                                                        onSubmit={(e) => {
                                                            e.preventDefault();
                                                            removeLogo({ variables: { id: data.logo._id } });
                                                        }}
                                                    >
                                                        <Link to={`/edit/${data.logo._id}`} className="btn btn-success">
                                                            Edit
                                                        </Link>
                                                        &nbsp;
                                                        <button type="submit" className="btn btn-danger">
                                                            Delete
                                                        </button>
                                                        &nbsp;
                                                        <button onClick={this.exportLogo} type="button" className="btn btn-primary">
                                                            Export
                                                        </button>
                                                    </form>
                                                    {loading && <p>Loading...</p>}
                                                    {error && <p>Error :( Please try again</p>}
                                                </div>
                                            )}
                                        </Mutation>
                                    </div>
                                    <TextEditWorkspace logo={data.logo} />
                                </div>
                            </div>
                        </div>
                    );
                }}
            </Query>
        );
    }
}

export default ViewLogoScreen;
