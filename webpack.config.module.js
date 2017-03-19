var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    rules: [
        //angular模板所需加载器
        // {
        //     test: /\.html$/,
        //     loader: 'raw-loader'
        // },
        //Vue模板所需加载器
        {
            test: /\.vue$/,
            exclude: /node_modules/,
            loader: 'vue-loader',
            options: {
                // vue模板中css加装私有前缀
                postcss: [
                    require('./postcss.config')
                ]
            }
        },
        //单独css打包
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    'css-loader',
                    //css加载私有前缀
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                    require('precss'),
                                    require('./postcss.config')
                                ];
                            }
                        }
                    }
                ]
            })
        },
        {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader!postcss-loader!sass-loader"
            })
        },
        {
            test: /\.less$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader!postcss-loader!less-loader"
            })
        },
        //图片加载器
        {
            test: /\.(png|jpg|jpeg|gif)$/,
            loader: 'url-loader?limit=88474&name=images/[name].[ext]'
        },
        //图标文字加载器
        {
            test: /\.(eot|woff|ttf|woff2|svg)(\?.*$|$)$/,
            loader: 'url-loader?limit=88474&name=fonts/[name].[ext]'
        },
        //js代码检查加载器
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'eslint-loader',
            options: {
                configFile: '.eslintrc.js'
            }
        },
        //ES6、ES7、jsx转化ES5
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: "babel-loader"
                }
            ]
        }
    ]
};