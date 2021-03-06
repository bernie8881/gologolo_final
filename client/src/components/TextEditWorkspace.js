import React, { Component } from "react";

// THIS IS HOW WE DISPLAY THE LOGO, IN THIS COMPONENT
class TextEditWorkspace extends Component {
    render() {
        const styles = {
            container: {
                border: "solid",
                //text: this.props.logos.text,
                //texts: this.props.logos.texts,
                color: this.props.logo.color,
                backgroundColor: this.props.logo.backgroundColor,
                borderColor: this.props.logo.borderColor,
                borderRadius: this.props.logo.borderRadius + "px",
                borderWidth: this.props.logo.borderWidth + "px",
                padding: this.props.logo.padding + "px",
                margin: this.props.logo.margin + "px",
                fontSize: this.props.logo.fontSize + "pt",
                width: this.props.logo.width + "px",
                height: this.props.logo.height + "px",
                image: this.props.logo.image,
                imageWidth: this.props.logo.imageWidth,
                imageHeight: this.props.logo.imageHeight,
            },
        };
        return (
            <div className="col s8" style={{ overflow: "auto" }}>
                <div style={styles.container}>{this.props.logo.text}</div>
                <img src={this.props.logo.image} width={this.props.logo.imageWidth} height={this.props.logo.imageHeight}></img>
            </div>
        );
    }
}

export default TextEditWorkspace;
