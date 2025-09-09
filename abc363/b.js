const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, T, P] = input[0].split(' ').map(Number);
const L = input[1].split(' ').map(Number);

for (let t = 0; t < 101; t++) {
  let cnt = 0;
  for (let i = 0; i < N; i++) {
    if (T <= L[i] + t) {
      cnt++;
    }
  }
  if (cnt >= P) {
    console.log(t);
    return;
  }
}
