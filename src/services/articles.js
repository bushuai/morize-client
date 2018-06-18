import Taro from '@tarojs/taro'

const articles = [
  { id: 1, date: '2018/09/10 19:00', title: '田野上的花朵', content: '<h2>Hello wrold</h2><p>Hi there.</p>', summary: '这是一段比较长的文本描述内容，请仔细阅读。', src: '../../assets/item-image.jpg' },
  { id: 2, date: '2018/09/10 09:12', title: '故乡', content: '<h2>Hello wrold</h2><p>Hi there.</p>', summary: '这是一段比较长的文本描述内容，请仔细阅读。', src: '../../assets/item-image.jpg' },
  { id: 3, date: '2018/09/10 12:37', title: '冬天的雪花飞舞', content: '<h2>Hello wrold</h2><p>Hi there.</p>', summary: '这是一段比较长的文本描述内容，请仔细阅读。', src: '../../assets/item-image.jpg' },
  { id: 4, date: '2018/09/10 18:31', title: '夏天的闲暇午后', content: '<h2>Hello wrold</h2><p>Hi there.</p>', summary: '这是一段比较长的文本描述内容，请仔细阅读。', src: '../../assets/item-image.jpg' },
  { id: 5, date: '2018/09/10 18:31', title: '夏天的闲暇午后', content: '<h2>Hello wrold</h2><p>Hi there.</p>', summary: '这是一段比较长的文本描述内容，请仔细阅读。', src: '../../assets/item-image.jpg' },
  { id: 6, date: '2018/09/10 18:31', title: '夏天的闲暇午后', content: '<h2>Hello wrold</h2><p>Hi there.</p>', summary: '这是一段比较长的文本描述内容，请仔细阅读。', src: '../../assets/item-image.jpg' },
  { id: 7, date: '2018/09/10 18:31', title: '夏天的闲暇午后', content: '<h2>Hello wrold</h2><p>Hi there.</p>', summary: '这是一段比较长的文本描述内容，请仔细阅读。', src: '../../assets/item-image.jpg' },
  { id: 8, date: '2018/09/10 18:31', title: '夏天的闲暇午后', content: '<h2>Hello wrold</h2><p>Hi there.</p>', summary: '这是一段比较长的文本描述内容，请仔细阅读。', src: '../../assets/item-image.jpg' },
  { id: 9, date: '2018/09/10 18:31', title: '夏天的闲暇午后', content: '<h2>Hello wrold</h2><p>Hi there.</p>', summary: '这是一段比较长的文本描述内容，请仔细阅读。', src: '../../assets/item-image.jpg' },
  { id: 10, date: '2018/09/10 18:31', title: '夏天的闲暇午后', content: '<h2>Hello wrold</h2><p>Hi there.</p>', summary: '这是一段比较长的文本描述内容，请仔细阅读。', src: '../../assets/item-image.jpg' },
  { id: 11, date: '2018/09/10 18:31', title: '夏天的闲暇午后', content: '<h2>Hello wrold</h2><p>Hi there.</p>', summary: '这是一段比较长的文本描述内容，请仔细阅读。', src: '../../assets/item-image.jpg' }
]

export const fetchRecent = () => {
  Taro.showLoading({
    title: 'loading',
    icon: 'loading'
  })
  console.log(`fetching recent...`)
  return new Promise((resolve) => {
    setTimeout(() => {
      const recentItems = articles.slice(0, 3)
      resolve(recentItems)
      Taro.hideLoading()
    }, 1000)
  })
}

export const fetchAll = () => {
  Taro.showLoading({
    title: 'loading',
    icon: 'loading'
  })
  console.log(`fetching all...`)
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(articles)
      Taro.hideLoading()
    }, 1000)
  })
}

export const fetchArticle = id => {
  Taro.showLoading({
    title: 'loading',
    icon: 'loading'
  })
  console.log(`fetching id ${id}...`)
  return new Promise((resolve) => {
    setTimeout(() => {
      const article = articles.find(item => item.id == id)
      resolve(article)
      Taro.hideLoading()
    }, 1000)
  })
}