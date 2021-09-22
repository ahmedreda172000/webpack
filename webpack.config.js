const path =require   ("path")
const MiniCssExtractplugin= require ("mini-css-extract-plugin")
const HtmlWebpackPlugin = require ('html-webpack-plugin')
const { loader } = require("mini-css-extract-plugin")
module.exports ={
    entry :"./app/app.js",
    output :{
        filename : "bundule.js",
        path: path.resolve(__dirname ,"dist")
    },
    devServer:{
        port: 8080,
    },
    mode:"development",
    plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, "public", "index.html"),
        }),
      ],
      module: {
        rules: [
          {
            test: /\.css$/,
            use:["style-loader","css-loader"]
         
          },
          {
            test:/\.js$/,
            exclude : /(node_modules | bower_components)/,
            use: {
              loader: "babel-loader",
              options : {
                presets :["@babel/preset-env","@babel/preset-react"]
              }
            } 
      
          }
        ]
      },
}