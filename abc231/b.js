const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const map = {};
for (let i = 0; i < N; i++) {
  const S = input[i + 1];
  map[S] = (map[S] || 0) + 1;
}

let max_k = 0;
let max = 0;
for (const k in map) {
  if (map[k] > max) {
    max = map[k];
    max_k = k;
  }
}
console.log(max_k);
