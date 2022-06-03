const path = require('path');
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
	path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module:{
		rules:[
			{
				test:/\.(jpg|png|mp3)$/,
				 use: [
          {
            loader: 'file-loader',
            options: {name: '[name][hash:5].[ext]'}
          }
        ]
			},
			{
				test:/\.js$/,
				exclude: /node_modules/,
				 use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
				
			}

			
		]
	}
  
};

