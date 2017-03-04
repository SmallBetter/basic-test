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
})
