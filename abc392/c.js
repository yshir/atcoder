const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const P = input[1].split(' ').map(Number);
const Q = input[2].split(' ').map(Number);

// i がかかれたゼッケンをつけている人の番号
const map = {};
for (let i = 0; i < N; i++) {
  map[Q[i] - 1] = i;
}

const ans = [];
for (let i = 0; i < N; i++) {
  ans.push(Q[P[map[i]] - 1]);
}
console.log(ans.join(' '));
