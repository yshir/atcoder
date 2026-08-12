const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [H, W] = input[0].split(' ').map(Number);
const P = [];
for (let i = 0; i < H; i++) {
  P[i] = input[i + 1].split(' ').map(Number);
}

const f = (hs) => {
  let max = 0;
  const map = new Map();
  for (let j = 0; j < W; j++) {
    let ok = true;
    const d = P[hs[0]][j];
    for (const i of hs) {
      if (P[i][j] !== d) {
        ok = false;
      }
    }
    if (ok) {
      const cur = (map.get(d) || 0) + hs.length;
      map.set(d, cur);
      max = Math.max(max, cur);
    }
  }
  return max;
};

let ans = 0;
for (let i = 1; i < 1 << H; i++) {
  const a = [];
  for (let j = 0; j < H; j++) {
    if ((i >> j) & 1) {
      a.push(j);
    }
  }
  ans = Math.max(ans, f(a));
}
console.log(ans);
