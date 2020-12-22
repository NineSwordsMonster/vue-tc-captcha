module.exports = {
  pages: {
    entry: 'examples/main.js',
    template: 'public/index.html',
    filename: 'index.html',
  },
  css: {
    extract: false,
  },

  chainWebpack: (config) => {
    config.module
      .rule('js')
      .include
      .add('/packages')
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => options)
      .end();
  },
};
