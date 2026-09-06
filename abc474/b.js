const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const P = input[1].split(' ').map(Number);

let min = 1;
let max = 10;
for (let i = 0; i < N; i++) {
  if (i > 0 && i % 10 === 0) {
    min += 10;
    max += 10;
  }
  if (P[i] < min || P[i] > max) {
    console.log('No');
    return;
  }
}
console.log('Yes');
