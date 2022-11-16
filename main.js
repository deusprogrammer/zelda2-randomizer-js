const fs = require('fs');
const { 
    hexExtractor, 
    generateMemoryMap, 
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
    WEST_HYRULE_MAP_LENGTH } = require('./zelda2/Z2MemoryMappings');
const { 
    transformMapPointers, 
    printDebugMap } = require('./zelda2/Z2Utils');

require('./Utils');

let filename = process.argv[2] || './rom.nes';

console.log("Processing " + filename);

let rom = fs.readFileSync(filename);
let headers = hexExtractor(NES_HEADER_MAP, rom);

console.box("NES HEADERS");
console.table(headers);

let westHyrule = hexExtractor(WEST_HYRULE_LOCATION_MAPPINGS, rom);
let westHyruleMemoryMap = generateMemoryMap(WEST_HYRULE_LOCATION_MAPPINGS);

console.box("WEST HYRULE MEMORY MAP");
console.table(westHyruleMemoryMap);

let westHyruleMap = transformMapPointers(westHyrule);

console.box("WEST HYRULE MAP LOCATIONS");
console.table(westHyruleMap);

let westHyruleSpriteMap = hexArrayExtractor(OVERWORLD_SPRITE_MAPPING, rom, WEST_HYRULE_MAP_RANDO_OFFSET, WEST_HYRULE_MAP_RANDO_OFFSET + WEST_HYRULE_MAP_LENGTH);

console.box("WEST HYRULE SPRITE MAP [DATA]");
console.table(westHyruleSpriteMap);

console.box("WEST HYRULE SPRITE MAP [GRAPHICAL]");
let i = 0;
for (let sprite of westHyruleSpriteMap) {
    for (let j = 0; j < sprite.LENGTH + 1; j++) {
        if (i++ % 64 === 0) {
            console.log();
        }
        process.stdout.write(OVERWORLD_SPRITE_SYMBOLS[sprite.TYPE]);
    }
}

let eastHyrule = hexExtractor(EAST_HYRULE_LOCATION_MAPPINGS, rom);
let eastHyruleMemoryMap = generateMemoryMap(EAST_HYRULE_LOCATION_MAPPINGS);

console.box("EAST HYRULE MEMORY MAP");
console.table(eastHyruleMemoryMap);

let eastHyruleMap = transformMapPointers(eastHyrule);

console.box("EAST HYRULE MAP LOCATIONS");
console.table(eastHyruleMap);

let eastHyruleSpriteMap = hexArrayExtractor(OVERWORLD_SPRITE_MAPPING, rom, EAST_HYRULE_MAP_RANDO_OFFSET, EAST_HYRULE_MAP_RANDO_OFFSET + EAST_HYRULE_MAP_LENGTH);

console.box("EAST HYRULE SPRITE MAP [DATA]");
console.table(eastHyruleSpriteMap);

console.box("EAST HYRULE SPRITE MAP [GRAPHICAL]");
i = 0;
for (let sprite of eastHyruleSpriteMap) {
    for (let j = 0; j < sprite.LENGTH + 1; j++) {
        if (i++ % 64 === 0) {
            console.log();
        }
        process.stdout.write(OVERWORLD_SPRITE_SYMBOLS[sprite.TYPE]);
    }
}