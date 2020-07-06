const  { createProxyMiddleware }  = require('http-proxy-middleware');

module.exports = function (app) {
  // proxy第一个参数为要代理的路由
  // 第二参数中target为代理后的请求网址，changeOrigin是否改变请求头，其他参数请看官网
  app.use(createProxyMiddleware('/api', {
    target: 'http://localhost:3000',
    changeOrigin: true,
    ws: true,
    pathRewrite: {
      '^/api': 'http://localhost:3000' //路径重写 (正常请求接口的简写)
    }
  }))
}