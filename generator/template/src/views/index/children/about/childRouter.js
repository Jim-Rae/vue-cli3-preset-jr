// 路由分组打包
const Index = () => import(/* webpackChunkName: "about" */ './index')

export default [
  {
    path: '/index/about/index',
    name: 'index.about.index',
    component: Index
  }
]
