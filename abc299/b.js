const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, T] = input[0].split(' ').map(Number);
const C = input[1].split(' ').map(Number);
const R = input[2].split(' ').map(Number);

const t_exists = C.some((x) => x === T);

const D = t_exists ? T : C[0];
let max = 0;
let max_i = 0;
for (let i = 0; i < N; i++) {
  if (C[i] === D && max < R[i]) {
    max = R[i];
    max_i = i;
  }
}

console.log(max_i + 1);
