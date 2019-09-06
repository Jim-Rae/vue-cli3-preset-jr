<template>
  <div
    v-show="breadcrumb.length > 0"
    class="breadcrumb">
    <el-breadcrumb
      separator-class="el-icon-arrow-right">
      <el-breadcrumb-item
        v-for="(br, index) in breadcrumb"
        :key="index"
        :to="br.route">{{br.title}}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
import RouterHelp from '@/utils/routerHelper'
export default {
  name: 'Breadcrumb',
  data () {
    return {
      breadcrumb: []
    }
  },
  created () {
    this.generateBreadcrumb()
  },
  methods: {
    // 生成面包屑
    generateBreadcrumb () {
      const rt = this.$route
      // 没有meta相关的，直接返回
      if (!rt.meta || !rt.meta.breadcrumb || !rt.meta.breadcrumb.route || rt.meta.breadcrumb.route.length === 0) {
        this.breadcrumb = []
        return
      }
      const { route: chain } = rt.meta.breadcrumb

      const rs = []
      // 把路由打平
      let routes = RouterHelp.getFlattenRoutes()
      // 路由表中找出 匹配的路由配置
      routes = routes.filter(r => chain.includes(r.name))
      // 生成 {"name1": 路由对象1， "name2": 路由对象2}
      routes = routes.reduce((acc, r) => Object.assign(acc, { [r.name]: r }), {})
      // 生成面包屑数据
      chain.forEach(routeName => {
        const r = routes[routeName]
        const { path, name, meta: { breadcrumb: { title } } } = r
        // 路由表里的path可能为相对路径，只取path去跳转可能失败，故都取出来，优先使用name跳转
        const record = {
          route: { path, name },
          title
        }
        rs.push(record)
      })

      this.breadcrumb = rs
    }
  },
  watch: {
    $route () {
      this.generateBreadcrumb()
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/index';

.breadcrumb {
  padding: 20px;
}
</style>
