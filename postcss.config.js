// Postcss 的配置文件
module.exports = {
  plugins: {
    autoprefixer: {
      browsers: ['Android >= 4.0', 'iOS >= 8'],
    },
    // 将px转换成rem
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*'],
    },
  },
}
