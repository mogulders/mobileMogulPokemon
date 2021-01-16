import React, { Component } from "react";
import { useState } from "react";

const MovesMenu = (props) => {
    const isMoveSelected = () => {
        if (props.userMove === "") {
            return false;
        } else {
            return true;
        }
    };

    const [isButtonOneActive, setIsButtonOneActive] = useState(false);
    const [isButtonTwoActive, setIsButtonTwoActive] = useState(false);
    let button1Class = isButtonOneActive ? "moveMenu1Active" : "moveMenu1";
    let button2Class = isButtonTwoActive ? "moveMenu2Active" : "moveMenu2";

    return (
        <div>
            <span className={"moveMenu1"}>
                <button
                    className={isMoveSelected ? button1Class : "moveMenu1"}
                    onClick={() => {
                        props.selectMove(props.move1);
                        setIsButtonOneActive(true);
                        setIsButtonTwoActive(false);
                    }}
                >
                    Move 1
                </button>
                <br></br>
                {props.move1.name}
                <br></br>
                {props.move1.damage}
            </span>
            <br></br>
            <span className={"moveMenu2"}>
                <button
                    className={isMoveSelected ? button2Class : "moveMenu2"}
                    onClick={() => {
                        props.selectMove(props.move2);
                        setIsButtonOneActive(false);
                        setIsButtonTwoActive(true);
                    }}
                >
                    Move 2
                </button>
                <br></br>
                {props.move2.name}
                <br></br>
                {props.move2.damage}
            </span>
        </div>
    );
};

export default MovesMenu;
