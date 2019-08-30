import http from './axios-config'
// import mockData from './mock'
import qs from 'qs'

// 是否开启模拟数据
// const mockSwitch = false

const api = {
  // GET方法示例（简洁配置）
  getList: () => http.get('/api/getList'),

  // GET方法示例（细粒度配置）
  // getList () {
  //   // 是否使用模拟数据
  //   if (mockSwitch) {
  //     return Promise.resolve(mockData.news)
  //   } else {
  //     // 对返回数据进行过滤或操作
  //     return http.get('/api/getList')
  //       .then(res => {
  //         // 根据实际情况处理成功返回的数据
  //         // 如：
  //         // if (res.status) {
  //         //   return Promise.resolve(res.list)
  //         // } else {
  //         //   return Promise.resolve(res.list2)
  //         // }
  //         return Promise.resolve(res)
  //       })
  //       .catch(err => {
  //         return Promise.reject(err)
  //       })
  //   }
  // },

  // POST方法示例(json)
  postData: data => http.post('/api/postData', data),

  // POST方法示例(x-www-form-urlencoded)
  postData2: data => http.post('/api/postData', qs.stringify(data)),

  // POST方法示例(form-data)
  // 直接传一个FormData对象即可

  // 登录
  login: data => http.post('/api/login', data),

  // 获取用户信息
  getUserInfo: () => http.get('/api/getUserInfo')

}

export default {
  install (Vue) {
    Vue.mixin({
      created () {
        this.$_api = api
      }
    })
  }
}

export { api as Api }
