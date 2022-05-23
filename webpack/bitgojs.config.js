module.exports = {
  resolve: {
    fallback: {
      constants: false,
      dns: false,
      fs: false,
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      http2: require.resolve('stream-http'),
      net: false,
      os: false,
      path: false,
      stream: require.resolve('stream-browserify'),
      tls: false,
      url: require.resolve('url/'),
      vm: false,
      zlib: false,
    },
  },
  externals: ['morgan', 'superagent-proxy'],
  plugins: [],
  node: {
    global: true,
  },
};
