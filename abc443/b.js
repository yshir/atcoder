const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);

let cnt = 0;
for (let i = 0; ; i++) {
  cnt += N + i;
  if (cnt >= K) {
    console.log(i);
    return;
  }
}
