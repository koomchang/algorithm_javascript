const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let biggestSqaure = 0;

for (let i = 1; i <= input[0]; i++) {
    let line = input[i].split(' ');
    let square = line[0] * line[1];
    biggestSqaure = biggestSqaure > square ? biggestSqaure : square
}
console.log(biggestSqaure);