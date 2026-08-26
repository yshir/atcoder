const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const M = new Map();
for (let i = 0; i < N; i++) {
  const [s, t] = input[i + 1].split(' ');
  if (M.get(s) === undefined) M.set(s, []);
  if (M.get(t) === undefined) M.set(t, []);
  M.get(s).push(t);
}

const seen = new Set();
const finished = new Set();

const dfs = (u) => {
  seen.add(u);
  for (const v of M.get(u)) {
    if (seen.has(v) && !finished.has(v)) {
      return true;
    }
    if (!seen.has(v)) {
      if (dfs(v)) return true;
    }
  }
  finished.add(u);
  return false;
};

let ans = false;
for (const [k] of M) {
  if (!finished.has(k)) {
    if (dfs(k)) ans = true;
  }
}
console.log(ans ? 'No' : 'Yes');
