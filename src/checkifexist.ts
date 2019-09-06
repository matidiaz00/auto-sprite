import { img_input_dir, img_output_dir, css_output_file, config_file } from './variables';
import { error } from './error';
const fs = require('fs');

export function checkifexist() {
    if (config_file) {
        if (fs.existsSync(config_file)) {
            const config = JSON.parse(config_file);
            if (fs.existsSync(config.img_output_dir) && config.img_input_dir && config.css_output_file) return 'level_medium';
            else error('The data in the configuration file is not correct.');
        } else error('The configuration file does not exist.');
    } else if (img_output_dir && img_input_dir && css_output_file) 
        if (fs.existsSync(img_output_dir)) return 'level_basic';
        else error('Can not find the icons folder.');
    else error('The data in the command line is not correct. Check the instructions on the github page.');
};