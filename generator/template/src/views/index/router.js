import { importAll } from '@/utils/routerHelper.js'
import Index from './index'
import Store from '@/store'

// 加载子路由
const ctx = require.context('./children', true, /childRouter.js$/)
const childRoutes = importAll(ctx)

export default {
  path: '/index',
  component: Index,
  children: childRoutes,
  // 路由独享守卫
  async beforeEnter (to, from, next) {
    await Store.dispatch('user/getUserInfo')
    next()
  }
}
