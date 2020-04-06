import React, { Component } from "react";
import PartyCard from "./partyCard";
import { SCREENS } from "../App";

class CityPartyCardList extends Component {
  render() {
    return (
      <div>
        {this.props.approvedPartyList
          .filter(party => {
            if (this.props.partyTypeFilterO[party.type]) {
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

export default CityPartyCardList;
