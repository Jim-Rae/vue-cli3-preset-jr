// Axios详细配置请阅读 https://www.kancloud.cn/yunye/axios/234845

import axios from 'axios'

const http = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'http://jimrae.top' : '',
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
http.interceptors.response.use((response) => {
  // 对接口返回做统一处理, 这里要跟后台约定好接口异常返回的数据格式
  /* 下面处理仅针对返回格式如下的后台接口
   * {
   *    code: 200 | 400 | 401 | ...,
   *    data: {},
   *    message: "信息说明
   * }
  */
  switch (response.data.code) {
    /* eslint-disable */
    case 200: return Promise.resolve(response.data.data)
    case 400: return Promise.reject({ message: response.data.message })
    case 401: router.push({ name: 'login' }); return Promise.reject()
    default: return Promise.reject({ message: '服务器失联了，请稍候再试' })
    /* eslint-enable */
  }
}, error => {
  return Promise.reject(error)
})

export default http
