const fs = require('fs');
const { hexExtractor, generateMemoryMap, hexArrayExtractor } = require('./memory/HexTools');
const { NES_HEADER_MAP } = require('./nes/NESMemoryMappings');
const { WEST_HYRULE, OVERWORLD_SPRITE_MAPPING, OVERWORLD_SPRITE_SYMBOLS, WEST_HYRULE_MAP_RANDO_OFFSET, WEST_HYRULE_MAP_LENGTH } = require('./zelda2/Z2MemoryMappings');
const { transformMapPointers, printDebugMap } = require('./zelda2/Z2Utils');

require('./Utils');

let filename = process.argv[2] || './rom.nes';

console.log("Processing " + filename);

let rom = fs.readFileSync(filename);
let headers = hexExtractor(NES_HEADER_MAP, rom);

console.box("NES HEADERS");
console.table(headers);

let westHyrule = hexExtractor(WEST_HYRULE, rom);
let memoryMap = generateMemoryMap(WEST_HYRULE);

console.box("WEST HYRULE MEMORY MAP");
console.table(memoryMap);

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