import React from "react";

const BottomDetails = (props) => {
    return (
        <div>
            {props.userMissed === "false" ? null : (
                <p>
                    {props.userMissed
                        ? props.user.name + "'s Pokemon Missed"
                        : props.user.name + "'s Pokemon Hit"}
                </p>
            )}
            {props.computerMissed === "false" ? null : (
                <p>
                    {props.computerMissed
                        ? props.computer.name + "'s Pokemon Missed"
                        : props.computer.name + "'s Pokemon Hit"}
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
