const prodPlugin = [];
const isProd = process.env.VUE_APP_MODE === 'production';
if (isProd) {
  // 生产环境，自动清理掉打印的日志，但保留error 与 warn
  prodPlugin.push([
    'transform-remove-console',
    {
      exclude: ['error', 'warn']
    }
  ]);
}
module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [...prodPlugin]
};
