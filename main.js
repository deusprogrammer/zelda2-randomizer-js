const fs = require('fs');
const { hexExtractor, generateMemoryMap } = require('./memory/HexTools');
const { NES_HEADER_MAP } = require('./nes/NESMemoryMappings');
const { WEST_HYRULE } = require('./zelda2/Z2MemoryMappings');
const { transformMapPointers } = require('./zelda2/Z2Utils');

let rom = fs.readFileSync('./rom.nes');
let headers = hexExtractor(NES_HEADER_MAP, rom);

console.table(headers);

let westHyrule = hexExtractor(WEST_HYRULE, rom);

console.table(westHyrule);

let westHyruleMap = transformMapPointers(westHyrule);

for (let y = 0; y < 82; y++) {
    for (let x = 0; x < 82; x++) {
        let found = Object.keys(westHyruleMap).find(key => {
            return westHyruleMap[key].x === x && westHyruleMap[key].y === y
        });

        if (Object.keys(westHyruleMap).includes(found)) {
            process.stdout.write(found);
        } else {
            process.stdout.write("  ");
        }
    }
    console.log("\n");
}

let memoryMap = generateMemoryMap(WEST_HYRULE);

console.table(memoryMap);