const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [H, W] = input[0].split(' ').map(Number);

const A = [];
for (let i = 0; i < H; i++) {
  A[i] = input[i + 1].split(' ').map(Number);
}

const B = [];
for (let i = 0; i < H; i++) {
  B[i] = input[i + 1 + H].split(' ').map(Number);
}

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

const ok = (hlist, wlist) => {
  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      if (A[hlist[i]][wlist[j]] !== B[i][j]) {
        return false;
      }
    }
  }
  return true;
};

const inv = (hlist, wlist) => {
  let cnt = 0;
  for (const list of [hlist, wlist]) {
    for (let i = 0; i < list.length; i++) {
      for (let j = i + 1; j < list.length; j++) {
        if (list[i] > list[j]) cnt++;
      }
    }
  }
  return cnt;
};

const INF = 1e9;
let ans = INF;
for (const hlist of permutations(
  Array(H)
    .fill(0)
    .map((_, i) => i),
)) {
  for (const wlist of permutations(
    Array(W)
      .fill(0)
      .map((_, i) => i),
  )) {
    if (ok(hlist, wlist)) {
      ans = Math.min(ans, inv(hlist, wlist));
    }
  }
}
console.log(ans === INF ? -1 : ans);
