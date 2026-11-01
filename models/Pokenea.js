class Pokenea {
  #id;
  #name;
  #height;
  #ability;
  #image;
  #phrase;

  constructor(id, name, height, ability, image, phrase) {
    this.setId(id);
    this.setName(name);
    this.setHeight(height);
    this.setAbility(ability);
    this.setImage(image);
    this.setPhrase(phrase);
  }

  setId(id) {
    this.#id = id;
  }

  setName(name) {
    this.#name = name;
  }

  setHeight(height) {
    this.#height = height;
  }

  setAbility(ability) {
    this.#ability = ability;
  }

  setImage(image) {
    this.#image = image;
  }

  setPhrase(phrase) {
    this.#phrase = phrase;
  }

  getId() {
    return this.#id;
  }

  getName() {
    return this.#name;
  }

  getHeight() {
    return this.#height;
  }

  getAbility() {
    return this.#ability;
  }

  getImage() {
    return this.#image;
  }

  getPhrase() {
    return this.#phrase;
  }
}

module.exports = Pokenea;
