import React from "react";

export default function UserInputField(props) {
  return (
    <div>
      <p>{props.details}</p>
      <input type="text"></input>
      <button>Ok</button>
    </div>
  );
}
