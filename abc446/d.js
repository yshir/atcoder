const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const map = new Map();

for (let i = 0; i < N; i++) {
  const cnt = map.get(A[i]) || 0;
  map.set(A[i] + 1, Math.max(cnt + 1, map.get(A[i] + 1) || 0));
}

console.log(Math.max(...map.values()));
