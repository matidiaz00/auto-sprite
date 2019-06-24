const args = require('minimist')(process.argv.slice(2))
// npm run auto-sprite --img_input_dir=asd --img_output_dir=asd --css_output_file=asd --config_file=asd
export const img_input_dir = args['img_input_dir'];
export const img_output_dir = args['img_output_dir'];
export const css_output_file = args['css_output_file'];
export const config_file = args['config_file'];