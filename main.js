const fs = require('fs');
const { 
    hexExtractor } = require('./memory/HexTools');
const { 
    NES_HEADER_MAP } = require('./nes/NESMemoryMappings');
const { calculateNESOffsets } = require('./nes/NESUtils');
const { 
    printSpriteMap, extractEastHyruleSpriteMap, extractWestHyruleSpriteMap, extractWestHyruleMapLocations, extractEastHyruleMapLocations, extractSideViewMapData, debugMapBank, debugMap } = require('./zelda2/Z2Utils');

require('./Utils');

let filename = process.argv[2] || './rom.nes';
let mode = process.argv[3] || 'VANILLA';

console.log("Processing " + filename);

let rom = fs.readFileSync(filename);

let westHyruleMap = extractWestHyruleMapLocations(rom);

console.box("WEST HYRULE MAP LOCATIONS [DATA]");
console.table(westHyruleMap);

let westHyruleSpriteMap = extractWestHyruleSpriteMap(rom, mode);

console.box("WEST HYRULE SPRITE MAP [GRAPHICAL]");
printSpriteMap(westHyruleSpriteMap, westHyruleMap);

let eastHyruleMap = extractEastHyruleMapLocations(rom);

console.box("EAST HYRULE MAP LOCATIONS [DATA]");
console.table(eastHyruleMap);

let eastHyruleSpriteMap = extractEastHyruleSpriteMap(rom, mode);

console.box("EAST HYRULE SPRITE MAP [GRAPHICAL]");
printSpriteMap(eastHyruleSpriteMap, eastHyruleMap);

let mapBanks = extractSideViewMapData(rom);
debugMap(mapBanks, 0, 0, 6);