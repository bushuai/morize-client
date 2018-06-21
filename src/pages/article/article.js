import Taro, { Component } from '@tarojs/taro'
import { View, Image, RichText, Button } from '@tarojs/components'
import { fetchArticle } from '../../services/articleService'
import Heart from '../../assets/icons/heart.svg'
import HeartFill from '../../assets/icons/heart-fill.svg'
import './article.scss'

export default class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {
      article: null,
      nodes: `
      <h2 style="font-weight: normal;margin: 20px 0;">Hello wrold</h2>
      <p style="line-height: 1.8;">Adipisicing minim consectetur adipisicing esse ea ut ullamco.</p>
      <p style="line-height: 1.8;">Nulla enim ut eu Lorem duis consectetur sint aute deserunt ad elit. Velit tempor qui nisi ea in proident. Dolor qui nisi voluptate proident ipsum voluptate esse excepteur ut consectetur ea dolor amet anim. Sint exercitation officia reprehenderit ipsum ex aliqua veniam nulla consectetur aliquip voluptate. Sunt ex nostrud anim non incididunt cupidatat aliqua ex voluptate deserunt aute minim. Culpa aliquip commodo magna aute ipsum culpa adipisicing occaecat laboris ut exercitation dolor id sit.</p>`
    }
  }

  config = {
    navigationBarTitleText: '文章'
  }

  componentWillMount () {}

  async componentDidMount () {
    const { id } = this.$router.params
    const article = await fetchArticle(id)
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
    const likeSection = article.liked
      ? (<Image plain className='article__like' src={HeartFill} /> )
      : (<Image plain className='article__like' src={Heart} />)
    return (
      <View className='article'>
        {
          article && (
            <View className='article-inner'>
              <Image className='article__image'src={article.src}></Image>
              <View className='article__content'>
                <RichText nodes={this.state.nodes}></RichText>
              </View>
              <View className='article__footer' onClick={this.likeArticle}>
                  { likeSection }
              </View>
            </View>
          )
        }
      </View>
    )
  }
}

