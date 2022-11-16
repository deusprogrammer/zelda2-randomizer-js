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