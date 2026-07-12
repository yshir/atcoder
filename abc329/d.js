const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

let max = 0;
let max_i = 0;

const map = {};

for (let i = 0; i < M; i++) {
  const j = A[i] - 1;
  map[j] = (map[j] || 0) + 1;
  if (map[j] > max || (map[j] === max && j < max_i)) {
    max = map[j];
    max_i = j;
  }
  console.log(max_i + 1);
}
