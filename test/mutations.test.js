import { assert } from 'chai'
import { describe, it } from 'mocha'
import { mutations } from '../src/store'

const { load } = mutations

describe('mutations', function () {
  it('load', function () {
    const state = {}
    const payload = {
      default: {
        a: ['The a field is required.']
      }
    }

    load(state, payload)

    assert.deepEqual(state, payload)
  })
})
