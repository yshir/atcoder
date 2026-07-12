const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const R = input[1];
const C = input[2];

function permutations(iterable, k = [...iterable].length) {
  const items = [...iterable];
  const used = new Array(items.length).fill(false);
  const path = [];
  const result = [];

  function dfs() {
    if (path.length === k) {
      result.push(path.slice());
      return;
    }
    for (let i = 0; i < items.length; i++) {
      if (used[i]) continue;

      used[i] = true;
      path.push(items[i]);
      dfs();
      path.pop(); // backtrack
      used[i] = false;
    }
  }

  dfs();
  return result;
}

const perms = permutations(
  Array(N)
    .fill(0)
    .map((_, i) => i),
);

const ok = (aperm, bperm, cperm) => {
  const X = [];

  for (let i = 0; i < N; i++) {
    X[i] = [];
    for (let j = 0; j < N; j++) X[i][j] = '.';

    const aj = aperm[i];
    const bj = bperm[i];
    const cj = cperm[i];
    if (aj === bj || bj === cj || cj === aj) return false;

    X[i][aj] = 'A';
    X[i][bj] = 'B';
    X[i][cj] = 'C';
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (X[i][j] === '.') continue;
      if (X[i][j] === R[i]) break;
      return false;
    }
  }

  for (let j = 0; j < N; j++) {
    for (let i = 0; i < N; i++) {
      if (X[i][j] === '.') continue;
      if (X[i][j] === C[j]) break;
      return false;
    }
  }

  console.log('Yes');
  console.log(X.map((y) => y.join('')).join('\n'));
  return true;
};

for (let aperm of perms) {
  for (let bperm of perms) {
    for (let cperm of perms) {
      if (ok(aperm, bperm, cperm)) {
        return;
      }
    }
  }
}

console.log('No');
