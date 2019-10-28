module.exports = {
    webpack(config, option) {
        config.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader',
        })

        return config
    }
}
