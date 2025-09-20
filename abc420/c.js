const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, Q] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);
const B = input[2].split(' ').map(Number);

let sum = 0;
for (let i = 0; i < N; i++) {
  sum += Math.min(A[i], B[i]);
}

for (let i = 0; i < Q; i++) {
  const query = input[i + 3].split(' ');
  if (query[0] === 'A') {
    const [, x, v] = query.map(Number);
    const idx = x - 1;
    const prev_min = Math.min(A[idx], B[idx]);
    A[idx] = v;
    const new_min = Math.min(A[idx], B[idx]);
    sum += new_min - prev_min;
    console.log(sum);
  }
  if (query[0] === 'B') {
    const [, x, v] = query.map(Number);
    const idx = x - 1;
    const prev_min = Math.min(A[idx], B[idx]);
    B[idx] = v;
    const new_min = Math.min(A[idx], B[idx]);
    sum += new_min - prev_min;
    console.log(sum);
  }
}
