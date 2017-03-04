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
    if (damage < 0 || Number.isInteger(damage) === false) {
      throw new Error('invalid damage - should be number add more than 0')
    }
    return damageAll.reduce((pve, hp) => hp > 0 ? pve + 1 : pve, 0)
  }

  static attackAndCountTotelDamage(heros, damage) {
    const hpHeroAll = heros.map(hp => hp.getHp()).reduce((pve, hp) => hp > 0 ? pve + hp : pve, 0)
    const damageAll = heros.map(hero =>
      hero.isWeak() === true ? hero.getHp() - (damage * 2) : hero.getHp() - damage)
    const hpRemain = damageAll.reduce((pve, hp) => hp > 0 ? pve + hp : pve, 0)
    if (damage < 0 || Number.isInteger(damage) === false) {
      throw new Error('invalid damage - should be number add more than 0')
    }
    return hpHeroAll - hpRemain
  }
}
