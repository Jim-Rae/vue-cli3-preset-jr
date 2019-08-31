// 不常用路由组件单独打包
const Login = () => import(/* webpackChunkName: "login" */ './index')

export default {
  path: '/login',
  name: 'login',
  component: Login,

  // 路由独享守卫
  beforeEnter (to, from, next) {
    next()
  }
}
