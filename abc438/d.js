const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);
const B = input[2].split(' ').map(Number);
const C = input[3].split(' ').map(Number);

const dp = {
  a: [0],
  b: [-Number.MAX_VALUE],
  c: [-Number.MAX_VALUE],
};

for (let i = 0; i < N; i++) {
  if (i === 0) {
    dp.a[i + 1] = dp.a[i] + A[i];
    dp.b[i + 1] = dp.b[i] + B[i];
    dp.c[i + 1] = dp.c[i] + C[i];
  } else {
    dp.a[i + 1] = dp.a[i] + A[i];
    dp.b[i + 1] = Math.max(dp.b[i] + B[i], dp.a[i] + B[i]);
    dp.c[i + 1] = Math.max(dp.c[i] + C[i], dp.b[i] + C[i]);
  }
}

console.log(dp.c[N]);
