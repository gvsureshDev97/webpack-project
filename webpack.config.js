const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = "development"

if (process.env.NODE_ENV === "production") {
    mode = "production"
}

module.exports = {
    mode,
    entry:"./src/index.js",
    output:{
        filename:"main.js",
        path:path.resolve(__dirname, "public")

    },
    module:{
        rules:[
            {
                test:/\.s?css$/i,
                use:[MiniCssExtractPlugin.loader, "css-loader","postcss-loader", "sass-loader"]
            },
            {
             test:/\.js$/,
             exclude:/node_modules/,
             use:{ loader:"babel-loader"}
            }
        ]
    },
    plugins:[new MiniCssExtractPlugin()],
    devtool:"source-map",
    devServer:{
        contentBase:"./public",
        port:3000,
        hot:true
    }
}