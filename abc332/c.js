const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const S = input[1];

let a = 0;
let b = 0;
let max = 0;
for (let i = 0; i < N; i++) {
  if (S[i] === '0') {
    max = Math.max(max, Math.max(0, a - M) + b);
    a = 0;
    b = 0;
  }
  if (S[i] === '1') {
    a++;
  }
  if (S[i] === '2') {
    b++;
  }
}
max = Math.max(max, Math.max(0, a - M) + b);
console.log(max);
