const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let count = 0;
let maxNum = - Infinity

for (let i = input[0]; i >= 1; i--) {
    if (Number(input[i]) > maxNum) {
        count ++;
        maxNum = Number(input[i]);
    }
}
console.log(count);