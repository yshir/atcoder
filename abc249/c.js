const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const S = [];
for (let i = 0; i < N; i++) {
  S[i] = input[i + 1];
}

let ans = 0;

for (let i = 0; i < 1 << N; i++) {
  const map = {};
  for (const a of [...'abcdefghijklmnopqrstuvwxyz']) {
    map[a] = 0;
  }

  for (let j = 0; j < N; j++) {
    if ((i >> j) & 1) {
      for (let k = 0; k < S[j].length; k++) {
        map[S[j][k]]++;
      }
    }
  }

  let now = 0;
  for (const k in map) {
    if (map[k] === K) now++;
  }

  ans = Math.max(ans, now);
}

console.log(ans);
