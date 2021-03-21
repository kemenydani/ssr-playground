const path = require('path');

module.exports = {
    target: 'node',
    entry: {
        blog : './src/pages/blog/index.js'
    },
    output: {
        filename: '[name].page.bundle.js',
        path: path.resolve(__dirname, 'build/public'),
        publicPath: './build/public'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
    }
}
