// 搜索当前目录下符合命名的 vue 组件，注册为全局Vue组件

import Vue from 'vue'

const components = require.context('./', true, /\.vue$/)

components.keys().forEach(key => {
  const component = components(key).default
  // 获取vue组件的name值或vue文件名作为注册组件名
  const name = component.name || key.replace(/.*\//g, '').replace(/\.vue/, '')
  Vue.component(name, component)
})
