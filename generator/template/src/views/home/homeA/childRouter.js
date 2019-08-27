// 路由分组打包
const Index = () => import( /* webpackChunkName: "home" */ './index');
const SubA = () => import( /* webpackChunkName: "home" */ './subA');
const SbuB = () => import( /* webpackChunkName: "home" */ './subB');

export default [
  {
    path: '/home/homeA/index',
    name: 'home.homeA.index',
    component: Index
  },
  {
    path: '/home/homeA/subA',
    name: 'home.homeA.subA',
    component: SubA
  },
  {
    path: '/home/homeA/subB',
    name: 'home.homeA.subB',
    component: SbuB
  }
]
