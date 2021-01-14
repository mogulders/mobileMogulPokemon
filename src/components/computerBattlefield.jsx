import React from "react";

export default function ComputerBattlefield(props) {
  return (
    <div className="computerBattlePics">
      <img src={props.pokemon.img} height="250" width="auto"></img>
      <img
        src={props.computer.img}
        height="250"
        width="auto"
        alt="ComputerIMG"
      ></img>
    </div>
  );
}
