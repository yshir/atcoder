const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const S = [];
for (let i = 0; i < N; i++) {
  S[i] = input[i + 1];
}

const map = {};
for (let i = 0; i < N; i++) {
  if (map[S[i]]) {
    console.log(`${S[i]}(${map[S[i]]})`);
  } else {
    console.log(S[i]);
  }
  map[S[i]] = (map[S[i]] || 0) + 1;
}
