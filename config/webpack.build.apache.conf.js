const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.conf");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const buildWebpackConfig = merge(baseWebpackConfig, {
    mode: "production",
    output: {
        /*
            * якщо потрібно абсолютний шлях до імтортованих файлів js та css в index.html
            * значення publicPath: "/", якщо відносне publicPath: "./"
            * ячкщо проект розгортається на Apache publicPath: "/", в іншову випадку буде помилка при роутах з параметрами
            * параметр продубльований з webpack.base.conf оскільки при dev розробці потрібно значення publicPath: "/"
        */
        publicPath: "/",
    },
    plugins: [
        // This plugin will delete all files inside `output.path` (the dist directory),
        // but the directory itself will be kept.
        // https://github.com/johnagan/clean-webpack-plugin
        new CleanWebpackPlugin(),
        /*
            * для Apache серверу потрібен index.php файл який ми дублюємо з index.html
        */
        new HtmlWebPackPlugin({
            hash: false,
            template: `${baseWebpackConfig.externals.paths.src}/index.html`,
            filename: "./index.php"
        }),
        /*
            * для Apache серверу
        */
        new CopyWebpackPlugin([
            { from: `${baseWebpackConfig.externals.paths.src}/static-apache`, to: `` },
        ])
    ]
});

module.exports = new Promise((resolve, reject) => {
    resolve(buildWebpackConfig);
});
