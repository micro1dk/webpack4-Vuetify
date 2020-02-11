const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugins = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use:
        {
          loader: 'file-loader',
        }
      },
      {
        test: /\.css$/,
        loader: 'css-loader'
      },
      {
        test: /\.s(c|a)ss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            // Requires sass-loader@^8.0.0
            options: {
              implementation: require('sass'),
              sassOptions: {
                fiber: require('fibers'),
                indentedSyntax: true // optional
              },
            },
          },
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugins({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new VueLoaderPlugin(),
    new VuetifyLoaderPlugin()
  ],
  mode: 'development',
  resolve: {
      extensions: ['.js','.vue'],
  },
}