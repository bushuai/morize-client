import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index/index'
import './app.scss'

class App extends Component {
  config = {
    pages: [
      'pages/index/index',
      'pages/article/article',
      'pages/about/about',
      'pages/admin/admin'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'MORIZE',
      navigationBarTextStyle: 'black'
      // onReachBottomDistance: 0
    }
  }

  componentDidMount () {}

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
