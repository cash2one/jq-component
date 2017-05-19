var webpack = require('webpack');
var open = require('open');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

// 相当于通过本地node服务代理请求到了http://cnodejs.org/api
var proxy = [{
    path: '/api/*',
    target: 'https://cnodejs.org',
    host: 'cnodejs.org'
}];

//启动服务
var server = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    proxy: proxy,
    stats: {
        colors: true
    },
});

//将其他路由，全部返回index.html
server.app.get('*', function(req, res) {
    res.sendFile(__dirname + '/index.html')
});

// server.listen(3000);
server.listen(3000, function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Listening at http://localhost:3000');
});

open('http://localhost:3000', 'chrome');