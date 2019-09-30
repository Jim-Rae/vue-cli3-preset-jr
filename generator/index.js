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
      "vuex-router-sync": "^5.0.0"
    }
  })

  if (options.type === 'pc') {
    // pc端配置
    api.extendPackage({
      dependencies: {
        "element-ui": "^2.11.1"
      },
      devDependencies: {
        'babel-plugin-component': '^1.1.1'
      },
      postcss: {
        "plugins": {
          "autoprefixer": {}
        }
      },
    })
  } else {
    // 移动端配置
    api.extendPackage({
      dependencies: {
        "vant": "^2.2.2",
        "viewport-units-buggyfill": "^0.6.2",
      },
      devDependencies: {
        "babel-plugin-import": "^1.12.2",
        "cssnano": "^4.1.10",
        "postcss-aspect-ratio-mini": "^1.0.1",
        "postcss-cssnext": "^3.1.0",
        "postcss-import": "^12.0.1",
        "postcss-px-to-viewport": "^1.1.1",
        "postcss-url": "^8.0.0",
        "postcss-viewport-units": "^0.1.6",
        "postcss-write-svg": "^3.0.1"
      },
      postcss: {
        "plugins": {
          "postcss-import": {},
          "postcss-url": {},
          "postcss-aspect-ratio-mini": {},
          "postcss-write-svg": {
            "utf8": false
          },
          "postcss-cssnext": {},
          "postcss-px-to-viewport": {
            "viewportWidth": 750,
            "viewportHeight": 1334,
            "unitPrecision": 3,
            "viewportUnit": "vw",
            "selectorBlackList": [
              ".ignore",
              ".hairlines",
              "van-"
            ],
            "minPixelValue": 1,
            "mediaQuery": false
          },
          "postcss-viewport-units": {},
          "cssnano": {
            "autoprefixer": false,
            "postcss-zindex": false
          }
        }
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
  api.render(options.type === 'pc' ? './template' : './template-m')

  // 阻止默认README.md文件生成
  api.onCreateComplete(() => {
    process.env.VUE_CLI_SKIP_WRITE = true
  })
}
