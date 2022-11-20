const fs = require('fs');
const { extractFields } = require('./memory/HexTools');
const { 
    NES_HEADER_MAP } = require('./nes/NESMemoryMappings');
const { calculateNESOffsets } = require('./nes/NESUtils');
const { 
    printSpriteMap, extractEastHyruleSpriteMap, extractWestHyruleSpriteMap, extractWestHyruleMapLocations, extractEastHyruleMapLocations, extractSideViewMapData, debugMapBank, debugMap, drawMap } = require('./zelda2/Z2Utils');

require('./Utils');

let filename = process.argv[2] || './rom.nes';
let mode = process.argv[3] || 'VANILLA';

console.log("Processing " + filename);
let rom = fs.readFileSync(filename);

let nesHeader = extractFields(NES_HEADER_MAP, rom, 0x0);
let nesOffsets = calculateNESOffsets(nesHeader);

console.box("NES HEADER");

console.table(nesHeader);
console.table(nesOffsets);

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
debugMap(mapBanks, 0, 0, 18);
drawMap(mapBanks[0][0][18]);

// for (let name in westHyruleMap) {
//     let location = westHyruleMap[name];

//     console.box(name);
//     debugMap(mapBanks, 0, 0, location.mapNumber);
//     drawMap(mapBanks[0][0][location.mapNumber]);
//     console.log();
// }