const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const S = [];
for (let i = 0; i < N; i++) S[i] = input[i + 1].split('');

const A = [];
for (let i = 0; i < N; i++) {
  let cnt = 0;
  for (let j = 0; j < S[i].length; j++) {
    if (S[i][j] === 'o') {
      cnt++;
    }
  }
  A[i] = { idx: i, cnt };
}

A.sort((a, b) => {
  if (a.cnt === b.cnt) {
    return a.idx - b.idx;
  }
  return b.cnt - a.cnt;
});
console.log(A.map((x) => x.idx + 1).join(' '));
