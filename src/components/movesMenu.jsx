import React, { Component } from "react";

class MovesMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <span className="moveMenu1">
          <button onClick={() => this.props.selectMove(this.props.move1)}>
            Move 1
          </button>
          <br></br>
          {this.props.move1.name}
          <br></br>
          {this.props.move1.damage}
        </span>
        <br></br>
        <span className="moveMenu2">
          <button onClick={() => this.props.selectMove(this.props.move2)}>
            Move 2
          </button>
          <br></br>
          {this.props.move2.name}
          <br></br>
          {this.props.move2.damage}
        </span>
      </div>
    );
  }
}

export default MovesMenu;
