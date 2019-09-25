import { assert } from 'chai'
import { describe, it } from 'mocha'
import { Bag } from '../src/bag'

describe('Bag', function () {
  describe('.has()', function () {
    it('should return false when no key is given', function () {
      const bag = new Bag()

      const result = bag.has()

      assert.isFalse(result)
    })
    it('should return true is the single key is set', function () {
      const bag = new Bag({
        a: ['The a field is required.']
      })

      const result = bag.has('a')

      assert.isTrue(result)
    })
    it('should return true if all the keys are set', function () {
      const bag = new Bag({
        a: ['The a field is required.'],
        b: ['The b field is required.']
      })

      const result = bag.has('a', 'b')

      assert.isTrue(result)
    })
    it('should return false if any of the keys are not set', function () {
      const bag = new Bag({
        a: ['The a field is required.']
      })

      const result = bag.has('a', 'b')

      assert.isFalse(result)
    })
  })
  describe('.hasAny()', function () {
    it('should return false when no key is given', function () {
      const bag = new Bag()

      const result = bag.hasAny()

      assert.isFalse(result)
    })
    it('should return true is the single key is set', function () {
      const bag = new Bag({
        a: ['The a field is required.']
      })

      const result = bag.hasAny('a')

      assert.isTrue(result)
    })
    it('should return true if any of the keys are set', function () {
      const bag = new Bag({
        b: ['The b field is required.']
      })

      const result = bag.hasAny('a', 'b')

      assert.isTrue(result)
    })
    it('should return false if none of the keys are not set', function () {
      const bag = new Bag({
        a: ['The a field is required.']
      })

      const result = bag.has('b', 'c')

      assert.isFalse(result)
    })
  })
  describe('.get()', function () {
    it('should return all the messages for the key', function () {
      const bag = new Bag({
        a: ['The a field is required.']
      })

      const result = bag.get('a')

      assert.deepEqual(result, ['The a field is required.'])
    })
    it('should return an empty array if the key is not set', function () {
      const bag = new Bag()

      const result = bag.get('a')

      assert.deepEqual(result, [])
    })
  })
  describe('.first()', function () {
    it('should return the first message for the key', function () {
      const bag = new Bag({
        a: ['The a field is required.']
      })

      const result = bag.first('a')

      assert.equal(result, 'The a field is required.')
    })
    it('should return the null if there are no messages for the key', function () {
      const bag = new Bag({
        a: []
      })

      const result = bag.first('a')

      assert.isNull(result)
    })
    it('should return the null if the key is not set', function () {
      const bag = new Bag()

      const result = bag.first('a')

      assert.isNull(result)
    })
  })
  describe('.all()', function () {
    it('should return all the messages for every key', function () {
      const bag = new Bag({
        a: ['The a field is required.'],
        b: ['The b field is required.']
      })

      const result = bag.all()

      assert.deepEqual(result, ['The a field is required.', 'The b field is required.'])
    })
    it('should return an empty array if there are no messages', function () {
      const bag = new Bag({
        a: []
      })

      const result = bag.all()

      assert.deepEqual(result, [])
    })
  })
  describe('.empty', function () {
    it('should be true is there are no messages', function () {
      const bag = new Bag()

      const result = bag.empty

      assert.isTrue(result)
    })
    it('should return false is there are any messages', function () {
      const bag = new Bag({
        a: ['The a field is required.']
      })

      const result = bag.empty

      assert.isFalse(result)
    })
  })
})
