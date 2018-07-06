import Taro, { Component } from '@tarojs/taro'
import { View, Image, RichText, ScrollView } from '@tarojs/components'
import Heart from '../../assets/icons/heart.svg'
import HeartFill from '../../assets/icons/heart-fill.svg'
import itemImage1 from '../../assets/item-image.jpg'
import './gallery.scss'

export default class Gallery extends Component {
  constructor (props) {
    super(props)
    this.state = {
      article: null
    }
  }

  config = {
    navigationBarTitleText: '万千'
  }

  componentWillMount () {}

  async componentDidMount () {
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    
    return (
      <View className='gallery'>
        <Image style='width: 100%;display:block;' src={itemImage1} />
        <View style='padding: 20px;line-height: 1.5;'>
          <View style='margin-bottom: 10px'>青海湖犹如一颗瑰丽的蓝宝石一般镶嵌在荒凉的西北大地。</View>
          <View style='margin-bottom: 10px'>Anim officia tempor enim excepteur sint ex aliquip aliqua. Duis sit irure enim in sunt excepteur cillum. Irure labore exercitation commodo laboris deserunt.</View>
          <Image style='border-radius: 3PX;margin-bottom: 10px;box-shadow: 0 0 20px #eee;' src={itemImage1} />
          <Image style='border-radius: 3PX;margin-bottom: 10px;box-shadow: 0 0 20px #eee;' src={itemImage1} />
          <View style='margin-bottom: 10px'>Ad laborum sint culpa velit eiusmod adipisicing laborum dolor reprehenderit aliquip aute consectetur. Sint commodo ullamco eiusmod excepteur adipisicing et officia magna enim velit dolor sit consectetur laborum. In aute velit quis occaecat officia cillum id. Nisi nisi adipisicing nisi dolor ipsum in ullamco labore fugiat adipisicing magna. Sit est proident minim amet eiusmod elit. Laborum id sit culpa anim aliqua adipisicing commodo et fugiat tempor aute velit. Mollit quis pariatur mollit dolor enim.</View>
          <View style='display:flex;flex-direction:row;justify-content: space-between;'>
            <Image style='height: 100px;width: 100px;' src={itemImage1} />
            <Image style='height: 100px;width: 100px;' src={itemImage1} />
            <Image style='height: 100px;width: 100px;' src={itemImage1} />
            <Image style='height: 100px;width: 100px;' src={itemImage1} />
          </View>
          <View style='margin-bottom: 10px'>Ad laborum sint culpa velit eiusmod adipisicing laborum dolor reprehenderit aliquip aute consectetur. Sint commodo ullamco eiusmod excepteur adipisicing et officia magna enim velit dolor sit consectetur laborum. In aute velit quis occaecat officia cillum id. Nisi nisi adipisicing nisi dolor ipsum in ullamco labore fugiat adipisicing magna. Sit est proident minim amet eiusmod elit. Laborum id sit culpa anim aliqua adipisicing commodo et fugiat tempor aute velit. Mollit quis pariatur mollit dolor enim.</View>
          <ScrollView scrollX style='white-space: nowrap;'>
            <Image src={itemImage1} />
            <Image src={itemImage1} />
            <Image src={itemImage1} />
            <Image src={itemImage1} />
            <Image src={itemImage1} />
          </ScrollView>
        </View>
      </View>
    )
  }
}
