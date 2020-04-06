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
        moveName1: moveName1,
        damage: 40
      },
      move2: {
        moveName2: moveName2,
        damage: 60
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