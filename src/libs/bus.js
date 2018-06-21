const globalData = {}

export default {
  set (key, value) {
    globalData[key] = value
  },

  get (key) {
    return globalData[key]
  },

  remove (key) {
    delete globalData[key]
  }
}
