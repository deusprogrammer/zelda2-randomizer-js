const { hexExtractor, extractElements, hexArrayExtractor, littleEndianConvert, extractFields } = require("../memory/HexTools");
const { colorize } = require("../Utils");
const { 
    WEST_HYRULE_LOCATION_MAPPINGS, 
    WEST_HYRULE_MAP_VANILLA_OFFSET, 
    WEST_HYRULE_MAP_RANDO_OFFSET, 
    EAST_HYRULE_MAP_VANILLA_OFFSET, 
    EAST_HYRULE_MAP_RANDO_OFFSET, 
    EAST_HYRULE_LOCATION_MAPPINGS, 
    WEST_HYRULE_OVERWORLD_SPRITE_MAPPING, 
    EAST_HYRULE_OVERWORLD_SPRITE_MAPPING,
    LEVEL_HEADER_MAPPING,
    MAP_POINTER_BANK_OFFSETS1,
    MAP_POINTER_BANK_OFFSETS2,
    toFileAddr,
    LEVEL_OBJECT,
    LEVEL_OBJECT_3B} = require("./Z2MemoryMappings");

const OVERWORLD_SPRITE_SYMBOLS = [
    "\033[41m┼\033[0m",
    "\033[41m█\033[0m",
    "\033[41m╬\033[0m",
    "\033[43m=\033[0m",
    "\033[43m.\033[0m",
    "\033[42m,\033[0m",
    "\033[42mF\033[0m",
    "\033[40ms\033[0m",
    "\033[40m+\033[0m",
    "\033[43m \033[0m",
    "\033[45m;\033[0m",
    "\033[48m^\033[0m",
    "\033[44m \033[0m",
    "\033[46m \033[0m",
    "\033[48mO\033[0m",
    "\033[43m≡\033[0m"
]

const readUint16 = (buffer, offset) => {
    let bytes = buffer.slice(offset, offset + 2);
    return littleEndianConvert(bytes);
}

const printDebugMap = (mapObject) => {
    let legend = {};
    Object.keys(mapObject).forEach((key, index) => {
        legend[key] = index;
    })

    console.box("Legend");
    console.table(legend);

    console.log();
    for (let y = 0; y < 82; y++) {
        for (let x = 0; x < 82; x++) {
            let found = Object.keys(mapObject).find(key => {
                return mapObject[key].x === x && mapObject[key].y - 29 === y
            });
    
            if (Object.keys(mapObject).includes(found)) {
                process.stdout.write(legend[found].toString().padStart(2, "0"));
            } else {
                process.stdout.write("  ");
            }
        }
        console.log("\n");
    }
    console.log();
}

const printSpriteMap = (mapObject, locations) => {
    let i = 0;
    for (let sprite of mapObject) {
        for (let j = 0; j < sprite.length + 1; j++) {
            x = i % 64;
            y = Math.ceil(i / 64);

            if (i++ % 64 === 0) {
                console.log();
            }

            let found = Object.keys(locations).find(key => {
                return locations[key].x === x && locations[key].y - 29 === y
            });
    
            let c = OVERWORLD_SPRITE_SYMBOLS[sprite.type] 
            if (found) {
                c = [9, 12, 13].includes(sprite.type) ? c.replace(' ', 'X') : c;
                process.stdout.write(colorize(5, c));
            } else {
                process.stdout.write(c);
            }
        }
    }
    console.log();
}

const extractWestHyruleMapLocations = (buffer) => {
    return hexExtractor(WEST_HYRULE_LOCATION_MAPPINGS, buffer)[0];
}

const extractEastHyruleMapLocations = (buffer) => {
    return hexExtractor(EAST_HYRULE_LOCATION_MAPPINGS, buffer)[0];
}

const extractWestHyruleSpriteMap = (buffer, mode) => {
    let offset = WEST_HYRULE_MAP_VANILLA_OFFSET;
    if (mode === "RANDO") {
        offset = WEST_HYRULE_MAP_RANDO_OFFSET;
    }
    return extractElements(WEST_HYRULE_OVERWORLD_SPRITE_MAPPING, buffer, offset);
}

const extractEastHyruleSpriteMap = (buffer, mode) => {
    let offset = EAST_HYRULE_MAP_VANILLA_OFFSET;
    if (mode === "RANDO") {
        offset = EAST_HYRULE_MAP_RANDO_OFFSET;
    }
    return extractElements(EAST_HYRULE_OVERWORLD_SPRITE_MAPPING, buffer, offset);
}

const extractSideViewMapData = (buffer) => {
    let banks = [];
    for (let bank = 0; bank < 5; bank++) {
        let offset = MAP_POINTER_BANK_OFFSETS1[bank];
        let newBank1 = [];
        for (let i = 0; i < 63; i++, offset += 0x2) {
            let mapPointer = readUint16(buffer, offset);
            mapPointer = toFileAddr(mapPointer, bank + 1);

            let header = extractFields(LEVEL_HEADER_MAPPING, buffer, mapPointer);
            let levelElements = [];
            let read = 0x4;
            while (read < header.sizeOfLevel) {
                let levelObject = extractFields(LEVEL_OBJECT, buffer, mapPointer + read);
                if (levelObject.objectNumber === 0xF && levelObject.yPosition < 13) {
                    levelObject = extractFields(LEVEL_OBJECT_3B, buffer, mapPointer + read);
                    read += 3;
                } else {
                    read += 2;
                }
                levelElements.push(levelObject);
            }
            newBank1.push({header, levelElements, offset: mapPointer});
        }
        
        offset = MAP_POINTER_BANK_OFFSETS2[bank];
        let newBank2 = [];
        for (let i = 0; i < 63; i++, offset += 0x2) {
            let mapPointer = readUint16(buffer, offset);
            mapPointer = toFileAddr(mapPointer, bank + 1);
            
            let header = extractFields(LEVEL_HEADER_MAPPING, buffer, mapPointer);
            let levelElements = [];
            let read = 0x4;
            while (read < header.sizeOfLevel) {
                let levelObject = extractFields(LEVEL_OBJECT, buffer, mapPointer + read);
                if (levelObject.objectNumber === 0xF && levelObject.yPosition < 0xd) {
                    levelObject = extractFields(LEVEL_OBJECT_3B, buffer, mapPointer + read);
                    read += 3;
                } else {
                    read += 2;
                }
                levelElements.push(levelObject);
            }
            newBank2.push({header, levelElements, offset: mapPointer});
        }

        banks.push([newBank1, newBank2]);
    }

    return banks;
}

const debugMap = (banks, bank, mapSet, mapNumber) => {
    let level = banks[bank][mapSet][mapNumber];
    console.box("BANK " + (bank + 1) + `[0x${MAP_POINTER_BANK_OFFSETS1[bank].toString(16)}]`);
    console.box("MAP " + mapNumber + "-" + mapSet);
    console.box("HEADER");
    console.table(level.header);
    console.box("DATA");
    console.log("OFFSET: 0x" + level.offset.toString(16));
    console.hexTable(level.levelElements);
}

const debugMapBank = (banks, bank, mapSet) => {
    let levels = banks[bank][mapSet];
    levels.forEach((mapNumber) => {
        debugMap(banks, bank, mapSet, mapNumber);
    });
}

exports.printDebugMap = printDebugMap;
exports.printSpriteMap = printSpriteMap;
exports.extractWestHyruleMapLocations = extractWestHyruleMapLocations;
exports.extractEastHyruleMapLocations = extractEastHyruleMapLocations;
exports.extractWestHyruleSpriteMap = extractWestHyruleSpriteMap;
exports.extractEastHyruleSpriteMap = extractEastHyruleSpriteMap;
exports.extractSideViewMapData = extractSideViewMapData;
exports.debugMap = debugMap;
exports.debugMapBank = debugMapBank;