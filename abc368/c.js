const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
let H = input[1].split(' ').map(Number);

let T = 0;
let cnt = 0;
for (let i = 0; i < N; i++) {
  let a = H[i] % 5;
  cnt += 3 * Math.floor(H[i] / 5);
  while (a > 0) {
    T++;
    cnt++;
    if (T % 3 === 0) {
      a -= 3;
    } else {
      a--;
    }
  }
}
console.log(cnt);
