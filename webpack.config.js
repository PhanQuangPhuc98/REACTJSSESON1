const path=require( "path" );
const MiniCssExtractPlugin=require( "mini-css-extract-plugin" );
const HtmlWebpackPlugin=require( 'html-webpack-plugin' );
const TerserPlugin=require( 'terser-webpack-plugin' );
const ImageMinimizerPlugin=require( "image-minimizer-webpack-plugin" );
module.exports={
    mode: 'development',
    entry: "./src/index.tsx",
    output: {
        path: path.resolve( __dirname, "build" ),
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [{
            use: 'babel-loader',
            test: /\.js$/,
            exclude: '/node_modules/'
        },
        {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
            test: /\.(js|jsx)$/,
            exclude: [/node_modules/, /vendor/],
            use: {
                loader: "babel-loader",
                options: {
                    presets: [
                        '@babel/preset-env',
                        "@babel/preset-react",
                        "@babel/preset-typescript"
                    ]
                },
            }
        },
        {
            test: /\.tsx|ts?$/,
            use: 'babel-loader',
            exclude: [/node_modules/]
        },
        {
            test: /\.(jpe?g|png|gif|svg)$/i,
            type: "asset",
        },
        ]
    },
    optimization: {
        minimizer: [new TerserPlugin( {
            extractComments: false,
        } )],
    },

    plugins: [
        new MiniCssExtractPlugin(),
        new ImageMinimizerPlugin( {
            test: /\.(jpe?g|png|gif|svg)$/i,
        } ),
        new HtmlWebpackPlugin( {
            template: path.resolve( __dirname, './index.html' )
        } )
    ],
    devServer: {
        contentBase: path.join( __dirname, 'build' ),
        compress: true,
        port: 3000,
    },

}