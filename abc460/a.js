const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
let [N, M] = input[0].split(' ').map(Number);

let cnt = 0;

while (M > 0) {
  M = N % M;
  cnt++;
}

console.log(cnt);
