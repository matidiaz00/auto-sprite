const args = require('minimist')(process.argv.slice(2))
// npm run auto-sprite --img_input_dir=asd --img_output_dir=asd --css_output_dir=asd --config_dir=asd
const img_input_dir = args['img_input_dir'];
const img_output_dir = args['img_output_dir'];
const css_output_dir = args['css_output_dir'];
const config_dir = args['config_dir'];