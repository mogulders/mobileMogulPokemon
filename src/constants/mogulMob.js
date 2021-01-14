import Player from "../Player";
import Pokemon from "../Pokemon";
import BlastoiseIMG from "../images/Blastoise.png";
import CharizardIMG from "../images/Charizard.png";
import Tyranitar from "../images/Tyranitar_Mega.gif";
import DersPokemon from "../dersPokemon";
import VenusaurIMG from "../images/Venusaur.png";
import BradenIMG from "../images/bradenTrainer.png";
import MeatballIMG from "../images/meatballTrainer.png";
import DersIMG from "../images/zandersTrainer.png";

const mogulBraden = new Player("Mogul Braden", false, BradenIMG, [
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
]);

const mogulMeatball = new Player("Mogul Meatball", true, MeatballIMG, [
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
]);

const mogulDers = new Player("Mogul Ders", true, DersIMG, [
    new DersPokemon("Tyranitar", "Dark", "", "Crunch", "Dark Pulse", Tyranitar)
]);

const mogulMob = [mogulBraden, mogulMeatball, mogulDers];

export default mogulMob;
