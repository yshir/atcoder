const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const X = input[0];
const [N] = input[1].split(' ').map(Number);

const map = {};
for (let i = 0; i < X.length; i++) {
  map[X[i]] = i;
}

const alpha = 'abcdefghijklmnopqrstuvwxyz';

const S = [];
for (let i = 0; i < N; i++) {
  const s = input[i + 2];
  const t = [...s].map((x) => alpha[map[x]]).join('');
  S[i] = { i, s, t };
}
S.sort((a, b) => a.t.localeCompare(b.t));
console.log(S.map((a) => a.s).join('\n'));
