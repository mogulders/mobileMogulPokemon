import React, { Component } from "react";
import MidHeadie from "./midHeadie";

class AdminHomePage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>City Name</h1>
        <MidHeadie />
      </div>
    );
  }
}

export default AdminHomePage;
