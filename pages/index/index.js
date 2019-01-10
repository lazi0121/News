const order = ['item1', 'item2', 'item3','item4','item5','item6','item7','item8']

Page({
  data: {
    className: [
      'green',
      'red',
      'blue'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 500
  },
  ToDetial:function(){
    wx.navigateTo({
      url: '../article/article',
    })
  },
  ToSearch:function(){
    wx.navigateTo({
      url: '../search/search',
    })
  },
  ChangeTag:function(){
    wx.navigateTo({
      url: '../tags/tags',
    })
  }
})