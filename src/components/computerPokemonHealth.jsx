import React from "react";

export default function ComputerPokemonHealth(props) {
  return (
    <div>
      <h1>
        {props.pokemon.name}:{props.pokemon.hp}/175
      </h1>
    </div>
  );
}
