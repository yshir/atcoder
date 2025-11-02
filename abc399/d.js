const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [T] = input[0].split(' ').map(Number);
for (let i = 0; i < T; i++) {
  const [N] = input[i * 2 + 1].split(' ').map(Number);
  const A = input[i * 2 + 2].split(' ').map(Number);

  const ng = new Set();
  const pos = {};
  for (let j = 0; j < A.length; j++) {
    pos[A[j]] = j;
    if (A[j] === A[j + 1]) ng.add(A[j]);
  }

  const ok = new Set();
  for (let j = 0; j < A.length - 1; j++) {
    const a = A[j];
    const b = A[j + 1];
    if (ng.has(a) || ng.has(b)) continue;

    const rj = pos[a];
    const rk = pos[b];
    if (rj === j || rk === j + 1) continue;

    if (Math.abs(rj - rk) === 1) {
      ok.add(a + '_' + b);
      ok.add(b + '_' + a);
    }
  }
  console.log(ok.size / 2);
}
