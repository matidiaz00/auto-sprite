var rimraf = require("rimraf");
var compressor = require('node-minify');

compressor.minify({
    compressor: 'uglifyjs',
    input: './dist/REMOVE_THIS/*.js',
    output: './dist/auto-sprite.min.js',
    callback: function(err, min) {
        rimraf("./dist/REMOVE_THIS", function () {
            console.log("The library was compiled correctly.");
        });
    }
});