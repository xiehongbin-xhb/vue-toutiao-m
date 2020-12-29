// Postcss 的配置文件
module.exports = {
  plugins: {
    // 自动添加浏览器前缀
    // Vue CLI autoprefixer
    // autoprefixer: {
      // browsers 用来配置要兼容到系统（浏览器）环境
    //   browsers: ['Android >= 4.0', 'iOS >= 8'],
    // },
    // 将px转换成rem
    'postcss-pxtorem': {
      // 转换的根元素基准值
      // 正常情况下下 按照设计稿来
      rootValue: 37.5,
      propList: ['*'],// 需要转换的css属性，*代表通配符,其他可选值 'font-size'
    },
  },
}
