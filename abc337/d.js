const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [H, W, K] = input[0].split(' ').map(Number);
const S = [];
for (let i = 0; i < H; i++) S[i] = input[i + 1];

const R = [];
const C = [];

for (let i = 0; i < H; i++) {
  R[i] = [];
  C[i] = [];
  for (let j = 0; j < W; j++) {
    const o = S[i][j] === 'o' ? 1 : 0;
    const x = S[i][j] === 'x' ? 1 : 0;
    R[i][j] = { o, x };
    C[i][j] = { o, x };
  }
}

for (let i = 0; i < H; i++) {
  for (let j = 0; j < W - 1; j++) {
    R[i][j + 1].o += R[i][j].o;
    R[i][j + 1].x += R[i][j].x;
  }
}
for (let j = 0; j < W; j++) {
  for (let i = 0; i < H - 1; i++) {
    C[i + 1][j].o += C[i][j].o;
    C[i + 1][j].x += C[i][j].x;
  }
}

const get = (A, b, c) => {
  const d = A[b];
  const e = d !== undefined ? d[c] : { o: 0, x: 0 };
  return e !== undefined ? e : { o: 0, x: 0 };
};

const INF = 2e5 + 1;

let ans = INF;

for (let i = 0; i < H; i++) {
  for (let j = K - 1; j < W; j++) {
    const a = get(R, i, j);
    const b = get(R, i, j - K);

    const o = a.o - b.o;
    const x = a.x - b.x;
    if (x === 0) {
      ans = Math.min(ans, K - o);
    }
  }
}
for (let j = 0; j < W; j++) {
  for (let i = K - 1; i < H; i++) {
    const a = get(C, i, j);
    const b = get(C, i - K, j);

    const o = a.o - b.o;
    const x = a.x - b.x;
    if (x === 0) {
      ans = Math.min(ans, K - o);
    }
  }
}

console.log(ans === INF ? -1 : ans);
