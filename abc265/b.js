const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M, T] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const B = [];
for (let i = 0; i < N; i++) {
  B[i] = 0;
}
for (let i = 0; i < M; i++) {
  const [x, y] = input[2 + i].split(' ').map(Number);
  B[x - 1] = y;
}

let cur = T;
for (let i = 0; i < N - 1; i++) {
  cur -= A[i];
  cur += B[i];
  if (cur <= 0) {
    console.log('No');
    return;
  }
}

console.log('Yes');
