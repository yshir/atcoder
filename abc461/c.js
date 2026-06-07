const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, K, M] = input[0].split(' ').map(Number);

const A = [];
for (let i = 0; i < N; i++) {
  const [c, v] = input[i + 1].split(' ').map(Number);
  A[i] = { c, v };
}
A.sort((a, b) => b.v - a.v);

let ans = 0n;
const used_idx = new Set();
const used_c = new Set();

for (let i = 0; i < N; i++) {
  if (used_c.size === M) break;
  if (!used_c.has(A[i].c)) {
    used_c.add(A[i].c);
    used_idx.add(i);
    ans += BigInt(A[i].v);
  }
}

for (let i = 0; i < N; i++) {
  if (used_idx.size === K) break;
  if (!used_idx.has(i)) {
    used_idx.add(i);
    ans += BigInt(A[i].v);
  }
}

console.log(ans.toString());

for (let h2 = h1; h2 < H; h2++) {
  let w1 = 0;
  for (let w2 = 0; w2 < W; w2++) {
    while (w1 < w2 && get(h1, h2, w1, w2) > k2) {
      w1++;
    }
    cnt += w2 - w1 + 1;
  }
}
