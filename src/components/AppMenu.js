import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { CATEGORIES } from '../CONSTANT'

export default class AppMenu extends Component {
  render () {
    return (
      <View className='index__menu'>
        <View
          className={`index__menu-item ${this.props.activeMenu === CATEGORIES.RECENT ? 'index__menu-item--active' : ''}`}
          data-menu={CATEGORIES.RECENT}
          onClick={this.props.toggleMenu}
        >Recent</View>

        <View
          className={`index__menu-item ${this.props.activeMenu === CATEGORIES.ALL ? 'index__menu-item--active' : ''}`}
          data-menu={CATEGORIES.ALL}
          onClick={this.props.toggleMenu}
        >All</View>

        <View
          className={`index__menu-item ${this.props.activeMenu === CATEGORIES.TRACK ? 'index__menu-item--active' : ''}`}
          data-menu={CATEGORIES.TRACK}
          onClick={this.props.toggleMenu}
        >Track</View>
      </View>
    )
  }
}
