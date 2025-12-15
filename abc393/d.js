const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const S = input[1];

const P = [];
for (let i = 0; i < N; i++) {
  if (S[i] === '1') {
    P.push(i);
  }
}

const mid_i = Math.floor(P.length / 2);
const mid = P[mid_i];

let ans = 0;
for (let i = 0; i < P.length; i++) {
  const dst = mid - (mid_i - i);
  ans += Math.abs(dst - P[i]);
}
console.log(ans);
