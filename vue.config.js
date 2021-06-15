// const ENV = process.env.NODE_ENV;
module.exports = {
    devServer: {
        proxy: {
            '/ajax': {
                target: 'https://m.maoyan.com',
                // ws: true,
                changeOrigin: true
            },
            '/api': {
                target: 'https://rijb.api.storeapi.net',
                // ws: true,
                changeOrigin: true
            }
        }
    },
    // publicPath: ENV === "development" ? "" : "/miaomiao/"
    publicPath: './'
}