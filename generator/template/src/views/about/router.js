// 路由分组打包
const Index = () => import(/* webpackChunkName: "about" */ './index')
const AboutA = () => import(/* webpackChunkName: "about" */ './aboutA')

export default [
  {
    path: '/about/index',
    name: 'about.index',
    component: Index
  },
  {
    path: '/about/aboutA',
    name: 'about.aboutA',
    component: AboutA
  }
]
