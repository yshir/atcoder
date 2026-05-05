const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

const alpha = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();

const acc = [];

acc[0] = {};
for (const a of alpha) {
  acc[0][a] = 0;
}

for (let i = 0; i < S.length; i++) {
  acc[i + 1] = {};
  for (const a of alpha) {
    acc[i + 1][a] = acc[i][a];
  }
  acc[i + 1][S[i]]++;
}

let cnt = 0;
for (let i = 2; i < S.length; i++) {
  for (const a of alpha) {
    const l = acc[i - 1][a];
    const r = acc[S.length][a] - acc[i][a];
    cnt += l * r;
  }
}

console.log(cnt);
