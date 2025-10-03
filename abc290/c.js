const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

let ans = 0;
const set = new Set(A);
for (let i = 0; i < K; i++) {
  if (set.has(i)) {
    ans++;
  } else {
    console.log(ans);
    return;
  }
}

console.log(ans);
