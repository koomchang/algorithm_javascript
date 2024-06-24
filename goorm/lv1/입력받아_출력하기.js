const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let first = '';
for (let i = 0; i < input[0]; i++) {
    for (let j = 0; j < input[0]; j++) {
        if ((parseInt(i + 1) * parseInt(j + 1)) % 2 != 0) {
            first += input[1].split(' ')[0] + ' ';
        } else {
            first += input[1].split(' ')[1] + ' ';
        }
    }
    first += '\n';
}
console.log(first);