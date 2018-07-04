import Taro, { Component } from '@tarojs/taro'
import { View, Image, Map, Progress, ScrollView, Video, CoverView, Button } from '@tarojs/components'
import { fetchAll as fetchAllArticle } from '../../services/articleService'
import * as routeService from '../../services/routeService'
import {
  get as getGlobalData,
  set as setGlobalData
} from '../../services/bus'
// import { DB } from '../../services/leancloudService'
// import Article from '../../models/Article'
import './index.scss'
import end from '../../assets/icons/end.png'
import hidden from '../../assets/icons/hidden.png'
import itemImage1 from '../../assets/item-image.jpg'
import likeImage from '../../assets/icons/heart.svg'
import avatar from '../../assets/avatar.jpg'
import Timeline from '../../components/Timeline/Timeline'

export default class Index extends Component {
  config = {
    navigationBarTitleText: 'MORIZE',
    // enablePullDownRefresh: true,
    backgroundTextStyle: 'dark',
    disableScroll: false
  }

  constructor (props) {
    super(props)
    this.state = {
      timelines: [
        { 
          title: '深圳',
          date: '2019-01-01',
          src: '/assets/item-image.jpg',
          images: [
            {
              title: '广场舞',
              src: '/assets/item-image.jpg'
            },
            {
              title: '小女孩',
              src: '/assets/item-image.jpg'
            }
          ],
          type: 'IMG',
          remark: 'remark',
          content: 'xxx',
          location: 'Dong Guan',
          subtitle: '' 
        },
        { 
          title: '重游南澳岛',
          date: '2019-02-01',
          videos: [
            {
              title: '1111',
              src: 'http://www.w3school.com.cn//i/movie.mp4'
            },
            {
              title: '222',
              src: 'http://www.w3school.com.cn//i/movie.mp4'
            }
          ],
          type: 'VIDEO',
          remark: 'remark',
          content: 'xxx',
          location: 'Shan Tou'
        }
      ],
      latest: null,
      location: null,
      polyline: [],
      markers: [],

      gallery: [
        { title: '111', image: itemImage1 }
      ]
    }
  }

  componentWillMount () { }

  async componentDidMount () {
    this.mapCtx = Taro.createMapContext('map', this)
    const useLocation = await Taro.getStorageSync('USE_LOCATION')
    console.log('USE_LOCATION: ', useLocation)

    if (useLocation) {
      this.requestGeoLocation()
    }

    const articles= await fetchAllArticle()
    const { latest } = articles
    this.setState({ latest })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  // saveArticle = async () => {
  //   const article = new Article({
  //     title: `tset title ${Math.random()*10}`,
  //     subtitle: `test subtitle ${Math.random()*10}`,
  //     content: `
  //     <h1>Amet ullamco duis exercitation fugiat sint sunt incididunt id excepteur aliquip.</h1>
  //     <p>
  //       Quis excepteur consequat sint sunt.
  //       Commodo cupidatat ea laboris reprehenderit minim in et Lorem aute proident laboris exercitation.
  //       Ex dolore ullamco enim officia sint esse adipisicing sunt quis eu qui excepteur officia.
  //       Minim incididunt enim officia consectetur elit ipsum irure aute fugiat qui.
  //     </p>`,
  //     subtitle: 'Ea dolore exercitation aliqua anim fugiat est laboris fugiat elit id culpa in.',
  //   })

  //   const newArticle = await article.save(article)
  // }

  // chooseLocation = async () => {
  //   const location = await Taro.chooseLocation()
  //   this.translateMarker(location)
  // }

  // translateMarker = () => {
  //   this.mapCtx.translateMarker({
  //     markerId: 0,
  //     autoRotate: true,
  //     duration: 5000,
  //     destination: {
  //       latitude: 109.622629,
  //       longitude: 36.682028
  //     },
  //     animationEnd() {
  //       console.log('animation end')
  //     }
  //   })
  // }

  // includePoints = () => {
  //   this.mapCtx.includePoints({
  //     padding: [10],
  //     points: [
  //       { longitude: 113.503147, latitude: 23.161879 },
  //       { longitude: 113.75151, latitude: 23.031035 },
  //       { longitude: 114.060815, latitude: 22.552317 },
  //       { longitude: 114.348273, latitude: 22.712434 },
  //       { longitude: 114.427611, latitude: 23.105515 },
  //       { longitude: 115.649881, latitude: 22.921369 },
  //       { longitude: 116.693928, latitude: 23.358432 },
  //       { longitude: 116.618039, latitude: 23.66595 },
  //       { longitude: 117.659786, latitude: 24.514678 },
  //       { longitude: 118.131217, latitude: 24.495739 },
  //       { longitude: 118.675087, latitude: 24.880786 },
  //       { longitude: 119.016587, latitude: 25.441727 },
  //       { longitude: 119.310944, latitude: 26.073796 },
  //       { longitude: 119.551258, latitude: 26.673513 },
  //       { longitude: 120.718337, latitude: 27.992328 },
  //       { longitude: 121.438131, latitude: 28.655743 },
  //       { longitude: 121.428932, latitude: 28.651686 },
  //       { longitude: 121.617505, latitude: 29.8697 },
  //       { longitude: 120.584956, latitude: 30.043928 },
  //       { longitude: 120.22161, latitude: 30.261778 }
  //     ]
  //   })
  // }

  // showBikingRoute = () => {
  //   this.includePoints()
  // }

  // viewArticle = event => {
  //   const { articleId } = event.currentTarget.dataset
  //   const url = `../article/article?id=${articleId}`
  //   Taro.navigateTo({ url })
  // }

  // shareArticle = event => {
  //   event.stopPropagation()
  //   const { articleId } = event.currentTarget.dataset

  //   Taro.showActionSheet({
  //     itemList: ['分享给朋友', '生成图文'],
  //     success (response) {
  //       console.log(response)
  //     },
  //     fail () {}
  //   })
  // }

  // saveUserInfo = async userData => {
  //   console.log('saveUserInfo', userData)
  //   const response = await DB.save(userData.detail)
  //   console.log('存储成功: ', response)
  // }

  // toAdmin = () => {
  //   Taro.navigateTo({ url: '../admin/admin' })
  // }

  handleScrollToLower = () => {
    const { gallery } = this.state

    if (gallery.length >= 9) {
      return Taro.showToast({
        title: '▶ 等待发现更多美好',
        icon: 'none'
      })
    }

    Taro.showLoading({
      title: 'loading'
    })

    const images = gallery.slice(0)

    setTimeout(() => {
      this.setState({ gallery: [ ...images, ...gallery ] })
      Taro.hideLoading()
    }, 1000)
  }

  initMap = async (userPolyline, userLocation) => {
    this.mapCtx = Taro.createMapContext('map', this)

    const planning = await routeService.fetchPlanningRoute()
    const finished = await routeService.fetchFinishedRoute()
    const markers = await routeService.fetchRouteMarkers()
    const polyline = [ planning, finished, userPolyline ]

    this.setState({ polyline, markers })
    this.mapCtx.moveToLocation({ ...userLocation })
  }

  requestGeoLocation = async () => {
    Taro.setStorageSync('USE_LOCATION', true)
    const location = await Taro.getLocation()

    const linePoints = [
      { ...location },
      { longitude: 120.589079, latitude: 31.30544 }
    ]

    const userPolyline = {
      points: linePoints,
      color: "#cccccc",
      width: 2,
      dottedLine: true,
      arrowLine: false,
      borderWidth: 5
    }

    this.setState({ location })
    this.initMap(userPolyline)
  }

  render () {
    const {
      location,
      polyline,
      markers,
      latest,
      gallery,
      timelines
    } = this.state
    const name = 'item-image'

    return (
      <View className='index'>
        {
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
              >
              {
                !location && <CoverView className='track__cover'>
                  <CoverView className='track__overlay'></CoverView>
                  <CoverView className='track__notice' onClick={this.requestGeoLocation}>
                    点击查看骑行路线
                  </CoverView>
                </CoverView>
              }
              </Map>
            <Progress percent={80}  strokeWidth={2} active backgroundColor='#ffffff' activeColor='#008cff' />
          </View>
        }

        <View className='index__section index__section--stories'>
          <View className='index__section-title'>Today</View>
          {/* <ScrollView scrollX className='slider' onScrolltolower={this.handleScrollToLower} scrollWithAnimation>
          {
            gallery.map(galleryItem => {
              return (
                <View key={galleryItem.title} className='slider__item' hoverClass='slider__item--hover'>
                  <Image className='slider__image' mode='scaleToFill' src={itemImage1} />
                  <View className='slider__summary'>
                    <View className='slider__title'>Hello World.</View>
                    <View className='slider__likes'><Image style='height: 16px;width: 16px;' src={likeImage}></Image></View>
                  </View>
                </View>
              )
            })
          }
          </ScrollView> */}
          <View className='slider__item' hoverClass='slider__item--hover'>
            <Image className='slider__image' mode='scaleToFill' src={itemImage1} />
            <View className='slider__meta'>
              <View className='slider__title'>Hello World.</View>
              <View className='slider__likes'>
                <Image className='slider__user' src={avatar}></Image>
                <Image className='slider__user' src={avatar}></Image>
                <Image className='slider__user' src={avatar}></Image>
                <Text style='margin-left: 5PX;'> 张三等 4 人点赞</Text>
              </View>
            </View>
            <View className='divider'></View>
            <View className='slider__summary'>
              Lorem qui velit id magna velit quis in magna officia velit ex consequat sit consectetur.
            </View>
          </View>
        </View>

        <View className='index__section index__section--timeline'>
          <View className='index__section-title'>Timeline</View>
          <View className='timeline'>
          {
            timelines.map(timeline => (<Timeline key={timeline.date} timeline={timeline}/>))
          }
          </View>
        </View>
        <View className='copyright'>created by bushuai-lab.cn</View>
      </View>
    )
  }
}

