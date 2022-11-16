const {snakeCaseToCamelCase} = require('../Utils');

const convertMemoryAddress = (memoryAddress) => {
    return (memoryAddress-0x8000) + 1*0x4000 + 0x10;
}

const getX = (value) => {
    return value;
}

const getY = (value) => {
    return Math.max(value - 29, 0);
}

const getMapNumber = (value) => {
    return value;
}

const getWorldNumber = (value) => {
    return value;
}

const EXT_MAP = {
    X: {
        key: "x",
        valueKey: "POS",
        expandFields: true,
        transform: getX
    },
    Y: {
        key: "y",
        valueKey: "POS",
        expandFields: true,
        transform: getY
    },
    MN: {
        key: "mapNumber",
        valueKey: "POS",
        expandFields: true,
        transform: getMapNumber
    },
    WN: {
        key: "worldNumber",
        valueKey: "POS",
        expandFields: true,
        transform: getWorldNumber
    }
}

const transformMapPointers = (mapObject) => {
    let map = {};
    for (let key in mapObject) {
        let value = mapObject[key];
    
        let ext = key.slice(key.lastIndexOf("_") + 1);
        let pre = key.slice(0, key.lastIndexOf("_"));
    
        if (!map[pre]) {
            map[pre] = {};
        }
    
        const {expandFields, valueKey, transform, key: fieldKey} = EXT_MAP[ext];
        map[pre][fieldKey] = transform(value[valueKey]);

        if (expandFields) {
            for (let subKey in value) {
                if (subKey === valueKey) {
                    continue;
                }

                map[pre][snakeCaseToCamelCase(subKey)] = value[subKey];
            }
        }
    }

    return map;
}

const writeValue = (valueKey, valueMapping, value) => {

}

const printDebugMap = (mapObject) => {
    console.log();
    for (let y = 0; y < 82; y++) {
        for (let x = 0; x < 82; x++) {
            let found = Object.keys(mapObject).find(key => {
                return mapObject[key].x === x && mapObject[key].y === y
            });
    
            if (Object.keys(mapObject).includes(found)) {
                process.stdout.write(found);
            } else {
                process.stdout.write("  ");
            }
        }
        console.log("\n");
    }
    console.log();
}

exports.transformMapPointers = transformMapPointers;
exports.printDebugMap = printDebugMap;