// 当前项目的配置文件
// 导入 path 核心模块
const path = require("path");
// 导入插件
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

// 添加配置
module.exports = {
  // 配置入口
  entry: "./src/main.js",
  // 配置出口
  output: {
    path: path.resolve(__dirname, "dist"), // 出口所在的目录
    filename: "main.js" // 生成的出口的名字
  },
  // 配置项目的模式：
  mode: "development",
  // 配置源码映射
  devtool: 'source-map',
  // 配置 resolve
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    },
    extensions: ['.js', '.vue', '.css']
  },
  // 添加一个 Loaders 的配置
  module: {
    // loader 配置的规则
    rules: [
      // 给后缀名为 .vue 的文件添加 loader 配置
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      // 给后缀名为 .css 的文件添加 loader 配置
      {
        test: /\.css$/,
        use: [
          "style-loader", // 在页面中的 header 中添加一个 style 标签，并且将样式添加进入
          "css-loader" // 将 css 文件中的内容直接打包到 dist/main.js 中
        ]
      },
      // 给后缀名为 .less 的文件添加 loader 配置
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          "less-loader" // 将 less 语法转为 css 语法
        ]
      },
      // 给后缀名为 .scss 的文件添加 loader 配置
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader" // 将 sass 语法转为 css 语法
        ]
      },
      // 给图片文件添加 loader 配置
      {
        test: /\.(jpg|gif|png|svg)$/,
        use: ["file-loader"]
      },
      // 给字体图标添加 Loader 的配置
      {
        test: /\.(ttf|woff2|woff|eot)$/,
        use: ["file-loader"]
      },
      // 将 ES6 打包为 ES5
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  // 配置插件
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "自己生成的 html",
      template: path.resolve(__dirname, "index.html")
    }),
    new VueLoaderPlugin()
  ],
  // 配置服务器
  devServer: {
    // 将 dist 目录运行为一个服务器
    contentBase: "./dist",
    // 模块的热替换
    hot: true
  }
};
