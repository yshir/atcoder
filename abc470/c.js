const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, Q] = input[0].split(' ').map(Number);

const A = [];
for (let i = 0; i < N; i++) A[i] = 0;

const nonzero = new Set();

const ans = [];

let sum = 0;
for (let i = 0; i < Q; i++) {
  let [a, x] = input[i + 1].split(' ').map(Number);
  x--;

  if (a === 1) {
    sum ^= A[x];
    A[x]++;
    sum ^= A[x];
    nonzero.add(x);
  }
  if (a === 2) {
    for (const j of [...nonzero]) {
      sum ^= A[j];
      A[j]--;
      sum ^= A[j];
      if (A[j] === 0) nonzero.delete(j);
    }
  }

  ans.push(sum);
}

console.log(ans.join('\n'));
