const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const set = new Set(A);
let cost = 0;
let ans = 0;
for (let i = 1; i <= 10 ** 9; i++) {
  if (set.has(i)) {
    cost += 1;
  } else {
    cost += 2;
  }

  if (cost <= N) {
    ans++;
  } else {
    break;
  }
}
console.log(ans);
