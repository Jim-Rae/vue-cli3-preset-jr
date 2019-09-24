import Vue from 'vue'

// 自动将当前文件夹的插件挂载到Vue中
const ctx = require.context('./', true, /install.js$/)
ctx.keys().forEach(file => {
  Vue.use(ctx(file).default)
})
