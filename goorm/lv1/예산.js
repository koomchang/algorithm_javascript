const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const money = input[0].split(' ')[1];
let totalMoney = 0;
for (let i = 1; i <= input[0].split(' ')[0]; i++) {
    let each = input[i].split(' ');
    totalMoney += each[0] * each[1];
}
if (totalMoney > money) {
    console.log('No');
} else {
    console.log(money - totalMoney);
}