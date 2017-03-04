export default class Game {

  static changNameToKebab(hero) {
    const nameTrimRL = hero.getName().trimLeft().trimRight()
    return nameTrimRL.split(' ').join('-').toLowerCase()
  }
  static countHeroWeak(heros) {
    const heroWeak = heros.filter(hero => hero.isWeak() === true)
    return heroWeak.length
  }
}
