import fs from "node:fs";

function main() {
    const content: string = fs.readFileSync("./input.txt", "utf8");
    const ranges = content.split(",")
        .map(range => range.split("-"))
        .map(([min, max]) => ({ min: parseInt(min), max: parseInt(max) }));

    let invalidIds: number = 0;

    for (const range of ranges) {
        invalidIds += findInvalidIds(range);
    }

    console.log(`Sum : ${invalidIds}`);
}

function findInvalidIds(range: { min: number, max: number}): number {
    let invalidIdsSum: number = 0;

    for (let id = range.min; id <= range.max; id++) {
        if (isInvalidId(id.toString())) {
            console.log(`Invalid ID found: ${id}`);
            invalidIdsSum += id;
        }
    }

    return invalidIdsSum;
}

function isInvalidId(id: string): boolean {
    return id.length % 2 === 0 && id.slice(0, id.length / 2) === id.slice(id.length / 2);
}

main();