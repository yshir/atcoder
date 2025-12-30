const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [R] = input[0].split(' ').map(Number);

const MAX = 10 ** 6;

let cnt = 0;
let cur = 0;
for (let i = MAX; i >= 2; i--) {
  cnt += cur;
  for (let j = cur + 1; j <= MAX; j++) {
    const y = i - 0.5;
    const x = j - 0.5;
    if (x ** 2 + y ** 2 > R ** 2) {
      break;
    }
    cur++;
    cnt++;
  }
}
console.log(cnt * 4 + 1);
