const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, R] = input[0].split(' ').map(Number);

let T = R;
for (let i = 0; i < N; i++) {
  const [D, A] = input[i + 1].split(' ').map(Number);

  if (D === 1) {
    if (1600 <= T && T <= 2799) {
      T += A;
    }
  }
  if (D === 2) {
    if (1200 <= T && T <= 2399) {
      T += A;
    }
  }
}
console.log(T);
