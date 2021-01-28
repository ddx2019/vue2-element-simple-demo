const path = require('path');
const resolve = (dir) => path.join(__dirname, './', dir);
const CompressionWebpackPlugin = require('compression-webpack-plugin');
//通过 VUE_APP_MODE变量 来区分环境，因为测试环境的 NODE_ENV 设置为了 production，方便打包后的目录结构和production相同
const isProd = process.env.VUE_APP_MODE === 'production';

module.exports = {
  publicPath: './',
  productionSourceMap: false,
  devServer: {
    // host: "0.0.0.0",
    disableHostCheck: true,
    open: true,
    port: 8080
    // proxy: {
    //   // 前提是 每一个请求的接口地址都有 /api ；要用这个proxy,需更改axios的baseUrl和.env开始的文件
    //   '/api': {
    //     target: process.env.VUE_APP_API_URL,
    //     ws: true,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // }
  },
  chainWebpack: (config) => {
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons')) // svg目录
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      });
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end();
  },
  configureWebpack: (config) => {
    if (isProd) {
      // 配置webpack 压缩
      config.plugins.push(
        new CompressionWebpackPlugin({
          test: /\.js$|\.html$|\.css$/,
          // 超过4kb压缩
          threshold: 4096
        })
      );
    }
  },
  css: {
    loaderOptions: {
      // scss变量
      sass: {
        prependData: `@import "@/assets/style/variable.scss" ;`
      },
      less: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
  },
  outputDir: process.env.outputDir // 打包生成的文件夹名称
};
