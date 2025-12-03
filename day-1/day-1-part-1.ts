import * as fs from "node:fs";

function main() {

    const content: string = fs.readFileSync("./input.txt", "utf8");
    const lines: string[] = content.split("\n");

    let dialPosition = 50;
    let numberOfZeroes = 0;

    for (const line of lines) {
        const direction = line.slice(0,1);
        const rotationNumber = parseInt(line.slice(1,line.length));
        console.log(`Direction : ${direction}, rotationNumber: ${rotationNumber}`);
        dialPosition = rotateDial(dialPosition, direction, rotationNumber);
        console.log(`New position : ${dialPosition}`);

        if (dialPosition === 0) {
            numberOfZeroes++;
        }
    }

    console.log(`Final position of the dial : ${dialPosition}, number of times the dial points zero : ${numberOfZeroes}.`);
}

function rotateDial(dialPosition: number, direction: string, rotationNumber: number): number {
    if (direction === "L") {
        dialPosition -= rotationNumber;
    } else if (direction === "R") {
        dialPosition += rotationNumber;
    }

    return ((dialPosition % 100) + 100) % 100;
}

main();