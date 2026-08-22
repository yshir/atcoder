const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const L = input[1].split(' ').map(Number);

let ans = Infinity;
for (let i = 0; i < N - 1; i++) {
  const a = L.slice(0, i + 1).reduce((x, y) => x + y, 0);
  const b = L.slice(i + 1).reduce((x, y) => x + y, 0);
  ans = Math.min(ans, Math.abs(a - b));
}
console.log(ans);
