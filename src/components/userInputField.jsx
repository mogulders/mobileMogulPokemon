import React from "react";
import { useState } from "react";

export default function UserInputField(props) {
    const [
        noSelectedMoveButtonMessage,
        setNoSelectedMoveButtonMessage
    ] = useState("");
    let isMoveSelected = props.userMove === "" ? false : true;
    return (
        <div>
            <p>
                Choose a move and then press battle to attack once. Move 1 has a
                better chance of landing. Move 2 does more damage
            </p>

            <button
                onClick={() => {
                    if (isMoveSelected) {
                        props.attackInOrder();
                    } else {
                        setNoSelectedMoveButtonMessage(
                            "You must select a move before attacking"
                        );
                        return;
                    }
                }}
            >
                Battle
            </button>
            {isMoveSelected ? null : <p>{noSelectedMoveButtonMessage}</p>}
        </div>
    );
}
