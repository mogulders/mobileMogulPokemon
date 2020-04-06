import React, { Component } from "react";
import Player from "./Player";
import Pokemon from "./Pokemon";
import BlastoiseIMG from "./images/Blastoise.png";
import CharizardIMG from "./images/Charizard.png";
import VenusaurIMG from "./images/Venusaur.png";
import BradenIMG from "./images/bradenTrainer.png";
import MeatballIMG from "./images/meatballTrainer.png";
import DersIMG from "./images/zandersTrainer.png";
import UserIMG from "./images/userTrainer.png";
import Badge from "./images/mobileMogulBadge.png";
import UserPokemonLeft from "./components/userPokemonLeft";
import UserPokemonHealth from "./components/userPokemonHealth";
import UserInputField from "./components/userInputField";
import UserBattlefield from "./components/userBattlefield";
import ComputerPokemonLeft from "./components/computerPokemonLeft";
import ComputerPokemonHealth from "./components/computerPokemonHealth";
import ComputerBattlefield from "./components/computerBattlefield";

import "./App.css";

//trying to change this

export const SCREENS = {
  MAIN: 0,
  NAMESCREEN: 1,
  CHOOSEPOKEMON: 2,
  BATTLE: 3,
  WIN: 4,
  LOSE: 5
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: SCREENS.MAIN,
      details: "Choose your 6 Pokemon from the three",
      activeComputerTrainer: {},
      activeUserPokemon: {},
      userName: "",
      userDeck: [],
      user: {},
      mogulMob: [
        (this.mogulBraden = new Player("Mogul Braden", false, BradenIMG, [
          new Pokemon(
            "Charizard",
            "fire",
            "water",
            "ember",
            "flamethrower",
            CharizardIMG
          ),
          new Pokemon(
            "Blastoise",
            "water",
            "leaf",
            "water gun",
            "hydro pump",
            BlastoiseIMG
          )
        ])),
        (this.mogulMeatball = new Player("Mogul Meatball", true, MeatballIMG, [
          new Pokemon(
            "blastoise",
            "water",
            "leaf",
            "water gun",
            "hydro pump",
            BlastoiseIMG
          ),
          new Pokemon(
            "charizard",
            "fire",
            "water",
            "ember",
            "flamethrower",
            CharizardIMG
          )
        ])),
        (this.mogulDers = new Player("Mogul Ders", true, DersIMG, [
          new Pokemon(
            "venusaur",
            " leaf",
            "fire",
            "razor leaf",
            "solar beam",
            VenusaurIMG
          ),
          new Pokemon(
            "blastoise",
            "water",
            "leaf",
            "water gun",
            "hydro pump",
            BlastoiseIMG
          )
        ]))
      ]
    };
  }

  componentDidMount() {
    console.log(this.state.mogulMob);
    this.setState({ activeComputerTrainer: this.state.mogulMob[0] });
  }

  handlePlay = () => {
    this.setState({ page: SCREENS.NAMESCREEN });
  };

  handleNameClick = e => {
    var userName = document.getElementById("nameText").value;
    this.setState({ page: SCREENS.CHOOSEPOKEMON });
    this.setState({ userName: userName });
  };

  handleChoosePokemon = event => {
    if (event.target.name === "charizard") {
      this.setState({
        userDeck: [
          ...this.state.userDeck,
          new Pokemon(
            "Charizard",
            "fire",
            "water",
            "ember",
            "flamethrower",
            CharizardIMG,
            this.state.userDeck.length
          )
        ]
      });
    } else if (event.target.name === "blastoise") {
      this.setState({
        userDeck: [
          ...this.state.userDeck,
          new Pokemon(
            "blastoise",
            "water",
            "leaf",
            "water gun",
            "hydro pump",
            BlastoiseIMG,
            this.state.userDeck.length
          )
        ]
      });
    } else if (event.target.name === "venusaur") {
      this.setState({
        userDeck: [
          ...this.state.userDeck,
          new Pokemon(
            "venusaur",
            "leaf",
            "fire",
            "razor leaf",
            "solar beam",
            VenusaurIMG,
            this.state.userDeck.length
          )
        ]
      });
    } else {
      console.log("that is not a pokemon");
    }
    console.log(this.state.userDeck);
    if (this.state.userDeck.length >= 6) {
      this.setState({
        user: new Player(
          this.state.userName,
          false,
          UserIMG,
          this.state.userDeck
        )
      });
      this.setState({ page: SCREENS.BATTLE });
      this.setState({
        details: "Choose one of your Pokemon by clicking on it"
      });
      return;
    }
  };

  handleChoosePokemonForBattle = event => {
    console.log(event.target);
    this.setState({ activeUserPokemon: event.target.pokemon });
    console.log(this.state.activeUserPokemon);
  };

  render() {
    return (
      <div className="App">
        <Page page={SCREENS.MAIN} currentPage={this.state.page}>
          <h1>Mobile Mogul Pokemon</h1>
          <span id="playButton">
            <a onClick={this.handlePlay} target="_blank" id="playLink">
              Play
            </a>
          </span>
        </Page>

        <Page page={SCREENS.NAMESCREEN} currentPage={this.state.page}>
          <h1>Name Screen</h1>
          <p>
            Welcome to the Mobile Mogul Gym Battle. You will compete agaist the
            founding fathers of Mobile Mogul in a Pokemon Battle. Enter your
            name to start.
          </p>
          <input type="text" id="nameText" placeholder="Name"></input>
          <button onClick={this.handleNameClick}>Next</button>
          <br></br>
          <img src={UserIMG} height="150" width="auto"></img>
        </Page>

        <Page page={SCREENS.CHOOSEPOKEMON} currentPage={this.state.page}>
          <h1>Choose Pokemon Screen</h1>
          {this.state.details}
          <br></br>
          <img
            src={CharizardIMG}
            name="charizard"
            height="100px"
            width="auto"
            onClick={this.handleChoosePokemon}
          ></img>
          <img
            src={BlastoiseIMG}
            name="blastoise"
            height="100px"
            width="auto"
            onClick={this.handleChoosePokemon}
          ></img>
          <img
            src={VenusaurIMG}
            name="venusaur"
            height="100px"
            width="auto"
            onClick={this.handleChoosePokemon}
          ></img>

          <UserPokemonLeft userDeck={this.state.userDeck}></UserPokemonLeft>
        </Page>

        <Page page={SCREENS.BATTLE} currentPage={this.state.page}>
          <h1>Battle Screen</h1>
          <UserPokemonLeft
            userDeck={this.state.userDeck}
            choosePokemonForBattle={this.handleChoosePokemonForBattle}
          ></UserPokemonLeft>
          <UserPokemonHealth
            pokemon={this.state.activeUserPokemon}
          ></UserPokemonHealth>
          <ComputerPokemonLeft
            computerDeck={this.state.activeComputerTrainer.deck}
          ></ComputerPokemonLeft>
          <ComputerPokemonHealth></ComputerPokemonHealth>
          <UserBattlefield user={this.state.user}></UserBattlefield>
          <ComputerBattlefield
            computer={this.state.activeComputerTrainer}
          ></ComputerBattlefield>
          <UserInputField details={this.state.details}></UserInputField>
        </Page>

        <Page page={SCREENS.WIN} currentPage={this.state.page}>
          <h1>Win Screen</h1>
          <img src={Badge}></img>
          <p>
            Congratulations! You have defeated the Mobile Mogul Gym, here is
            your MM Gym Badge!
          </p>
        </Page>

        <Page page={SCREENS.LOSE} currentPage={this.state.page}>
          <h1>Lose Screen</h1>
          <p>You have whited out refresh the screen to try again.</p>
        </Page>
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
