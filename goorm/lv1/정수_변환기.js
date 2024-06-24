const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let answer = '';

for (let i = 0; i < input[0].split(' ')[0]; i++) {
    answer += parseInt(input[1].split('')[i]) + parseInt(input[0].split(' ')[1]);
}
console.log(answer);