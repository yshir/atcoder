const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, A, B] = input[0].split(' ').map(Number);
const S = input[1];

let ans = Number.MAX_VALUE;

let T = [...S];
for (let i = 0; i < N; i++) {
  let sum = A * i;
  for (let i = 0; i < Math.floor(N / 2); i++) {
    const l = i;
    const r = N - 1 - i;
    if (T[l] !== T[r]) {
      sum += B;
    }
  }
  ans = Math.min(ans, sum);

  T = [...T.slice(1), T[0]];
}

console.log(ans);
