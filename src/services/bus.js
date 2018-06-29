const globalData = {}

export function set (key, value) {
  globalData[key] = value
}

export function get (key) {
  return globalData[key]
}

export function remove (key) {
  delete globalData[key]
}
