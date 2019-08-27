import { importAll } from '@/utils/routerHelper.js'
import Home from './index.vue'

// 加载子路由
const ctx = require.context('./', true, /childRouter.js$/)
const childRoutes = importAll(ctx)

export default {
  path: 'home',
  component: Home,
  children: childRoutes,
  // 路由独享守卫
  beforeEnter (to, from, next) {
    next()
  }
}
