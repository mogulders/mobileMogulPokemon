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
import MovesMenu from "./components/movesMenu";

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
      userMoveOption1: { name: "name", damage: 0 },
      userMoveOption2: { name: "name", damage: 0 },
      userMove: {},
      computerMove: {},
      activeComputerPokemon: {},
      userName: "",
      userDeck: [],
      user: {},
      mogulMob: [
        (this.mogulBraden = new Player("Mogul Braden", false, BradenIMG, [
          new Pokemon(
            "Charizard",
            "fire",
            "water",
            "Ember",
            "Flamethrower",
            CharizardIMG
          ),
          new Pokemon(
            "Blastoise",
            "water",
            "leaf",
            "Water Gun",
            "Hydro Pump",
            BlastoiseIMG
          )
        ])),
        (this.mogulMeatball = new Player("Mogul Meatball", true, MeatballIMG, [
          new Pokemon(
            "blastoise",
            "water",
            "leaf",
            "Water Gun",
            "Hydro Pump",
            BlastoiseIMG
          ),
          new Pokemon(
            "charizard",
            "fire",
            "water",
            "Ember",
            "Flamethrower",
            CharizardIMG
          )
        ])),
        (this.mogulDers = new Player("Mogul Ders", true, DersIMG, [
          new Pokemon(
            "venusaur",
            " leaf",
            "fire",
            "Razor Leaf",
            "Solar Beam",
            VenusaurIMG
          ),
          new Pokemon(
            "blastoise",
            "water",
            "leaf",
            "Water Gun",
            "Hydro Pump",
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

  componentDidUpdate() {
    if (
      (this.state.userDeck.length >= 6) &
      (this.state.page != SCREENS.BATTLE)
    ) {
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
        details: "Choose one of your Pokemon by clicking on it."
      });
      return;
    }
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
            "Ember",
            "Flamethrower",
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
            "Blastoise",
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
            "Venusaur",
            "leaf",
            "fire",
            "Razor Leaf",
            "Solar Beam",
            VenusaurIMG,
            this.state.userDeck.length
          )
        ]
      });
    } else {
      console.log("that is not a pokemon");
    }
  };

  handleChoosePokemonForBattle = pokemon => {
    this.setState({ activeUserPokemon: pokemon });
    this.computerChoosePokemon();
    this.setState({ details: "Click Battle to attack the computer." });
    this.setState({
      userMoveOption1: pokemon.moves.move1,
      userMoveOption2: pokemon.moves.move2
    });
    this.setState({ details: "Choose a move" });
  };

  computerChoosePokemon = () => {
    let computerPokemon = this.state.activeComputerTrainer.deck[0];
    console.log(computerPokemon);
    this.setState({ activeComputerPokemon: computerPokemon });
  };

  handleMoveSelection = move => {
    this.setState({ userMove: move });
  };

  battle = () => {
    console.log("battling");
    try {
      this.computerChooseMove();
      this.attackInOrder();
      // this.checkFainted();
    } catch {
      console.log("You Must Choose  A Pokemon");
    }
  };

  computerChooseMove = () => {
    this.setState({
      computerMove: this.state.activeComputerPokemon.moves.move2
    });
  };

  computerAttacks = () => {
    let userPokemon = this.state.activeUserPokemon;
    let adjustedPokemon = userPokemon.hp - this.state.computerMove.damage;
    this.setState({ activeUserPokemon: adjustedPokemon });
  };

  userAttacks = () => {
    let computerPokemon = this.state.activeUserPokemon;
    let adjustedPokemon = computerPokemon.hp - this.state.userMove.damage;
    this.setState({ activeComputerPokemon: adjustedPokemon });
  };

  attackInOrder = () => {
    if (
      this.state.activeUserPokemon.type.weakness ===
      this.state.activeComputerPokemon.type.type
    ) {
      console.log("UserPokemon Goes First");
      // this.userAttacks();
      // this.checkFainted();
      // this.computerAttacks();
      // this.checkFainted();
    } else {
      console.log("Computer Pokemon Goes First");
      // this.computerAttacks();
      // this.checkFainted();
      // this.userAttacks();
      // this.checkFainted();
    }
  };

  checkFainted = () => {
    if (this.state.activeUserPokemon.hp <= 0) {
      let userDeck = this.state.user.deck;
      let adjustedDeck = userDeck.forEach(pokemon => {
        if (pokemon.id !== this.state.activeUserPokemon.id) {
          adjustedDeck.push(pokemon);
        }
      });
      // this.setState({user.deck:adjustedDeck})
      return;
    }

    if (this.state.activeComputerPokemon.hp <= 0) {
      let compDeck = this.state.activeComputerTrainer.deck;
      let adjustedDeck = compDeck.shift();
      // this.setState({this.mogulBraden.deck:adjustedDeck})
      return;
    }
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
          <ComputerPokemonHealth
            pokemon={this.state.activeComputerPokemon}
          ></ComputerPokemonHealth>
          <MovesMenu
            move1={this.state.userMoveOption1}
            move2={this.state.userMoveOption2}
            selectMove={this.handleMoveSelection}
          ></MovesMenu>
          <UserBattlefield
            user={this.state.user}
            pokemon={this.state.activeUserPokemon}
          ></UserBattlefield>
          <ComputerBattlefield
            computer={this.state.activeComputerTrainer}
            pokemon={this.state.activeComputerPokemon}
          ></ComputerBattlefield>
          <UserInputField
            details={this.state.details}
            battle={this.battle}
          ></UserInputField>
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
