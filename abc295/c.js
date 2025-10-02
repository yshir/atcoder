const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const map = {};
for (let i = 0; i < N; i++) {
  map[A[i]] = (map[A[i]] || 0) + 1;
}

let cnt = 0;
for (const k in map) {
  cnt += Math.floor(map[k] / 2);
}
console.log(cnt);
