const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const X = input[0];
const Y = input[1];
const [Q] = input[2].split(' ').map(Number);

const alpha = 'abcdefghijklmnopqrstuvwxyz';

const L = [BigInt(X.length), BigInt(Y.length)];
for (let i = 2; i < 100; i++) {
  L[i] = L[i - 1] + L[i - 2];
}

const C = {};
for (const a of alpha) {
  C[a] = [0n, 0n];
}
for (let i = 0; i < X.length; i++) {
  C[X[i]][0] += 1n;
}
for (let i = 0; i < Y.length; i++) {
  C[Y[i]][1] += 1n;
}
for (let i = 2; i < 100; i++) {
  for (const a of alpha) {
    C[a][i] = C[a][i - 1] + C[a][i - 2];
  }
}

const accX = {};
const accY = {};
for (const a of alpha) {
  accX[a] = [0];
  accY[a] = [0];
}
for (let i = 0; i < X.length; i++) {
  for (const a of alpha) {
    accX[a][i + 1] = accX[a][i];
    if (a === X[i]) {
      accX[a][i + 1]++;
    }
  }
}
for (let i = 0; i < Y.length; i++) {
  for (const a of alpha) {
    accY[a][i + 1] = accY[a][i];
    if (a === Y[i]) {
      accY[a][i + 1]++;
    }
  }
}

const f = (r, c) => {
  if (r === 0n) return 0n;

  let i = 99;
  let cnt = 0n;
  while (i > 1) {
    if (r <= L[i - 1]) {
      i--;
    } else {
      cnt += C[c][i - 1];
      r -= L[i - 1];
      i -= 2;
    }
  }

  if (i === 0) {
    return cnt + BigInt(accX[c][r]);
  } else if (i === 1) {
    return cnt + BigInt(accY[c][r]);
  } else {
    throw Error(`invalid state`);
  }
};

for (let i = 0; i < Q; i++) {
  let [l, r, c] = input[3 + i].split(' ');
  l = BigInt(l);
  r = BigInt(r);
  console.log((f(r, c) - f(l - 1n, c)).toString());
}
