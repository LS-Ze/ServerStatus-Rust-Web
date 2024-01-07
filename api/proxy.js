// api/proxy.js
// 该服务为 vercel serve跨域处理
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = (req, res) => {
    let target = ''
    // 代理目标地址
    // 这里使用 backend 主要用于区分 vercel serverless 的 api 路径
    // target 替换为你跨域请求的服务器 如： http://gmall-h5-api.atguigu.cn
    if (req.url.startsWith('/json/stats.json')) {
        target = 'http://check.lsdns.top/json/stats.json'
    }
    // 创建代理对象并转发请求
    createProxyMiddleware({
        target,
    })(req, res)
}
