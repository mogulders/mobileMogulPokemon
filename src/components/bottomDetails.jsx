import React from "react";

const BottomDetails = (props) => {
    return (
        <div>
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
        </div>
    );
};

export default BottomDetails;
