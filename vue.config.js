module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.styl(us)?$/,
          use: [
            {
              loader: "stylus-loader",
              options: {
                data: ""
              }
            }
          ]
        }
      ]
    }
  }
}