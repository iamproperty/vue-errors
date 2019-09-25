import errors from './store'

const DEFAULT_NAMESPACE = 'errors'

export const installer = (namespace) => {
  return {
    install (Vue) {
      Vue.prototype.$errors = function (key) {
        return this.$store.getters[`${namespace}/bag`](key)
      }
    }
  }
}

export { errors }

export default {
  ...installer(DEFAULT_NAMESPACE)
}
