const path = require('path');

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
             test:/\.js$/,
             exclude:/node_modules/,
             use:{ loader:"babel-loader"}
            }
        ]
    },
    devtool:"source-map",
    devServer:{
        contentBase:"./public"
    }
}