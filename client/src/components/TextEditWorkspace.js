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
            },
        };
        return (
            <div className="col s8" style={{ overflow: "auto" }}>
                <div style={styles.container}>{this.props.logo.text}</div>
            </div>
        );
    }
}

export default TextEditWorkspace;
