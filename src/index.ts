const System = require('systemjs');
System.config();
import { config_file } from './variables';
console.log(config_file);