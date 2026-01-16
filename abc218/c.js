let line = 0;
const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[line++].split(' ').map(Number);

const S = [];
for (let i = 0; i < N; i++) {
  S[i] = input[line++].split('');
}
const T = [];
for (let i = 0; i < N; i++) {
  T[i] = input[line++].split('');
}

const rotate_k = (i, j, n) => {
  while (n--) [i, j] = [j, N - i - 1];
  return [i, j];
};

const get = (A, i, j) => {
  return (A[i] || [])[j] || '.';
};

for (let r = 0; r < 4; r++) {
  const R = [];
  for (let i = 0; i < N; i++) {
    R[i] = [];
  }
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      const [ti, tj] = rotate_k(i, j, r);
      R[i][j] = T[ti][tj];
    }
  }

  let si = Number.MAX_VALUE;
  let sj = Number.MAX_VALUE;
  let ri = Number.MAX_VALUE;
  let rj = Number.MAX_VALUE;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (S[i][j] === '#') {
        si = Math.min(si, i);
        sj = Math.min(sj, j);
      }
      if (R[i][j] === '#') {
        ri = Math.min(ri, i);
        rj = Math.min(rj, j);
      }
    }
  }

  let ok = true;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (get(S, i + si, j + sj) !== get(R, i + ri, j + rj)) {
        ok = false;
      }
    }
  }
  if (ok) {
    console.log('Yes');
    return;
  }
}

console.log('No');
