const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

const G = [];
for (let i = 0; i < N; i++) {
  G[i] = [];
}

const H = [];
for (let i = 0; i < N; i++) {
  H[i] = [];
}

for (let i = 0; i < M; i++) {
  let [a, b] = input[i + 1].split(' ').map(Number);
  a--;
  b--;

  G[a].push(b);
  H[b].push(a);
}

const stack = [];
const seen = new Set();
const dfs = (i) => {
  seen.add(i);
  for (const v of G[i]) {
    if (!seen.has(v)) dfs(v);
  }
  stack.push(i);
};
for (let i = 0; i < N; i++) {
  if (!seen.has(i)) dfs(i);
}

const seen2 = new Set();
const dfs2 = (i) => {
  let cnt = 1;
  seen2.add(i);
  for (const v of H[i]) {
    if (!seen2.has(v)) {
      cnt += dfs2(v);
    }
  }
  return cnt;
};

const s = [];
while (stack.length > 0) {
  const v = stack.pop();
  if (!seen2.has(v)) {
    s.push(dfs2(v));
  }
}

let cnt = 0;
for (const v of s) {
  if (v > 1) {
    cnt += (v * (v - 1)) / 2;
  }
}
console.log(cnt);
