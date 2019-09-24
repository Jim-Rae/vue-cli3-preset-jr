// 不常用路由组件单独打包
const Index = () => import(/* webpackChunkName: "index" */ './index.vue')

export default {
  path: '/index',
  name: 'index',
  component: Index,

  // 路由独享守卫
  beforeEnter (to, from, next) {
    next()
  }
}
