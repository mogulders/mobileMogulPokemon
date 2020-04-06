import React, { Component } from "react";
import PartyCard from "./partyCard";
import { SCREENS } from "../App";

class PartyCardList extends Component {
  render() {
    return (
      <div>
        {this.props.partyList
          .filter(party => {
            if (this.props.partyTypeFilterO[party.type]) {
              return party;
            }
          })
          .filter(party => {
            if (this.props.currentPage === 1) {
              return party.favorited === true;
            } else {
              return party;
            }
          })
          .sort((a, b) => b.partyDate - a.partyDate)
          .map(party => (
            <PartyCard party={party} key={party.title} />
          ))}
      </div>
    );
  }
}

export default PartyCardList;
