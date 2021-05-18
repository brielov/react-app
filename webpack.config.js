const path = require("path");
const zlib = require("zlib");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const DotenvWebpackPlugin = require("dotenv-webpack");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

const isProd = process.env.NODE_ENV === "production";
const isDev = !isProd;

module.exports = {
  entry: path.resolve(__dirname, "src", "index.tsx"),

  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "build"),
  },

  mode: isDev ? "development" : "production",
  devtool: isDev ? "cheap-module-source-map" : false,

  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: [".js", ".ts", ".tsx"],
  },

  /**
   * Loaders
   */
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["swc-loader"],
        exclude: /node_modules/,
      },

      {
        // Regular CSS Files
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader, options: { publicPath: "" } },
          "css-loader",
          "postcss-loader",
        ],
        exclude: /\.module\.css$/,
      },

      {
        // PostCSS Modules
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader, options: { publicPath: "" } },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                compileType: "module",
                mode: "local",
                auto: true,
                localIdentName: "[hash:base64:5]",
                localIdentContext: path.resolve(__dirname, "src"),
              },
            },
          },
          "postcss-loader",
        ],
        include: /\.module\.css$/,
      },

      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },

      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
        exclude: /node_modules/,
      },
    ],
  },

  /**
   * Plugins
   */
  plugins: [
    isDev && new ReactRefreshWebpackPlugin(),

    new CleanWebpackPlugin(),
    new DotenvWebpackPlugin(),

    isProd &&
      new CompressionPlugin({
        filename: "[path][base].gz",
        algorithm: "gzip",
        test: /\.(js|css|html)$/,
        threshold: 10240,
        minRatio: 0.8,
      }),

    isProd &&
      new CompressionPlugin({
        filename: "[path][base].br",
        algorithm: "brotliCompress",
        test: /\.(js|css|html|svg)$/,
        compressionOptions: {
          params: {
            [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
          },
        },
        threshold: 10240,
        minRatio: 0.8,
      }),

    new NodePolyfillPlugin(),

    new CopyPlugin({
      patterns: [
        {
          from: "public",
          to: ".",
          globOptions: {
            ignore: ["**/index.html"],
          },
        },
      ],
    }),

    new MiniCssExtractPlugin({
      filename: "style.[contenthash].css",
      chunkFilename: "[id].css",
    }),

    new HtmlWebpackPlugin({
      filename: "index.html",
      publicPath: "/",
      template: path.resolve(__dirname, "public", "index.html"),
    }),

    isProd &&
      new WorkboxPlugin.GenerateSW({
        clientsClaim: true,
        skipWaiting: true,
        // In thevelopment, we set this to 5MB to account for un-purged tailwindcss styles.
        // Side note: This is no longer relevant since tailwind now supports JIT compilation.
        maximumFileSizeToCacheInBytes: isDev
          ? 5 * 1024 * 1024
          : 2 * 1024 * 1024,
      }),
  ].filter(Boolean),

  /**
   * Optimizations
   */
  optimization: {
    minimizer: !isDev
      ? [
          new TerserWebpackPlugin({
            terserOptions: {
              format: {
                comments: false,
              },
            },
            extractComments: false,
          }),
          new CssMinimizerPlugin(),
        ]
      : [],
  },

  /**
   * Dev server
   */
  devServer: {
    compress: true,
    historyApiFallback: true,
    host: "0.0.0.0",
    hot: true,
    https: process.env.HTTPS === "true",
    inline: true,
    overlay: { warnings: true, errors: true },
    port: 3000,
  },
};
