import React from "react";
import pokeball from "../images/pokeball.png";

export default function ComputerPokemonLeft(props) {
  return (
    <div>
      {props.computerDeck.map(pokemon => (
        <img src={pokeball} key={pokemon.id} height="50px" width="auto"></img>
      ))}
    </div>
  );
}
