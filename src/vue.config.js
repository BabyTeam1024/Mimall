module.exports = {
    devServer:{
        host:'localhost',
        port:8080,   
        compress: true,
        disableHostCheck: true,
        proxy:{
            '/api':{
                target:'http://127.0.0.1:8800',
                changeOrigin:true,
                pathRewrite:{
                    '^/api':''
                }
            }
        }
    }
}