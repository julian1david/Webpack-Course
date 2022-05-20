const path = require('path'); //Ya viene disponible en node
//add plugin a nuestro proyecto
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');


//Exportar un objeto con la configuracion deseada.
module.exports = {
    //punto de entrada de la app
    entry: './src/index.js',
    //Hacia donde va a salir nuestro webpack
    output: {
        //Con esto va a saber en donde se encuentra nuestor proyecto
        path: path.resolve(__dirname, 'dist'), //dist = distribution
        //Name al resultante de js
        filename: '[name].[contenthash].js',
        assetModuleFilename: 'assets/images/[hash][ext][query]',
    },
    mode: 'development',
    watch: true,
    resolve: {
        //Establecer que extensiones vamos a usar ejemplo en react (JSX)
        extensions: ['.js'],
        alias: {
            '@utils' : path.resolve(__dirname, 'src/utils/'),
            '@templates' : path.resolve(__dirname, 'src/templates/'),
            '@styles' : path.resolve(__dirname, 'src/styles/'),
            '@images' : path.resolve(__dirname, 'src/assets/images/'),
        }
    },
    //Add configuracion de babel
    module: {
        rules: [
            //Reglas que vamos a establecer para trabajr con archvos
            {
                //Es importante trabajar con expresiones regulares
                //El test nos permite saber que tipo de extensiones voy a trabajar
                test: /\.m?js$/,   //utiliza cualqquier extension que sea mjs (modules) o js  
                //Ahora vamos a excluir 
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.s?css$/i,
                use: [MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2)$/,
                type: "asset/resource",
                generator: {
                    filename: "assets/fonts/[name].[contenthash].[ext]"
                }
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            //El body es apra que inserte el script al final
            inject: 'body',
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/[name].[contenthash].css'
        }),
        /* new CopyPlugin({
            //Cuales son los elementos ausar
            patterns: [
                {
                    from: path.resolve(__dirname, "src", "assets/images"),
                    to: "assets/images",
                }
            ]
        }) */
        new Dotenv(),
    ],
}