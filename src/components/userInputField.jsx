import React from "react";

export default function UserInputField(props) {
  return (
    <div>
      <p>
        Choose a move and then press battle to attack once. Move 1 has a better
        chance of landing. Move 2 does more damage
      </p>
      <button onClick={props.attackInOrder}>Battle</button>
    </div>
  );
}
