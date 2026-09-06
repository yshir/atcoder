const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(BigInt);
const B = input[2].split(' ').map(BigInt);

const MIN = BigInt(1);
const MAX = BigInt(1e18);

const W = [];
let win = 0n;
let lose = 0n;

for (let i = 0; i < N; i++) {
  if (A[i] <= B[i]) {
    W[i] = false;
    lose += B[i] - A[i];
  } else {
    W[i] = true;
    win += A[i] - B[i];
  }
}

if (win * MAX - lose * MIN > 0n) {
  console.log('Yes');
  console.log(W.map((x) => (x ? MAX : MIN)).join(' '));
} else {
  console.log('No');
}
