const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, A, B] = input[0].split(' ').map(BigInt);
const [P, Q, R, S] = input[1].split(' ').map(BigInt);

const H = Q - P + 1n;
const W = S - R + 1n;

const X = [];
for (let i = 0; i < H; i++) {
  X[i] = [];
  for (let j = 0; j < W; j++) {
    const ii = BigInt(i) + P;
    const jj = BigInt(j) + R;
    if (ii + jj === A + B || ii - jj === A - B) {
      X[i][j] = '#';
    } else {
      X[i][j] = '.';
    }
  }
  console.log(X[i].join(''));
}
