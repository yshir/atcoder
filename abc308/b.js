const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const C = input[1].split(' ');
const D = input[2].split(' ');
const P = input[3].split(' ').map(Number);

const map = {};
for (let i = 0; i < M; i++) {
  map[D[i]] = P[i + 1];
}

let ans = 0;
for (let i = 0; i < N; i++) {
  ans += map[C[i]] || P[0];
}
console.log(ans);
