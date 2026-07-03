const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const H = [];
const W = [];

for (let i = 0; i < N; i++) {
  H[i] = 0;
  W[i] = 0;
}

const S = [];
for (let i = 0; i < N; i++) {
  S[i] = input[i + 1];
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (S[i][j] === 'o') {
      H[i]++;
      W[j]++;
    }
  }
}

let ans = 0n;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (S[i][j] === 'o') {
      ans += BigInt((H[i] - 1) * (W[j] - 1));
    }
  }
}
console.log(ans.toString());
