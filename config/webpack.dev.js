
var webpack = require('webpack');
var path = require("path");
var glob = require('glob');
var PurifyCSSPlugin = require("purifycss-webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var cleanWebpackPlugin = require('clean-webpack-plugin' );

module.exports = {
    mode: 'production',    // development发开环境，打包没有压缩    production生产环境，打包并压缩
    entry: {
        index: './src/js/index.js',    //  首页
        help: './src/js/help.js',    //  帮助中心
        about: './src/js/about.js',    //  关于我们
        notice: './src/js/notice.js',    //  芒果公告
        noticeDetails: './src/js/noticeDetails.js',    //  芒果公告详情
        jquery: 'jquery',
    },
    output: {
        path: path.resolve(__dirname, '../dist'),   //  打包的路径
        filename: 'js/[name][chunkhash].js'   //  打包文件名称
    },
    //  模块: 例如解读CSS，图片图和转换，压缩
    module: {
        rules: [
            {   //  处理CSS
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {   //  处理less
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"]
            },
            {   //  ES6转ES5
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query:
                {
                    presets: ['es2015'],
                    plugins: ['transform-runtime']
                }
            }
        ],
    },
    performance: {
        hints: false
    },
    //  插件，用于生产模版和各项功能
    plugins: [
        new cleanWebpackPlugin(['dist'], {
            root: path.resolve(__dirname, '../'),   //根目录
            verbose:  true,        　　　　　　　　　　//开启在控制台输出信息
        }),
        new webpack.ProvidePlugin({ //下载库
            $: 'jquery',
        }),
        new PurifyCSSPlugin({
            //这里配置了一个paths，主要是需找html模板，purifycss根据这个配置会遍历你的文件，查找哪些css被使用了。
            paths: glob.sync(path.join(__dirname, 'src/*.html')),
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',   //  模版html
            title: "芒果看点 - 看新闻赚果粒，让阅读更有价值",
            chunks: ['index', 'jquery'],  // 按需引入对应名字的js文件
            template: "./src/index.html"
        }),
        new HtmlWebpackPlugin({
            filename: 'help.html',   //  模版html
            title: "芒果看点怎么玩_如何提现_常见问题-芒果看点",
            chunks: ['help'],  // 按需引入对应名字的js文件
            template: "./src/help.html"
        }),
        new HtmlWebpackPlugin({
            filename: 'about.html',   //  模版html
            title: "关于我们_联系方式_商务合作-芒果看点",
            chunks: ['about'],  // 按需引入对应名字的js文件
            template: "./src/about.html"
        }),
        new HtmlWebpackPlugin({
            filename: 'notice.html',   //  模版html
            title: "官网公告_最新活动_app版本更新-芒果看",
            chunks: ['notice'],  // 按需引入对应名字的js文件
            template: "./src/notice.html"
        }),
        new HtmlWebpackPlugin({
            filename: 'notice/2018121201.html',   //  模版html
            chunks: ['noticeDetails'],  // 按需引入对应名字的js文件
            template: "./src/notice/2018121201.html"
        }),
        new HtmlWebpackPlugin({
            filename: 'notice/2018121202.html',   //  模版html
            chunks: ['noticeDetails'],  // 按需引入对应名字的js文件
            template: "./src/notice/2018121202.html"
        }),
        new HtmlWebpackPlugin({
            filename: 'notice/2018121203.html',   //  模版html
            chunks: ['noticeDetails'],  // 按需引入对应名字的js文件
            template: "./src/notice/2018121203.html"
        }),
        new HtmlWebpackPlugin({
            filename: 'notice/2018121204.html',   //  模版html
            chunks: ['noticeDetails'],  // 按需引入对应名字的js文件
            template: "./src/notice/2018121204.html"
        }),
    ],
    //  配置webpack开发服务功能
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'), //  设置基本路径结构
        host: '192.168.0.74',  //  服务器IP
        compress: true,  //  服务器压缩是否开启
        port: 8888, //  端口号
    }
}