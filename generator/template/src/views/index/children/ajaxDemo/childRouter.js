// 路由分组打包
const Index = () => import(/* webpackChunkName: "ajaxDemo" */ './index')

export default [
  {
    path: '/index/ajaxDemo/index',
    name: 'index.ajaxDemo.index',
    component: Index,
    meta: {
      breadcrumb: {
        title: '异步数据请求Demo',
        route: ['index.ajaxDemo.index']
      }
    }
  }
]
