import http from './axios-config'
import mockData from './mock'
import qs from 'qs'

// 是否开启模拟数据
const mockSwitch = false

const api = {
  // GET方法示例
  getList () {
    if (mockSwitch) {
      return Promise.resolve(mockData.news)
    } else {
      return http.get('/api/getList')
        .then(res => {
          return Promise.resolve(res)
        })
        .catch(err => {
          return Promise.reject(err)
        })
    }
  },

  // POST方法示例(json)
  postData (data) {
    return http.post('/api/postData', data)
      .then(res => {
        return Promise.resolve(res)
      })
      .catch(err => {
        return Promise.reject(err)
      })
  },

  // POST方法示例(x-www-form-urlencoded)
  postData2 (data) {
    return http.post('/api/postData', qs.stringify(data))
      .then(res => {
        return Promise.resolve(res)
      })
      .catch(err => {
        return Promise.reject(err)
      })
  }

  // POST方法示例(form-data)
  // 直接传一个FormData对象即可
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
