var webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),//自动生成html插件
    ExtractTextPlugin = require('extract-text-webpack-plugin'),//分离.css文件
    CleanWebpackPlugin = require('clean-webpack-plugin'),//删除dist文件
    NgAnnotatePlugin = require('ng-annotate-webpack-plugin'); //自动注入注解插件

module.exports = [
    new HtmlWebpackPlugin({
        title: '测试程序', //改变title的名称,
        filename: 'index.html',//最后生成的html名称
        template: __dirname + '/src/template/index.html',//生成html所需要的模板
        minify: {
            //通过minify对原有的html进行压缩
            removeAttributeQuotes: true,//去除引用属性
            collapseWhitespace: true,//去除所有的空格
            removeComments: true,//去除所有的注释
        },
        hash:true
    }),
    //分离第三方组件
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendors',
        filename: 'js/vendor.[hash:6].js'
    }),
    new ExtractTextPlugin('./css/style.[hash:6].css'),
    new NgAnnotatePlugin({
        add: true
    }),
    new CleanWebpackPlugin(['dist'])
];