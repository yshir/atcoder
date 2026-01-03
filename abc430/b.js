const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const S = [];
for (let i = 0; i < N; i++) {
  S[i] = input[i + 1];
}

const set = new Set();
for (let i = 0; i < N - M + 1; i++) {
  for (let j = 0; j < N - M + 1; j++) {
    const X = [];
    for (let ni = 0; ni < M; ni++) {
      for (let nj = 0; nj < M; nj++) {
        X.push(S[i + ni][j + nj]);
      }
    }
    set.add(X.join(''));
  }
}
console.log(set.size);
