import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { CATEGORIES } from '../../CONSTANT'
import { fetchRecent, fetchAll } from '../../services/articles'
import itemImage from '../../assets/item-image.jpg'
import Share from '../../assets/icons/share-fat.svg'
import './index.scss'

export default class Index extends Component {
  config = {
    navigationBarTitleText: 'MORIZE',
    enablePullDownRefresh: true,
    backgroundTextStyle: 'dark'
  }

  constructor (props) {
    super(props)
    this.state = {
      activeMenu: CATEGORIES.RECENT,
      recentItems: [],
      allItems: []
    }
  }

  componentWillMount () { }

  componentDidMount () { 
    fetchRecent()
    .then(response => {
      console.log('response: ', response)
      this.setState({
        recentItems: response
      })
    })
    .catch(error => console.log(error))
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onPullDownRefresh () {
    Taro.showNavigationBarLoading()

    setTimeout(() => {
      Taro.hideNavigationBarLoading()
      Taro.stopPullDownRefresh()
    }, 2000)
  }

  onReachBottom () {
    if (this.state.activeMenu === CATEGORIES.RECENT) {
      return
    }

    const items = this.state.allItems.slice(0)
    Taro.showLoading({
      title: 'loading...',
      icon: 'loading'
    })
    Taro.showNavigationBarLoading()

    setTimeout(() => {
      this.setState({
        allItems: [ ...items, ...this.state.allItems ]
      })
      Taro.hideLoading()
      Taro.hideNavigationBarLoading()
    }, 2000)
  }

  viewArticle = event => {
    const { articleId } = event.currentTarget.dataset
    const url = `../article/article?id=${articleId}`
    Taro.navigateTo({ url })
  }

  shareArticle = event => {
    event.stopPropagation()
    const { articleId } = event.currentTarget.dataset

    Taro.showActionSheet({
      itemList: ['转发给朋友', '生成图片', '复制链接'],
      success (response) {
        console.log(response)
      },
      fail () {}
    })
  }

  toggleMenuActive = event => {
    const { menu: activeMenu } = event.currentTarget.dataset
    this.setState({ activeMenu })

    if (activeMenu === CATEGORIES.ALL) {
      fetchAll()
      .then(allItems => {
        this.setState({ allItems })
      })  
      .catch(error => console.log(error))
    }
  }

  render () {
    const { activeMenu } = this.state
    return (
      <View className='index'>
        {/* <View className='index__title'>
        </View> */}
        {/* <View className='index__subtitle'>FOR THOSE WHO LOVE THE WORLD</View> */}
        <View className='index__menu'>
          <View 
            className={`index__menu-item ${activeMenu === CATEGORIES.RECENT ? 'index__menu-item--active' : ''}`}
            data-menu={CATEGORIES.RECENT}
            onClick={this.toggleMenuActive}
          >Recent</View>
            
          <View 
            className={`index__menu-item ${activeMenu === CATEGORIES.ALL ? 'index__menu-item--active' : ''}`}
            data-menu={CATEGORIES.ALL}
            onClick={this.toggleMenuActive}
          >All</View>
        </View>
        <View className='index__item-list'>
        {
          activeMenu === CATEGORIES.RECENT && this.state.recentItems.map(item => {
            return (
              <View 
                className='index__item' 
                key={item.id} 
                hoverClass='index__item--hover'
                data-article-id={item.id}
                onClick={this.viewArticle}
              >
                <Image className='index__item-image' src={itemImage}></Image>
                <View className='index__item-meta'>
                  <View className='index__item-title'>{item.title}</View>
                  {/* <View className='index__item-star'>start</View> */}
                  {/* <View className='index__item-like'>like</View> */}
                  <Image className='index__item-share' data-article-id={item.id} onClick={this.shareArticle} src={Share}></Image>
                  <View className='index__item-summary'>{item.summary}</View>
                </View>
                {/* <View className='index__item-date'>{item.date}</View> */}
              </View>
            )
          })
        }
        {
          activeMenu === CATEGORIES.ALL && this.state.allItems.map(item => {
            return (
              <View className='index__item index__item--simple' key={item.id} hoverClass='index__item--hover'>
                <View className='index__item-meta'>
                  <View className='index__item-title'>{item.title}111</View>
                  {/* <View className='index__item-star'>start</View> */}
                  {/* <View className='index__item-like'>like</View> */}
                  <View className='index__item-share'>share111</View>
                  <View className='index__item-summary'>{item.summary}111</View>
                </View>
                {/* <View className='index__item-date'>{item.date}</View> */}
              </View>
            )
          })
        }
        </View>
        {/* <View className='toolbar'>
          <View className='toolbar__item'>icon</View>
          <View className='toolbar__item'>icon</View>
          <View className='toolbar__item'>icon</View>
        </View> */}
        {/* <Button className='index-btn'>开始你的故事</Button> */}
        <View className='copyright'>created by bushuai-lab.cn</View>
      </View>
    )
  }
}

