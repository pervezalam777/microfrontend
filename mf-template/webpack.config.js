const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container
  .ModuleFederationPlugin;
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const deps = require('./package.json').dependencies;
let config = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3003,
    historyApiFallback: true,
    hot: false,
    hotOnly: false,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
      'X-Requested-With, content-type, Authorization',
    },
  },
  resolve: {
    extensions: ['.js', '.mjs', '.jsx']
  },
  output: {
    publicPath: 'auto',
    chunkFilename: '[id].[contenthash].js',
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.m?js$/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|ttf)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'spSellerCount',
      filename: 'remoteEntry.js',
      remotes: {
        'spSellerCount': 'spSellerCount@http://localhost:3003/remoteEntry.js',
        'spSharedLibrary': 'spSharedLibrary@http://localhost:4001/remoteEntry.js',
      },
      exposes: {
        './AppSellerCount': './src/AppSellerCount',
      },
      shared: [
        {
          ...deps,
          react: {
            singleton: true,
            requiredVersion: deps.react,
          },
          'react-dom': {
            singleton: true,
            requiredVersion: deps['react-dom'],
          },
        }
      ],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public',  'favicon.ico'),
        }
      ]
    }),
  ],
};

module.exports = (env, argv) => {
  if (argv.mode !== 'production') {
    config.devtool = 'eval-source-map';
  }
  return config;
};
