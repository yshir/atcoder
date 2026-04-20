const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

const G = [];
for (let i = 0; i < N; i++) {
  G[i] = [];
}
for (let i = 0; i < M; i++) {
  let [a, b] = input[i + 1].split(' ').map(Number);
  a--;
  b--;
  G[a].push(b);
}

const seen = new Set();
const stack = [];

stack.push(0);

while (stack.length > 0) {
  const v = stack.pop();
  if (seen.has(v)) {
    continue;
  }
  seen.add(v);

  for (const w of G[v]) {
    stack.push(w);
  }
}

console.log(seen.size);
