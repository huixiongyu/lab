const webpack = require('webpack');
const config = require('./webpack.prd.config');

webpack(config, (err, stats) => {
    if(err || stats.hasErrors()){
       console.log(err);
       return ; 
    }

    console.log(stats.toString({
        chunks: false,
        colors: true
    }))
})