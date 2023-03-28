module.exports = {
    publicPath:
        process.env.NODE_ENV === 'production' ? '/shop-mall/' : '/',
    lintOnSave: false,
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.mjs$/,
                    include: /node_modules/,
                    type: "javascript/auto"
                },
            ]
        }
    }
};
