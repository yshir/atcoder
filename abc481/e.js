let line = 0;
const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
let [T] = input[line++].split(' ').map(Number);

const max = (a, b) => (a > b ? a : b);

while (T--) {
  const [N] = input[line++].split(' ').map(Number);
  const A = [];
  for (let i = 0; i < N; i++) {
    const [x, y] = input[line++].split(' ').map(BigInt);
    A.push([x, y, 1]);
    A.push([-x, -y, 0]);
  }
  A.sort((a, b) => {
    const [ax, ay] = a;
    const [bx, by] = b;

    const ag = ay > 0n || (ay === 0n && ax > 0n) ? 1 : 0;
    const bg = by > 0n || (by === 0n && bx > 0n) ? 1 : 0;
    if (ag !== bg) return ag > bg ? -1 : 1;

    const c = ax * by - ay * bx;
    if (c === 0n) return 0;
    return c > 0n ? -1 : 1;
  });

  const B = [...A, ...A];

  const cnt = [];
  for (let i = 0; i < B.length; i++) {
    cnt[i] = cnt[i - 1] || 0n;
    if (B[i][2]) cnt[i] += 1n;
  }

  let ans = 0n;
  for (let i = N - 1; i < B.length; i++) {
    ans = max(ans, cnt[i] - (cnt[i - N] || 0n));
  }
  console.log(ans.toString());
}
