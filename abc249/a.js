const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [a, b, c, d, e, f, x] = input[0].split(' ').map(Number);

const s = Math.floor(x / (a + c)) * a * b + Math.min(x % (a + c), a) * b;
const t = Math.floor(x / (d + f)) * d * e + Math.min(x % (d + f), d) * e;
if (s === t) {
  console.log('Draw');
}
if (s < t) {
  console.log('Aoki');
}
if (s > t) {
  console.log('Takahashi');
}
