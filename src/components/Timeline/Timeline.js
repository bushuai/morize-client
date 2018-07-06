import Taro, { Component } from '@tarojs/taro'
import { View, Video, Image, Text } from '@tarojs/components'
import Time from '../../assets/icons/time.png'
import Location from '../../assets/icons/location.png'
import './timeline.scss'

export default class Timeline extends Component {
  handleClick = () => {
    this.props.handleClickTimeline()
  }

  render () {
    const { src, date, images, videos, title, content, subtitle, location } = this.props.timeline

    return (
      <View className='timeline-item' onClick={this.handleClick}>
        <View className='timeline-item__tail'></View>
        <View className='timeline-item__circle'></View>
        <View className='timeline-item__body'>
          <View className='timeline-item__summary'>
            <View className='timeline-item__title'>{date}</View>
            <View className='timeline-item__meta'>
              <Text className='timeline-item__date'>{title}</Text>
              {/* <Text>{location}</Text> */}
            </View>
          </View>
          {/* { subtitle && <View className='timeline-item__subtitle'>{subtitle}</View>} */}
          { type === 'IMG' &&  images.map(image => {
              return (
                <View key={image.title} className='timeline-item__media'>
                  <Image className='timeline-item__media' src={image.src}/>
                  <Text className='timeline-item__media-title'>{image.title}</Text>
                </View>
              )
            })
          }
          { type === 'VIDEO' &&  videos.map(video => {
              return (
                <View key={image.title} className='timeline-item__media'>
                  <Video className='timeline-item__media' src={video.src}/>
                  <Text className='timeline-item__media-title'>{video.title}</Text>
                </View>
              )
            })
          }
        </View>
      </View>
    )
  }
}
