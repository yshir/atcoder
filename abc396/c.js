const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(BigInt);
const _B = input[1].split(' ').map(BigInt);
const _W = input[2].split(' ').map(BigInt);

const B = _B.sort((a, b) => (b - a > 0 ? 1 : -1));
const W = _W.sort((a, b) => (b - a > 0 ? 1 : -1));

const dp_w = [];
for (let i = 0; i < M; i++) {
  if (W[i] > 0) {
    dp_w[i] = (dp_w[i - 1] || 0n) + W[i];
  } else {
    break;
  }
}

const dp_b = [B[0]];
for (let i = 1; i < N; i++) {
  dp_b[i] = dp_b[i - 1] + B[i];
}

let max = 0n;
for (let i = 0; i < N; i++) {
  const cur = dp_b[i] + (dp_w[i] || dp_w[dp_w.length - 1] || 0n);
  if (cur > max) {
    max = cur;
  }
}
console.log(max.toString());
