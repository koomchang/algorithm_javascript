const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let money = 0;

for (let i = 1; i < input.length; i++) {
    let word = input[i].split(' ');
    let command = word[0];
    let value = word[1];

    if (command === 'in') {
        money += parseInt(value);
    } else {
        money -= parseInt(value);
        if (money < 0) {
            break;
        }
    }
}
console.log(money >= 0 ? 'success' : 'fail');