const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

let l = 0;
let cnt = 0;
let ans = 0;
const map = {};
for (let r = 0; r < N; r++) {
  if ((map[A[r]] || 0) === 0) {
    map[A[r]] = 1;
    cnt++;
  } else {
    map[A[r]]++;
  }

  while (cnt > K) {
    map[A[l]]--;
    if (map[A[l]] === 0) {
      cnt--;
    }
    l++;
  }

  ans = Math.max(ans, r - l + 1);
}

console.log(ans);
