/**
 * 动态导入路由配置
 * @param {*} ctx require.context 生成的上下文对象，用于自动导入
 */
export const importAll = ctx => {
  let routes = []
  ctx.keys().forEach((file) => {
    // 获取到配置
    let route = ctx(file).default
    // 可能是数组或者对象
    route = Array.isArray(route) ? route : [route]
    // 添加进路由缓存
    routes.push(...route)
  })
  return routes
}
