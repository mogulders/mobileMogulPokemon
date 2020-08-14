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
      this.setState({
        page: SCREENS.BATTLE,
        activeUserPokemon: this.state.userDeck[0],
        activeComputerPokemon: this.state.activeComputerTrainer.deck[0],
        userMoveOption1: this.state.userDeck[0].moves.move1,
        userMoveOption2: this.state.userDeck[0].moves.move2
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

  computerChoosePokemon = () => {
    let computerPokemon = this.state.activeComputerTrainer.deck[0];
    console.log(computerPokemon);
    this.setState({ activeComputerPokemon: computerPokemon });
  };

  handleMoveSelection = move => {
    this.setState({ userMove: move });
    this.computerChooseMove();
  };

  computerChooseMove = () => {
    this.setState({
      computerMove: this.state.activeComputerPokemon.moves.move2
    });
  };

  calcDamageMultiplier = (attacker, attacked) => {
    if (attacker.type.type === attacked.type.weakness) {
      return 2;
    } else if (attacker.type.weakness === attacked.type.type) {
      return 0.5;
    } else {
      return 1;
    }
  };

  computerAttacks = (userPokemon, computerPokemon) => {
    console.log("computer Attacks");

    let damageMultiplier = this.calcDamageMultiplier(
      computerPokemon,
      userPokemon
    );
    console.log(damageMultiplier);
    let adjustedPokemonHealth =
      userPokemon.hp - damageMultiplier * this.state.computerMove.damage;
    console.log(adjustedPokemonHealth);
    this.setState({
      activeUserPokemon: {
        ...this.state.activeUserPokemon,
        hp: adjustedPokemonHealth
      }
    });
    return adjustedPokemonHealth;
  };

  userAttacks = (userPokemon, computerPokemon) => {
    console.log("userAttacks");

    let damageMultiplier = this.calcDamageMultiplier(
      userPokemon,
      computerPokemon
    );
    let adjustedPokemonHealth =
      computerPokemon.hp - damageMultiplier * this.state.userMove.damage;
    this.setState({
      activeComputerPokemon: {
        ...this.state.activeComputerPokemon,
        hp: adjustedPokemonHealth
      }
    });
    return adjustedPokemonHealth;
  };

  attackInOrder = () => {
    let userPokemon = this.state.activeUserPokemon;
    let computerPokemon = this.state.activeComputerPokemon;
    if (userPokemon.type.weakness === computerPokemon.type.type) {
      console.log("UserPokemon Goes First");
      let adjustedComputerPokemonHealth = this.userAttacks(
        userPokemon,
        computerPokemon
      );
      let fainted = this.checkFainted(adjustedComputerPokemonHealth);
      console.log("computerPokemonFainted?", fainted);
      if (!fainted) {
        let adjustedUserPokemonHealth = this.computerAttacks(
          userPokemon,
          computerPokemon
        );
        fainted = this.checkFainted(adjustedUserPokemonHealth);
        console.log("userPokemonFainted?", fainted);
        if (fainted) {
          console.log("fainted", adjustedUserPokemonHealth);
        }
      } else {
        return;
      }
    } else {
      console.log("Computer Pokemon Goes First");
      let adjustedUserPokemonHealth = this.computerAttacks(
        userPokemon,
        computerPokemon
      );
      let fainted = this.checkFainted(adjustedUserPokemonHealth);
      console.log("userPokemonFainted?", fainted);
      if (!fainted) {
        let adjustedComputerPokemonHealth = this.userAttacks(
          userPokemon,
          computerPokemon
        );
        fainted = this.checkFainted(adjustedComputerPokemonHealth);
        console.log("computerPokemonFainted?", fainted);
        if (fainted) {
          console.log("fainted", adjustedComputerPokemonHealth);
        }
      } else {
        return;
      }
    }
  };

  checkFainted = health => {
    if (health <= 0) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    return (
      <div className="App">
        <Page page={SCREENS.MAIN} currentPage={this.state.page}>
          <h1 className="playHeader">Mobile Mogul Gym Battle</h1>
          <span className="playButton">
            <a onClick={this.handlePlay} target="_blank" id="playLink">
              Play
            </a>
          </span>
          <br></br>

          <img
            className="playPokemon"
            src={CharizardIMG}
            height="200"
            width="auto"
          ></img>
          <img
            class
            Name="playPokemon"
            src={BlastoiseIMG}
            height="200"
            width="auto"
          ></img>
          <img
            className="playPokemon"
            src={VenusaurIMG}
            height="200"
            width="auto"
          ></img>
        </Page>

        <Page page={SCREENS.NAMESCREEN} currentPage={this.state.page}>
          <p className="welcomingP">
            Welcome to the Mobile Mogul Gym Battle. You will compete agaist the
            founding fathers of Mobile Mogul in a Pokemon Battle. Enter your
            name to start.
          </p>
          <input type="text" id="nameText" placeholder="Name"></input>
          <button onClick={this.handleNameClick}>Next</button>
          <br></br>
          <img src={UserIMG} height="200" width="auto"></img>
        </Page>

        <Page page={SCREENS.CHOOSEPOKEMON} currentPage={this.state.page}>
          <p className="details">{this.state.details}</p>
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
          <div className="battlefield">
            <div className="userBattlefield">
              <UserPokemonLeft
                userDeck={this.state.userDeck}
                choosePokemonForBattle={this.handleChoosePokemonForBattle}
              ></UserPokemonLeft>
              <UserPokemonHealth
                pokemon={this.state.activeUserPokemon}
              ></UserPokemonHealth>
              <UserBattlefield
                user={this.state.user}
                pokemon={this.state.activeUserPokemon}
              ></UserBattlefield>
              <h3>{this.state.user.name}</h3>
            </div>

            <div className="movesMenu">
              <MovesMenu
                move1={this.state.userMoveOption1}
                move2={this.state.userMoveOption2}
                selectMove={this.handleMoveSelection}
              ></MovesMenu>
              <UserInputField
                details={this.state.details}
                attackInOrder={this.attackInOrder}
              ></UserInputField>
            </div>

            <div className="computerBattlefield">
              <ComputerPokemonLeft
                computerDeck={this.state.activeComputerTrainer.deck}
              ></ComputerPokemonLeft>
              <ComputerPokemonHealth
                pokemon={this.state.activeComputerPokemon}
              ></ComputerPokemonHealth>
              <ComputerBattlefield
                computer={this.state.activeComputerTrainer}
                pokemon={this.state.activeComputerPokemon}
              ></ComputerBattlefield>
              <h3>{this.state.activeComputerTrainer.name}</h3>
            </div>
          </div>
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
