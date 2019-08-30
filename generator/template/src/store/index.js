import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import user from './modules/user'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    user
  },

  // 在非production模式中开启strict模式
  strict: debug,
  // 在非production模式中使用日志插件
  plugins: debug ? [createLogger()] : []
})
