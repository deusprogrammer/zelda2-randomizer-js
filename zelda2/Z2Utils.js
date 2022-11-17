const { OVERWORLD_SPRITE_SYMBOLS } = require("./Z2MemoryMappings");

const convertMemoryAddress = (memoryAddress) => {
    return (memoryAddress-0x8000) + 1*0x4000 + 0x10;
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
    console.log();
}

exports.printDebugMap = printDebugMap;
exports.printSpriteMap = printSpriteMap;