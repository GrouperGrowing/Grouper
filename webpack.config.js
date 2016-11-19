var path = require('path');
module.exports = {
    entry: "./js/index.js",
    output: {
        path: __dirname,
        filename: "./dist/index.js"
    },
    devtool: 'inline-source-map',
    module: {
        loaders: [
            //{ test: /\.css$/, loader: "style!css" },
            { test: /\.css$/, loader: "style-loader!css-loader?root=." },
            { test: /\.png$/, loader: "url-loader?limit=100000" },
            { test: /\.jpg$/, loader: "file-loader" },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            }
        ]
    },
    sassLoader: {
        includePaths: [path.resolve(__dirname, "./sass")]
    }
};