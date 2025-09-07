const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, C] = input[0].split(' ').map(Number);
const T = input[1].split(' ').map(Number);

let cnt = 0;
let prev_t = -1001;
for (let i = 0; i < N; i++) {
  const current_t = T[i];
  if (current_t - prev_t >= C) {
    prev_t = current_t;
    cnt++;
  }
}
console.log(cnt);
