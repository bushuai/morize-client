import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './about.scss'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '关于'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='about'>
        about page
      </View>
    )
  }
}

