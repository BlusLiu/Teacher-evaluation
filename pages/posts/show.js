//定义一个数据集合
let posts = [
  {
    title: '舒老师',
    content: '开设课程xxx'
  },
  {
    title: '刘老师',
    content: '开设课程xxx'
  },
  {
    title: '李老师',
    content: '开设课程xxx'
  }
]

let post = posts[1]

//随机生成一个不大于3的下标



Page({

  /**
   * 页面的初始数据
   */
  data: {
    post: post
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let n = options['id'] - 1
    console.log(n);
    this.setData({
      post: posts[n]
    })
  }
}
)