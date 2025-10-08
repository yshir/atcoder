const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

const edge = {};

for (let i = 0; i < M; i++) {
  let [a, b] = input[i + 1].split(' ').map(Number);
  a--;
  b--;
  edge[a] = edge[a] || [];
  edge[a].push(b);
  edge[b] = edge[b] || [];
  edge[b].push(a);
}

for (let i = 0; i < N; i++) {
  const e = (edge[i] || []).map((x) => x + 1).sort((a, b) => a - b);
  console.log([e.length, ...e].join(' '));
}
