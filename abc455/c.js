const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const map = {};
for (let i = 0; i < N; i++) {
  if (map[A[i]] == undefined) {
    map[A[i]] = 0;
  }
  map[A[i]] += A[i];
}
const arr = Object.values(map);
arr.sort((a, b) => b - a);

const sum = arr.slice(K).reduce((a, b) => a + b, 0);
console.log(sum);
