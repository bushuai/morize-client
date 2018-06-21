import Taro from '@tarojs/taro'

const articles = [
  {
    id: 1,
    date: '2018/09/10 19:00',
    title: 'Fugiat quis aute mollit amet nisi amet ea reprehenderit dolor laboris aute.',
    content: '<h2>Hello wrold</h2><p>Hi there.</p>',
    summary: 'Anim est mollit mollit sit elit Lorem veniam culpa quis id ea ea culpa officia.',
    src: '../../assets/item-image.jpg'
  },
  {
    id: 2,
    date: '2018/09/10 09:12',
    title: 'Fugiat quis aute mollit amet nisi amet ea reprehenderit dolor laboris aute.',
    content: '<h2>Hello wrold</h2><p>Hi there.</p>',
    summary: 'Tempor nisi Lorem incididunt aliquip adipisicing eu sit occaecat veniam esse occaecat in sint.',
    src: '../../assets/item-image.jpg'
  },
  {
    id: 3,
    date: '2018/09/10 12:37',
    title: 'Fugiat quis aute mollit amet nisi amet ea reprehenderit dolor laboris aute.',
    content: '<h2>Hello wrold</h2><p>Hi there.</p>',
    summary: 'Non irure tempor sunt labore consectetur ullamco ipsum officia.',
    src: '../../assets/item-image.jpg'
  },
  {
    id: 4,
    date: '2018/09/10 18:31',
    title: 'Fugiat quis aute mollit amet nisi amet ea reprehenderit dolor laboris aute.',
    content: '<h2>Hello wrold</h2><p>Hi there.</p>',
    summary: 'Ea dolore exercitation aliqua anim fugiat est laboris fugiat elit id culpa in.',
    src: '../../assets/item-image.jpg'
   }
]

export const fetchRecent = () => {
  Taro.showLoading({
    mask: true,
    title: 'loading'
  })
  return new Promise((resolve) => {
    setTimeout(() => {
      const recentItems = articles.slice(0, 1)
      resolve(recentItems)
      Taro.hideLoading()
    }, 1000)
  })
}

export const fetchAll = () => {
  Taro.showLoading({
    mask: true,
    title: 'loading'
  })

  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        latest: articles[0],
        pastArticles: articles.slice(1)
      })
      Taro.hideLoading()
    }, 1000)
  })
}

export const fetchArticle = id => {
  Taro.showLoading({
    mask: true,
    title: 'loading'
  })

  return new Promise((resolve) => {
    setTimeout(() => {
      const article = articles.find(item => item.id == id)
      resolve(article)
      Taro.hideLoading()
    }, 1000)
  })
}
