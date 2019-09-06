module.exports = (api, options, rootOptions) => {

  // 扩展package.json
  api.extendPackage({
    scripts: {
      "serve": "vue-cli-service serve --open",
      "build": "vue-cli-service build",
      "lint": "vue-cli-service lint"
    },
    dependencies: {
      "axios": "^0.19.0",
      "qs": "^6.8.0",
      "vuex-router-sync": "^5.0.0",
      // 使用3.0.7版本，避免出现重复跳转相同路由时控制台抛出NavigationDuplicated错误
      "vue-router": "^3.0.7"
    }
  })

  if (options.type === 'pc') {
    api.extendPackage({
      dependencies: {
        "element-ui": "^2.11.1"
      },
      devDependencies: {
        'babel-plugin-component': '^1.1.1'
      }
    })
  }

  // 删除 vue-cli3 默认目录
  api.render(files => {
    Object.keys(files)
      .filter(path => path.startsWith('src/') || path.startsWith('public/'))
      .forEach(path => delete files[path])
  })

  // 生成项目模板
  api.render('./template')

  // 阻止默认README.md文件生成
  api.onCreateComplete(() => {
    process.env.VUE_CLI_SKIP_WRITE = true
  })
}
