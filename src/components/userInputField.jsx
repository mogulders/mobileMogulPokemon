import React from "react";

export default function UserInputField(props) {
  return (
    <div>
      <p>{props.details}</p>
      <button onClick={props.battle}>Battle</button>
    </div>
  );
}
