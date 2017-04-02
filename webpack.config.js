
const fs = require('fs'); 
const path = require('path');




const CopyWebpackPlugin = require('copy-webpack-plugin');

// configure source and distribution folder paths
const srcFolder = 'src';
const distFolder = 'dist';

// merge the common configuration with the environment specific configuration
module.exports = {

    // entry points for the three bundles, order does not matter
    entry: {
        'app': './src/app.js'
    },

    // allows us to require modules using
    // import { someExport } from './my-module';
    // instead of
    // import { someExport } from './my-module.ts';
    // with the extensions in the list, it can be omitted from the import
    // root is an absolute path to the folder containing our application modules
    resolve: {
        modules: [
            path.join(__dirname,srcFolder, 'js'),
            "node_modules"
        ],
        extensions: ['.js', '.json'], // order matters, resolves left to right
    },

    module: {
        rules: [
            // process all JavaScript files through the Babel preprocessor
            // this enables support for ES2017 and earlier including modules
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['react', 'latest'],
                        plugins: ['transform-class-properties', 'transform-flow-strip-types']
                    }
                },
            },
            {
                test: /\.json$/,
                use: 'json-loader',
            },
            // transpiles global SASS stylesheets
            // loader order is executed right to left
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    }, 
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: "url-loader?limit=10000&mimetype=application/font-woff",
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: 'file-loader',
            },
        ]
    },

    // copy the index.html file directly when they are changed
    plugins: [
        new CopyWebpackPlugin([{
            from: path.join(__dirname, srcFolder, 'static', 'index.html'),
            to: path.join(__dirname, distFolder, 'index.html')
        }])
    ],

    // output file settings
    // path points to web server content folder where the web server will serve the files from
    // file name is the name of the files, where [name] is the name of each entry point	
    output: {
        path: path.join(__dirname, distFolder, 'js'),
        filename: '[name].js'
    },

    // use full source maps
    // this specific setting value is required to set breakpoints in the TypeScript
    // in the web browser for development
    // other source map settings do not allow debugging in browser and vscode
    devtool: 'source-map',

    externals: {
        'cheerio': 'window',
        'react/addons': 'react',
        'react/lib/ExecutionEnvironment': 'react',
        'react/lib/ReactContext': 'react',
    },

    // use the webpack dev server to serve up the web application
    devServer: {
        // files are served from this folder
        contentBase: 'dist',
        outputPath: path.join(__dirname, 'dist'),
        // support HTML5 History API for react router
        historyApiFallback: true,
        // listen to port 5000, change this to another port if another server 
        // is already listening on this port
        port: 5000,
    }
};