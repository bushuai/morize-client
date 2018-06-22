import QQMAP from '../libs/qqmap-wx-jssdk'
import { QQMAP_KEY } from '../constants/KEYS.js'

const QQMapSDK = new QQMAP({
  key: QQMAP_KEY
})

export const search = (params, callback) => {
  return new Promise((resolve, reject) => {
    QQMapSDK.search({
      ...params,
      success (response) {
        resolve(response)
      },
      fail (response) {
        reject(response)
      },
      complete (response) {
        callback && callback(response)
      }
    })
  })
}

export const polyline = () => {
  return null
}

