// 路由分组打包
const Index = () => import(/* webpackChunkName: "scrollDemo" */ './index')

export default [
  {
    path: '/index/scrollDemo/index',
    name: 'index.scrollDemo.index',
    component: Index,
    meta: {
      breadcrumb: {
        title: '滚动条Demo',
        route: ['index.scrollDemo.index']
      }
    }
  }
]
