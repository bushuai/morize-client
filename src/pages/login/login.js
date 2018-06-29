import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import './login.scss'

export default class Login extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    Taro.showLoading({
      title: 'loading'
    })

    setTimeout (() => {
      Taro.hideLoading()
    }, 2000)
  }

  handleLogin = () => {
    Taro.navigateTo({
      url: '/pages/index/index'
    })
  }

  render () {
    return (
      <View className='login'>
        <View>提示消息:</View>
        <View>1. 需要获取你的当前地址</View>
        <View>2. 需要获取你的公开信息</View>
        <Button className='login__button' onClick={this.handleLogin}>授权登录</Button>
      </View>
    )
  }
}
