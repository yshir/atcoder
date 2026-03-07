let line = 0;
const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
let [N, Q] = input[line++].split(' ').map(Number);
const A = input[line++].split(' ').map(Number);

const indexes = [...new Set(A)].sort((a, b) => a - b);

const map = new Map();
for (let i = 0; i < N; i++) {
  map.set(A[i], (map.get(A[i]) || 0) + 1);
}

while (Q--) {
  const [K] = input[line++].split(' ').map(Number);
  const B = input[line++].split(' ').map(Number);

  const map2 = new Map();
  for (let i = 0; i < K; i++) {
    map2.set(A[B[i] - 1], (map2.get(A[B[i] - 1]) || 0) + 1);
  }

  for (let i = 0; i < indexes.length; i++) {
    const idx = indexes[i];
    if (map.get(idx) - (map2.get(idx) || 0) > 0) {
      console.log(idx);
      break;
    }
  }
}
