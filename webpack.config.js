module.exports = {
    entry: "./js/index.js",
    output: {
        path: __dirname,
        filename: "dist/index.js"
    },
    devtool: 'inline-source-map',
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
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