const Pokenea = require("../models/Pokenea");
const pokeneasData = require("../data/pokeneas");

class PokeneaService {
  #pokeneas;

  constructor() {
    this.#pokeneas = pokeneasData.map(
      ({ id, name, height, ability, image, phrase }) =>
        new Pokenea(id, name, height, ability, image, phrase),
    );
  }

  getRandomPokenea() {
    const randomIndex = Math.floor(Math.random() * this.#pokeneas.length);

    return this.#pokeneas[randomIndex];
  }
}

module.exports = PokeneaService;
