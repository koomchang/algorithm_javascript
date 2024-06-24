const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let dis1 = Math.abs(input[0] - input[1]) + Math.abs(input[2] - input[3]);
let dis2 = Math.abs(input[0] - input[2]) + Math.abs(input[1] - input[3]);
let dis3 = Math.abs(input[0] - input[3]) + Math.abs(input[1] - input[2]);

console.log(Math.max(dis1, dis2, dis3));