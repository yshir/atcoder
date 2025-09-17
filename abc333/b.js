const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const map = {
  A: 0,
  B: 1,
  C: 2,
  D: 3,
  E: 4,
};

const [s1, s2] = input[0].split('').map((x) => map[x]);
const [t1, t2] = input[1].split('').map((x) => map[x]);

const map2 = {
  1: 0,
  2: 1,
  3: 1,
  4: 0,
};

const s = map2[Math.abs(s1 - s2)];
const t = map2[Math.abs(t1 - t2)];
console.log(s === t ? 'Yes' : 'No');
