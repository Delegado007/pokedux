const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    pathinfo: false
  },
  mode: 'production',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.png/,
        type: './src/assets'
      },
      {
        test: /\.css$/,
        use: 'css-loader'
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html'
    }),
    // new WebpackPwaManifestPlugin({
    //   publicPath: "/",
    //   name: 'Petgram - Tu web de fotos para mascotas',
    //   short_name: 'Petgram',
    //   start_url: 'https://petgram-delegado.netlify.app',
    //   display: 'fullscreen',
    //   crossorigin: null,
    //   prefer_related_applications: true,
    //   description: 'Con petgram puedes encontrar fotos de animales muy bonitos',
    //   background_color: '#fff',
    //   theme_color: '#b1a',
    //   icons: [
    //     {
    //       src: path.resolve('src/assets/icon.png'),
    //       sizes: [96, 128, 192, 256, 384, 512]
    //     },
    //     {
    //       src: path.resolve('src/assets/touch-icon.png'),
    //       size: '180x180',
    //       type: 'image/png',
    //       purpose: 'maskable'
    //     }
    //   ]
    // }),
    // new WorkboxWebpackPlugin.GenerateSW({
    //   runtimeCaching: [
    //     {
    //       urlPattern: new RegExp('https://(res.cloudinary.com|images.unsplash.com)'),
    //       handler: 'CacheFirst',
    //       options: {
    //         cacheName: 'images'
    //       }
    //     },
    //     {
    //       urlPattern: new RegExp('https://api-petgram-875dq86v1-delegado007.vercel.app'),
    //       handler: 'NetworkFirst',
    //       options: {
    //         cacheName: 'api'
    //       }
    //     }
    //   ]
    // }),
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       from: path.resolve(__dirname, "src", "assets"),
    //       to: "assets"
    //     }
    //   ]
    // }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
    ]
  }
}
