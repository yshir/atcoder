const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, Q] = input[0].split(' ').map(Number);
const S = input[1].split('');

let head = 0;
for (let i = 0; i < Q; i++) {
  const [t, x] = input[i + 2].split(' ').map(Number);
  if (t === 1) {
    head = (head - x + N) % N;
  }
  if (t === 2) {
    console.log(S[(head + x - 1) % N]);
  }
}
