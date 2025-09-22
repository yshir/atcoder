const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

const graph = {};
for (let i = 0; i < M; i++) {
  const [a, b, c] = input[i + 1].split(' ').map(Number);
  graph[a] = graph[a] || [];
  graph[a].push({ to: b, cost: c });
  graph[b] = graph[b] || [];
  graph[b].push({ to: a, cost: c });
}

const f = (i) => {
  let max = 0;
  const used = [];

  const f2 = (pos, cost) => {
    max = Math.max(max, cost);

    used[pos] = true;
    const next = graph[pos];
    if (next) {
      for (x of next) {
        if (!used[x.to]) {
          f2(x.to, cost + x.cost);
        }
      }
    }
    used[pos] = false;
  };
  f2(i, 0);

  return max;
};

let ans = 0;
for (let i = 1; i <= N; i++) {
  ans = Math.max(ans, f(i));
}
console.log(ans);
