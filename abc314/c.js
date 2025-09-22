const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const S = input[1];
const C = input[2].split(' ').map(Number);

const color = {};
const char = {};
for (let i = 0; i < N; i++) {
  color[C[i]] = color[C[i]] || [];
  color[C[i]].push(i);
  char[i] = color[C[i]].length - 1;
}

const T = [];
for (let i = 0; i < N; i++) {
  const idx = color[C[i]][(char[i] + 1) % color[C[i]].length];
  T[idx] = S[i];
}
console.log(T.join(''));
