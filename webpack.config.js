const nodeExternals = require('webpack-node-externals');
const path = require('path');

let libCatalog = path.resolve('./lib');

module.exports = {
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    mode: "production",
    output: {
        path: libCatalog,
        filename: 'index.js',
        library: 'intellijJTest',
        libraryTarget: 'umd',
        devtoolModuleFilenameTemplate: '[absolute-resource-path]'
    },
    target: "node",
    module: {
        rules: [
            {
                use: 'ts-loader',
                test: /\.ts?$/
            },
            {
                test: /\.node$/,
                use: 'node-loader'
            }
        ]
    }
};
