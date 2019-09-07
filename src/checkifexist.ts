import { img_input_dir, img_output_dir, css_output_file, config_file } from './variables';
import { error } from './error';
const fs = require('fs');

export function checkifexist() {
    if (config_file) {
        if (fs.existsSync(config_file)) {
            const config = JSON.parse(config_file);
            if (fs.existsSync(config.img_output_dir) && config.img_input_dir && config.css_output_file) return config;
            else error(401, 'The data in the configuration file is not correct.', config);
        } else error(401, 'The configuration file does not exist.', config_file);
    } else if (img_output_dir && img_input_dir && css_output_file) 
        if (fs.existsSync(img_output_dir)) return img_output_dir;
        else error(401, 'Can not find the icons folder.', img_output_dir);
    else error(401, 'The data in the command line is not correct. Check the instructions on the github page.', config_file);
};