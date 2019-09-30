import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

// 加载modules文件夹里的vuex模块
let modules = {}
const ctx = require.context('./modules', true, /\.js$/)
ctx.keys().forEach(key => {
  const name = key.replace('./', '').replace('.js', '')
  const module = ctx(key).default
  modules[name] = module
})

export default new Vuex.Store({
  modules,

  // 在非production模式中开启strict模式
  strict: debug,
  // 在非production模式中使用日志插件
  plugins: debug ? [createLogger()] : []
})
