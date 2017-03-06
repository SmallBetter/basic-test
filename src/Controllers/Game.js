export default class Game {

  static changeNameToKebabCase(hero) {
    const nameTrimRL = hero.getName().trimLeft().trimRight()
    return nameTrimRL.split(' ').join('-').toLowerCase()
  }

  static countHeroWeak(heros) {
    return heros.filter(hero => hero.isWeak()).length
  }

  static attackAllAndCountAlive(heros, damage) {
    if (damage < 0 || Number.isInteger(damage) === false) {
      throw new Error('invalid damage - should be number add more than 0')
    }
    const damageAll = heros.map(hero =>
      hero.isWeak() ? hero.getHp() - (damage * 2) : hero.getHp() - damage)
    return damageAll.reduce((pve, hp) => hp > 0 ? pve + 1 : pve, 0)
  }

  static attackAllAndCountTotalDamage(heros, damage) {
    if (damage < 0 || Number.isInteger(damage) === false) {
      throw new Error('invalid damage - should be number add more than 0')
    }
    const damageAll = heros.map(item => {
      const hp = item.getHp()
      if (item.isWeak()) {
        return hp > damage * 2 ? damage * 2 : hp
      }
      return hp > damage ? damage : hp
    })
    return damageAll.reduce((pve, hp) => hp > 0 ? pve + hp : pve, 0)
  }
}
