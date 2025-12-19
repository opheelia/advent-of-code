import fs from "node:fs";

function main() {
    const content: string = fs.readFileSync("./input.txt", "utf8");
    const lines: string[] = content.split("\r\n");

    let joltageSum = 0;

    for (const line of lines) {
        const lineJoltage = getJoltage(line);
        console.log(`Max is ${lineJoltage}`);
        joltageSum += lineJoltage;
    }

    console.log(`Joltage sum : ${joltageSum}`);
}

function getJoltage(line: string): number {
    const lineAsNumbers = line.split("").map(char => parseInt(char));
    return handleLine(lineAsNumbers);
}

function handleLine(numbers: number[]) {
    let lineJoltage = 0;
    let indexOfPreviousMax = -1;

    for (let i = 0; i < 12; i++) {
        const slicedNumbers = numbers.slice(indexOfPreviousMax + 1, numbers.length - (11 - i));
        const max = Math.max(...slicedNumbers);
        lineJoltage += max * Math.pow(10, 11 - i);

        // Position of max in the original array
        indexOfPreviousMax = numbers.slice(0, indexOfPreviousMax + 1).length + slicedNumbers.indexOf(max);
    }

    return lineJoltage;
}

main();