const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const K = input[1].split(' ').map(Number);

let ans = Number.MAX_VALUE;
for (let i = 0; i < 2 ** N; i++) {
  let a = 0;
  let b = 0;

  for (let j = 0; j < N; j++) {
    if (((i >> j) & 1) === 1) {
      a += K[j];
    } else {
      b += K[j];
    }
  }

  ans = Math.min(ans, a < b ? b : a);
}
console.log(ans);
