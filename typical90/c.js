const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const map = {};
for (let i = 0; i < N - 1; i++) {
  const [a, b] = input[i + 1].split(' ').map(Number);
  map[a] = map[a] || [];
  map[a].push(b);
  map[b] = map[b] || [];
  map[b].push(a);
}

let seen = new Set();
let max = 0;
let max_n = 1;
const dfs = (n, d = 0) => {
  if (seen.has(n)) {
    return;
  }
  seen.add(n);

  if (max < d) {
    max = d;
    max_n = n;
  }

  for (const next of map[n]) {
    dfs(next, d + 1);
  }
};
dfs(1);

seen = new Set();
max = 0;
dfs(max_n);
console.log(max + 1);
