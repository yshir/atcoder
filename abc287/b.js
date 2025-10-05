const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

const S = [];
for (let i = 0; i < N; i++) {
  S[i] = input[i + 1];
}
const T = new Set();
for (let i = 0; i < M; i++) {
  T.add(input[i + 1 + N]);
}

let cnt = 0;
for (let i = 0; i < N; i++) {
  const ss = [...S[i]].slice(S[i].length - 3).join('');
  if (T.has(ss)) {
    cnt++;
  }
}
console.log(cnt);
