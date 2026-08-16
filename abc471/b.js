const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const map = {};
let ans = -1;

for (let i = 0; i < N; i++) {
  const S = input[i + 1].toLowerCase();
  map[S] = (map[S] || 0) + 1;
  ans = Math.max(ans, map[S]);
}

console.log(ans);
