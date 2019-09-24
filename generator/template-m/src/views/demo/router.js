// 同一功能页面的路由统一打包

const Index = () => import(/* webpackChunkName: "demo" */ './index/index.vue')
const AjaxDemo = () => import(/* webpackChunkName: "demo" */ './ajaxDemo/index.vue')

export default [
  {
    path: '/demo',
    name: 'demo',
    component: Index
  },
  {
    path: '/ajaxDemo',
    name: 'ajaxDemo',
    component: AjaxDemo
  }
]
