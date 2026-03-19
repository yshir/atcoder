const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const B = [];
for (let i = 0; i < 10 ** 6; i++) {
  B[i] = 0;
}

for (let i = 0; i < N; i++) {
  B[0]++;
  B[A[i]]--;
}

for (let i = 0; i < B.length - 1; i++) {
  B[i + 1] += B[i];
}

for (let i = 0; i < B.length - 1; i++) {
  if (B[i] >= 10) {
    B[i + 1] += Math.floor(B[i] / 10);
    B[i] = B[i] % 10;
  }
}

let ans = '';
let ok = false;
for (let i = B.length - 1; i >= 0; i--) {
  ok = ok || B[i] > 0;
  if (ok) ans += String(B[i]);
}
console.log(ans);
