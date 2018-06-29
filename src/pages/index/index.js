import Taro, { Component } from '@tarojs/taro'
import { View, Image, Map, Progress, ScrollView } from '@tarojs/components'
import { fetchAll } from '../../services/articleService'
import { DB } from '../../services/leancloudService'
import Article from '../../models/Article'
import './index.scss'
import end from '../../assets/icons/end.png'
import hidden from '../../assets/icons/hidden.png'
import itemImage1 from '../../assets/item-image.jpg'

export default class Index extends Component {
  config = {
    navigationBarTitleText: 'MORIZE',
    // enablePullDownRefresh: true,
    backgroundTextStyle: 'dark'
  }

  constructor (props) {
    super(props)
    this.state = {
      latest: null,
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
        width: 2,
        dottedLine: false,
        arrowLine: false,
        borderWidth:5
      },
      {
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
          { longitude: 120.589079, latitude: 31.30544 }
        ],
        color: "#ff0000",
        width: 2,
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
        iconPath: '/assets/icons/end.png'
      },
      {
        id: 3,
        longitude: 120.589079, 
        latitude: 31.30544
      }
    ]
    }
  }

  componentWillMount () { }

  async componentDidMount () {
    this.mapCtx = Taro.createMapContext('map', this)
    const actions = [ Taro.getLocation(), fetchAll() ]
    const [ location, articles ] = await Promise.all(actions)
    const { latest } = articles
    const linePoints = [ 
      { ...location }, 
      { longitude: 120.589079, latitude: 31.30544 }
    ]

    const linePolyline = {
      points: linePoints,
      color: "#cccccc",
      width: 2,
      dottedLine: true,
      arrowLine: false,
      borderWidth: 5
    }

    const allLines = [
      ...this.state.polyline,
      linePolyline
    ]

    this.setState({ location, polyline: allLines, latest })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  // onReachBottom () {
  //   Taro.showLoading({
  //     mask: true,
  //     title: 'loading...',
  //   })

  //   Taro.showNavigationBarLoading()
  //   setTimeout(() => {
  //     const items = this.state.pastArticles.slice(0)
  //     this.setState({
  //       pastArticles: [ ...items, ...this.state.pastArticles ]
  //     })
  //     Taro.hideLoading()
  //     Taro.hideNavigationBarLoading()
  //   }, 2000)
  // }

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
    const name = 'item-image'

    return (
      <View className='index'>
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

        <View class='index__section index__section--stories'>
          <View class='index__section-title'>Gallery</View>
          <ScrollView scrollX class='slider'>
            <View className='slider__item' hoverClass='slider__item--hover'>
              <Image className='slider__image' mode='scaleToFill' src={itemImage1} />
              {/* <View className='slider__title'>Hello World.</View> */}
            </View>
            <View className='slider__item' hoverClass='slider__item--hover'>
              <Image className='slider__image' mode='scaleToFill' src={itemImage1} />
              {/* <View className='slider__title'>Hello World.</View> */}
            </View>
            <View className='slider__item' hoverClass='slider__item--hover'>
              <Image className='slider__image' mode='scaleToFill' src={itemImage1} />
              {/* <View className='slider__title'>Hello World.</View> */}
            </View>
            <View className='slider__item' hoverClass='slider__item--hover'>
              <Image className='slider__image' mode='scaleToFill' src={itemImage1} />
              {/* <View className='slider__title'>Hello World.</View> */}
            </View>
            <View className='slider__item' hoverClass='slider__item--hover'>
              <Image className='slider__image' mode='scaleToFill' src={itemImage1} />
              {/* <View className='slider__title'>Hello World.</View> */}
            </View>
          </ScrollView>
          {/* 
          <Swiper class='slider'>
            <Swiper-Item class='slider__item'>
              <Image class='slider__image' src={itemImage1} />
              <View class='slider__item-meta'>
                <View>xxxxxx</View>
                <View>yyyyyy</View>
              </View>
            </Swiper-Item>
            <Swiper-Item class='slider__item'>
              <Image class='slider__image' src={itemImage1} />
              <View class='slider__item-meta'>
                <View>zzzzzz</View>
                <View>hhhhhhh</View>
              </View>
            </Swiper-Item>
          </Swiper> */}
        </View>

        <View class='index__section index__section--timeline'>
          <View class='index__section-title'>Timeline</View>
          <View class='timeline'>
            <View class='timeline__item'>
              <View class='timeline__item-tail'></View>
              <View class='timeline__item-head'></View>
              <View class='timeline__item-content'>
                <View>Magna ut elit anim duis enim pariatur id commodo amet esse veniam.</View>
                <View>Magna ut elit anim duis enim pariatur id commodo amet esse veniam.</View>
                <View>Magna ut elit anim duis enim pariatur id commodo amet esse veniam.</View>
                <View>Magna ut elit anim duis enim pariatur id commodo amet esse veniam.</View>
              </View>
            </View>

            <View class='timeline__item'>
              {/* <View class='timeline__item-tail'></View> */}
              <View class='timeline__item-head'></View>
              <View class='timeline__item-content'>
                <View>2018-07-01</View>
                <View>Magna ut elit anim duis enim pariatur id commodo amet esse veniam.</View>
                <View>
                  <Image src={itemImage1} />
                </View>
                <View>Magna ut elit anim duis enim pariatur id commodo amet esse veniam.</View>
              </View>
            </View>
          </View>
        </View>
        <View className='copyright'>created by bushuai-lab.cn</View>
      </View>
    )
  }
}

