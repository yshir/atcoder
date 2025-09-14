const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M, K] = input[0].split(' ').map(Number);

const C = [];
const A = [];
const R = [];
for (let i = 0; i < M; i++) {
  const c = input[i + 1].split(' ');
  C[i] = Number(c[0]);
  A[i] = c.slice(1, c.length - 1).map(Number);
  R[i] = c[c.length - 1] === 'o';
}

const test = (n) => {
  for (let i = 0; i < M; i++) {
    let unlock_cnt = 0;
    for (let j = 0; j < C[i]; j++) {
      if (((n >> (A[i][j] - 1)) & 1) === 1) {
        unlock_cnt++;
      }
    }

    const unlocked = unlock_cnt >= K;
    if (unlocked !== R[i]) {
      return false;
    }
  }
  return true;
};

let cnt = 0;
for (let n = 0; n < 1 << N; n++) {
  if (test(n)) {
    cnt++;
  }
}
console.log(cnt);
