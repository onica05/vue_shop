const { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const {ElementPlusResolver} = require('unplugin-vue-components/resolvers')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        Components: '@/components'
      }
    },
  //配置webpack 自动按需引入element-plus
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver({importStyle:false})],
      }),
      Components({
        resolvers: [ElementPlusResolver({importStyle:false})],
      }),
    ],
  },

})