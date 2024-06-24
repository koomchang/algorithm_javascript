// Run by Node.js
const readline = require('readline');

(async () => {
    let rl = readline.createInterface({ input: process.stdin });

    for await (const line of rl) {
        let answer='';
        let num = line;
        while (num > 0) {
            if (num % 2 == 0) {
                answer = '0' + answer;
            } else {
                answer = '1' + answer;
            }
            num = Math.floor(num / 2)
        }
        console.log(answer);
        rl.close();
    }

    process.exit();
})();
