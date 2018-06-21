import Taro, { Component } from '@tarojs/taro'
import { View, Map, CoverView } from '@tarojs/components'

export default class Track extends Component {
  render () {
    return (
      <View className='track'>
        <Map
          id='map'
          longitude={this.props.location.longitude}
          latitude={this.props.location.latitude}
          scale='7'
          markers={this.props.markers}
          polyline={this.props.polyline}
          style='width: 100%; height: 100%;'
        >
          <CoverView className='track-cover__current' onClick={this.props.showCurrentLocation}>Current</CoverView>
          <CoverView className='track-cover__route' onClick={this.props.showBikingRoute}>Route</CoverView>
        </Map>
      </View>
    )
  }
}
