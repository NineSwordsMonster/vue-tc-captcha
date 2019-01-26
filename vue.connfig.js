module.exports = {
  pages: {
    index: {
      entry: process.env.NODE_ENV === 'production' ? 'src/main.js' : 'src/components/index.js',
    },
  },
}
