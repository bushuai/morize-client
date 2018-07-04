export const fetchRecentTimeline  = () => {
  return [
    {
      title: '深圳',
      date: '2019-01-01',
      src: '/assets/item-image.jpg',
      images: [
        {
          title: '广场舞',
          src: '/assets/item-image.jpg'
        }
      ],
      type: 'IMG',
      remark: 'remark',
      content: 'xxx',
      location: 'Dong Guan',
      subtitle: ''
    },
    {
      title: '南澳',
      date: '2019-02-01',
      videos: [
        {
          title: '南澳岛',
          src: 'http://www.w3school.com.cn//i/movie.mp4'
        }
      ],
      type: 'VIDEO',
      remark: 'remark',
      content: 'xxx',
      location: 'Shan Tou'
    }
  ]
}
