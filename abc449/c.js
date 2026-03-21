const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, L, R] = input[0].split(' ').map(Number);
const S = input[1];

const map = {};
let ans = 0;

for (let j = 0; j < N; j++) {
  const i_r = j - L;
  const i_l = j - R - 1;

  if (i_r >= 0) {
    map[S[i_r]] = (map[S[i_r]] || 0) + 1;
  }
  if (i_l >= 0) {
    map[S[i_l]] = (map[S[i_l]] || 0) - 1;
  }

  ans += map[S[j]] || 0;
}

console.log(ans);
