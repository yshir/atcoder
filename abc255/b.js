const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const A = new Set(
  input[1]
    .split(' ')
    .map(Number)
    .map((x) => x - 1)
);

const B = [];
for (let i = 0; i < N; i++) {
  B[i] = input[i + 2].split(' ').map(Number);
}

let ans = 0;
for (let i = 0; i < N; i++) {
  if (A.has(i)) continue;
  const [x1, y1] = B[i];
  let now = Number.MAX_VALUE;
  for (let j = 0; j < N; j++) {
    if (!A.has(j)) continue;
    const [x2, y2] = B[j];
    const dx = x1 - x2;
    const dy = y1 - y2;
    now = Math.min(now, dx ** 2 + dy ** 2);
  }
  ans = Math.max(ans, now);
}
console.log(Math.sqrt(ans));
