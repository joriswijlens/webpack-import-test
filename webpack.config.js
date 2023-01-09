module.exports = {
    mode: "production",
    target: 'node',
    entry: {
        test: './src/test.js',
        help: './src/help.js'
    },
    output: {
        filename: "[name].js"
    }
}