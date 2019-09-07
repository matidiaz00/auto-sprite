import { img_input_dir, img_output_dir, css_output_file, config_file } from './variables';
import { error } from './error';
import * as fs from 'fs';

interface data {
    img_output_dir: string;
    img_input_dir: string;
    css_output_file: string;
}

function whenEverythingIsCorrect(type:"config"|"inlineCommand", data:data) {
    console.log(`El comando del tipo ${type} paso todas las instancias.`)
    console.log("Los datos son los siguientes: ", data)
}

function ifIconsFolder(type:"config"|"inlineCommand", dir:string, data:any) {
    //No compatible files were found in the icons folder, only accepted with the extension "png", "jpg" and "gif".
    if (fs.readdirSync(dir).length > 0) whenEverythingIsCorrect(type, data)
    else error(401, 'The icons directory is empty.', dir);
}

function ifParseJSONConfigFile(file:any) {
    const config:any = JSON.parse(file);
    if (config.img_output_dir && config.img_input_dir && config.css_output_file) ifIconsFolder("config", config.img_input_dir, config)
    else error(401, 'The data in the configuration file is not correct.', config);
}

function ifConfigFile(config_file:string) {
    if (fs.existsSync(config_file)) {
        const file = fs.readFileSync(config_file, 'utf-8');
        if (JSON.parse(file)) ifParseJSONConfigFile(file)
        else error(401, 'It is not possible to parse the configuration file.', config_file);
    } else error(401, 'The configuration file does not exist.', config_file);
}

function ifInlineCommand(req:data) {
    if (fs.readdirSync(req.img_input_dir)) ifIconsFolder("inlineCommand", req.img_input_dir, req)
    else error(401, 'Can not find the icons folder.', req.img_input_dir);
}

export function checkifexist() {
    if (config_file) ifConfigFile(config_file)
    else if (img_output_dir && img_input_dir && css_output_file) {
        const data:data = {
            img_output_dir: img_output_dir,
            img_input_dir: img_input_dir,
            css_output_file: css_output_file
        };
        ifInlineCommand(data)
    } else error(401, 'The data in the command line is not correct. Check the instructions on the github page.', config_file);
};