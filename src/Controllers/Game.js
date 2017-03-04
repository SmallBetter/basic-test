export default class Game {

  static changNameToKebab(hero) {
    const nameTrimRL = hero.getName().trimLeft().trimRight()
    return nameTrimRL.split(' ').join('-').toLowerCase()
  }
  static countHeroWeak(heros) {
    const heroWeak = heros.filter(hero => hero.isWeak() === true)
    return heroWeak.length
  }
  static attackAndCountAlive(heros, damage) {
    const damageAll = heros.map(hero =>
      hero.isWeak() === true ? hero.getHp() - (damage * 2) : hero.getHp() - damage)
    return damageAll.reduce((pve, hp) => hp > 0 ? pve + 1 : pve, 0)
  }
}
