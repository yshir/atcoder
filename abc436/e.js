const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const P = input[1].split(' ').map(Number);

const G = [];
for (let i = 0; i < N; i++) {
  G[i] = P[i] - 1;
}

const C = [];
const seen = new Set();
for (let i = 0; i < N; i++) {
  if (seen.has(i)) continue;

  let cur = i;
  const idx = C.length;
  C[idx] = 0;
  while (!seen.has(cur)) {
    C[idx]++;
    seen.add(cur);
    cur = G[cur];
  }
}

let ans = 0;
for (let i = 0; i < C.length; i++) {
  if (C[i] > 1) {
    ans += (C[i] * (C[i] - 1)) / 2;
  }
}
console.log(ans);
