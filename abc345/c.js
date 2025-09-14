const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

const map = {};
for (let i = 0; i < S.length; i++) {
  map[S[i]] = (map[S[i]] || 0) + 1;
}
const freq = Object.values(map).filter((x) => x > 1);

let ans = (S.length * (S.length - 1)) / 2;
if (freq.length > 0) {
  ans++;
}
for (const n of freq) {
  ans -= (n * (n - 1)) / 2;
}

console.log(ans);
