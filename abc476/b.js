const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const S = input[1];
const T = input[2];

for (let i = 0; i < N; i++) {
  if (T[i] === '*' || S[i] === T[i]) {
    // ok
  } else {
    console.log('No');
    return;
  }
}
console.log('Yes');
