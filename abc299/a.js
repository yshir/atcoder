const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const S = input[1];

let cnt = 0;
for (let i = 0; i < N; i++) {
  if (S[i] === '|') {
    cnt++;
  }
  if (S[i] === '*') {
    if (cnt === 1) {
      console.log('in');
    } else {
      console.log('out');
    }
  }
}
