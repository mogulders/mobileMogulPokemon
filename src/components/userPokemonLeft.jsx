import React from "react";

export default function UserPokemonLeft(props) {
  return (
    <div>
      {props.userDeck.map(pokemon => (
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
