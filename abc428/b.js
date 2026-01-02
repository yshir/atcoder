const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const S = input[1];

const map = {};
let max = 0;
for (let i = 0; i < N - K + 1; i++) {
  const sub = S.substring(i, i + K);
  map[sub] = (map[sub] || 0) + 1;
  max = Math.max(max, map[sub]);
}

const ans = [];
for (const k in map) {
  if (map[k] === max) {
    ans.push(k);
  }
}

console.log(max);
console.log(ans.sort().join(' '));
