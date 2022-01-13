const { COOKIE, ALL_IN } = require('./lib/config')
const message = require('./lib/message')

if (!COOKIE) {
  message('获取不到cookie，请检查设置')
} else {
  const api = require('./lib/api')(COOKIE)

  // 获取可抽奖次数
  async function get_raw_time(){
    const res = await api.get_cur_point()
    return Math.floor(res / 200)
  }

  // 抽奖一次
  async function draw() {
    const res = await api.draw()
    message(`抽奖成功，获得：${res.lottery_name}`)
    return res
  }

  // 抽所有
  async function draw_all(){
    const time = await get_raw_time()
    message(`梭哈, 可抽奖次数${time}`)
    if(!time){
      message(`抽奖完成`)
    }

    for(let i = 0; i < time; i++) {
      await draw()
    }

    if(await get_raw_time()){
      draw_all()
    }
  }


  // 获取当前积分数
  async function get_cur_point(){
      const res = await api.get_cur_point()
      message(`当前矿石为：${res}`);
  }

  api.check_in().then(() => {
    api.dip_lucky().then((res)=>{
        if (res &&  res.data && res.data.total_value) {
            let xiqi = res.data.total_value;
            message(`沾喜气成功，幸运值：${xiqi}`);
        }
        draw()
    })
  }).finally(()=>{
      get_cur_point();
  })
}
