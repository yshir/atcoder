let line = 0;
const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[line++].split(' ').map(Number);
const S = [];
for (let i = 0; i < N; i++) S[i] = input[line++];
const T = [];
for (let i = 0; i < M; i++) T[i] = input[line++];

const set = new Set();
for (let i = 0; i < M; i++) set.add(T[i]);

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

const perms = permutations(S);

let string_sum = 0;
for (let i = 0; i < N; i++) string_sum += S[i].length;

const underscores = [];
const underscore = new Array(N - 1).fill(1);
let underscore_sum = N - 1;
const dfs = (si = 0) => {
  const sum = underscore_sum + string_sum;
  if (sum > 16 || sum < 3) return;
  underscores.push([...underscore]);
  for (let i = si; i < N - 1; i++) {
    underscore[i]++;
    underscore_sum++;
    dfs(i);
    underscore[i]--;
    underscore_sum--;
  }
};
dfs();

for (const perm of perms) {
  for (const underscore of underscores) {
    let str = '';
    for (let i = 0; i < N; i++) {
      str += perm[i];
      if (i < N - 1) str += '_'.repeat(underscore[i]);
    }
    if (!set.has(str)) {
      console.log(str);
      return;
    }
  }
}

console.log(-1);
