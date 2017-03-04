export default class Game {

  static changNameToKebab(hero) {
    const nameTrimRL = hero.getName().trimLeft().trimRight()
    return nameTrimRL.split(' ').join('-').toLowerCase()
  }
}
