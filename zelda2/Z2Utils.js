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
        transform: getX
    },
    Y: {
        key: "y",
        transform: getY
    },
    MN: {
        key: "mapNumber",
        transform: getMapNumber
    },
    WN: {
        key: "worldNumber",
        transform: getWorldNumber
    }
}

const transformMapPointers = (mapObject) => {
    let map = {};
    for (key in mapObject) {
        let value = mapObject[key];
    
        let ext = key.slice(key.lastIndexOf("_") + 1);
        let pre = key.slice(0, key.lastIndexOf("_"));
    
        if (!map[pre]) {
            map[pre] = {};
        }
    
        map[pre][EXT_MAP[ext].key] = EXT_MAP[ext].transform(value.POS);
    }

    return map;
}

exports.transformMapPointers = transformMapPointers;