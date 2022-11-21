const { hexExtractor, extractElements, hexArrayExtractor, littleEndianConvert, extractFields, maskBits } = require("../memory/HexTools");
const { colorize, create2D, draw2D, hLine2D, vLine2D, plot2D, rectangle2D, layer2D } = require("../Utils");
const { 
    toFileAddr,
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
    LEVEL_OBJECT,
    LEVEL_OBJECT_3B,
    LEVEL_EXITS_BANK_OFFSETS1,
    LEVEL_EXITS_BANK_OFFSETS2,
    LEVEL_EXITS_MAPPING} = require("./Z2MemoryMappings");

const WIDTH_OF_SCREEN  = 16;
const HEIGHT_OF_SCREEN = 16;

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

const OVERWORLD_SMALL_OBJECTS = {
        0x0: {name: "headstone",                    height: 1, width: 1, size: 1, type: "wide"},
        0x1: {name: "cross",                        height: 1, width: 1, size: 1, type: "wide"},
        0x2: {name: "angled cross",                 height: 1, width: 1, size: 1, type: "wide"},
        0x3: {name: "tree stump",                   height: 2, width: 1, size: 2, type: "tall", solid: true},
        0x4: {name: "stone table",                  height: 1, width: 1, size: 4, type: "wide", solid: true},
        0x5: {name: "zelda",                        height: 1, width: 2, size: 1, type: "wide"},
        0x6: {name: "zelda",                        height: 1, width: 2, size: 2, type: "wide"},
        0x7: {name: "pit",                          height: 1, width: 1, size: 2, type: "wide"},
        0x8: {name: "cloud",                        height: 1, width: 1, size: 1, type: "wide"},
        0x9: {name: "cloud",                        height: 1, width: 1, size: 1, type: "wide"},
        0xA: {name: "cloud",                        height: 1, width: 1, size: 1, type: "wide"},
        0xB: {name: "cloud",                        height: 1, width: 1, size: 1, type: "wide"},
        0xC: {name: "cloud",                        height: 1, width: 1, size: 1, type: "wide"},
        0xD: {name: "cloud",                        height: 1, width: 1, size: 1, type: "wide"},
        0xE: {name: "cloud",                        height: 1, width: 1, size: 1, type: "wide"},
        0xF: {name: "cloud",                        height: 1, width: 1, size: 1, type: "wide"},
}

const OVERWORLD_LARGE_OBJECTS = [
    {
        0x2: {name: "forest ceiling",               height: 2, width: 1, size: 2, type: "wide"},
        0x3: {name: "forest ceiling",               height: 2, width: 1, size: 2, type: "wide"},
        0x4: {name: "curtains",                     height: 2, width: 1, size: 2, type: "wide"},
        0x5: {name: "forest ceiling",               height: 1, width: 1, size: 1, type: "wide"},
        0x6: {name: "handy glove block",            height: 1, width: 1, size: 1, type: "wide", solid: true},
        0x7: {name: "horizontal pit",               height: 1, width: 1, size: 1, type: "wide"},
        0x8: {name: "single weed",                  height: 1, width: 1, size: 1, type: "wide"},
        0x9: {name: "two weeds",                    height: 1, width: 1, size: 1, type: "wide"},
        0xA: {name: "north castle steps",           height: 1, width: 1, size: 1, type: "wide"},
        0xB: {name: "background bricks",            height: 1, width: 1, size: 1, type: "wide"},
        0xC: {name: "volcano background",           height: 1, width: 1, size: 1, type: "wide"},
        0xD: {name: "handy glove block",            height: 1, width: 1, size: 1, type: "tall", solid: true},
        0xE: {name: "background tree",              height: 1, width: 1, size: 1, type: "tall"},
        0xF: {name: "column",                       height: 1, width: 1, size: 1, type: "tall"},
    }, {
        0x2: { name: "rock floor",                  height: 2, width: 1, size: 2, type: "wide", solid: true},
        0x3: { name: "rock ceiling",                height: 2, width: 1, size: 2, type: "wide", solid: true},
        0x4: { name: "bridge",                      height: 2, width: 1, size: 2, type: "wide", solid: true},
        0x5: { name: "cave blocks",                 height: 1, width: 1, size: 1, type: "wide", solid: true},
        0x6: { name: "handy glove blocks",          height: 1, width: 1, size: 1, type: "wide", solid: true},
        0x7: { name: "collapsing bridge",           height: 1, width: 1, size: 1, type: "wide", solid: true},
        0x8: { name: "single weed",                 height: 1, width: 1, size: 1, type: "wide"},
        0x9: { name: "two weeds",                   height: 1, width: 1, size: 1, type: "wide"},
        0xA: { name: "horizontal pit",              height: 1, width: 1, size: 1, type: "wide"},
        0xB: { name: "background bricks",           height: 1, width: 1, size: 1, type: "wide"},
        0xC: { name: "volcano background",          height: 1, width: 1, size: 1, type: "wide"},
        0xD: { name: "handy glove block",           height: 1, width: 1, size: 1, type: "tall", solid: true},
        0xE: { name: "rock floor",                  height: 1, width: 1, size: 1, type: "tall", solid: true},
        0xF: { name: "stone spire",                 height: 1, width: 1, size: 1, type: "tall", solid: true},
    }
]

const TOWN_SMALL_OBJECTS = {
        0x1: {name: "open door grass",              height: 4, width: 1, size: 4, type: "tall"},
        0x0: {name: "closed door grass",            height: 4, width: 1, size: 4, type: "tall"},
        0x2: {name: "open door h bricks",           height: 4, width: 1, size: 4, type: "tall"},
        0x3: {name: "open door v bricks",           height: 4, width: 1, size: 4, type: "tall"},
        0x4: {name: "stone table",                  height: 1, width: 1, size: 4, type: "wide"},
        0x5: {name: "chair",                        height: 1, width: 1, size: 1, type: "wide"},
        0x6: {name: "?",                            height: 1, width: 1, size: 1, type: "wide"},
        0x7: {name: "cloud",                        height: 1, width: 1, size: 1, type: "wide"},
        0x8: {name: "table",                        height: 1, width: 1, size: 1, type: "wide"},
        0x9: {name: "bench",                        height: 1, width: 1, size: 1, type: "wide"},
        0xA: {name: "cross",                        height: 1, width: 1, size: 1, type: "wide"},
        0xB: {name: "cloud",                        height: 1, width: 1, size: 1, type: "wide"},
        0xC: {name: "cloud",                        height: 1, width: 1, size: 1, type: "wide"},
        0xD: {name: "cloud",                        height: 1, width: 1, size: 1, type: "wide"},
        0xE: {name: "cloud",                        height: 1, width: 1, size: 1, type: "wide"},
}

const TOWN_LARGE_OBJECTS = [
    {
        0x2: { name: "cross thatched roof",         height: 2, width: 1, size: 2, type: "wide", solid: true},
        0x3: { name: "gray vertical roof",          height: 2, width: 1,  size: 2, type: "wide", solid: true},
        0x4: { name: "green vertical roof",         height: 2, width: 1, size: 2, type: "wide", solid: true},
        0x5: { name: "brick building",              height: 1, width: 1, size: 1, type: "wide", toGround: true},
        0x6: { name: "white building",              height: 1, width: 1, size: 1, type: "wide", toGround: true},
        0x7: { name: "grass building",              height: 1, width: 1, size: 1, type: "wide", toGround: true},
        0x8: { name: "white brick wall",            height: 1, width: 1, size: 1, type: "wide", solid: true},
        0x9: { name: "log building",                height: 1, width: 1, size: 1, type: "wide"},
        0xA: { name: "brown windows square",        height: 2, width: 1, size: 1, type: "wide"},
        0xB: { name: "gray windows round",          height: 2, width: 1, size: 1, type: "wide"},
        0xC: { name: "brown windows round",         height: 2, width: 1, size: 1, type: "wide"},
        0xD: { name: "blue bricks",                 height: 2, width: 1, size: 1, type: "tall", solid: true},
        0xE: { name: "column",                      height: 2, width: 1, size: 1, type: "tall"},
        0xF: { name: "castle background bricks",    height: 1, width: 1, size: 1, type: "tall"},
    }
]

const PALACE_SMALL_OBJECTS = {
        0x1: {name: "window",              height: 4, width: 1, size: 4, type: "tall"},
        0x0: {name: "rightward unicorn",            height: 4, width: 1, size: 4, type: "tall"},
        0x2: {name: "leftward wolf",           height: 4, width: 1, size: 4, type: "tall"},
        0x3: {name: "crystal statue",           height: 4, width: 1, size: 4, type: "tall"},
        0x4: {name: "crystal statue",                  height: 1, width: 1, size: 4, type: "wide"},
        0x5: {name: "locked door",                        height: 1, width: 1, size: 1, type: "wide"},
        0x6: {name: "locked door",                            height: 1, width: 1, size: 1, type: "wide"},
        0x7: {name: "cloud",                        height: 1, width: 1, size: 1, type: "wide"},
        0x8: {name: "small cloud",                        height: 1, width: 1, size: 1, type: "wide"},
        0x9: {name: "ironknuckle statue",                        height: 1, width: 1, size: 1, type: "wide"},
        0xA: {name: "small cloud",                        height: 1, width: 1, size: 1, type: "wide"},
        0xB: {name: "small cloud",                        height: 1, width: 1, size: 1, type: "wide"},
        0xC: {name: "small cloud",                        height: 1, width: 1, size: 1, type: "wide"},
        0xD: {name: "small cloud",                        height: 1, width: 1, size: 1, type: "wide"},
        0xE: {name: "small cloud",                        height: 1, width: 1, size: 1, type: "wide"},
}

const PALACE_LARGE_OBJECTS = [
    {
        0x1: { name: "horizontal pit",         height: 2, width: 1, size: 2, type: "wide", solid: true},
        0x2: { name: "horizontal bricks",         height: 2, width: 1, size: 2, type: "wide", solid: true},
        0x3: { name: "breakable blocks",          height: 2, width: 1,  size: 2, type: "wide", solid: true},
        0x4: { name: "steel blocks",         height: 2, width: 1, size: 2, type: "wide", solid: true},
        0x5: { name: "breaking bridge",              height: 1, width: 1, size: 1, type: "wide", toGround: true},
        0x6: { name: "breakable blocks",              height: 1, width: 1, size: 1, type: "wide", toGround: true},
        0x7: { name: "horizontal bricks",              height: 1, width: 1, size: 1, type: "wide", toGround: true},
        0x8: { name: "curtains",            height: 1, width: 1, size: 1, type: "wide", solid: true},
        0x9: { name: "breakable blocks",                height: 1, width: 1, size: 1, type: "wide"},
        0xA: { name: "horizontal bricks",        height: 2, width: 1, size: 1, type: "wide"},
        0xB: { name: "breakable blocks",          height: 2, width: 1, size: 1, type: "wide"},
        0xC: { name: "walk-thru bricks",         height: 2, width: 1, size: 1, type: "wide"},
        0xD: { name: "breakable blocks",                 height: 2, width: 1, size: 1, type: "tall", solid: true},
        0xE: { name: "pit",                      height: 2, width: 1, size: 1, type: "tall"},
        0xF: { name: "horizontal pit",    height: 1, width: 1, size: 1, type: "tall"},
    }
]

const DRAWING_OP = {
    0xD: "CHANGE FLOOR LEVEL",
    0xE: "SKIP",
    0xF: "EXTRA OBJECT"
}

const SUB_OP_MAP = {
    F: "FLOOR",
    C: "CEILING",
    W: "WALL"
}

const debugElement = (element, type, objectSet = 0) => {
    let v = {
        ...element,
        yPosition: "0x" + element.yPosition.toString(16),
        objectNumber: "0x" + (element.objectNumber & 0b00001111).toString(16)
    };

    if (element.yPosition > 0xC) {
        let opData = element.objectNumber & 0b00001111;
        let subOp = null;
        [opData, subOp] = getFloorPosition(opData);
        subOp = SUB_OP_MAP[subOp];
        v.noCeiling = maskBits(element.objectNumber, 0b10000000) !== 0;
        v.op = DRAWING_OP[element.yPosition];
        v.subOp = subOp;
        v.opData = opData;
    } else {
        let objectNumber = element.objectNumber;
        let object = null;
        if (type === "LARGE") {
            objectNumber = objectNumber & 0b00001111;
            object = OVERWORLD_LARGE_OBJECTS[objectSet][objectNumber].name;
        } else if (type === "SMALL") {
            object = OVERWORLD_SMALL_OBJECTS[objectNumber].name;
        }
        v.object = object;
    }

    return v;
}

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
            newBank1.push({header, levelElements, worldNumber: bank + 1, offset: mapPointer});
        }

        if (bank + 1 === 3 || bank + 1 === 5) {
            continue;
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
            newBank2.push({header, levelElements, worldNumber: bank + 1, offset: mapPointer});
        }

        banks.push([newBank1, newBank2]);
    }

    return banks;
}

const extractLevelExits = (buffer) => {
    let banks = [];
    for (let bank = 0; bank < 5; bank++) {
        let offset = LEVEL_EXITS_BANK_OFFSETS1[bank];
        let newBank1 = hexArrayExtractor(LEVEL_EXITS_MAPPING, buffer, 63, offset);
        
        offset = LEVEL_EXITS_BANK_OFFSETS2[bank];
        let newBank2 = hexArrayExtractor(LEVEL_EXITS_MAPPING, buffer, 63, offset);

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

const debugLevelExits = (banks, bank, mapSet, mapNumber) => {
    let level = banks[bank][mapSet][mapNumber];
    console.box("BANK " + (bank + 1) + `[0x${LEVEL_EXITS_BANK_OFFSETS1[bank].toString(16)}]`);
    console.box("MAP " + mapNumber + "-" + mapSet);
    console.table(level);
}

const debugMapBank = (banks, bank, mapSet) => {
    let levels = banks[bank][mapSet];
    levels.forEach((mapNumber) => {
        debugMap(banks, bank, mapSet, mapNumber);
    });
}

const getFloorPosition = (floorLevel) => {
    if (floorLevel >= 0 && floorLevel <= 7) {
        return [floorLevel + 2, 'F'];
    } else if (floorLevel > 7 && floorLevel <= 14) {
        return [floorLevel - 6, 'C'];
    } else {
        return [15, 'W'];
    }
}

const sleep = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve()}, ms);
    });
}

const drawMap = async (level) => {
    let mapWidth = 4 * WIDTH_OF_SCREEN;
    let objectSet = level.header.objectSet;
    let noCeiling = level.header.noCeiling;
    let bushes = level.header.bushes;
    let grass = level.header.grass;
    let x = 0;
    let map = create2D(mapWidth, HEIGHT_OF_SCREEN);
    let fg = create2D(mapWidth, HEIGHT_OF_SCREEN);
    let bg = create2D(mapWidth, HEIGHT_OF_SCREEN);
    let [newLevel, c] = getFloorPosition(level.header.initialFloorPosition);
    let floorLevel = 2;
    let ceilingLevel = 1;
    let drawWall = false;
    let size = 1;
    if (c === "F") {
        floorLevel = newLevel;
        ceilingLevel = 1;
    } else if (c === "C") {
        ceilingLevel = newLevel;
    } else {
        drawWall = true;
    }

    if (noCeiling) {
        ceilingLevel = 0;
    }

    if (grass) {
        hLine2D(bg, mapWidth, 0, mapWidth, 0xA, colorize(32, "█"));
    }
    if (bushes) {
        hLine2D(bg, mapWidth, 0, mapWidth, 0xB, colorize(2, colorize(32, "█")));
    }

    for (let element of level.levelElements) {
        let {yPosition: y, advanceCursor: xSpace, objectNumber, collectableObjectNumber} = element;
        let newX = 0;
        let newFloorLevel = floorLevel;
        let newCeilingLevel = ceilingLevel;
        
        if (drawWall) {
            for (let i = 0; i < xSpace; i++) {
                vLine2D(map, mapWidth, 0, 12, newX + i, "█");
            }
            drawWall = false;
        } 

        newX = x + xSpace;
        if (y === 0xD) {
            let [newLevel, c] = getFloorPosition(objectNumber & 0b00001111);
            noCeiling = maskBits(objectNumber, 0b10000000);
            if (c === "F") {
                newFloorLevel = newLevel;
                newCeilingLevel = 1;
            } else if (c === "C") {
                newFloorLevel = 2;
                newCeilingLevel = newLevel;
            } else if (c === "W") {
                drawWall = true;
            }
        } else if (y === 0XE) {
            // SKIP
            newX = xSpace * 16;
        } else if (y === 0xF) {
            // EXTRA OBJECT
            size = objectNumber & 0b00001111;
            objectNumber = objectNumber >> 4;
            if (objectNumber === 0x2) {
                rectangle2D(fg, mapWidth, newX, 10, newX + size, 13, colorize(31, "█"));
            }
        } else {
            if (objectNumber === 0xF && y < 13) {
                // SPECIAL OBJECT
                plot2D(fg, mapWidth, newX, y, "!");
            } else if (objectNumber > 0xF) {
                // LARGE OBJECT
                size = objectNumber & 0b00001111;
                objectNumber = objectNumber >> 4;
                let {size: length, type, solid} = OVERWORLD_LARGE_OBJECTS[objectSet][objectNumber];
                let print = solid ? "█" : colorize(2, "█");
                if (type === "wide") {
                    rectangle2D(solid ? map : fg, mapWidth, newX, y, newX + size, y + length, print);
                } else if (type === "tall") {
                    rectangle2D(solid ? map : fg, mapWidth, newX, y, newX + length - 1, y + size + 1, print);
                }

                if (objectNumber === 0xA) {
                    rectangle2D(fg, mapWidth, newX, y, newX + size, y + length, colorize(2, colorize(31, "█")));
                }
            } else {
                // SMALL OBJECT
                if (objectNumber === 0x3) {
                    rectangle2D(map, mapWidth, newX, y, newX, y + 2, "█");
                } else if (objectNumber === 0x6 || objectNumber === 0x7) {
                    rectangle2D(map, mapWidth, newX, y, newX + 1, y + 2, colorize(2, "█"));
                } else if (objectNumber !== 0x4) {
                    rectangle2D(map, mapWidth, newX, y, newX, y + 2, colorize(2, "█"));
                }
            }
        }
        
        if (xSpace !== 0) {
            rectangle2D(map, mapWidth, x, 13 - floorLevel,  newX - 1, 13,           "█");
            rectangle2D(map, mapWidth, x, 0,                newX - 1, ceilingLevel, "█");
        }

        x = newX;
        ceilingLevel    = newCeilingLevel;
        floorLevel      = newFloorLevel;
        if (noCeiling) {
            ceilingLevel = 0;
        }

        // let f = plot2D(map, mapWidth, x, 13 - floorLevel, colorize(5, "^"));
        // let c = plot2D(map, mapWidth, x, ceilingLevel, colorize(5, "v"));
        // let p = plot2D(map, mapWidth, x, y, colorize(5, "*"));
        // draw2D(map, mapWidth);
        // plot2D(map, mapWidth, x, 13 - floorLevel, f);
        // plot2D(map, mapWidth, x, ceilingLevel, c);
        // plot2D(map, mapWidth, x, y, p);
        // await sleep(1000);
    };
    if (x < mapWidth) {
        if (drawWall) {
            rectangle2D(map, mapWidth, x, 0, mapWidth - 1, 13, "█");
        }
        rectangle2D(map, mapWidth, x, 13 - floorLevel,  mapWidth - 1, 13,           "█");
        rectangle2D(map, mapWidth, x, 0,                mapWidth - 1, ceilingLevel, "█");
    }
    let layers = layer2D(bg, map, fg);
    draw2D(layers, mapWidth);
}

exports.printDebugMap = printDebugMap;
exports.printSpriteMap = printSpriteMap;
exports.extractWestHyruleMapLocations = extractWestHyruleMapLocations;
exports.extractEastHyruleMapLocations = extractEastHyruleMapLocations;
exports.extractWestHyruleSpriteMap = extractWestHyruleSpriteMap;
exports.extractEastHyruleSpriteMap = extractEastHyruleSpriteMap;
exports.extractSideViewMapData = extractSideViewMapData;
exports.extractLevelExits = extractLevelExits;
exports.debugMap = debugMap;
exports.debugLevelExits = debugLevelExits;
exports.debugMapBank = debugMapBank;
exports.drawMap = drawMap;