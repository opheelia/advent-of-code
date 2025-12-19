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
    for (let i = 2; i <= id.length; i++) {
        if (id.length % i === 0) { // if id is divisible by i
            const slices = getIdSlices(id, i);
            if ([...new Set(slices)].length === 1) {
                return true;
            }
        }
    }

    return false;
}

function getIdSlices(id: string, numberOfSlices: number): string[] {
    let slices: string[] = [];
    const sliceLength = id.length / numberOfSlices;
    for (let i = 0; i < id.length; i = i + sliceLength) {
        slices.push(id.slice(i, i + sliceLength));
    }
    return slices;
}

main();