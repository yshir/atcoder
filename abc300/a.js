const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, A, B] = input[0].split(' ').map(Number);
const C = input[1].split(' ').map(Number);

for (let i = 0; i < N; i++) {
  if (C[i] === A + B) {
    console.log(i + 1);
    return;
  }
}
