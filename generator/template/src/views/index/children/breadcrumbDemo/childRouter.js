// 路由分组打包
const Index = () => import(/* webpackChunkName: "breadcrumbDemo" */ './index')
const First = () => import(/* webpackChunkName: "breadcrumbDemo" */ './first')
const Second = () => import(/* webpackChunkName: "breadcrumbDemo" */ './second')

const indexRoute = ['index.breadcrumbDemo.index']

export default [
  {
    path: '/index/breadcrumbDemo/index',
    name: 'index.breadcrumbDemo.index',
    component: Index,
    meta: {
      breadcrumb: {
        title: '面包屑Demo',
        route: [...indexRoute]
      }
    }
  },
  {
    path: '/index/breadcrumbDemo/first',
    name: 'index.breadcrumbDemo.first',
    component: First,
    meta: {
      breadcrumb: {
        title: '第一个页面',
        route: [...indexRoute, 'index.breadcrumbDemo.first']
      }
    }
  },
  {
    path: '/index/breadcrumbDemo/second',
    name: 'index.breadcrumbDemo.second',
    component: Second,
    meta: {
      breadcrumb: {
        title: '第二个页面',
        route: [...indexRoute, 'index.breadcrumbDemo.second']
      }
    }
  }
]
