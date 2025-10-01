const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(BigInt);
const X = [];
for (let i = 0; i < M; i++) {
  const [a, b] = input[i + 1].split(' ').map(BigInt);
  X[i] = { a, b, c: b - a };
}

X.sort((x, y) => {
  if (x.c === y.c) {
    if (x.a - y.a === 0n) {
      return 0;
    } else if (x.a - y.a > 0n) {
      return 1;
    } else {
      return -1;
    }
  }

  if (y.c - x.c === 0n) {
    return 0;
  } else if (y.c - x.c > 0n) {
    return 1;
  } else {
    return -1;
  }
});

let cnt = 0n;
let remain = N;
for (let i = 0; i < M; i++) {
  if (remain < X[i].a) continue;

  const d = (remain - X[i].a) / -X[i].c + 1n;
  cnt += d;
  remain += d * X[i].c;
}

console.log(cnt.toString());
