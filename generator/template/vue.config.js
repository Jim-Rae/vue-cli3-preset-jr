// 具体配置说明请阅读官方文档 https://cli.vuejs.org/zh/config/#vue-config-js

module.exports = {
  // 部署应用包时的基本 URL。
  publicPath: process.env.NODE_ENV === 'production'
    ? '/dist/'
    : '/',

  // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录。
  outputDir: 'dist',

  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: 'static',

  // 是否需要生产环境的 source map。
  productionSourceMap: false,

  // 简单调整webpack配置
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  },

  // 链式配置
  chainWebpack: config => {
    // config.module
    //   .rule('vue')
    //   .use('vue-loader')
    //     .loader('vue-loader')
    //     .tap(options => {
    //       // 修改它的选项...
    //       return options
    //     })
  },

  // 配置devServer
  devServer: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://jimrae.top',
        changeOrigin: true
        // pathRewrite: {'^/api' : ''}
      }
    }
  }
}
