import Taro, { Component } from '@tarojs/taro'
import { View, Image, Map, Progress, Button } from '@tarojs/components'
import { CATEGORIES } from '../../CONSTANT'
import { fetchAll } from '../../services/articleService'
import { DB, Query } from '../../services/leancloudService'
import AV from '../../libs/av-weapp'
import Article from '../../models/Article'
import Comment from '../../models/Comment'
import Tag from '../../models/Tag'
import itemImage from '../../assets/item-image.jpg'
import hidden from '../../assets/icons/hidden.png'
import './index.scss'

export default class Index extends Component {
  config = {
    navigationBarTitleText: 'MORIZE',
    // enablePullDownRefresh: true,
    backgroundTextStyle: 'dark'
  }

  constructor (props) {
    super(props)
    this.state = {
      activeMenu: CATEGORIES.RECENT,
      latest: null,
      pastArticles: [],
      location: null,
      polyline: [{
        points: [
          { longitude: 113.503147, latitude: 23.161879 },
          { longitude: 113.75151, latitude: 23.031035 },
          { longitude: 114.060815, latitude: 22.552317 },
          { longitude: 114.348273, latitude: 22.712434 },
          { longitude: 114.427611, latitude: 23.105515 },
          { longitude: 115.649881, latitude: 22.921369 },
          { longitude: 116.693928, latitude: 23.358432 },
          { longitude: 116.618039, latitude: 23.66595 },
          { longitude: 117.659786, latitude: 24.514678 },
          { longitude: 118.131217, latitude: 24.495739 },
          { longitude: 118.675087, latitude: 24.880786 },
          { longitude: 119.016587, latitude: 25.441727 },
          { longitude: 119.310944, latitude: 26.073796 },
          { longitude: 119.551258, latitude: 26.673513 },
          { longitude: 120.718337, latitude: 27.992328 },
          { longitude: 121.438131, latitude: 28.655743 },
          { longitude: 121.428932, latitude: 28.651686 },
          { longitude: 121.617505, latitude: 29.8697 },
          { longitude: 120.584956, latitude: 30.043928 },
          { longitude: 120.22161, latitude: 30.261778 },
          { longitude: 121.472149, latitude: 31.238279 },
          { longitude: 120.589079, latitude: 31.30544 },
          { longitude: 119.977369, latitude: 31.813499 },
          { longitude: 118.799942, latitude: 32.068436 },
          { longitude: 119.430049, latitude: 32.408538 },
          { longitude: 119.029908, latitude: 33.621416 },
          { longitude: 119.21848, latitude: 34.6008 },
          { longitude: 118.353807, latitude: 35.120201 },
          { longitude: 120.391308, latitude: 36.081845 },
          { longitude: 120.391308, latitude: 36.081845 },
          { longitude: 120.391308, latitude: 36.081845 }

        ],
        color: "#2a91e0",
        width: 4,
        dottedLine: false,
        arrowLine: false,
        borderWidth:5
      }],
      markers: [{
        id: 1,
        longitude: 113.503147,
        latitude: 23.161879,
        width: 18,
        height: 18,
        iconPath: '/assets/icons/hidden.png'
      },
      {
        id: 2,
        longitude: 120.391308,
        latitude: 36.081845,
        width: 18,
        height: 18,
        iconPath: '/assets/icons/end-2.png'
      },
      {
        id: 3,
        longitude: 116.693928,
        latitude: 23.358432,
        callout: {
          content: '我在这里',
          color:  '#000000',
          borderRadius: 3,
          bgColor : '#ffffff',
          padding:  5,
          display:  'ALWAYS',
          textAlign: 'center'
        }
      }
    ]
    }
  }

  componentWillMount () { }

  async componentDidMount () {
    this.mapCtx = Taro.createMapContext('map', this)
    const actions = [ Taro.getLocation(), fetchAll() ]
    const [ location, articles ] = await Promise.all(actions)
    const { pastArticles, latest } = articles
    this.setState({ location, pastArticles, latest })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onReachBottom () {
    Taro.showLoading({
      mask: true,
      title: 'loading...',
    })

    Taro.showNavigationBarLoading()
    setTimeout(() => {
      const items = this.state.pastArticles.slice(0)
      this.setState({
        pastArticles: [ ...items, ...this.state.pastArticles ]
      })
      Taro.hideLoading()
      Taro.hideNavigationBarLoading()
    }, 2000)
  }

  saveArticle = async () => {
    const article = new Article({
      title: `tset title ${Math.random()*10}`,
      subtitle: `test subtitle ${Math.random()*10}`,
      content: `
      <h1>Amet ullamco duis exercitation fugiat sint sunt incididunt id excepteur aliquip.</h1>
      <p>
        Quis excepteur consequat sint sunt. 
        Commodo cupidatat ea laboris reprehenderit minim in et Lorem aute proident laboris exercitation. 
        Ex dolore ullamco enim officia sint esse adipisicing sunt quis eu qui excepteur officia.
        Minim incididunt enim officia consectetur elit ipsum irure aute fugiat qui.
      </p>`,
      subtitle: 'Ea dolore exercitation aliqua anim fugiat est laboris fugiat elit id culpa in.',
    })

    const newArticle = await article.save(article) 
    console.log('new article is: ', newArticle)
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
      itemList: ['分享给朋友', '生成图文'],
      success (response) {
        console.log(response)
      },
      fail () {}
    })
  }

  chooseLocation = async () => {
    const location = await Taro.chooseLocation()
    this.translateMarker(location)
  }

  getCenterLocation = async () => {
    const location = await this.mapCtx.getCenterLocation()
    console.log(location.longitude)
    console.log(location.latitude)
  }

  moveToLocation = () => {
    this.mapCtx.moveToLocation()
  }

  translateMarker = () => {
    this.mapCtx.translateMarker({
      markerId: 0,
      autoRotate: true,
      duration: 5000,
      destination: {
        latitude: 109.622629,
        longitude: 36.682028
      },
      animationEnd() {
        console.log('animation end')
      }
    })
  }

  includePoints = () => {
    this.mapCtx.includePoints({
      padding: [10],
      points: [
        { longitude: 113.503147, latitude: 23.161879 },
        { longitude: 113.75151, latitude: 23.031035 },
        { longitude: 114.060815, latitude: 22.552317 },
        { longitude: 114.348273, latitude: 22.712434 },
        { longitude: 114.427611, latitude: 23.105515 },
        { longitude: 115.649881, latitude: 22.921369 },
        { longitude: 116.693928, latitude: 23.358432 },
        { longitude: 116.618039, latitude: 23.66595 },
        { longitude: 117.659786, latitude: 24.514678 },
        { longitude: 118.131217, latitude: 24.495739 },
        { longitude: 118.675087, latitude: 24.880786 },
        { longitude: 119.016587, latitude: 25.441727 },
        { longitude: 119.310944, latitude: 26.073796 },
        { longitude: 119.551258, latitude: 26.673513 },
        { longitude: 120.718337, latitude: 27.992328 },
        { longitude: 121.438131, latitude: 28.655743 },
        { longitude: 121.428932, latitude: 28.651686 },
        { longitude: 121.617505, latitude: 29.8697 },
        { longitude: 120.584956, latitude: 30.043928 },
        { longitude: 120.22161, latitude: 30.261778 }
      ]
    })
  }

  showBikingRoute = () => {
    this.includePoints()
  }

  showCurrentLocation = () => {
    this.mapCtx.moveToLocation({
      latitude: 23.10229,
      longitude: 113.3345211
    })
  }

  saveUserInfo = async userData => {
    console.log('saveUserInfo', userData)
    const response = await DB.save(userData.detail)
    console.log('存储成功: ', response)
  }

  toAdmin = () => {
    Taro.navigateTo({ url: '../admin/admin' })
  }

  render () {
    const {
      location,
      polyline,
      markers,
      latest
    } = this.state

    return (
      <View className='index'>
        <View className='copyright' onClick={this.toAdmin}>后台管理</View>
        {
          location &&
          <View className='track'>
            <Map
              id='map'
              longitude='113.517988'
              latitude='23.159165'
              scale='5'
              show-location
              markers={markers}
              polyline={polyline}
              style='width: 100%; height: 100%;'
            />
          <Progress percent={80}  strokeWidth={2} active backgroundColor='#ffffff' activeColor='#008cff' />
        </View>
        }

        <View class='index__latest'>Latest</View>

        <View className='index__item-list'>
        {
          latest &&
            <View
              className='index__item'
              key={latest.objectId}
              hoverClass='index__item--hover'
              data-article-id={latest.objectId}
              onClick={this.viewArticle}
            >
            {latest.objectId}
              <Image className='index__item-image' src={latest.image}></Image>
              <View className='index__item-meta'>
                <View className='index__item-title'>{latest.title}</View>
                <View className='index__item-summary'>{latest.subtitle}</View>
              </View>
            </View>
        }
        <View className='index__more'>View more from below</View>
        {
          this.state.pastArticles.map(item => {
            return (
              <View 
                className='index__item index__item--simple' 
                key={item.objectId} 
                hoverClass='index__item--hover'
                data-article-id={item.objectId}
                onClick={this.viewArticle}
              >
              {item.objectId}
                <View className='index__item-meta'>
                  <View className='index__item-title'>{item.title}</View>
                  {/* <View className='index__item-share'><Image src={Share} /> </View> */}
                  <View className='index__item-summary'>{item.subtitle}</View>
                </View>
              </View>
            )
          })
        }
        </View>
        <View className='copyright'>created by bushuai-lab.cn</View>
      </View>
    )
  }
}

