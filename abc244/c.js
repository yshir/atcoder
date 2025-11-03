const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let state = 0;
let N;
const set = new Set();

rl.on('line', (input) => {
  if (state === 0) {
    N = Number(input);
    state++;
    const ans = 1;
    set.add(1);
    console.log(ans);
    return;
  }
  if (state === 1) {
    const cpu = Number(input);
    if (cpu === 0) {
      rl.close();
      return;
    }
    set.add(cpu);
    for (let i = 1; i <= 2 * N + 1; i++) {
      if (!set.has(i)) {
        set.add(i);
        console.log(i);
        break;
      }
    }
    return;
  }
});
