const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
let [N, M, K] = input[0].split(' ').map(BigInt);
let [X, Y] = input[1].split(' ').map(BigInt);
let A = input[2].split(' ').map(BigInt);
let B = input[3].split(' ').map(BigInt);

N = Number(N);
M = Number(M);

const cmp = (a, b) => {
  if (a === b) {
    return 0;
  }
  return a < b ? -1 : 1;
};

const upper_bound = (arr, n) => {
  let first = 0,
    last = arr.length - 1,
    middle;
  while (first <= last) {
    middle = Math.floor((first + last) / 2);
    if (arr[middle] <= n) first = middle + 1;
    else last = middle - 1;
  }
  return first;
};

const ceil = (a, b) => {
  return (a + b - 1n) / b;
};

A.sort((x, y) => cmp(x, y));
B.sort((x, y) => cmp(x, y));

const A_acc = [];
const B_acc = [];
const C_acc = [];

for (let i = 0; i < N; i++) A_acc[i] = (A_acc[i - 1] || 0n) + A[i];
for (let i = 0; i < M; i++) B_acc[i] = (B_acc[i - 1] || 0n) + B[i];
for (let i = 0; i < M; i++) {
  C_acc[i] = (C_acc[i - 1] || 0n) + ceil(B[i], K);
}

let ans = upper_bound(A_acc, X + Y * K);
for (let i = 0; i < M; i++) {
  if (C_acc[i] > Y) {
    break;
  }

  const cur_Y = Y - C_acc[i];
  const cur_X = X + (C_acc[i] * K - B_acc[i]) + cur_Y * K;

  const cur = upper_bound(A_acc, cur_X);
  ans = Math.max(ans, cur + i + 1);
}
console.log(ans);
