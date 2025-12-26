const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, W] = input[0].split(' ').map(Number);
const B = [];
for (let i = 0; i < N; i++) {
  const [x, y] = input[i + 1].split(' ').map(Number);
  B[i] = { i, x, y };
}

const G = []; // Grid
for (let i = 0; i < W; i++) {
  G[i] = [];
}
for (let i = 0; i < N; i++) {
  const { x, y } = B[i];
  G[x - 1].push({ i, y });
}
for (let i = 0; i < W; i++) {
  G[i].sort((a, b) => a.y - b.y);
}

const L_cnt = [];
const L_max = [];
for (let i = 0; i < W; i++) {
  for (let j = 0; j < G[i].length; j++) {
    B[G[i][j].i].l = j;
    L_max[j] = Math.max(L_max[j] || 0, G[i][j].y);
    L_cnt[j] = (L_cnt[j] || 0) + 1;
  }
}

const [Q] = input[N + 1].split(' ').map(Number);
for (let i = 0; i < Q; i++) {
  const [t, a] = input[i + N + 2].split(' ').map(Number);
  const { l } = B[a - 1];
  if (t >= L_max[l] && L_cnt[l] === W) {
    console.log('No');
  } else {
    console.log('Yes');
  }
}
