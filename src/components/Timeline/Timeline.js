import Taro, { Component } from '@tarojs/taro'
import { View, Video, Image } from '@tarojs/components'
import Time from '../../assets/icons/time.png'
import Location from '../../assets/icons/location.png'
import './timeline.scss'

export default class Timeline extends Component {
  render () {
    const { type, src, date, images, videos, title, content, subtitle, location } = this.props.timeline
    return (
      <View className='timeline-item'>
        <View className='timeline-item__tail'></View>
        <View className='timeline-item__circle'></View>
        <View className='timeline-item__body'>
          <View className='timeline-item__summary'>
            <View className='timeline-item__title'>{title}</View>
            <View className='timeline-item__meta'>
              <Image src={Time}/> <Text>{date}</Text>
              <Image src={Location}/> <Text>{location}</Text>
            </View>
          </View>
          { subtitle && <View className='timeline-item__subtitle'>{subtitle}</View>}
          { type === 'IMG' &&  images.map(image => {
              return (
                <View className='timeline-item__media'>
                  <Image className='timeline-item__media' src={image.src}/>
                  <Text className='timeline-item__media-title'>{image.title}</Text>
                </View>  
              )
            })
          }
          { type === 'VIDEO' &&  videos.map(video => {
              return (
                <View className='timeline-item__media'>
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