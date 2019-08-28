module.exports = {
  presets: [
    '@vue/app'
  ]<%_ if (options.element) { _%>,
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
  <%_ } _%>

}
