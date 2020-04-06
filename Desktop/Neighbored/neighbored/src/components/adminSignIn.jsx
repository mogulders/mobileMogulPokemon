import React, { Component } from "react";
import logo from "../images/neighboredThumbnail.png";
import TextField from "./textField";

class AdminSignIn extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);

    this.styles = {
      height: "500px",
      width: "500px",
      backgroundImage: "url(" + logo + ")"
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div style={this.styles}>
        <h1>{this.state.username}</h1>
        <div>
          <TextField id="outlined-basic" label="UserName" variant="outlined" />
          <h1>{this.state.password}</h1>
          <TextField id="outlined-basic" label="Password" variant="outlined" />
        </div>
      </div>
    );
  }
}

export default AdminSignIn;
