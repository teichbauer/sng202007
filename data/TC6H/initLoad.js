import LDManager from '../../LDManager.js';
import { pas } from './initial/pas.js';
import fs from 'fs';
import beautify from "json-beautify";

let nameMap = {};
let loader = new LDManager('TC6H', nameMap);

function saveMap(map){
    let data = beautify(nameMap, null, 2, 80);
    fs.writeFileSync('./initial/map.json', data);
}

loader.load_ents(pas);

saveMap(nameMap);