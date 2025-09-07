const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

const k = (i, j) => i + '_' + j;

const set = new Set();
for (let i = 0; i < M; i++) {
  let [a, b] = input[i + 1].split(' ').map(Number);
  a--;
  b--;

  set.add(k(a, b));

  const d = [
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
  ];
  for ([dx, dy] of d) {
    const x = a + dx;
    const y = b + dy;
    if (x < 0 || x > N - 1 || y < 0 || y > N - 1) {
      continue;
    }
    set.add(k(x, y));
  }
}
console.log((BigInt(N) * BigInt(N) - BigInt(set.size)).toString());
