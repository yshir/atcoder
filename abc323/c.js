const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);
const S = [];
for (let i = 0; i < N; i++) S[i] = input[i + 2].split('');

const B = [];
for (let i = 0; i < M; i++) B[i] = { idx: i, val: A[i] };
B.sort((a, b) => b.val - a.val);

for (let i = 0; i < N; i++) {
  let target_score = 0;
  for (let j = 0; j < N; j++) {
    if (i === j) {
      continue;
    }
    let score = j + 1;
    for (let k = 0; k < M; k++) {
      if (S[j][k] === 'o') {
        score += A[k];
      }
    }
    target_score = Math.max(target_score, score);
  }

  let current_score = i + 1;
  for (let k = 0; k < M; k++) {
    if (S[i][k] === 'o') {
      current_score += A[k];
    }
  }

  if (current_score > target_score) {
    console.log(0);
    continue;
  }

  let cnt = 0;
  for (let j = 0; j < M; j++) {
    if (S[i][B[j].idx] === 'x') {
      current_score += B[j].val;
      cnt++;
      if (current_score > target_score) {
        console.log(cnt);
        break;
      }
    }
  }
}
