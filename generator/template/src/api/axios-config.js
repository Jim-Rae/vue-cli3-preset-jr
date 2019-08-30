// Axios详细配置请阅读 https://www.kancloud.cn/yunye/axios/234845

import axios from 'axios'

const http = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'http://www.jimrae.com' : '',
  timeout: 10000
})

// 请求拦截
http.interceptors.request.use(config => {
  const method = config.method.toLowerCase()
  // 加入请求时间戳，避免从缓存中拿数据
  if (method === 'get') {
    if (!config.params) config.params = {}
    config.params._t = Date.now()
  }
  return config
}, error => {
  return Promise.reject(error)
})

// 返回拦截
http.interceptors.response.use(response => {
  // 对接口返回做统一处理, 这里要跟后台约定好接口异常返回的数据格式
  const codeMap = {
    '401': { isInvalidToken: true },
    '404': { message: '接口不存在' },
    '500': { message: '服务器失联了，请稍候再试' },
    '5001': { message: '服务器失联了，请稍候再试' }
  }
  return codeMap[response.data.code] ? Promise.reject(codeMap[response.data.code]) : Promise.resolve(response.data)
}, error => {
  return Promise.reject(error)
})

export default http
