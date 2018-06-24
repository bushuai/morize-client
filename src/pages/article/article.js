import Taro, { Component } from '@tarojs/taro'
import { View, Image, RichText } from '@tarojs/components'
import { fetchArticle } from '../../services/articleService'
import { Query } from '../../libs/av-weapp'
import Article from '../../models/Article'
import Heart from '../../assets/icons/heart.svg'
import HeartFill from '../../assets/icons/heart-fill.svg'
import './article.scss'

export default class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {
      article: null
    }
  }

  config = {
    navigationBarTitleText: '文章'
  }

  componentWillMount () {}

  async componentDidMount () {
    const query = new Query(Article)
    const { id } = this.$router.params
    const article = await query.get(id)
    this.setState({ article })
   }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  likeArticle = () => {
    const { liked } = this.state.article
    const article = Object.assign({ liked: !liked }, this.state.article)
    this.setState({ article })
  }

  render () {
    const { article } = this.state
    // const likeSection = article.liked
    //   ? (<Image className='article__like' src={HeartFill} mode='aspectFit' /> )
    //   : (<Image className='article__like' src={Heart} mode='aspectFit' />)
    return (
      <View className='article'>
        {
          article && (
            <View className='article-inner'>
              <Image 
                className='article__image'
                mode='widthFix'
                src={article.image} 
              />
              <View className='article__content'>
                <RichText nodes={article.content}></RichText>
              </View>
              {/* <View className='article__footer' onClick={this.likeArticle}>
                  { likeSection }
              </View> */}
            </View>
          )
        }
      </View>
    )
  }
}

