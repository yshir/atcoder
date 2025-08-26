const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

const graph = {};
for (let i = 0; i < N; i++) {
  graph[i + 1] = [];
}

for (let i = 0; i < M; i++) {
  const [a, b] = input[i + 1].split(' ').map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

if (Object.values(graph).some((x) => x.length !== 2)) {
  console.log('No');
  return;
}

const seen = new Set();
const dfs = (v) => {
  if (seen.has(v)) {
    return;
  }
  seen.add(v);
  const [a, b] = graph[v];
  dfs(a);
  dfs(b);
};
dfs(Number(Object.keys(graph)[0]));

if (seen.size === N) {
  console.log('Yes');
} else {
  console.log('No');
}
