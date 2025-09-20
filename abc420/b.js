const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const S = [];
for (let i = 0; i < N; i++) {
  S[i] = input[i + 1].split('').map(Number);
}

const X = [];
const Y = [];

for (let j = 0; j < M; j++) {
  let x = 0;
  let y = 0;
  for (let i = 0; i < N; i++) {
    if (S[i][j] === 0) {
      x++;
    } else {
      y++;
    }
  }
  if (x === 0 || y === 0) {
    X[j] = 1;
    Y[j] = 1;
  } else if (x < y) {
    X[j] = 1;
    Y[j] = 0;
  } else {
    X[j] = 0;
    Y[j] = 1;
  }
}

let max = 0;
let ans = [];

for (let i = 0; i < N; i++) {
  let cnt = 0;
  for (let j = 0; j < M; j++) {
    if (S[i][j] === 0) {
      cnt += X[j];
    } else {
      cnt += Y[j];
    }
  }

  if (max < cnt) {
    max = cnt;
    ans = [i + 1];
  } else if (max === cnt) {
    ans.push(i + 1);
  }
}

console.log(ans.join(' '));
