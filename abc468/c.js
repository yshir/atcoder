const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const P = input[1].split(' ').map(Number);
const Q = input[2].split(' ').map(Number);

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

const PN = Number(P.join(''));
const QN = Number(Q.join(''));

const f = (perm) => {
  return g(P, perm) && g(perm, Q);
};

const g = (a, b) => {
  if (a.length < b.length) {
    let ok = true;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        ok = false;
        break;
      }
    }
    if (ok) return true;
  }

  const min = Math.min(a.length, b.length);
  for (let i = 0; i < min; i++) {
    if (a[i] < b[i]) return true;
    if (a[i] > b[i]) return false;
  }
};

let cnt = 0;
for (const perm of permutations(
  Array(N)
    .fill(0)
    .map((_, i) => i + 1),
)) {
  if (f(perm)) {
    cnt++;
  }
}
console.log(cnt);

// console.log(10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2);
