const { OVERWORLD_SPRITE_SYMBOLS } = require("./Z2MemoryMappings");

const convertMemoryAddress = (memoryAddress) => {
    return (memoryAddress-0x8000) + 1*0x4000 + 0x10;
}

const printDebugMap = (mapObject) => {
    console.log();
    for (let y = 0; y < 82; y++) {
        for (let x = 0; x < 82; x++) {
            let found = Object.keys(mapObject).find(key => {
                return mapObject[key].x === x && mapObject[key].y - 29 === y
            });
    
            if (Object.keys(mapObject).includes(found)) {
                process.stdout.write("X");
            } else {
                process.stdout.write("  ");
            }
        }
        console.log("\n");
    }
    console.log();
}

const printSpriteMap = (mapObject) => {
    let i = 0;
    for (let sprite of mapObject) {
        for (let j = 0; j < sprite.length + 1; j++) {
            if (i++ % 64 === 0) {
                console.log();
            }
            process.stdout.write(OVERWORLD_SPRITE_SYMBOLS[sprite.type]);
        }
    }
}

exports.printDebugMap = printDebugMap;
exports.printSpriteMap = printSpriteMap;