import React, { Component } from "react";
import CityCard from "./cityCard";
import { SCREENS } from "../App";

class CityCardList extends Component {
  render() {
    return (
      <div>
        {this.props.citiesInRadius.map(city => (
          <CityCard
            city={city}
            key={city.cityName}
            handleGoToCityPage={this.props.handleGoToCityPage}
          />
        ))}
      </div>
    );
  }
}

export default CityCardList;
