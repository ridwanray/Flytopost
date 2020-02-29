//entry -> output

const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },
        {
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]

        },
        {
            test: /\.(jpg|png|gif)$/i,
                loader: 'url-loader'
        },
        // {
        //     test: /\.css$/i,
        //     use: ['style-loader', 'css-loader'],
        // },
    
    ]
    },
    devtool: 'cheap-mudule-eval-source-map',
    devServer:{
        contentBase: path.join(__dirname, 'public')
    }
};