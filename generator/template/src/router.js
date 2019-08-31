import Vue from 'vue'
import Router from 'vue-router'
import { importAll } from '@/utils/routerHelper.js'

// 全局路由
class GlobalRouter {
  constructor () {
    // 路由表
    this._routes = []
    // 初始化
    this.init()
    return this._routes
  }

  init () {
    Vue.use(Router)

    // 设置默认路由
    this.setDefaultRoute()
    // 设置导入的路由
    this.setImportRoute()
  }

  // 设置默认路由
  setDefaultRoute () {
    // 默认路由
    const defaultPath = [
      // 任意路由
      {
        path: '*',
        redirect: '/'
      },
      // 默认路由
      {
        path: '/',
        redirect: '/index/home/homeA'
      }
    ]
    this._routes.push(...defaultPath)
  }

  // 设置导入的路由
  setImportRoute () {
    // webpack文档规定： require.context参数只接收字面量，不要用变量去控制
    const ctx = require.context('./views', true, /router.js$/)
    let routes = importAll(ctx)
    this._routes.push(...routes)
  }
}

const instance = new Router({
  routes: new GlobalRouter()
})

instance.beforeEach((to, from, next) => {
  next()
})

export default instance
