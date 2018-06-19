//logs.js
const util = require('../../utils/util.js')
Page({
  data: {
    routeInfo: {
      startLat: 30.291331,    //起点经度 选填
      startLng: 120.212998,    //起点纬度 选填
      startName: "杭州车站",   // 起点名称 选填
      endLat: 30.406110,    // 终点经度必传
      endLng: 120.305010,  //终点纬度 必传
      endName: "临平南站",  //终点名称 必传
      mode: "car"  //算路方式 选填
    }
  },
  onLoad: function () {
    
  },
  onShow:function(){
    let plugin = requirePlugin("myPlugin");
  }
})
