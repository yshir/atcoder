const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const h = {};
for (let i = 0; i < N; i++) {
  if (h[A[i]] !== undefined) {
    h[A[i]] = -1;
    continue;
  }
  h[A[i]] = i + 1;
}

let max_i = -1;
let max = -1;
for (const k in h) {
  if (h[k] !== -1 && Number(k) > max) {
    max = Number(k);
    max_i = h[k];
  }
}

console.log(max_i);
