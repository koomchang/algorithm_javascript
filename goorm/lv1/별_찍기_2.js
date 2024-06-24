// Run by Node.js
const readline = require('readline');

(async () => {
    let rl = readline.createInterface({ input: process.stdin });

    for await (const line of rl) {
        for(let i = 1; i <= line; i++) {
            console.log("*".repeat(line - i + 1));
        }
        rl.close();
    }

    process.exit();
})();
