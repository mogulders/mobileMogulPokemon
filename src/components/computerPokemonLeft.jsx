import React from "react";

export default function ComputerPokemonLeft(props) {
  return (
    <div>
      {props.computerDeck.map(pokemon => (
        <img
          src={pokemon.img}
          key={pokemon.id}
          height="50px"
          width="auto"
        ></img>
      ))}
    </div>
  );
}
