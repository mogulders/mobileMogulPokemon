import React from "react";

export default function UserBattleField(props) {
  return (
    <div className="userBattlePics">
      <img src={props.user.img} height="250" width="auto" alt="UserIMG"></img>
      <img src={props.pokemon.img} height="250" width="auto"></img>
    </div>
  );
}
