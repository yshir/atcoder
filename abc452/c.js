let line = 0;
const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[line++].split(' ').map(Number);

const X = [];
for (let i = 0; i < N; i++) {
  X[i] = input[line++].split(' ').map(Number);
}

const set = new Set();
const key = (l, i, c) => `${l}_${i}_${c}`;

const [M] = input[line++].split(' ').map(Number);
const S = [];
for (let i = 0; i < M; i++) {
  S[i] = input[line++];
  for (let j = 0; j < S[i].length; j++) {
    set.add(key(S[i].length, j + 1, S[i][j]));
  }
}

const solve = (s) => {
  for (let i = 0; i < N; i++) {
    const [a, b] = X[i];
    const c = s[i];
    if (!set.has(key(a, b, c))) {
      return false;
    }
  }
  return true;
};

for (let i = 0; i < M; i++) {
  if (S[i].length === N && solve(S[i])) {
    console.log('Yes');
  } else {
    console.log('No');
  }
}
