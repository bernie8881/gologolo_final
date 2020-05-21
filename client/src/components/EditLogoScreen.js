import React, { Component } from "react";
import { Link } from "react-router-dom";
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
            backgroundColor
            borderColor
            borderRadius
            borderWidth
            padding
            width
            height
            margin
        }
    }
`;

const UPDATE_LOGO = gql`
    mutation updateLogo(
        $id: String!
        $text: String!
        $texts: [String]!
        $color: String!
        $fontSize: Int!
        $image: String!
        $backgroundColor: String!
        $borderColor: String!
        $borderRadius: Int!
        $borderWidth: Int!
        $padding: Int!
        $margin: Int!
        $width: Int!
        $height: Int!
    ) {
        updateLogo(
            id: $id
            text: $text
            texts: $texts
            color: $color
            fontSize: $fontSize
            image: $image
            backgroundColor: $backgroundColor
            borderColor: $borderColor
            borderRadius: $borderRadius
            borderWidth: $borderWidth
            padding: $padding
            margin: $margin
            width: $width
            height: $height
        ) {
            lastUpdate
        }
    }
`;

class EditLogoScreen extends Component {
    // Have a original NULL state in class that maintains Logo attributes. And then in Render(), check if state is null or not. If NUll,
    // Then we setState data.logo.<attribute> like hw2.
    // You want original state's attributes to be null so first render check populates the state with the original values.
    // To make logo appear, make another div that has a style that has all the attributes of the state, much like hw2
    constructor(props) {
        super(props);
        this.state = {
            text: "GologoLo",
            texts: [{ text: "GologoLo", color: "#33df20", fontSize: 20 }],
            color: "#33df20",
            fontSize: 20,
            image: "http://www3.cs.stonybrook.edu/~cse316/images/SBUDarkRedShieldLogo.png",
            backgroundColor: "#227d69",
            borderColor: "#ffff66",
            borderRadius: 2,
            borderWidth: 2,
            padding: 2,
            margin: 2,
            width: 200,
            height: 200,
            gotData: false,
        };
    }
    handleAddText = (event) => {
        console.log("Added Text " + event.target.value);
        //append text to array
        //this.setState({ texts: Array.concat(event.target.value) });
    };

    handleEditLogoText = (event) => {
        console.log("State's text was before: " + this.state.text);
        console.log("handleEditLogoText to " + event.target.value);
        console.log("State's text is now: " + this.state.text);
        this.setState({ text: event.target.value });
    };

    handleDeleteText = (event) => {
        console.log("Deleted Text " + event.target.value);
        //append text to array
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

    handleWidthChange = (event) => {
        console.log("handleWidthChange to " + event.target.value);
        this.setState({ width: event.target.value });
    };

    handleHeightChange = (event) => {
        console.log("handleHeightChange to " + event.target.value);
        this.setState({ height: event.target.value });
    };

    handleAddImage = (event) => {
        console.log("Added Image from " + event.target.value);
        //append image to array
        this.setState({ image: event.target.value });
    };

    handleEditImageSize = (event) => {
        console.log("Image resized to " + event.target.value);
        //this.setState({ text: event.target.value });
        this.setState({ image: event.target.value });
    };

    handleDeleteImage = (event) => {
        console.log("Deleted Text " + event.target.value);
        //pop image from array
        this.setState({ image: event.target.value });
    };

    handleOrderUp = (event) => {
        console.log("Moved up " + event.target.value);
    };

    handleOrderDown = (event) => {
        console.log("Moved down " + event.target.value);
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

    checkURL(url) {
        return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
    }
    confirmImage = () => {
        if (this.checkURL(this.state.image)) {
            return true;
        } else {
            return false;
        }
    };

    render() {
        let text, texts, color, fontSize, image, backgroundColor, borderColor, borderRadius, borderWidth, padding, margin, width, height;
        return (
            <Query query={GET_LOGO} variables={{ logoId: this.props.match.params.id }}>
                {({ loading, error, data }) => {
                    if (loading) return "Loading...";
                    if (error) return `Error! ${error.message}`;

                    if (!this.state.gotData) {
                        this.setState({
                            text: data.logo.text,
                            texts: data.logo.texts,
                            color: data.logo.color,
                            fontSize: parseInt(data.logo.fontSize),
                            image: data.logo.image,
                            backgroundColor: data.logo.backgroundColor,
                            borderColor: data.logo.borderColor,
                            borderRadius: parseInt(data.logo.borderRadius),
                            borderWidth: parseInt(data.logo.borderWidth),
                            padding: parseInt(data.logo.padding),
                            margin: parseInt(data.logo.margin),
                            width: parseInt(data.logo.width),
                            height: parseInt(data.logo.height),
                            gotData: true,
                        });
                    }

                    return (
                        <Mutation mutation={UPDATE_LOGO} key={data.logo._id} onCompleted={() => this.props.history.push(`/`)}>
                            {(updateLogo, { loading, error }) => (
                                <div className="container">
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <button>
                                                <Link to="/">Home</Link>
                                            </button>
                                            <button>
                                                <Link to="/login">Log Out</Link>
                                            </button>
                                            <h3 className="panel-title">Edit Logo</h3>
                                        </div>
                                        <div className="row">
                                            <div className="panel-body">
                                                <form
                                                    onSubmit={(e) => {
                                                        e.preventDefault();
                                                        if (this.confirmEditLogoText()) {
                                                            updateLogo({
                                                                variables: {
                                                                    id: data.logo._id,
                                                                    text: this.state.text,
                                                                    texts: this.state.texts,
                                                                    color: this.state.color,
                                                                    fontSize: parseInt(this.state.fontSize),
                                                                    image: this.state.image,
                                                                    backgroundColor: this.state.backgroundColor,
                                                                    borderColor: this.state.borderColor,
                                                                    borderRadius: parseInt(this.state.borderRadius),
                                                                    borderWidth: parseInt(this.state.borderWidth),
                                                                    padding: parseInt(this.state.padding),
                                                                    margin: parseInt(this.state.margin),
                                                                    width: parseInt(this.state.width),
                                                                    height: parseInt(this.state.height),
                                                                },
                                                            });
                                                        }
                                                        // if (this.confirmImage()) {
                                                        //     updateLogo({
                                                        //         variable: {

                                                        //         },
                                                        //     });
                                                        // }
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
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="text"
                                                            onChange={this.handleEditLogoText}
                                                            value={this.state.text}
                                                        />
                                                        <button onClick={this.handleAddText} type="button" className="btn btn-info">
                                                            {" "}
                                                            Add Text
                                                        </button>
                                                        &nbsp;
                                                        <button onClick={this.handleEditLogoText} type="button" className="btn btn-info">
                                                            {" "}
                                                            Edit Text
                                                        </button>
                                                        &nbsp;
                                                        <button onClick={this.handleDeleteText} type="button" className="btn btn-info">
                                                            {" "}
                                                            Remove Text
                                                        </button>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="color">Color:</label>
                                                        <input
                                                            type="color"
                                                            className="form-control"
                                                            name="color"
                                                            onChange={this.handleColorChange}
                                                            value={this.state.color}
                                                        />
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
                                                        <label htmlFor="imageSource">Image Source:</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="imageSource"
                                                            onChange={this.handleAddImage}
                                                            value={this.state.image}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="imageSizeMultiplier">Image Size Multiplier:</label>
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            name="imageSizeMultiplier"
                                                            min="1"
                                                            max="100"
                                                            //onChange={this.handleFontSizeChange}
                                                            //value={this.state.fontSize}
                                                        />
                                                    </div>
                                                    <button onClick={this.handleAddImage} type="button" className="btn btn-info">
                                                        {" "}
                                                        Add Image
                                                    </button>
                                                    &nbsp;
                                                    <button onClick={this.handleDeleteImage} type="button" className="btn btn-info">
                                                        {" "}
                                                        Delete Image
                                                    </button>
                                                    &nbsp;
                                                    <button onClick={this.handleEditImageSize} type="button" className="btn btn-info">
                                                        {" "}
                                                        Edit Image Size
                                                    </button>
                                                    <div className="form-group">
                                                        <label htmlFor="Reordering">Reordering:</label>
                                                        <button onClick={this.handleOrderUp} type="button" className="btn btn-info">
                                                            {" "}
                                                            ↑
                                                        </button>
                                                        &nbsp;
                                                        <button onClick={this.handleOrderDown} type="button" className="btn btn-info">
                                                            {" "}
                                                            ↓
                                                        </button>
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
                                                    <div className="form-group">
                                                        <label htmlFor="width">Logo Width:</label>
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            name="width"
                                                            min="1"
                                                            max="1000"
                                                            onChange={this.handleWidthChange}
                                                            value={this.state.width}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="height">Logo Height:</label>
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            name="height"
                                                            min="1"
                                                            max="1000"
                                                            onChange={this.handleHeightChange}
                                                            value={this.state.height}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <button type="submit" className="btn btn-success">
                                                            Submit
                                                        </button>
                                                    </div>
                                                </form>
                                                {loading && <p>Loading...</p>}
                                                {error && <p>Error :( Please try again</p>}
                                            </div>

                                            <TextEditWorkspace logo={this.state} />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Mutation>
                    );
                }}
            </Query>
        );
    }
}

export default EditLogoScreen;
