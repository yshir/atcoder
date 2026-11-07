const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

const score = [];
for (let i = 0; i < N; i++) score[i] = 0;

const map = new Map();
for (let i = 0; i < N; i++) {
  map.set(i, new Map());
}
for (let i = 0; i < M; i++) {
  let [a, b] = input[i + 1].split(' ').map(Number);
  a--;
  b--;
  map.get(a).set(b, 1 + (map.get(a).get(b) || 0));
  score[a]++;
}

const score2 = [...score].map((a, i) => [a, i]);
score2.sort((a, b) => b[0] - a[0]);

let max0 = score2[0][0];
let max0_i = score2[0][1];

let max1 = score2[1][0];
let max1_i = score2[1][1];

for (let k = 0; k < N; k++) {
  let max2 = k !== max0_i ? max0 : max1;
  let max2_i = k !== max0_i ? max0_i : max1_i;
  for (const [i, v] of map.get(k)) {
    const new_v = score[i] + v;
    if (max2 < new_v || (max2 === new_v && max2_i > i)) {
      max2 = new_v;
      max2_i = i;
    }
  }
  console.log(max2_i + 1);
}
