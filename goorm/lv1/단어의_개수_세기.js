const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ')

let count = 0;
for (let i = 0; i < input.length; i++) {
    input[i] = input[i].trim()
    if (input[i].length > 0) {
        count++;
    }
}
console.log(count);