import React, { Component } from "react";
import PartyCardList from "./components/partyCardList";
import Header from "./components/header";
import BottomNavigation from "./components/bottomNav";
import Admin from "./Admin";
import City from "./City";
import Party from "./Party";
import CreateAPartyForm from "./components/createAPartyForm";
import CityPage from "./components/cityPage";
import AdminSignIn from "./components/adminSignIn";
import AdminHomePage from "./components/adminHomePage";
import CityCardList from "./components/cityCardList";
import CityPartyCardList from "./components/cityCardList";
import "./App.css";

export const SCREENS = {
  MAIN: 0,
  FAVORITED: 1,
  CITIESINRADIUS: 2,
  CITYHOMEPAGE: 3,
  CREATEANEVENT: 4,
  ADMINSIGNIN: 5,
  ADMINHOMEPAGE: 6
};

class App extends Component {
  constructor(props) {
    super(props);
    let { lat, long } = this.getLocation();
    this.state = {
      latitude: lat,
      longitude: long,
      radius: 90,
      userAddress: null,
      partyTypeFilterO: {
        city: true,
        school: true,
        business: true
      },
      page: SCREENS.CITIESINRADIUS,
      cityPageCity: {},
      admins: [
        (this.mogulDers = new Admin(
          "mogulDers",
          "sweetermanders",
          "Templeton",
          41.91,
          -94.928
        )),
        (this.shady = new Admin(
          "shady5",
          "slim",
          "Coon Rapids",
          41.871,
          -94.688
        )),
        (this.coleCorson = new Admin(
          "determined11",
          "justTakeIt",
          "Glidden",
          42.096,
          -94.711
        ))
      ],
      citiesInRadius: [
        new City("Coon Rapids"),
        new City("Glidden"),
        new City("Guthrie Center")
      ],
      partyList: [
        new Party(
          "Naked Mile",
          "04/06/20",
          "the Mile Long",
          "school",
          "This is the description for Naked Mile",
          true
        ),
        new Party(
          "Position Fixin",
          "03/07/20",
          "1000 North Ave Des Moines Iowa 50014",
          "business",
          "This is the description for position fixin",
          true
        ),
        new Party(
          "Sloppy Seconds",
          "03/28/20",
          "Algonquin road",
          "city",
          "This is the description for sloppy seconds",
          true
        ),
        new Party(
          "Go Big Red",
          "01/01/1995",
          "Lincoln Nebraska",
          "city",
          "This is the description for Championships",
          false
        ),
        new Party(
          "Shady",
          "04/24/1996",
          "1234 Stagecoach Rd",
          "business",
          "This is the description for Shady's Party",
          false
        )
      ]
    };
  }

  componentDidMount() {
    // this.getLocation();
    this.findCitiesInRadius(this.state.admins);
    this.fillPartyList();
  }

  getLocation = () => {
    if (navigator.geolocation) {
      let coordinates = navigator.geolocation.getCurrentPosition(
        this.getCoordinates
      );
      return coordinates;
    } else {
      alert("Geolocation not found");
    }
  };

  getCoordinates = position => {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
    return { lat: position.coords.latitude, long: position.coords.longitude };
    // this.setState({
    //   latitude: position.coords.latitude,
    //   longitude: position.coords.longitude
    // });
  };

  latLongCalculations = (cityLat, cityLong) => {
    let EARTHRADIUS = 6371;
    let kmToMiles = 0.621371;
    let userLatitude = this.state.latitude;
    let userLongitude = this.state.longitude;
    let userLatRadians = userLatitude * (Math.PI / 180);
    let cityLatRadians = cityLat * (Math.PI / 180);
    let distanceBetweenLAT =
      (cityLatRadians - userLatRadians) * (Math.PI / 180);
    let distanceBetweenLONG = (cityLong - userLongitude) * (Math.PI / 180);
    let a =
      Math.sin(distanceBetweenLAT / 2) * Math.sin(distanceBetweenLAT / 2) +
      Math.cos(userLatRadians) *
        Math.cos(cityLatRadians) *
        Math.sin(distanceBetweenLONG / 2) *
        Math.sin(distanceBetweenLONG / 2);

    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    let d = EARTHRADIUS * c;

    let distanceInMiles = d * kmToMiles;
    console.log(distanceInMiles);
    if (distanceInMiles < this.state.radius) {
      return true;
    }
  };

  findCitiesInRadius = admins => {
    admins.map(admin => {
      let city = admin.city;
      if (this.latLongCalculations(city.latitude, city.longitude)) {
        console.log(this.state.citiesInRadius);
        this.setState({ citiesInRadius: [...this.state.citiesInRadius, city] });
      }
    });
  };

  fillPartyList = () => {
    this.state.citiesInRadius.map(city => {
      let cityApprovedList = city.approvedPartyList;
      this.setState({ partyList: [...this.state.partyList, cityApprovedList] });
    });
  };

  handleTypeFilter = event => {
    const { name } = event.target;
    console.log(event.target);
    console.log(name);
    console.log(this.state.partyTypeFilterO[name]);
    this.setState({ name: !name });
  };

  handleBottomNav = event => {
    this.setState({ page: SCREENS.FAVORITED });
  };

  handleBottomNavCity = event => {
    this.setState({ page: SCREENS.CITIESINRADIUS });
  };

  handleBottomNavHome = event => {
    console.log("Main");
    this.setState({ page: SCREENS.MAIN });
  };

  onSliderChange = event => {
    console.log(this.state.radius);
    this.setState({ radius: event.currentTarget.marks });
    console.log(this.state.radius);
  };

  handleGoToCityPage = event => {
    console.log(event.target.props);
    if (event.target.value === "goToCityPage") {
      this.setState({ page: SCREENS.CITYHOMEPAGE });
      this.setState({ cityPageCity: event.target.city });
    }
  };

  handleCreateAnEvent = event => {
    this.setState({ page: SCREENS.CREATEANEVENT });
  };

  loadPartyList() {
    this.state.citiesInRadius.map(city => {
      city.approvedPartyList.map(party =>
        this.setState({
          partyList: [party]
        })
      );
    });
  }

  render() {
    this.loadPartyList();
    return (
      <div className="App">
        <header className="App-header">
          <h1>Neighbored</h1>
          <p>latitude: {this.state.latitude}</p>
          <p>longitude: {this.state.longitude}</p>

          <Page page={SCREENS.MAIN} currentPage={this.state.page}>
            <h1>Main</h1>
            <Header
              handleTypeFilter={this.handleTypeFilter}
              partyTypeFilterO={this.state.partyTypeFilterO}
            />
            <PartyCardList
              className="partyCardList"
              partyList={this.state.partyList}
              partyTypeFilterO={this.state.partyTypeFilterO}
            />
            <BottomNavigation
              handleBottomNav={this.handleBottomNav}
              radius={this.state.radius}
              handleBottomNavCity={this.handleBottomNavCity}
              handleBottomNavHome={this.handleBottomNavHome}
              onSliderChange={this.onSliderChange}
              activePage={this.state.page}
            />
          </Page>

          <Page page={SCREENS.FAVORITED} currentPage={this.state.page}>
            <h1>Favorited</h1>
            <Header
              handleTypeFilter={this.handleTypeFilter}
              partyTypeFilterO={this.state.partyTypeFilterO}
              className="header"
            />
            <PartyCardList
              partyList={this.state.partyList}
              currentPage={this.state.page}
              favoritePage={SCREENS.FAVORITED}
              partyTypeFilterO={this.state.partyTypeFilterO}
              className="partyCardList"
            />
            <BottomNavigation
              handleBottomNav={this.handleBottomNav}
              radius={this.state.radius}
              handleBottomNavCity={this.handleBottomNavCity}
              handleBottomNavHome={this.handleBottomNavHome}
              onSliderChange={this.onSliderChange}
              activePage={this.state.page}
            />
          </Page>

          <Page page={SCREENS.CITIESINRADIUS} currentPage={this.state.page}>
            <h1>CITIES IN RADIUS</h1>
            <Header
              handleTypeFilter={this.handleTypeFilter}
              partyTypeFilterO={this.state.partyTypeFilterO}
            />
            <CityCardList
              citiesInRadius={this.state.citiesInRadius}
              handleGoToCityPage={this.handleGoToCityPage}
              className="cityCardList"
            ></CityCardList>
            <BottomNavigation
              handleBottomNav={this.handleBottomNav}
              radius={this.state.radius}
              handleBottomNavCity={this.handleBottomNavCity}
              handleBottomNavHome={this.handleBottomNavHome}
              onSliderChange={this.onSliderChange}
              activePage={this.state.page}
            />
          </Page>

          <Page page={SCREENS.CITYHOMEPAGE} currentPage={this.state.page}>
            <CityPage
              handleCreateAnEvent={this.handleCreateAnEvent}
              handleTypeFilter={this.handleTypeFilter}
              partyTypeFilterO={this.state.partyTypeFilterO}
              city={this.state.cityPageCity}
            ></CityPage>
          </Page>

          <Page page={SCREENS.CREATEANEVENT} currentPage={this.state.page}>
            <CreateAPartyForm />
            <BottomNavigation
              handleBottomNav={this.handleBottomNav}
              radius={this.state.radius}
              handleBottomNavCity={this.handleBottomNavCity}
              handleBottomNavHome={this.handleBottomNavHome}
              onSliderChange={this.onSliderChange}
              activePage={this.state.page}
            />
          </Page>

          <Page page={SCREENS.ADMINSIGNIN} currentPage={this.state.page}>
            <AdminSignIn />
            <BottomNavigation
              handleBottomNav={this.handleBottomNav}
              radius={this.state.radius}
              handleBottomNavCity={this.handleBottomNavCity}
              handleBottomNavHome={this.handleBottomNavHome}
              onSliderChange={this.onSliderChange}
              activePage={this.state.page}
            />
          </Page>

          <Page page={SCREENS.ADMINHOMEPAGE} currentPage={this.state.page}>
            <AdminHomePage />
            <BottomNavigation
              handleBottomNav={this.handleBottomNav}
              radius={this.state.radius}
              handleBottomNavCity={this.handleBottomNavCity}
              handleBottomNavHome={this.handleBottomNavHome}
              onSliderChange={this.onSliderChange}
              activePage={this.state.page}
            />
          </Page>
        </header>
      </div>
    );
  }
}

const Page = ({ page, children, currentPage }) => {
  if (page !== currentPage) {
    return null;
  }
  return <div>{children}</div>;
};

export default App;
