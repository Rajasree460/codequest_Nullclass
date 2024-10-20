module.exports = {
  plugins: {
    'postcss-nested': {},
    'postcss-custom-media': {
      // eslint-disable-next-line no-sparse-arrays
      importFrom: [
        {
          customMedia: { '--m': '(min-width: 640px)' }
        },
        ,
        {
          customMedia: { '--t': '(min-width: 980px)' }
        }
      ]
    }
  }
}
