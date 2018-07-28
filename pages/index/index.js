const weatherMap = {
  'sunny': '晴天',
  'cloudy': '多云',
  'overcast': '阴',
  'lightrain': '小雨',
  'heavyrain': '大雨',
  'snow': '雪'
}

Page({
  data: {
    nowTemp: '14°',
    nowWeather: '阴天'
  },
  onLoad: function() {
    wx.request({
      url: 'https://test-miniprogram.com/api/weather/now?city=上海市',
      data: {
      },
      success: res => {
        let result = res.data.result
        let temp = result.now.temp
        let weather = result.now.weather
        console.log(temp, weather)
        this.setData({
          nowTemp: temp + "*",
          nowWeather: weatherMap[weather]
        })
      }
    })
  }
})