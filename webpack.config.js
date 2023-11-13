const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { name } = require("./package.json");

module.exports = {
    mode: "development",
    entry: {
        index: "./index.ts",
    },
    devtool: "inline-source-map",
    devServer: {
        static: "public",
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: name,
        }),
    ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "public"),
        clean: true,
        publicPath: "/",
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ["ts-loader"],
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js", ".json", ".wasm"],
    },
};
