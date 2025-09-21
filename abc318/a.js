const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M, P] = input[0].split(' ').map(Number);

let cnt = 0;
for (let k = 0; ; k++) {
  const d = M + k * P;
  if (1 <= d && d <= N) {
    cnt++;
  } else {
    break;
  }
}
console.log(cnt);
