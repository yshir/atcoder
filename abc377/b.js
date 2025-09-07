const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const N = 8;
const A = [];
for (let i = 0; i < N; i++) {
  A[i] = input[i].split('');
}

const B = [];
for (let i = 0; i < N; i++) {
  B[i] = Array(N).fill(true);
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (A[i][j] === '#') {
      for (let k = 0; k < N; k++) {
        B[i][k] = false;
        B[k][j] = false;
      }
    }
  }
}

let cnt = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (B[i][j]) {
      cnt++;
    }
  }
}
console.log(cnt);
