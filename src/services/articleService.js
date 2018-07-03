import Taro from '@tarojs/taro'
import './leancloudService'
import { Query } from '../libs/av-weapp'
import Article from '../models/Article'

export const fetchAll = async () => {
  Taro.showLoading({
    mask: true,
    title: 'loading'
  })

  const query = new Query(Article)
  const articles = await query.find()
  Taro.hideLoading()

  return {
    latest: articles[0],
    pastArticles: articles.slice(1)
  }
}

export const fetchArticle = async id => {
  Taro.showLoading({
    mask: true,
    title: 'loading'
  })

  const query = new Query(Article)
  const article = await query.get(id)
  return article
  Taro.hideLoading()
}
