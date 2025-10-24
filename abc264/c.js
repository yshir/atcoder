const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [H, W] = input[0].split(' ').map(Number);
const A = [];
for (let i = 0; i < H; i++) {
  A[i] = input[i + 1].split(' ').map(Number);
}
const [H2, W2] = input[H + 1].split(' ').map(Number);
const B = [];
for (let i = 0; i < H2; i++) {
  B[i] = input[H + 2 + i].split(' ').map(Number);
}

const f = (ii, jj) => {
  for (let i = 0; i < H2; i++) {
    for (let j = 0; j < W2; j++) {
      if (B[i][j] !== A[ii[i]][jj[j]]) {
        return false;
      }
    }
  }
  return true;
};

for (let i = 0; i < 1 << H; i++) {
  const ii = [];
  for (let x = 0; x < H; x++) {
    if (((i >> x) & 1) === 1) {
      ii.push(x);
    }
  }
  if (ii.length !== H2) continue;

  for (let j = 0; j < 1 << W; j++) {
    const jj = [];
    for (let x = 0; x < W; x++) {
      if (((j >> x) & 1) === 1) {
        jj.push(x);
      }
    }
    if (jj.length !== W2) continue;

    if (f(ii, jj)) {
      console.log('Yes');
      return;
    }
  }
}

console.log('No');
