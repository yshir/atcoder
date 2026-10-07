const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const B = new Uint32Array(N);
const C = new Uint32Array(N);
const D = new Uint32Array(N);

for (let i = 0; i < N; i++) {
  let v = A[i];
  while (v % 2 === 0) {
    v /= 2;
    B[i]++;
  }
  while (v % 3 === 0) {
    v /= 3;
    C[i]++;
  }
  D[i] = v;
}

if (new Set(D).size !== 1) {
  console.log(-1);
  return;
}

let min2 = Infinity;
let min3 = Infinity;
for (let i = 0; i < N; i++) {
  min2 = Math.min(min2, B[i]);
  min3 = Math.min(min3, C[i]);
}

let ans = 0;
for (let i = 0; i < N; i++) {
  ans += B[i] - min2;
  ans += C[i] - min3;
}
console.log(ans);
