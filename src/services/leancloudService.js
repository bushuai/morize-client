// storage service
import AV from '../libs/av-weapp'
// real-time service
import { Realtime, TextMessage } from '../libs/realtime-weapp'
import { LEANCLOUD_APPID as appId, LEANCLOUD_APPKEY as appKey } from '../constants/KEYS'
// for LiveQuery use import AV from 'leancloud-storage/live-query'
const { Query, User } = AV
AV.init({ appId, appKey })

const Morize = AV.Object.extend('morize')
const DB = new Morize()

export {
  DB,
  Query,
  User,
  Realtime,
  TextMessage
}
