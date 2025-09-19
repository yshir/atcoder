const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const S = input[1];

let cur = S[0];
let cnt = 1;
const map = { [cur]: cnt };
for (let i = 1; i < N; i++) {
  if (S[i] === cur) {
    cnt++;
  } else {
    cur = S[i];
    cnt = 1;
  }
  map[cur] = Math.max(map[cur] || 0, cnt);
}

let ans = 0;
for (const k in map) {
  ans += map[k];
}
console.log(ans);
