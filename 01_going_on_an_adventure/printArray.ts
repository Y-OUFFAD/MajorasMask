function printArray(table:string[]) {
console.log("List of destinations:");

    for (let i = 0; i < table.length; i++) {
        console.log((i + 1)+" - "+ table[i])
    }

}

export default printArray;
 