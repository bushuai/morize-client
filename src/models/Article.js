import AV from '../libs/av-weapp'

export default class Article extends AV.Object {
  set title (value) {
    this.set('title', value)
  }

  get title () {
    return this.get('title')
  }

  set subtitle (value) {
    this.set('subtitle', value)
  }
  
  get subtitle () {
    return this.get('subtitle')
  }

  set tags (value) {
    this.set('tags', value)
  }

  get tags () {
    return this.get('tags')
  }

  set type (value) {
    this.set('type', value)
  }
  
  get type () {
    return this.get('type')
  }

  set content (value) {
    this.set('content', value)
  }

  get content () {
    return this.get('content')
  }

  set image (value) {
    this.set('image', value)
  }

  get image () {
    return this.get('image')
  }

  set author (value) {
    this.set('author', value)
  }
  
  get author () {
    return this.get('author')
  }

  get publishDate () {
    return this.get('publishDate')
  }

  set publishDate (value) {
    this.set('publishDate', value)
  }
  
  get views () {
    return this.get('views')
  }

  set views (value) {
    this.set('views', value)
  }

  get likedUsers () {
    return this.get('likedUsers')
  }

  set likedUsers (value) {
    this.set('likedUsers', value)
  }

  set comments (value) {
    this.set('comments', value)
  }
  
  get comments () {
    return this.get('comments')
  }
}

AV.Object.register(Article, 'Article')