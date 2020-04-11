class Pokemon {
  constructor(name, type, weakness, moveName1, moveName2, img, id) {
    this.name = name;
    this.img = img;
    this.hp = 175;
    this.id = id;
    this.type = {
      type: type,
      weakness: weakness
    };
    this.moves = {
      move1: {
        name: moveName1,
        damage: 40,
        type: type
      },
      move2: {
        name: moveName2,
        damage: 60,
        type: type
      }
    };
  }

  getMoves() {
    for (let i = 0; i < this.moves.length; i++) {
      console.log(this.moves[i].name);
      console.log(this.moves[i].damage);
    }
  }
}

export default Pokemon;
