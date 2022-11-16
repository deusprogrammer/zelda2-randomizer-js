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