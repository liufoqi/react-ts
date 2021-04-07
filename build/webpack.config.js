// const webpack =require('webpack')
const rules =require('./rules')
const plugins =require('./plugins')
const {resolve}=require('./utils.js')
const tsconfigPathsWebpackPlugin=require('tsconfig-paths-webpack-plugin')
module.exports={
    entry: { app: resolve('src/index.tsx') },
    output: {
        path:resolve('dist'),
        filename:'js/[name].js'
    },
    resolve: {
        extensions:['.ts','.tsx','.jsx','.js'],
        plugins:[
          new tsconfigPathsWebpackPlugin(
            {
              configFile:resolve('tsconfig.json')
            }
           )
        ],
    },
    module: {
      rules:rules
    },
    plugins:plugins
}