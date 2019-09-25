import { Bag, keyExists } from './bag'

const DEFAULT_BAG = 'default'

const state = {}

export const getters = {
  bag (state, { hasBag }) {
    return (bag = DEFAULT_BAG) => new Bag(hasBag(bag) ? state[bag] : {})
  },
  hasBag (state) {
    return (bag = DEFAULT_BAG) => keyExists(state, bag)
  }
}

export const mutations = {
  load (state, bags) {
    for (const [name, bag] of Object.entries(bags)) {
      state[name] = bag
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
