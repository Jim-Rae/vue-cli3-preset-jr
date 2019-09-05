// 路由分组打包
const HomeA = () => import(/* webpackChunkName: "home" */ './homeA')
const HomeB = () => import(/* webpackChunkName: "home" */ './homeB')

export default [
  {
    path: '/index/home/homeA',
    name: 'index.home.homeA',
    component: HomeA,
    meta: {
      breadcrumb: {
        title: 'HomeA',
        route: ['index.home.homeA']
      }
    }
  },
  {
    path: '/index/home/homeB',
    name: 'index.home.homeB',
    component: HomeB,
    meta: {
      breadcrumb: {
        title: 'HomeB',
        route: ['index.home.homeA', 'index.home.homeB']
      }
    }
  }
]
