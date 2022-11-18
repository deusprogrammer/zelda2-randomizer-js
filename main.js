const fs = require('fs');
const { 
    hexExtractor, 
    hexArrayExtractor } = require('./memory/HexTools');
const { 
    NES_HEADER_MAP } = require('./nes/NESMemoryMappings');
const { calculateNESOffsets } = require('./nes/NESUtils');
const { 
    EAST_HYRULE_LOCATION_MAPPINGS,
    WEST_HYRULE_LOCATION_MAPPINGS, 
    MAP_POINTER_HEADER_MAPPING,
    MAP_POINTER_BANK_OFFSETS1,
    MAP_POINTER_BANK_OFFSETS2} = require('./zelda2/Z2MemoryMappings');
const { 
    printSpriteMap, extractEastHyruleSpriteMap, extractWestHyruleSpriteMap } = require('./zelda2/Z2Utils');

require('./Utils');

let filename = process.argv[2] || './rom.nes';
let mode = process.argv[3] || 'VANILLA';


console.log("Processing " + filename);

let rom = fs.readFileSync(filename);
let headers = hexExtractor(NES_HEADER_MAP, rom);
let cartOffsets = calculateNESOffsets(headers);

console.box("NES HEADERS");
console.hexTable(headers);

console.box("CART OFFSETS");
console.hexTable(cartOffsets);

let [westHyruleMap] = hexExtractor(WEST_HYRULE_LOCATION_MAPPINGS, rom);

console.box("WEST HYRULE MAP LOCATIONS [DATA]");
console.table(westHyruleMap);

let westHyruleSpriteMap = extractWestHyruleSpriteMap(rom, mode);

console.box("WEST HYRULE SPRITE MAP [GRAPHICAL]");
printSpriteMap(westHyruleSpriteMap, westHyruleMap);

let [eastHyruleMap] = hexExtractor(EAST_HYRULE_LOCATION_MAPPINGS, rom);

console.box("EAST HYRULE MAP LOCATIONS [DATA]");
console.table(eastHyruleMap);

let eastHyruleSpriteMap = extractEastHyruleSpriteMap(rom, mode);

console.box("EAST HYRULE SPRITE MAP [GRAPHICAL]");
printSpriteMap(eastHyruleSpriteMap, eastHyruleMap);

for (let bank = 0; bank < 5; bank++) {
    let mapPointerData1 = hexArrayExtractor(MAP_POINTER_HEADER_MAPPING, rom, 63, MAP_POINTER_BANK_OFFSETS1[bank]);
    let mapPointerData2 = hexArrayExtractor(MAP_POINTER_HEADER_MAPPING, rom, 63, MAP_POINTER_BANK_OFFSETS2[bank]);
    console.box("BANK " + (bank + 1) + `[0x${MAP_POINTER_BANK_OFFSETS1[bank].toString(16)}]`);
    mapPointerData1.forEach((level, i) => { 
        console.box("MAP " + (i + 1) + "-1");
        console.box("HEADER");
        console.table(level.header);
        console.box("DATA");
        level.levelElements.forEach(levelElement => console.table(levelElement));
    });
    mapPointerData2.forEach((level, i) => {
        console.box("MAP " + (i + 1) + "-2");
        console.box("HEADER");
        console.table(level.header);
        console.box("DATA");
        level.levelElements.forEach(levelElement => console.table(levelElement));
    });
}