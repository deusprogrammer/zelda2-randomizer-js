const fs = require('fs');
const { 
    hexExtractor, 
    hexArrayExtractor } = require('./memory/HexTools');
const { 
    NES_HEADER_MAP } = require('./nes/NESMemoryMappings');
const { 
    OVERWORLD_SPRITE_MAPPING, 
    OVERWORLD_SPRITE_SYMBOLS, 
    EAST_HYRULE_LOCATION_MAPPINGS,
    EAST_HYRULE_MAP_RANDO_OFFSET,
    EAST_HYRULE_MAP_LENGTH,
    WEST_HYRULE_LOCATION_MAPPINGS, 
    WEST_HYRULE_MAP_RANDO_OFFSET, 
    WEST_HYRULE_MAP_LENGTH, 
    EAST_HYRULE_MAP_VANILLA_OFFSET,
    WEST_HYRULE_MAP_VANILLA_OFFSET} = require('./zelda2/Z2MemoryMappings');
const { 
    printDebugMap, printSpriteMap } = require('./zelda2/Z2Utils');

require('./Utils');

let filename = process.argv[2] || './rom.nes';
let mode = process.argv[3] || 'VANILLA';

let WEST_HYRULE_MAP_OFFSET = WEST_HYRULE_MAP_VANILLA_OFFSET;
let EAST_HYRULE_MAP_OFFSET = EAST_HYRULE_MAP_VANILLA_OFFSET;
if (mode === "RANDO") {
    WEST_HYRULE_MAP_OFFSET = WEST_HYRULE_MAP_RANDO_OFFSET;
    EAST_HYRULE_MAP_OFFSET = EAST_HYRULE_MAP_RANDO_OFFSET;
}

console.log("Processing " + filename);

let rom = fs.readFileSync(filename);
let headers = hexExtractor(NES_HEADER_MAP, rom);

console.box("NES HEADERS");
console.table(headers);

let westHyruleMap = hexExtractor(WEST_HYRULE_LOCATION_MAPPINGS, rom);

console.box("WEST HYRULE MAP LOCATIONS [DATA]");
console.table(westHyruleMap);

let westHyruleSpriteMap = hexArrayExtractor(OVERWORLD_SPRITE_MAPPING, rom, WEST_HYRULE_MAP_OFFSET, WEST_HYRULE_MAP_OFFSET + WEST_HYRULE_MAP_LENGTH);

console.box("WEST HYRULE SPRITE MAP [GRAPHICAL]");
printSpriteMap(westHyruleSpriteMap, westHyruleMap);

let eastHyruleMap = hexExtractor(EAST_HYRULE_LOCATION_MAPPINGS, rom);

console.box("EAST HYRULE MAP LOCATIONS [DATA]");
console.table(eastHyruleMap);

let eastHyruleSpriteMap = hexArrayExtractor(OVERWORLD_SPRITE_MAPPING, rom, EAST_HYRULE_MAP_OFFSET, EAST_HYRULE_MAP_OFFSET + EAST_HYRULE_MAP_LENGTH);

console.box("EAST HYRULE SPRITE MAP [GRAPHICAL]");
printSpriteMap(eastHyruleSpriteMap, eastHyruleMap);