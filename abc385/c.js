const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const H = input[1].split(' ').map(Number);

let ans = 1;

for (let i = 1; i < Math.floor(N / 2); i++) {
  for (let j = 0; j < N; j++) {
    const target = H[j];
    let cnt = 0;
    for (let k = j; k < N; k += i) {
      if (H[k] === target) {
        cnt++;
      } else {
        break;
      }
    }
    ans = Math.max(ans, cnt);
  }
}

console.log(ans);
