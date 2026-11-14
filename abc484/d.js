const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const B = [];
for (let i = 0; i < N; i++) {
  B[i] = [];
  for (let j = 0; j < 10; j++) {
    B[i][j] = 0;
  }
}

for (let i = 0; i < N; i++) {
  if (i > 0) {
    for (let j = 0; j < 10; j++) {
      B[i][j] = B[i - 1][j];
    }
  }
  B[i][A[i]]++;
}

const map = new Map();
let total = 0n;
let cnt = 1n;
for (let i = 0; i < N; i++) {
  if (i > 0 && A[i - 1] !== A[i]) {
    cnt += total - (map.get(A[i]) || 0n);
  }
  map.set(A[i], (map.get(A[i]) || 0n) + 1n);
  total += 1n;
}
console.log(cnt.toString());
