const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, Q] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const M = N * 2;
const B = [...A, ...A];
for (let i = 0; i < M - 1; i++) {
  B[i + 1] += B[i];
}

let head = 0;

for (let i = 0; i < Q; i++) {
  const query = input[i + 2].split(' ').map(Number);
  if (query[0] === 1) {
    const [, c] = query;
    head = (head + c) % N;
  }
  if (query[0] === 2) {
    let [, l, r] = query;
    l--;
    r--;
    console.log(B[head + r] - (B[head + l - 1] || 0));
  }
}
