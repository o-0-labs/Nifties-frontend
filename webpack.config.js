const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const Dotenv = require('dotenv-webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const isDevelopment = process.env.NODE_ENV !== "production";

const frontendDirectory = "nifities_assets";

const asset_entry = path.join("src", frontendDirectory, "src", "index.html");

// 环境变量配置
function initEnvConfigPath() {
  const development = path.resolve(__dirname, './.env.dev'); // 开发环境配置
  const production = path.resolve(__dirname, './.env.prod'); // 正式环境配置

  return isDevelopment ? development : production;

};
const envConfigPath = initEnvConfigPath();

const config = {
  target: "web",
  mode: isDevelopment ? "development" : "production",
  entry: {
    // The frontend.entrypoint points to the HTML file for this build, so we need
    // to replace the extension to `.js`.
    index: path.join(__dirname, asset_entry).replace(/\.html$/, ".tsx"),
  },
  devtool: isDevelopment ? "source-map" : false,
  optimization: {
    minimize: !isDevelopment,
    minimizer: [new TerserPlugin()],
    splitChunks: {
      cacheGroups: {
        default: false,
        style: {
          name: 'style_c',
          test: /\.css$/,
          chunks: 'all',
        },
        antd: {
          name: 'antd',
          test: /[\\/]node_modules[\\/](antd|rc-*|@ant-design)/,
          chunks: 'all',
          priority: 11,
          enforce: true,
          reuseExistingChunk: true,
        },
        common: {
          name: 'common',
          test: /[\\/]src[\\/]nifities_assets[\\/]src[\\/](components|utils)/,
          chunks: 'all',
          priority: 10,
          minChunks: 2,
          enforce: true,
          reuseExistingChunk: true,
        },
        pagesCommon: {
          name: 'pagesCommon',
          test: /[\\/]src[\\/]nifities_assets[\\/]src[\\/](pages)/,
          chunks: 'all',
          priority: 8,
          minChunks: 3,
          enforce: true,
          reuseExistingChunk: true,
        },
      }
    }
  },
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx"],
    fallback: {
      assert: require.resolve("assert/"),
      buffer: require.resolve("buffer/"),
      events: require.resolve("events/"),
      stream: require.resolve("stream-browserify/"),
      util: require.resolve("util/"),
    },
    alias: {
      store: path.resolve(__dirname, 'src/nifities_assets/src/store'),
      components: path.resolve(__dirname, 'src/nifities_assets/src/components'),
      static: path.resolve(__dirname, 'src/nifities_assets/src/static'),
      pages: path.resolve(__dirname, 'src/nifities_assets/src/pages'),
      utils: path.resolve(__dirname, 'src/nifities_assets/src/utils'),
      api: path.resolve(__dirname, 'src/nifities_assets/src/api'),
      contract: path.resolve(__dirname, 'src/nifities_assets/src/smartcontract'),
    }
  },
  output: {
    // filename: "index.js",
    // path: path.join(__dirname, "dist", frontendDirectory),
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: isDevelopment ? '[name].js' : 'js/[name].[contenthash:8].js',
    chunkFilename: isDevelopment ? '[name].js' : 'js/[name].[contenthash:8].js',
  },

  // Depending in the language or framework you are using for
  // front-end development, add module loaders to the default
  // webpack configuration. For example, if you are using React
  // modules and CSS as described in the "Adding a stylesheet"
  // tutorial, uncomment the following lines:
  module: {
    rules: [
      { test: /\.(ts|tsx|jsx)$/, loader: "ts-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader", 'postcss-loader'] },
      {
        test: /\.(scss|sass)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              importLoaders: 1,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                sourceMap: false,
              },
            },
          },
          // 自动为每个scss文件注入公共scss变量
          // {
          //   loader: 'sass-resources-loader',
          //   options: {
          //     resources: [
          //       path.resolve(__dirname, 'src/nifities_assets/src/style/color.scss')
          //     ]
          //   }
          // }
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                modifyVars: {
                  'primary-color': '#00BCC2',
                  'link-color': '#00BCC2',
                  'success-color': '#52c41a',
                  'warning-color': '#faad14',
                  'error-color': '#f5222d',
                  'font-size-base': '16px',
                  'heading-color': '#04091E',
                  'text-color': 'rgba(0, 0, 0, 0.65)',
                  'text-color-secondary': 'rgba(10, 6, 6, 0.45)',
                  'disabled-color': 'rgba(0, 0, 0, 0.25)',
                  'border-radius-base': '2px',
                  'border-color-base': '#d9d9d9',
                  'box-shadow-base': '0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
                },
                javascriptEnabled: true,
              },
            }
          },
        ]
      },
      // Common Image Formats
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // (表示100kb以下的文件转换成base64编码)
          },
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css',
      chunkFilename: '[id].[contenthash:8].css',
      ignoreOrder: true,
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, asset_entry),
      cache: false,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.join(__dirname, "src", frontendDirectory, "assets"),
          to: path.join(__dirname, "dist"),
        },
      ],
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: "development",
    }),
    new webpack.ProvidePlugin({
      Buffer: [require.resolve("buffer/"), "Buffer"],
      process: require.resolve("process/browser"),
    }),
    new Dotenv({
      // path: path.resolve(__dirname, './.env'), // 配置文件路径
      path: envConfigPath, // 根据环境配置文件路径
      safe: false, // load .env.example (defaults to "false" which does not use dotenv-safe)
    }),
  ],
  // proxy /api to port 8000 during development
  devServer: {
    hot: true,
    watchFiles: [path.resolve(__dirname, "src", frontendDirectory)],
    liveReload: true,
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'axios': 'axios',
  },
  devtool: 'source-map',
};

if (process.env.MODE === 'analysis') {
  config.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = config