const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
let [N, M] = input[0].split(' ').map(Number);
M = BigInt(M);

let A = input[1].split(' ').map(Number);
A.sort((x, y) => x - y);
A = [...A, ...A].map((x) => BigInt(x));

const sum = A.reduce((x, y) => x + y, 0n);

const B = [...A];
for (let i = 1; i < B.length; i++) B[i] += B[i - 1];

let l = 0;
let r = 0;
let max = 0n;

const maxFn = (a, b) => (a > b ? a : b);

while (l < A.length) {
  r = l;
  while (r < A.length - 1 && r - l + 1 < N && (A[r] === A[r + 1] || (A[r] + 1n) % M === A[r + 1])) r++;
  max = maxFn(max, B[r] - (B[l - 1] || 0n));
  l = r + 1;
}

console.log((sum / 2n - max).toString());
