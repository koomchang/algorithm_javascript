const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 1; i <= input[0]; i++) {
    let line = input[i].split(' ');
    if (parseInt(line[0]) < parseInt(line[1])) {
        console.log('Sunflower')
    } else if (parseInt(line[0]) === parseInt(line[1])) {
        console.log('Tulip');
    } else {
        console.log('Rose');
    }
}