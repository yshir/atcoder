const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

const A = [];
for (let i = 0; i <= S.length; i++) {
  A[i] = [];
  for (let j = 0; j < 10; j++) {
    if (i === 0) {
      A[i][j] = 0;
    } else {
      A[i][j] = (A[i - 1][j] + (S[i - 1] === String(j) ? 1 : 0)) % 2;
    }
  }
}

const map = new Map();
for (let i = 0; i <= S.length; i++) {
  let n = 0;
  for (let j = 0; j < 10; j++) {
    if (A[i][j]) n += 1 << j;
  }
  map.set(n, (map.get(n) || 0) + 1);
}

let ans = 0;
for (const [_, v] of map) {
  ans += (v * (v - 1)) / 2;
}
console.log(ans);
