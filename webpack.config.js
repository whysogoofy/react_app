const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
        output: {
            path: path.join(__dirname, '/dist'),
            filename: 'index.bundle.js',
            publicPath: '/',
        },
        // devServer: {
        //     port: 3000,
        //     watchContentBase: true,
        // },
        devServer:{
            static: path.resolve(__dirname, 'src'),
            port: 3000,
            historyApiFallback: true,
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.scss$/,
                    use: [
                        // MiniCssExtractPlugin.loader,
                        'style-loader',
                        'css-loader',
                        'sass-loader',
                    ]
                }
            ]
        },
        // plugins: [new MiniCssExtractPlugin()]
        plugins: [
            new HtmlWebpackPlugin({
              template: "src/index.html", // to import index.html file inside index.js
            }),
          ],
}