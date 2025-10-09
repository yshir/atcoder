const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const N = 9;
const S = [];
for (let i = 0; i < N; i++) {
  S[i] = input[i];
}

const P = [];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (S[i][j] === '#') {
      P.push([i, j]);
    }
  }
}

let cnt = 0;
for (let i = 0; i < P.length; i++) {
  for (let j = 0; j < P.length; j++) {
    if (i === j) continue;

    const [i1, j1] = P[i];
    const [i2, j2] = P[j];

    const di = i2 - i1;
    const dj = j2 - j1;

    const [i3, j3] = [i2 - dj, j2 + di];
    const [i4, j4] = [i3 - di, j3 - dj];
    if (!P.some((x) => x[0] === i3 && x[1] === j3)) {
      continue;
    }
    if (!P.some((x) => x[0] === i4 && x[1] === j4)) {
      continue;
    }

    cnt++;
  }
}

console.log(cnt / 4);
