const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [K] = input[0].split(' ').map(Number);
const N = 10;
const b = [];
for (let i = 2; i < 1 << N; i++) {
  const a = [];
  for (let j = 0; j < N; j++) {
    if (((i >> j) & 1) === 1) {
      a.push(j);
    }
  }
  if (a.length > 0) {
    a.sort((b, c) => c - b);
    b.push(Number(a.join('')));
  }
}
b.sort((a, b) => a - b);
console.log(b[K - 1]);
