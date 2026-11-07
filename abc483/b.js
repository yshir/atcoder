const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const [N, Q] = input[0].split(' ').map(Number);
const K = input[1].split(' ').map(Number);

let A = [];
for (let i = 0; i < N; i++) {
  A[i] = [i + 1, 0];
}

for (let i = 0; i < Q; i++) {
  A = [
    ...A.slice(0, K[i])
      .reverse()
      .map((x) => [x[0], 1 - x[1]]),
    ...A.slice(K[i]),
  ];
}

console.log(A.map((x) => (x[1] ? -x[0] : x[0])).join('\n'));
