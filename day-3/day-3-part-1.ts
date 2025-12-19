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
    const numbers = line.split("").map(char => parseInt(char));
    const max = numbers.slice(0, numbers.length - 1).reduce((a, b) => Math.max(a,b));
    const maxPosition = numbers.indexOf(max);

    const secondMax = numbers.slice(maxPosition + 1, numbers.length).reduce((a, b) => Math.max(a,b));
    return max * 10 + secondMax;
}

main();