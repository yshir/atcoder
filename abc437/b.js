let line = 0;
const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [H, W, N] = input[line++].split(' ').map(Number);

const G = [];
for (let i = 0; i < H; i++) {
  G[i] = input[line++].split(' ').map(Number);
}

const set = new Set();
for (let i = 0; i < N; i++) {
  const [b] = input[line++].split(' ').map(Number);
  set.add(b);
}

let max = 0;
for (let i = 0; i < H; i++) {
  let cnt = 0;
  for (let j = 0; j < W; j++) {
    if (set.has(G[i][j])) {
      cnt++;
    }
  }
  max = Math.max(max, cnt);
}
console.log(max);
