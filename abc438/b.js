const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const S = input[1].split('').map(Number);
const T = input[2].split('').map(Number);

let ans = Number.MAX_SAFE_INTEGER;

for (let i = 0; i <= N - M; i++) {
  let now = 0;
  for (let j = 0; j < M; j++) {
    let t = T[j];
    while (t !== S[i + j]) {
      t = (t + 1) % 10;
      now++;
    }
  }
  ans = Math.min(ans, now);
}

console.log(ans);
