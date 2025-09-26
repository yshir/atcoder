const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [p, q] = input[0].split(' ');

const map = {
  A: 0,
  B: 3,
  C: 4,
  D: 8,
  E: 9,
  F: 14,
  G: 23,
};

console.log(Math.abs(map[p] - map[q]));
