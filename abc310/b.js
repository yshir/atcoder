const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

const P = [];
const F = [];
for (let i = 0; i < N; i++) {
  const a = input[i + 1].split(' ').map(Number);
  P[i] = a[0];
  F[i] = a.slice(2);
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (i === j) continue;

    if (P[i] >= P[j]) {
      const f1 = F[i].filter((x) => !F[j].includes(x));
      if (f1.length === 0) {
        if (P[i] > P[j] || F[j].filter((x) => !F[i].includes(x)).length > 0) {
          console.log('Yes');
          return;
        }
      }
    }
  }
}
console.log('No');
