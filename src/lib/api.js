const request = require('./request')

module.exports = function (cookie, checkParam) {
  return {
    check_in: function () {
      return request({
        method: 'POST',
          url: 'https://api.juejin.cn/growth_api/v1/check_in' + checkParam,
        headers: {
          cookie,
        },
      })
    },
    draw: function () {
      return request({
        method: 'POST',
        url: 'https://api.juejin.cn/growth_api/v1/lottery/draw',
        headers: {
          cookie,
        },
      })
    },
    get_cur_point: function () {
      return request({
        method: 'GET',
        url: 'https://api.juejin.cn/growth_api/v1/get_cur_point',
        headers: {
          cookie,
        },
      })
    },
    dip_lucky: function () {
      return request({
        method: 'POST',
        url: 'https://api.juejin.cn/growth_api/v1/lottery_lucky/dip_lucky',
        headers: {
          cookie,
        },
        data:{
            lottery_history_id:'7261307244375965755'
        }
      })
    },
  }
}
