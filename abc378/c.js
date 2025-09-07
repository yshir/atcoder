const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const map = {};
for (let i = 0; i < N; i++) {
  if (map[A[i]]) {
    console.log(map[A[i]]);
  } else {
    console.log(-1);
  }
  map[A[i]] = i + 1;
}
