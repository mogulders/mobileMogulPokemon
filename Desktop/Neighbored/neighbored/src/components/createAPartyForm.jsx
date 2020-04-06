import React, { Component } from "react";
import Button from "./button";
import TextField from "./textField";
import MultilineTextFields from "./multiLineText";
import Selector from "./selector";

class CreateAPartyForm extends Component {
  constructor() {
    super();
    this.state = {
      partyTitle: "",
      partyDate: "",
      address: "",
      type: "",
      smallDescription: "",
      fullDescription: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <h2>You are creating an event in ...</h2>
        <form>
          <TextField
            id="outlined-basic"
            label="Party Title"
            variant="outlined"
            onChange={this.handleChange}
            name="partyTitle"
            value={this.state.partyTitle}
          />
          <br></br>

          <TextField
            id="outlined-basic"
            label="Date"
            variant="outlined"
            onChange={this.handleChange}
            name="partyDate"
            value={this.state.partyDate}
          />
          <br></br>

          <TextField
            id="outlined-basic"
            label="Address"
            variant="outlined"
            onChange={this.handleChange}
            name="address"
            value={this.state.address}
          />
          <br></br>

          <Selector></Selector>

          <MultilineTextFields
            name="Small Description"
            onChange={this.handleChange}
            name="smallDescription"
            value={this.state.smallDescription}
          ></MultilineTextFields>
          <br></br>

          <MultilineTextFields
            name="Full Description"
            onChange={this.handleChange}
            name="fullDescription"
            value={this.state.fullDescription}
          ></MultilineTextFields>
          <br></br>

          <Button
            variant="contained"
            color="primary"
            href="#contained-buttons"
            name="Submit"
          ></Button>
        </form>
        {/* {this.state.partyTitle}
        <br></br>
        {this.state.partyDate}
        <br></br>
        {this.state.address}
        <br></br>
        {this.state.type}
        <br></br>
        {this.state.smallDescription}
        <br></br>
        {this.state.fullDescription}
        <br></br> */}
      </div>
    );
  }
}

export default CreateAPartyForm;
