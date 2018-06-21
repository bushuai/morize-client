import QQMAP from '../libs/qqmap-wx-jssdk'

const QQMapSDK = new QQMAP({
  key: ''
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

