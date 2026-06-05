const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, Q] = input[0].split(' ').map(Number);

const compare = (p1, p2) => {
  if (p1.z !== p2.z) return p1.z - p2.z;
  const v = BigInt(p1.x) * BigInt(p2.y) - BigInt(p1.y) * BigInt(p2.x);
  if (v === 0n) return 0;
  return v < 0n ? -1 : 1;
};

const P = [];
for (let i = 0; i < N; i++) {
  const [x, y] = input[i + 1].split(' ').map(Number);
  const z = y > 0 || (y === 0 && x > 0) ? 0 : 1;
  P[i] = { i, x, y, z };
}
P.sort(compare);

const idx = [];
for (let i = 0; i < N; i++) {
  idx[P[i].i] = i;
}

const idx_L = [...idx];
const idx_R = [...idx];
for (let i = 1; i < N; i++) {
  if (compare(P[i], P[i - 1]) === 0) idx_L[P[i].i] = idx_L[P[i - 1].i];
}
for (let i = N - 2; i >= 0; i--) {
  if (compare(P[i], P[i + 1]) === 0) idx_R[P[i].i] = idx_R[P[i + 1].i];
}

for (let i = 0; i < Q; i++) {
  let [a, b] = input[i + 1 + N].split(' ').map(Number);
  a--;
  b--;

  const nb = idx_R[b];
  const na = idx_L[a];

  const res = nb - na + 1;
  console.log(res > 0 ? res : res + N);
}
