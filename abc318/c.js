const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, D, P] = input[0].split(' ').map(Number);
const F = input[1].split(' ').map(Number);

F.sort((a, b) => b - a);

const chunk = (a, size) =>
  Array.from({ length: Math.ceil(a.length / size) }, (_, i) => a.slice(i * size, i * size + size));

let ans = 0;
for (const c of chunk(F, D)) {
  let sum = c.reduce((a, b) => a + b, 0);
  if (sum > P) {
    sum = P;
  }
  ans += sum;
}
console.log(ans);
