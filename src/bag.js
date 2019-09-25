/**
 * Determine if an object has a property
 *
 * @param {Object} map
 * @param {string} key
 * @returns {boolean}
 */
export const keyExists = (map, key) => Object.prototype.hasOwnProperty.call(map, key)

export class Bag {
  /**
   * @param {Object} messages
   */
  constructor (messages = {}) {
    this.messages = messages
  }

  /**
   * Determine if messages exist for a given key
   *
   * @param {...string} keys
   * @return {boolean}
   */
  has (...keys) {
    if (keys.length === 0) {
      return false
    }

    return keys.every(key => this.first(key) !== null)
  }

  /**
   * Determine if messages exist for a given key
   *
   * @param {...string} keys
   * @return {boolean}
   */
  hasAny (...keys) {
    if (keys.length === 0) {
      return false
    }

    return keys.some(key => this.first(key) !== null)
  }

  /**
   * Get all of the messages from the message bag for a given key
   *
   * @param {string} key
   * @return {Array<string>}
   */
  get (key) {
    return keyExists(this.messages, key) ? this.messages[key] : []
  }

  /**
   * Get the first message from the bag for a given key
   *
   * @param {string} key
   * @return {null|string}
   */
  first (key) {
    const messages = this.get(key)

    return messages[0] || null
  }

  /**
   * Get all of the messages for every key in the bag
   *
   * @return {string[]}
   */
  all () {
    let messages = []

    for (const key in this.messages) {
      messages = messages.concat(this.get(key))
    }

    return messages
  }

  /**
   * Determine if the message bag has any messages
   *
   * @return {boolean}
   */
  get empty () {
    return this.all().length === 0
  }
}
