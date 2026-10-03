const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
let A = input[1].split(' ').map(Number);

let B = [...A];
B.sort((a, b) => a - b);

const map = {};
for (let i = 0; i < N; i++) {
  map[B[i]] = map[B[i]] || [];
  map[B[i]].push(i);
}
for (const k of Object.keys(map)) {
  map[k].reverse();
}

let min_l = Infinity;
let max_r = -Infinity;
for (let l = 0; l < N; l++) {
  const r = map[A[l]].pop();
  if (l === r) continue;
  min_l = Math.min(min_l, l);
  max_r = Math.max(max_r, r);
}

if (max_r - min_l + 1 > K) {
  console.log('No');
} else {
  console.log('Yes');
}
