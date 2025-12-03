import * as fs from "node:fs";

function main() {

    const content: string = fs.readFileSync("./input.txt", "utf8");
    const lines: string[] = content.split("\n");

    let dialPosition = 50;
    let numberOfPassingThroughZero: number = 0;

    for (const line of lines) {
        ({ dialPosition, numberOfPassingThroughZero } = rotateDial(dialPosition, line, numberOfPassingThroughZero));
        console.log(`New position : ${dialPosition}`);
    }

    console.log(`Number of times the dial passes through zero : ${numberOfPassingThroughZero}.`);
}

function rotateDial(dialPosition: number, line: string, numberOfPassingThroughZero: number): {
    dialPosition: number,
    numberOfPassingThroughZero: number
} {
    const direction = line.slice(0, 1);
    const rotationNumber = parseInt(line.slice(1, line.length));
    console.log(`Direction : ${direction}, rotationNumber: ${rotationNumber}`);

    for (let i = 0; i < rotationNumber; i++) {
        if (direction === "L") {
            dialPosition--;
            if (dialPosition === 0) {
                numberOfPassingThroughZero++;
                console.log(`====> 1 time passing through 0`);
            } else if (dialPosition == -1) {
                dialPosition = 99;
            }
        } else if (direction === "R") {
            dialPosition++;
            if (dialPosition == 100) {
                numberOfPassingThroughZero++;
                console.log(`====> 1 time passing through 0`);
                dialPosition = 0;
            }
        }
    }
    return { dialPosition, numberOfPassingThroughZero };
}

main();