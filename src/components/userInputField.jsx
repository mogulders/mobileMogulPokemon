import React from "react";

export default function UserInputField(props) {
    return (
        <div>
            <p>
                Choose a move and then press battle to attack once. Move 1 has a
                better chance of landing. Move 2 does more damage
            </p>
            {props.userMissed === "false" ? null : (
                <p>
                    {props.userMissed
                        ? "User Pokemon Missed"
                        : "User Pokemon Hit"}
                </p>
            )}
            {props.computerMissed === "false" ? null : (
                <p>
                    {props.computerMissed
                        ? "Computer Pokemon Missed"
                        : "Computer Pokemon Hit"}
                </p>
            )}
            {props.faintedPokemon === "" ? (
                <p></p>
            ) : (
                <p>{props.faintedPokemon.name} has fainted.</p>
            )}
            <button onClick={props.attackInOrder}>Battle</button>
        </div>
    );
}
