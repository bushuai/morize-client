import Taro, { Component } from '@tarojs/taro'
import { View, Button, Textarea, Input, Image } from '@tarojs/components'
import AV from '../../libs/av-weapp'
import Article from '../../models/Article'

export default class Admin extends Component {
  config = {
    navigationBarTitleText: 'Morize - 后台管理'
  }

  constructor (props) {
    super(props)
    this.state  = {
      image: null,
      article: {
        title: '',
        content: ''
      }
    }
  }

  updateLocation = () => {
    console.log('uploading location...')
  }

  uploadImage = async () => {
    const params = {
      count: 1,
      sizeType: [ 'original' ],
      sourceType: [ 'album' ]
    }

    const { tempFiles } = await Taro.chooseImage(params)
    const image = tempFiles[0]
    this.setState({ image })
  }

  handleArticleChange = event => {
    const { prop } = event.target.dataset
    const { value } = event.target
    const article = { ...this.state.article }
    article[prop] = value
    this.setState({ article })
  }

  publishArticle = async () => {
    // const { article } = this.state 
    // const file = new AV.File.withURL('hello-world.jpg', this.state.image.path)
    // const savedImage = await file.save()
    // const newArticle = new Article({ ...article, image: 'http://7xpe2z.com1.z0.glb.clouddn.com/IMG_7279.jpg' })
    // const savedArticle = await newArticle.save()
  }

  render () {
    const { image } = this.state
    return (
      <View>
        <View>ADMIN</View>
        <View>
          <Button onClick={this.updateLocation}>上报位置</Button>
        </View>

         <View>
          <Input
            data-prop='title'
            type='text' 
            value={this.state.article.title} 
            onChange={this.handleArticleChange} 
            placeholder='正文标题'
          />

          <Input
            data-prop='subtitle'
            type='text' 
            value={this.state.article.subtitle} 
            onChange={this.handleArticleChange} 
            placeholder='副标题'
          />

          <Textarea
            data-prop='content'
            value={this.state.article.content} 
            autoHeight 
            style='padding: 0 30px;min-height: 80px;background-color: #fff;' 
            onInput={this.handleArticleChange} 
            placeholder='正文内容'
          />
          {
            image && <Image src={image.path}></Image>
          }
          <Button onClick={this.uploadImage}>添加头图</Button>
          <Button onClick={this.publishArticle}>发布</Button>
        </View>
      </View>
    )
  }
}