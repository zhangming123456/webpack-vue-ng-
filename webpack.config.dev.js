var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer'),//添加私有前缀
    __DEV__ = false, //发布环境
    publicPath = '', //资源引用统一前缀
    devtool = '', //source-map模式
    plugins = require('./webpack.config.plugins');
process.env.NODE_ENV && (__DEV__ = (process.env.NODE_ENV.trim() === "dev"));
if (!__DEV__) {
    //js压缩
    plugins = plugins.concat([
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                warnings: false,
                screw_ie8: true
            },
            comments: false
        }),
        // 定义生产环境插件
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        })
    ]);
    devtool = 'source-map';
}


module.exports = {
    //入口文件配置
    entry: {
        app: path.join(__dirname, '/src/app/app.js'),
        vendors: ['vue', 'vue-router', 'vue-resource'],//Vue静态资源名
        //vendors: ['angular', 'angular-ui-router', 'angular-resource','angular-ui-bootstrap']//angular静态资源名
    },
    //文件导出的配置
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'js/bundle.[hash:6].js',
        publicPath: publicPath,
        chunkFilename: "chunks/[name].chunk.[chunkhash].js"
    },
    //加载器模块配置
    module: require('./webpack.config.module'),
    //插件配置
    plugins: plugins,
    //调试配置
    devtool: devtool
}