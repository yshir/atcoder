const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const A = [];
for (let i = 0; i < N; i++) {
  const [f, s] = input[i + 1].split(' ').map(Number);
  A[i] = { f, s };
}
A.sort((a, b) => b.s - a.s);

if (A[0].f !== A[1].f) {
  console.log(A[0].s + A[1].s);
} else {
  const s1 = A[0].s + A[1].s / 2;
  if (N > 2) {
    for (let i = 2; i < N; i++) {
      if (A[0].f !== A[i].f) {
        const s2 = A[0].s + A[i].s;
        console.log(Math.max(s1, s2));
        return;
      }
    }
  }
  console.log(s1);
}
