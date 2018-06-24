import AV from '../libs/av-weapp'

export default class Comment extends AV.Object {
  set content (value) {
    this.set('content', value)
  }
  
  get content () {
    return this.get('content')
  }

  set createDate (value) {
    this.set('createDate', value)
  }
  
  get createDate () {
    return this.get('createDate')
  }

  set author (value) {
    this.set('author', value)
  }
  
  get author () {
    return this.get('author')
  }
}

AV.Object.register(Comment, 'Comment')