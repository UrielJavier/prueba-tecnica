import path from 'path';
import webpack from 'webpack';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envKeys = (env) => Object.keys(env).reduce((prev, next) => {
  prev[`${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

const webpackConfig = (env) => ({
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "build"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
    new webpack.DefinePlugin({process: { env: envKeys(env)}})
  ],
  module: {
    // exclude node_modules
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      { 
        test: /\.(ts|tsx)$/, 
        loader: "ts-loader" 
      },
      {
        test: /\.css$/,
        use: [
          {loader: "style-loader"},
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
      }
    ]
  },
  resolve: {
    extensions: [".*", ".js", '.jsx', ".ts", '.tsx'],
      alias: {
        '@components': path.resolve(__dirname, 'src/components/index'),
        '@models': path.resolve(__dirname, 'src/models/index'),
        '@pages': path.resolve(__dirname, 'src/pages/index'),
        '@actions': path.resolve(__dirname, 'src/redux/actions/actions'),
        '@reducers': path.resolve(__dirname, 'src/redux/reducers/reducers'),
        '@sagas': path.resolve(__dirname, 'src/redux/sagas/sagas'),
        '@types': path.resolve(__dirname, 'src/redux/types/types'),
      },
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    port: 3000,
    historyApiFallback: { index: "/", disableDotRule: true },
  }
});

export default webpackConfig;