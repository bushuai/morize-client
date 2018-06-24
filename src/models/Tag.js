import AV from '../libs/av-weapp'

export default class Tag extends AV.Object {
  set name (value) {
    this.set('name', value)
  }
  
  get name () {
    return this.get()
  }

  set createDate (value) {
    this.set('createDate', value)
  }
  
  get createDate () {
    return this.get('createDate')
  }
}

AV.Object.register(Tag, 'Tag')