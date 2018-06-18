import Taro, { Component } from '@tarojs/taro'
import { View, Image, RichText } from '@tarojs/components'
import './article.scss'
import { fetchArticle } from '../../services/articles';
import Smile from '../../assets/icons/smile.svg'

export default class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {
      article: null,
      nodes: '<h2>Hello wrold</h2><p>Hi there.</p>'
    }
  }

  config = {
    navigationBarTitleText: '文章'
  }

  componentWillMount () {}

  componentDidMount () {
    const { id } = this.$router.params
    fetchArticle(id)
    .then(article => {
      this.setState({ article })
    })
    .catch(error => console.log(error))
   }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { article } = this.state
    return (
      <View className='article'>
        {
          article && (
            <View className='article-inner'>
              <Image className='article__image'src={article.src}></Image>
              <View className='article__content'>
                <RichText className='article__content' nodes={this.state.article.content}></RichText>
              </View>
              <View className='article__footer'>
                <Image src={Smile} className='article__like'></Image>
              </View>
            </View>  
          )
        }
      </View>
    )
  }
}

