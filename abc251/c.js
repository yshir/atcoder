const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = [];
for (let i = 0; i < N; i++) {
  const [s, t] = input[i + 1].split(' ');
  A[i] = [s, Number(t)];
}

const O = [];

const set = new Set();
for (let i = 0; i < N; i++) {
  if (set.has(A[i][0])) {
    continue;
  }
  set.add(A[i][0]);
  O.push(i);
}

let max = 0;
let max_i = 0;
for (let i = 0; i < O.length; i++) {
  if (max < A[O[i]][1]) {
    max = A[O[i]][1];
    max_i = O[i];
  }
}
console.log(max_i + 1);
