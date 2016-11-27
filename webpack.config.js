module.exports = {
    // source-map,具有最好的source map，但是它会减慢打包文件的构建速度；
    // cheap-module-source-map	, 提高项目构建速度，但只能对应到具体的行，
    // eval-source-map，不影响构建速度的前提下生成完整的sourcemap，但有性能和安全的隐患，注意不要用于线上！！！
    // cheap-module-eval-source-map
    devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项

    entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/public",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },
    // Loaders:
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: 'json',
            },
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                loader: 'babel',
                query: {presets: ['es2015', 'react']},
            },
        ]
    },

    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        colors: true,//终端中输出结果为彩色
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    },
}