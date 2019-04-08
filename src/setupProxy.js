const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('/api', {
                target:'https://m.douyu.com/api',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                },
        }));
};