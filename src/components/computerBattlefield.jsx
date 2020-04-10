import React from "react";

export default function ComputerBattlefield(props) {
  return (
    <div>
      <img src={props.pokemon.img} height="350" width="auto"></img>
      <img
        src={props.computer.img}
        height="350"
        width="auto"
        alt="ComputerIMG"
      ></img>
    </div>
  );
}
