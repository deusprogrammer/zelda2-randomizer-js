const fs = require('fs');
const { hexExtractor, generateMemoryMap } = require('./memory/HexTools');
const { NES_HEADER_MAP } = require('./nes/NESMemoryMappings');
const { WEST_HYRULE } = require('./zelda2/Z2MemoryMappings');
const { transformMapPointers, printDebugMap } = require('./zelda2/Z2Utils');

require('./Utils');

let rom = fs.readFileSync('./rom.nes');
let headers = hexExtractor(NES_HEADER_MAP, rom);

console.box("NES HEADERS");
console.table(headers);

let westHyrule = hexExtractor(WEST_HYRULE, rom);

console.box("WEST HYRULE LOCATIONS");
console.json(westHyrule);

let memoryMap = generateMemoryMap(WEST_HYRULE);

console.box("WEST HYRULE MEMORY MAP");
console.table(memoryMap);

let westHyruleMap = transformMapPointers(westHyrule);

console.box("WEST HYRULE MAP");
printDebugMap(westHyruleMap);