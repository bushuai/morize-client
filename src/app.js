import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index/index'
import { get as getGlobalData } from './services/bus'
import './app.scss'

class App extends Component {
  config = {
    pages: [
      'pages/index/index',
      'pages/article/article',
      'pages/about/about',
      'pages/admin/admin',
      'pages/login/login'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'MORIZE',
      navigationBarTextStyle: 'black'
      // onReachBottomDistance: 0
    }
  }

  componentDidMount () {
    // const url = getGlobalData('userData')
    //   ? '/pages/index/index'
    //   : '/pages/login/login'

    // Taro.navigateTo({ url })
  }

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
