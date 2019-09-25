import { assert } from 'chai'
import { describe, it } from 'mocha'
import { Bag } from '../src/bag'
import { getters } from '../src/store'

describe('getters', function () {
  describe('bag', function () {
    it('should return the default bag if no bag is specified', function () {
      const state = {
        default: {
          a: ['The a field is required.']
        }
      }

      const result = getters.bag(state, { hasBag: () => true })()

      assert.instanceOf(result, Bag)
      assert.deepEqual(result.messages, state.default)
    })
    it('should return a named bag', function () {
      const state = {
        named: {
          a: ['The a field is required.']
        }
      }

      const result = getters.bag(state, { hasBag: () => true })('named')

      assert.deepEqual(result.messages, state.named)
    })
    it('should return an empty bag is the bag is not set', function () {
      const state = {}

      const result = getters.bag(state, { hasBag: () => true })()

      assert.instanceOf(result, Bag)
      assert.isTrue(result.empty)
    })
  })
  describe('hasBag', function () {
    it('should return true if a named bag exists', function () {
      const state = {
        default: {}
      }

      const result = getters.hasBag(state)('default')

      assert.isTrue(result)
    })
    it('should return true if the default bag exists', function () {
      const state = {
        default: {}
      }

      const result = getters.hasBag(state)()

      assert.isTrue(result)
    })
    it('should return false if a named bag does not exist', function () {
      const state = {}

      const result = getters.hasBag(state)('default')

      assert.isFalse(result)
    })
    it('should return false if the default bag does not exist', function () {
      const state = {}

      const result = getters.hasBag(state)()

      assert.isFalse(result)
    })
  })
})
