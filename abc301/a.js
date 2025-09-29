const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const S = input[1];

const m = Math.ceil(N / 2);
let t = 0;
let a = 0;
for (let i = 0; i < N; i++) {
  if (S[i] === 'T') {
    t++;
  } else {
    a++;
  }

  if (t === m) {
    console.log('T');
    return;
  }
  if (a === m) {
    console.log('A');
    return;
  }
}
