/* eslint-disable prefer-arrow-callback */

import { describe, it, beforeEach, afterEach } from 'mocha'
import { expect } from 'chai'
import sinon from 'sinon'
import Game from '../src/Controllers/Game'
import Hero from '../src/Models/Hero'

describe('Game', function () {
  let sandbox

  beforeEach(function () {
    sandbox = sinon.sandbox.create()
    this.sinon = sandbox
  })

  afterEach(function () {
    sandbox.restore()
  })

  describe('changNameToKebab()', function () {
    it('should Name myHero Kebab Case myhero', function () {
      this.sinon.stub(Hero.prototype, 'getName').returns('myHero')

      return expect(Game.changNameToKebab(new Hero()))
        .to.be.equal('myhero')
    })

    it('should Name my second hero to Kebab Case my-second-hero', function () {
      this.sinon.stub(Hero.prototype, 'getName').returns('my second hero')

      return expect(Game.changNameToKebab(new Hero()))
        .to.be.equal('my-second-hero')
    })

    it('should Name mY tHirD heRo to Kebab Case my-third-hero', function () {
      this.sinon.stub(Hero.prototype, 'getName').returns('  mY tHirD heRo  ')

      return expect(Game.changNameToKebab(new Hero()))
        .to.be.equal('my-third-hero')
    })
    it('should name empty to be empty', function () {
      this.sinon.stub(Hero.prototype, 'getName').returns('')

      return expect(Game.changNameToKebab(new Hero()))
        .to.be.equal('')
    })
  })

  describe('countHeroWeak()', function () {
    it('should Hero to Weak', function () {
      const stupWeak = this.sinon.stub(Hero.prototype, 'isWeak')
      stupWeak.onCall(0).returns(true)
      stupWeak.onCall(1).returns(true)
      stupWeak.onCall(2).returns(false)
      const heros = [new Hero(), new Hero(), new Hero()]

      return expect(Game.countHeroWeak(heros))
        .to.be.equal(2)
    })
  })

  describe('attackAndCountAlive()', function () {
    it('should attackAndCount tobe hero 1', function () {
      this.sinon.stub(Hero.prototype, 'getDamage').returns(300)
      const damage = new Hero().getDamage()
      const stupWeak = this.sinon.stub(Hero.prototype, 'isWeak')
      const stupHp = this.sinon.stub(Hero.prototype, 'getHp')
      stupHp.onCall(0).returns(500)
      stupHp.onCall(1).returns(500)
      stupHp.onCall(2).returns(200)
      stupWeak.onCall(0).returns(false)
      stupWeak.onCall(1).returns(true)
      stupWeak.onCall(2).returns(false)
      const heros = [new Hero(), new Hero(), new Hero()]

      return expect(Game.attackAndCountAlive(heros, damage))
        .to.be.equal(1)
    })

    it('should -1 throw Error damage', function () {
      this.sinon.stub(Hero.prototype, 'getDamage').returns(-1)
      const damage = new Hero().getDamage()
      const stupWeak = this.sinon.stub(Hero.prototype, 'isWeak')
      const stupHp = this.sinon.stub(Hero.prototype, 'getHp')
      stupHp.onCall(0).returns(500)
      stupHp.onCall(1).returns(500)
      stupHp.onCall(2).returns(200)
      stupWeak.onCall(0).returns(false)
      stupWeak.onCall(1).returns(true)
      stupWeak.onCall(2).returns(false)
      const heros = [new Hero(), new Hero(), new Hero()]

      return expect(function () {
        Game.attackAndCountAlive(heros, damage)
      })
        .to.be.throw(/invalid damage/)
    })
    it('should string throw Error damage', function () {
      this.sinon.stub(Hero.prototype, 'getDamage').returns('dsfew*')
      const damage = new Hero().getDamage()
      const stupWeak = this.sinon.stub(Hero.prototype, 'isWeak')
      const stupHp = this.sinon.stub(Hero.prototype, 'getHp')
      stupHp.onCall(0).returns(500)
      stupHp.onCall(1).returns(500)
      stupHp.onCall(2).returns(200)
      stupWeak.onCall(0).returns(false)
      stupWeak.onCall(1).returns(true)
      stupWeak.onCall(2).returns(false)
      const heros = [new Hero(), new Hero(), new Hero()]

      return expect(function () {
        Game.attackAndCountAlive(heros, damage)
      })
        .to.be.throw(/invalid damage/)
    })
  })

  describe('attackAndCountTotelDamage()', function () {
    it('should attackHeroAll tobe 1000', function () {
      this.sinon.stub(Hero.prototype, 'getDamage').returns(300)
      const damage = new Hero().getDamage()
      const stupHp = this.sinon.stub(Hero.prototype, 'getHp')
      const stupWeak = this.sinon.stub(Hero.prototype, 'isWeak')
      stupHp.onCall(0).returns(500)
      stupHp.onCall(1).returns(500)
      stupHp.onCall(2).returns(200)
      stupHp.onCall(3).returns(500)
      stupHp.onCall(4).returns(500)
      stupHp.onCall(5).returns(200)
      stupWeak.onCall(0).returns(false)
      stupWeak.onCall(1).returns(true)
      stupWeak.onCall(2).returns(false)
      const heros = [new Hero(), new Hero(), new Hero()]

      return expect(Game.attackAndCountTotelDamage(heros, damage))
        .to.be.equal(1000)
    })

    it('should -1 throw Error damage', function () {
      this.sinon.stub(Hero.prototype, 'getDamage').returns(-1)
      const damage = new Hero().getDamage()
      const stupHp = this.sinon.stub(Hero.prototype, 'getHp')
      const stupWeak = this.sinon.stub(Hero.prototype, 'isWeak')
      stupHp.onCall(0).returns(500)
      stupHp.onCall(1).returns(500)
      stupHp.onCall(2).returns(200)
      stupHp.onCall(3).returns(500)
      stupHp.onCall(4).returns(500)
      stupHp.onCall(5).returns(200)
      stupWeak.onCall(0).returns(false)
      stupWeak.onCall(1).returns(true)
      stupWeak.onCall(2).returns(false)
      const heros = [new Hero(), new Hero(), new Hero()]

      return expect(function () {
        Game.attackAndCountTotelDamage(heros, damage)
      })
        .to.be.throw(/invalid damage/)
    })
    it('should string throw Error damage', function () {
      this.sinon.stub(Hero.prototype, 'getDamage').returns('hgj')
      const damage = new Hero().getDamage()
      const stupHp = this.sinon.stub(Hero.prototype, 'getHp')
      const stupWeak = this.sinon.stub(Hero.prototype, 'isWeak')
      stupHp.onCall(0).returns(500)
      stupHp.onCall(1).returns(500)
      stupHp.onCall(2).returns(200)
      stupHp.onCall(3).returns(500)
      stupHp.onCall(4).returns(500)
      stupHp.onCall(5).returns(200)
      stupWeak.onCall(0).returns(false)
      stupWeak.onCall(1).returns(true)
      stupWeak.onCall(2).returns(false)
      const heros = [new Hero(), new Hero(), new Hero()]

      return expect(function () {
        Game.attackAndCountTotelDamage(heros, damage)
      })
        .to.be.throw(/invalid damage/)
    })
  })
})
