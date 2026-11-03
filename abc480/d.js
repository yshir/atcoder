const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const [N, Q] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const A_acc = [...A.map((x) => BigInt(x))];
for (let i = 1; i < N; i++) A_acc[i] += A_acc[i - 1];

// idx
const B = [];
for (let i = 0; i < N; i++) B[i] = BigInt(i + 1);
for (let i = 1; i < N; i++) B[i] += B[i - 1];

// val
const C = [];
for (let i = 0; i < N; i++) C[i] = A_acc[i];
for (let i = 1; i < N; i++) C[i] += C[i - 1];

const lower_bound = (arr, n) => {
  let first = 0,
    last = arr.length - 1,
    middle;
  while (first <= last) {
    middle = Math.floor((first + last) / 2);
    if (arr[middle] < n) first = middle + 1;
    else last = middle - 1;
  }
  return first;
};

const f = (r) => {
  if (r === 0n) return 0n;

  const idx = lower_bound(B, r);
  if (B[idx] === r) return C[idx];

  const x = C[idx - 1];
  const y = A_acc[r - B[idx - 1] - 1n];
  return x + y;
};

for (let i = 0; i < Q; i++) {
  let [l, r] = input[i + 2].split(' ').map(BigInt);
  console.log((f(r) - f(l - 1n)).toString());
}
