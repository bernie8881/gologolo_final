import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { Link } from "react-router-dom";
import TextEditWorkspace from "./TextEditWorkspace.js";

const ADD_LOGO = gql`
    mutation AddLogo(
        $text: String!
        $color: String!
        $fontSize: Int!
        $backgroundColor: String!
        $borderColor: String!
        $borderRadius: Int!
        $borderWidth: Int!
        $padding: Int!
        $margin: Int!
    ) {
        addLogo(
            text: $text
            color: $color
            backgroundColor: $backgroundColor
            borderColor: $borderColor
            borderRadius: $borderRadius
            borderWidth: $borderWidth
            padding: $padding
            margin: $margin
            fontSize: $fontSize
        ) {
            _id
        }
    }
`;

class CreateLogoScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "GologoLo",
            color: "#33df20",
            fontSize: 20,
            backgroundColor: "#227d69",
            borderColor: "#ffff66",
            borderRadius: 2,
            borderWidth: 2,
            padding: 2,
            margin: 2,
        };
    }

    handleEditLogoText = (event) => {
        console.log("handleEditLogoText to " + event.target.value);
        this.setState({ text: event.target.value });
    };

    handleColorChange = (event) => {
        console.log("handleColorChange to " + event.target.value);
        this.setState({ color: event.target.value });
    };

    handleBackgroundColorChange = (event) => {
        console.log("handleBackgroundColorChange to " + event.target.value);
        this.setState({ backgroundColor: event.target.value });
    };

    handleBorderColorChange = (event) => {
        console.log("handleBorderColorChange to " + event.target.value);
        this.setState({ borderColor: event.target.value });
    };

    handleBorderRadiusChange = (event) => {
        console.log("handleBorderRadiusChange to " + event.target.value);
        this.setState({ borderRadius: event.target.value });
    };

    handleBorderWidthChange = (event) => {
        console.log("handleBorderWidthChange to " + event.target.value);
        this.setState({ borderWidth: event.target.value });
    };

    handlePaddingChange = (event) => {
        console.log("handlePaddingChange to " + event.target.value);
        this.setState({ padding: event.target.value });
    };

    handleMarginChange = (event) => {
        console.log("handleMarginChange to " + event.target.value);
        this.setState({ margin: event.target.value });
    };

    handleFontSizeChange = (event) => {
        console.log("handleFontSizeChange to " + event.target.value);
        this.setState({ fontSize: event.target.value });
    };

    confirmEditLogoText = () => {
        if (/\S/.test(this.state.text)) {
            // string is not empty and not just whitespace

            console.log("confirmEditLogoText to " + this.state.text);
            //this.setState({ text: this.state.text}, this.completeUserEditing);
            return true;
        } else {
            console.log("Textfield may not be empty!");
            return false;
        }
    };

    render() {
        let text, color, fontSize, backgroundColor, borderColor, borderRadius, borderWidth, padding, margin;
        return (
            <Mutation mutation={ADD_LOGO} onCompleted={() => this.props.history.push("/")}>
                {(addLogo, { loading, error }) => (
                    <div className="container">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <button>
                                    <Link to="/">Home</Link>
                                </button>
                                <h3 className="panel-title">Create Logo</h3>
                            </div>
                            <div className="row">
                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        if (this.confirmEditLogoText()) {
                                            addLogo({
                                                variables: {
                                                    text: this.state.text,
                                                    color: this.state.color,
                                                    fontSize: parseInt(this.state.fontSize),
                                                    backgroundColor: this.state.backgroundColor,
                                                    borderColor: this.state.borderColor,
                                                    borderRadius: parseInt(this.state.borderRadius),
                                                    borderWidth: parseInt(this.state.borderWidth),
                                                    padding: parseInt(this.state.padding),
                                                    margin: parseInt(this.state.margin),
                                                },
                                            });
                                        }
                                        // text.value = "";
                                        // color.value = "";
                                        // fontSize.value = "";
                                        // backgroundColor.value = "";
                                        // borderColor.value = "";
                                        // borderRadius.value = "";
                                        // borderWidth.value = "";
                                        // padding.value = "";
                                        // margin.value = "";
                                    }}
                                >
                                    <div className="form-group">
                                        <label htmlFor="text">Text:</label>
                                        <input type="text" className="form-control" name="text" onChange={this.handleEditLogoText} value={this.state.text} />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="color">Color:</label>
                                        <input type="color" className="form-control" name="color" onChange={this.handleColorChange} value={this.state.color} />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="fontSize">Font Size:</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="fontSize"
                                            min="1"
                                            max="100"
                                            onChange={this.handleFontSizeChange}
                                            value={this.state.fontSize}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="backgroundColor">Background Color:</label>
                                        <input
                                            type="color"
                                            className="form-control"
                                            name="backgroundColor"
                                            onChange={this.handleBackgroundColorChange}
                                            value={this.state.backgroundColor}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="borderColor">Border Color:</label>
                                        <input
                                            type="color"
                                            className="form-control"
                                            name="borderColor"
                                            onChange={this.handleBorderColorChange}
                                            value={this.state.borderColor}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="borderRadius">Border Radius:</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="borderRadius"
                                            min="0"
                                            max="1000"
                                            onChange={this.handleBorderRadiusChange}
                                            value={this.state.borderRadius}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="borderWidth">Border Width:</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="borderWidth"
                                            min="0"
                                            max="1000"
                                            onChange={this.handleBorderWidthChange}
                                            value={this.state.borderWidth}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="padding">Padding:</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="padding"
                                            min="0"
                                            max="100"
                                            onChange={this.handlePaddingChange}
                                            value={this.state.padding}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="margin">Margin:</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="margin"
                                            min="0"
                                            max="100"
                                            onChange={this.handleMarginChange}
                                            value={this.state.margin}
                                        />
                                    </div>

                                    <button type="submit" className="btn btn-success">
                                        Submit
                                    </button>
                                    {loading && <p>Loading...</p>}
                                    {error && <p>Error :( Please try again</p>}
                                </form>

                                <TextEditWorkspace logo={this.state} />
                            </div>
                        </div>
                    </div>
                )}
            </Mutation>
        );
    }
}

export default CreateLogoScreen;
