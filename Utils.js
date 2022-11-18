const objectDig = (o, transform) => {
    if (o instanceof Object || o instanceof Array) {
        let modified = o instanceof Object ? {} : [];
        for (const key in o) {
            let value = o[key];
            modified[key] = objectDig(value, transform);
        }
        return modified;
    } else {
        return transform(o);
    }
}

const getValueFromMap = (obj, path) => {
    let pathSegments = path.split(".");
    let objPtr = obj;
    for (let pathSegment of pathSegments) {
        if (!objPtr[pathSegment]) {
            return null;
        }
        objPtr = objPtr[pathSegment];
    }

    return objPtr;
}

const colorize = (color, output) => {
    return ['\033[', color, 'm', output, '\033[0m'].join('');
}

console.json = (value) => {
    console.log(JSON.stringify(value, null, 5));
}

console.box = (value) => {
    process.stdout.write("┌");
    for (let i = 0; i < value.length + 2; i++) {
        process.stdout.write("─");
    }
    console.log(`┐\n│ ${value} │`);
    process.stdout.write("└");
    for (let i = 0; i < value.length + 2; i++) {
        process.stdout.write("─");
    }
    process.stdout.write("┘");
    console.log();
}

console.hexTable = (obj) => {
    console.table(objectDig(obj, (value) => "0x" + value.toString(16)));
}

console.binTable = (obj) => {
    console.table(objectDig(obj, (value) => "0b" + value.toString(2)));
}

const snakeCaseToCamelCase = (value) => {
    let newName = "";
    let state = "LOWER";
    for (let c of value) {
        if (c === "_") {
            state = "UPPER";
            continue;
        }

        switch (state) {
            case "LOWER":
                c = c.toLowerCase();
                break;
            case "UPPER":
                c = c.toUpperCase();
                state = "LOWER";
                break;
        }

        newName += c;
    }

    return newName;
}

exports.snakeCaseToCamelCase = snakeCaseToCamelCase;
exports.getValueFromMap = getValueFromMap;
exports.objectDig = objectDig;
exports.colorize = colorize;