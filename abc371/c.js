const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const G = [];
const H = [];
for (let i = 0; i < N; i++) {
  G[i] = Array(N).fill(false);
  H[i] = Array(N).fill(false);
}

const [mg] = input[1].split(' ').map(Number);
for (let i = 0; i < mg; i++) {
  const [u, v] = input[i + 2].split(' ').map(Number);
  G[u - 1][v - 1] = true;
  G[v - 1][u - 1] = true;
}

const [mh] = input[2 + mg].split(' ').map(Number);
for (let i = 0; i < mh; i++) {
  const [u, v] = input[3 + mg + i].split(' ').map(Number);
  H[u - 1][v - 1] = true;
  H[v - 1][u - 1] = true;
}

const A = [];
for (let i = 0; i < N; i++) {
  A[i] = Array(N).fill(0);
}
for (let i = 0; i < N - 1; i++) {
  const row = input[3 + mg + mh + i].split(' ').map(Number);
  for (let j = 0; j < row.length; j++) {
    A[i][j + i + 1] = row[j];
    A[j + i + 1][i] = row[j];
  }
}

const permutation = (items, k = items.length) => {
  const res = [];
  const used = new Array(items.length).fill(false);
  const backtrack = (path) => {
    if (path.length === k) {
      res.push([...path]);
      return;
    }
    for (let i = 0; i < items.length; i++) {
      if (used[i]) continue;
      used[i] = true;
      path.push(items[i]);
      backtrack(path);
      path.pop();
      used[i] = false;
    }
  };
  backtrack([]);
  return res;
};

let ans = Number.MAX_SAFE_INTEGER;
for (const perm of permutation(
  Array(N)
    .fill(0)
    .map((_, idx) => idx)
)) {
  let sum = 0;
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      if (G[perm[i]][perm[j]] !== H[i][j]) {
        sum += A[i][j];
      }
    }
  }
  ans = Math.min(ans, sum);
}
console.log(ans);
